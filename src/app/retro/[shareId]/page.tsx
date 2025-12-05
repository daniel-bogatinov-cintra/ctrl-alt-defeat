'use client';

import { useParams } from 'next/navigation';
import useSWR from 'swr';
import { useState, useMemo, useEffect } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import {
    Box, Typography, Button, IconButton, Chip, Stack, Fab,
    Container, AppBar, Toolbar, Avatar, Tooltip, Snackbar
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/Add';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Lane, MemeEntry, Participant } from '@/types';
import MemeCard from '@/components/MemeCard';
import MemeCreator from '@/components/MemeCreator';
import ParticipantDialog from '@/components/ParticipantDialog';
import { motion } from 'framer-motion';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function RetroPage() {
    const params = useParams();
    const shareId = params?.shareId as string;

    const { data: retro, mutate, error } = useSWR(shareId ? `/api/retros/${shareId}` : null, fetcher, { refreshInterval: 2000 });

    // Local storage for participants map: { [retroId]: Participant }
    const [participantsMap, setParticipantsMap] = useLocalStorage<Record<string, Participant>>('meme_retro_participants', {});

    const [creatorOpen, setCreatorOpen] = useState(false);
    const [currentLaneId, setCurrentLaneId] = useState<string>('');
    const [showShareToast, setShowShareToast] = useState(false);

    const storedParticipant = retro && participantsMap[retro.id];
    // Re-find from server to get _count
    const myParticipant = retro && storedParticipant
        ? retro.participants?.find((p: Participant) => p.id === storedParticipant.id) || storedParticipant
        : null;

    // Determine if we need to show join dialog
    const showJoinDialog = !!retro && !storedParticipant;

    const handleJoin = async (name: string) => {
        if (!retro) return;
        try {
            const res = await fetch(`/api/retros/${retro.shareId}/participants`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ displayName: name })
            });
            const p = await res.json();
            setParticipantsMap(prev => ({ ...prev, [retro.id]: p }));
            mutate();
        } catch (e) {
            console.error(e);
        }
    };

    const handleCreateMeme = async (data: { templateId: string, lines: string[], laneId: string }) => {
        if (!retro || !myParticipant) return;

        await fetch(`/api/retros/${retro.shareId}/memes`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...data,
                participantId: myParticipant.id
            })
        });
        mutate();
    };

    const handleReact = async (memeId: string, emoji: string) => {
        if (!myParticipant) return;

        const res = await fetch(`/api/memes/${memeId}/reactions`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ reaction: emoji, participantId: myParticipant.id })
        });

        if (res.status === 403) {
            alert("Vote limit reached! You can unvote other cards to regain votes.");
        }
        mutate();
    };

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        setShowShareToast(true);
    };

    const filteredMemes = useMemo(() => {
        const lanes: Record<string, MemeEntry[]> = {};
        if (retro?.lanes) {
            retro.lanes.forEach((l: Lane) => lanes[l.id] = []);
            retro.memes.forEach((m: MemeEntry) => {
                if (m.laneId && lanes[m.laneId]) {
                    lanes[m.laneId].push(m);
                }
            });
        }
        return lanes;
    }, [retro]);

    if (error) return <Box p={4}><Typography color="error">Failed to load retro.</Typography></Box>;
    if (!retro) return <Box p={4} textAlign="center"><Typography>Loading the vibes...</Typography></Box>;

    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
            {/* Header */}
            <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" fontWeight="bold">
                            {retro.title}
                        </Typography>
                        {retro.teamName && (
                            <Typography variant="body2" color="text.secondary">
                                {retro.teamName}
                            </Typography>
                        )}
                    </Box>

                    <Stack direction="row" spacing={1} alignItems="center" mr={2}>
                        <Box sx={{ display: 'flex', ml: 1 }}>
                            {retro.participants?.slice(0, 5).map((p: Participant) => (
                                <Tooltip key={p.id} title={p.displayName}>
                                    <Avatar
                                        sx={{
                                            width: 32, height: 32,
                                            bgcolor: p.avatarColor,
                                            fontSize: '0.8rem',
                                            ml: -1, border: '2px solid #0f172a'
                                        }}
                                    >
                                        {p.displayName[0]}
                                    </Avatar>
                                </Tooltip>
                            ))}
                            {retro.participants?.length > 5 && (
                                <Avatar sx={{ width: 32, height: 32, ml: -1, fontSize: '0.8rem', bgcolor: 'grey.800' }}>
                                    +{retro.participants.length - 5}
                                </Avatar>
                            )}
                        </Box>
                    </Stack>

                    {myParticipant && (() => {
                        const used = myParticipant._count?.reactions || 0;
                        const max = retro.maxVotesPerParticipant || 3;
                        const left = Math.max(0, max - used);
                        return (
                            <Chip
                                label={`${left} Votes Left`}
                                color={left === 0 ? 'error' : 'secondary'}
                                variant={left === 0 ? 'filled' : 'outlined'}
                                sx={{ mr: 2, fontWeight: 'bold' }}
                            />
                        );
                    })()}

                    <Button
                        startIcon={<ShareIcon />}
                        variant="outlined"
                        size="small"
                        onClick={handleShare}
                        sx={{ borderRadius: 6 }}
                    >
                        Share
                    </Button>
                </Toolbar>
            </AppBar>

            {/* Board */}
            <Box sx={{ flexGrow: 1, overflowX: 'auto', overflowY: 'hidden', p: 3 }}>
                <Stack direction="row" spacing={3} sx={{ height: '100%', minWidth: 'min-content' }}>
                    {retro.lanes?.map((lane: Lane) => (
                        <Box
                            key={lane.id}
                            sx={{
                                width: 320,
                                minWidth: 320,
                                display: 'flex',
                                flexDirection: 'column',
                                bgcolor: 'rgba(255,255,255,0.02)',
                                borderRadius: 3,
                                p: 2
                            }}
                        >
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                <Typography variant="subtitle1" fontWeight="bold">
                                    {lane.title}
                                </Typography>
                                <Chip label={filteredMemes[lane.id]?.length || 0} size="small" sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
                            </Box>

                            <Stack spacing={2} sx={{ overflowY: 'auto', flexGrow: 1, pr: 1, pb: 10 }}>
                                {filteredMemes[lane.id]?.map((meme: MemeEntry) => (
                                    <MemeCard
                                        key={meme.id}
                                        meme={meme}
                                        onReact={(emoji) => handleReact(meme.id, emoji)}
                                    />
                                ))}
                                <Button
                                    variant="outlined"
                                    startIcon={<AddIcon />}
                                    sx={{ borderStyle: 'dashed', opacity: 0.6, '&:hover': { opacity: 1 } }}
                                    onClick={() => {
                                        setCurrentLaneId(lane.id);
                                        setCreatorOpen(true);
                                    }}
                                >
                                    Add Meme
                                </Button>
                            </Stack>
                        </Box>
                    ))}
                </Stack>
            </Box>

            {/* Fab for Mobile/Quick Access */}
            <Fab
                color="primary"
                sx={{ position: 'fixed', bottom: 32, right: 32 }}
                onClick={() => setCreatorOpen(true)}
            >
                <AddIcon />
            </Fab>

            <ParticipantDialog
                open={showJoinDialog}
                onSubmit={handleJoin}
            />

            <MemeCreator
                open={creatorOpen}
                onClose={() => setCreatorOpen(false)}
                onSubmit={handleCreateMeme}
                lanes={retro.lanes || []}
                defaultLaneId={currentLaneId}
            />

            <Snackbar
                open={showShareToast}
                autoHideDuration={2000}
                onClose={() => setShowShareToast(false)}
                message="Link copied to clipboard!"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            />
        </Box>
    );
}
