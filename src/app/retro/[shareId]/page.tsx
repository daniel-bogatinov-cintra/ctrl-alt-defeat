'use client';

import { useParams } from 'next/navigation';
import useSWR from 'swr';
import { useState, useMemo, useEffect } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import {
    Box, Typography, Button, IconButton, Chip, Stack, Fab,
    Container, AppBar, Toolbar, Avatar, Tooltip, Snackbar,
    Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
    InputBase, TextField
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/Add';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Lane, MemeEntry, Participant } from '@/types';
import MemeCard from '@/components/MemeCard';
import MemeCreator from '@/components/MemeCreator';
import ParticipantDialog from '@/components/ParticipantDialog';
import RetroTimer from '@/components/RetroTimer';
import { motion } from 'framer-motion';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function RetroPage() {
    const params = useParams();
    const shareId = params?.shareId as string;

    const { data: retro, mutate, error } = useSWR(shareId ? `/api/retros/${shareId}` : null, fetcher, { refreshInterval: 2000 });

    // Local storage for participants map: { [retroId]: Participant }
    const [participantsMap, setParticipantsMap] = useLocalStorage<Record<string, Participant>>('meme_retro_participants', {});

    const [creatorOpen, setCreatorOpen] = useState(false);
    const [actionDialogOpen, setActionDialogOpen] = useState(false);
    const [actionText, setActionText] = useState('');
    const [voteLimitDialogOpen, setVoteLimitDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [memeToDelete, setMemeToDelete] = useState<string | null>(null);
    const [timerFinishedDialogOpen, setTimerFinishedDialogOpen] = useState(false);
    const [currentLaneId, setCurrentLaneId] = useState<string>('');
    const [showShareToast, setShowShareToast] = useState(false);
    const [customLaneTitles, setCustomLaneTitles] = useState<Record<string, string>>({});
    const [viewingMeme, setViewingMeme] = useState<MemeEntry | null>(null);

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

    const handleCreateMeme = async (data: { templateId: string, lines: string[], laneId: string, textContent?: string }) => {
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
            setVoteLimitDialogOpen(true);
        }
        mutate();
    };



    const handleDelete = (memeId: string) => {
        setMemeToDelete(memeId);
        setDeleteDialogOpen(true);
    };

    const confirmDelete = async () => {
        if (!myParticipant || !memeToDelete) return;
        await fetch(`/api/memes/${memeToDelete}`, { method: 'DELETE' });
        setDeleteDialogOpen(false);
        setMemeToDelete(null);
        mutate();
    };

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        setShowShareToast(true);
    };

    const handleTimer = async (action: 'start' | 'stop', duration?: number) => {
        if (!retro) return;
        await fetch(`/api/retros/${retro.shareId}/timer`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action, durationMinutes: duration })
        });
        mutate();
    };

    const handleTimerFinish = () => {
        setTimerFinishedDialogOpen(true);
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

                    <RetroTimer
                        expiresAt={retro.timerExpiresAt}
                        onAction={handleTimer}
                        onFinish={handleTimerFinish}
                    />

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
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, alignItems: 'center' }}>
                                <InputBase
                                    value={customLaneTitles[lane.id] ?? lane.title}
                                    onChange={(e) => setCustomLaneTitles(prev => ({ ...prev, [lane.id]: e.target.value }))}
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: '1rem',
                                        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                                        flexGrow: 1,
                                        mr: 1,
                                        color: 'text.primary'
                                    }}
                                />
                                <Chip label={filteredMemes[lane.id]?.length || 0} size="small" sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
                            </Box>

                            <Stack spacing={2} sx={{ overflowY: 'auto', flexGrow: 1, flexShrink: 1, pr: 1, pb: 2, minHeight: 0 }}>
                                {filteredMemes[lane.id]?.map((meme: MemeEntry) => (
                                    <MemeCard
                                        key={meme.id}
                                        meme={meme}
                                        onReact={(emoji) => handleReact(meme.id, emoji)}
                                        onDelete={() => handleDelete(meme.id)}
                                        onClick={() => setViewingMeme(meme)}
                                    />
                                ))}

                                {lane.type === 'action' ? (
                                    <Button
                                        variant="outlined"
                                        startIcon={<AddIcon />}
                                        sx={{
                                            borderStyle: 'dashed',
                                            opacity: 0.8,
                                            '&:hover': { opacity: 1 },
                                            borderColor: 'warning.main',
                                            color: 'warning.main',
                                            justifyContent: 'flex-start',
                                            pl: 2
                                        }}
                                        onClick={() => {
                                            setCurrentLaneId(lane.id);
                                            setActionDialogOpen(true);
                                        }}
                                    >
                                        Add Action
                                    </Button>
                                ) : (
                                    <Button
                                        variant="outlined"
                                        startIcon={<AddIcon />}
                                        sx={{ borderStyle: 'dashed', opacity: 0.6, '&:hover': { opacity: 1 }, justifyContent: 'flex-start', pl: 2 }}
                                        onClick={() => {
                                            setCurrentLaneId(lane.id);
                                            setCreatorOpen(true);
                                        }}
                                    >
                                        Add Meme
                                    </Button>
                                )}
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

            <Dialog
                open={voteLimitDialogOpen}
                onClose={() => setVoteLimitDialogOpen(false)}
                PaperProps={{
                    sx: {
                        borderRadius: 3,
                        bgcolor: 'background.paper',
                        backgroundImage: 'none',
                        border: '1px solid rgba(255,255,255,0.1)',
                        maxWidth: 400
                    }
                }}
            >
                <DialogTitle sx={{
                    color: 'error.main',
                    fontWeight: 800,
                    pb: 1,
                    fontSize: '1.5rem'
                }}>
                    Vote Limit Reached
                </DialogTitle>
                <DialogContent>
                    <DialogContentText color="text.secondary" sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
                        You've used all your votes for this retro. <br />
                        You can remove your vote from another card to regain it.
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ p: 3, pt: 1 }}>
                    <Button
                        onClick={() => setVoteLimitDialogOpen(false)}
                        variant="contained"
                        color="primary"
                        autoFocus
                        fullWidth
                        size="large"
                        sx={{ borderRadius: 2, fontWeight: 'bold' }}
                    >
                        Got it
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={timerFinishedDialogOpen}
                onClose={() => setTimerFinishedDialogOpen(false)}
                PaperProps={{
                    sx: {
                        borderRadius: 3,
                        bgcolor: 'background.paper',
                        backgroundImage: 'none',
                        border: '1px solid rgba(255,255,255,0.1)',
                        maxWidth: 400
                    }
                }}
            >
                <DialogTitle sx={{
                    color: 'primary.main',
                    fontWeight: 800,
                    pb: 1,
                    fontSize: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                }}>
                    Time's Up! ⏰
                </DialogTitle>
                <DialogContent>
                    <DialogContentText color="text.secondary" sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
                        The discussion timer has finished. <br />
                        Wrap up your thoughts!
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ p: 3, pt: 1 }}>
                    <Button
                        onClick={() => setTimerFinishedDialogOpen(false)}
                        variant="contained"
                        color="primary"
                        autoFocus
                        fullWidth
                        size="large"
                        sx={{ borderRadius: 2, fontWeight: 'bold' }}
                    >
                        Okay
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={actionDialogOpen}
                onClose={() => setActionDialogOpen(false)}
                PaperProps={{
                    sx: {
                        borderRadius: 3,
                        bgcolor: 'background.paper',
                        backgroundImage: 'none',
                        border: '1px solid rgba(255,255,255,0.1)',
                        maxWidth: 500,
                        width: '100%'
                    }
                }}
            >
                <DialogTitle sx={{
                    color: 'warning.main',
                    fontWeight: 800,
                    pb: 1,
                    fontSize: '1.5rem'
                }}>
                    New Action Item
                </DialogTitle>
                <DialogContent>
                    <DialogContentText color="text.secondary" sx={{ mb: 2 }}>
                        What are we committing to?
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="action-item"
                        label="Action Description"
                        type="text"
                        fullWidth
                        multiline
                        rows={3}
                        variant="outlined"
                        value={actionText}
                        onChange={(e) => setActionText(e.target.value)}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                            }
                        }}
                    />
                </DialogContent>
                <DialogActions sx={{ p: 3, pt: 1 }}>
                    <Button onClick={() => setActionDialogOpen(false)} color="inherit">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            if (actionText.trim()) {
                                handleCreateMeme({
                                    templateId: '',
                                    lines: [],
                                    laneId: currentLaneId,
                                    textContent: actionText
                                });
                                setActionText('');
                                setActionDialogOpen(false);
                            }
                        }}
                        variant="contained"
                        color="warning"
                        sx={{ borderRadius: 2, fontWeight: 'bold' }}
                    >
                        Create Action
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={deleteDialogOpen}
                onClose={() => setDeleteDialogOpen(false)}
                PaperProps={{
                    sx: {
                        borderRadius: 3,
                        bgcolor: 'background.paper',
                        backgroundImage: 'none',
                        border: '1px solid rgba(255,255,255,0.1)',
                        maxWidth: 400
                    }
                }}
            >
                <DialogTitle sx={{
                    color: 'error.main',
                    fontWeight: 800,
                    pb: 1,
                    fontSize: '1.5rem'
                }}>
                    Delete this?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText color="text.secondary" sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
                        Are you sure you want to delete this card? <br />
                        This action cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ p: 3, pt: 1 }}>
                    <Button
                        onClick={() => setDeleteDialogOpen(false)}
                        color="inherit"
                        sx={{ fontWeight: 'bold' }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={confirmDelete}
                        variant="contained"
                        color="error"
                        autoFocus
                        sx={{ borderRadius: 2, fontWeight: 'bold' }}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={!!viewingMeme}
                onClose={() => setViewingMeme(null)}
                maxWidth="md"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: 3,
                        bgcolor: 'background.paper',
                        backgroundImage: 'none',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }
                }}
            >
                {viewingMeme && (
                    <>
                        <DialogContent sx={{ p: 0, position: 'relative' }}>
                            {viewingMeme.generatedImageUrl ? (
                                <Box
                                    component="img"
                                    src={viewingMeme.generatedImageUrl}
                                    alt="Meme"
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        maxHeight: '70vh',
                                        objectFit: 'contain',
                                        bgcolor: '#000'
                                    }}
                                />
                            ) : (
                                <Box sx={{
                                    minHeight: 400,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    p: 6,
                                    bgcolor: '#fef3c7',
                                    color: '#4b5563'
                                }}>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif',
                                            lineHeight: 1.4,
                                            wordBreak: 'break-word',
                                            fontStyle: 'italic',
                                            textAlign: 'center'
                                        }}
                                    >
                                        "{viewingMeme.textContent}"
                                    </Typography>
                                </Box>
                            )}
                        </DialogContent>
                        <DialogActions sx={{ p: 2, bgcolor: 'rgba(255,255,255,0.02)' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mr: 'auto' }}>
                                <Box sx={{
                                    width: 32, height: 32, borderRadius: '50%',
                                    bgcolor: viewingMeme.participant?.avatarColor || '#777',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '0.9rem', fontWeight: 'bold'
                                }}>
                                    {viewingMeme.participant?.displayName?.[0] || '?'}
                                </Box>
                                <Typography variant="body2" fontWeight="600">
                                    {viewingMeme.participant?.displayName}
                                </Typography>
                            </Box>
                            <Button onClick={() => setViewingMeme(null)} variant="contained" sx={{ borderRadius: 2 }}>
                                Close
                            </Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </Box >
    );
}
