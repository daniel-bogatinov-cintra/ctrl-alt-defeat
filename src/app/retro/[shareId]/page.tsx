'use client';

import { useParams, useRouter } from 'next/navigation';
import useSWR from 'swr';
import { useState, useMemo, useEffect } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import {
    Box, Typography, Button, IconButton, Chip, Stack, Fab,
    Container, AppBar, Toolbar, Avatar, Tooltip, Snackbar,
    Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
    InputBase, TextField, Slider
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/Add';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Lane, MemeEntry, Participant } from '@/types';
import MemeCard from '@/components/MemeCard';
import MemeCreator from '@/components/MemeCreator';
import ParticipantDialog from '@/components/ParticipantDialog';
import RetroTimer from '@/components/RetroTimer';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function RetroPage() {
    const params = useParams();
    const router = useRouter();
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
    const [endRetroDialogOpen, setEndRetroDialogOpen] = useState(false);
    const [outrageScore, setOutrageScore] = useState(1);
    const [focusModeOpen, setFocusModeOpen] = useState(false);
    const [focusMemeIndex, setFocusMemeIndex] = useState(0);

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

    const handleExportPDF = async () => {
        if (!retro) return;

        try {
            // Get the main board element
            const boardElement = document.querySelector('[data-board-container]') as HTMLElement;
            if (!boardElement) return;

            // Store original scroll position and overflow
            const originalScrollLeft = boardElement.scrollLeft;
            const originalOverflow = boardElement.style.overflow;

            // Temporarily remove overflow to capture full content
            boardElement.style.overflow = 'visible';
            boardElement.scrollLeft = 0;

            // Create canvas from the board with full width
            const canvas = await html2canvas(boardElement, {
                scale: 2,
                useCORS: true,
                logging: false,
                backgroundColor: '#0f172a',
                width: boardElement.scrollWidth,
                height: boardElement.scrollHeight,
                windowWidth: boardElement.scrollWidth,
                windowHeight: boardElement.scrollHeight
            });

            // Restore original state
            boardElement.style.overflow = originalOverflow;
            boardElement.scrollLeft = originalScrollLeft;

            // Calculate PDF dimensions to fit content
            const imgWidth = 297; // A4 width in mm
            const pageHeight = 210; // A4 height in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            // Create PDF with appropriate orientation
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: 'a4'
            });

            // If content is taller than one page, add multiple pages
            if (imgHeight > pageHeight) {
                let heightLeft = imgHeight;
                let position = 0;

                while (heightLeft > 0) {
                    const imgData = canvas.toDataURL('image/png');
                    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                    position -= pageHeight;

                    if (heightLeft > 0) {
                        pdf.addPage();
                    }
                }
            } else {
                const imgData = canvas.toDataURL('image/png');
                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            }

            // Download with retro title
            const fileName = `${retro.title.replace(/[^a-z0-9]/gi, '_')}_retro.pdf`;
            pdf.save(fileName);
        } catch (error) {
            console.error('Error exporting PDF:', error);
        }
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

    // Sort memes by total votes for focus mode (must be before conditional returns)
    const sortedMemesByVotes = useMemo(() => {
        if (!retro?.memes) return [];
        return [...retro.memes].sort((a, b) => {
            const aReactions = JSON.parse(a.reactions || '{}');
            const bReactions = JSON.parse(b.reactions || '{}');
            const aTotal = Object.values(aReactions).reduce((sum: number, count) => sum + (count as number), 0);
            const bTotal = Object.values(bReactions).reduce((sum: number, count) => sum + (count as number), 0);
            return bTotal - aTotal; // Descending order
        });
    }, [retro?.memes]);

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
                        sx={{ borderRadius: 6, mr: 1 }}
                    >
                        Share
                    </Button>
                    <Button
                        startIcon={<DownloadIcon />}
                        variant="outlined"
                        size="small"
                        onClick={handleExportPDF}
                        sx={{ borderRadius: 6, mr: 1 }}
                    >
                        Export PDF
                    </Button>
                    <Button
                        variant="contained"
                        size="small"
                        onClick={() => {
                            setFocusMemeIndex(0);
                            setFocusModeOpen(true);
                        }}
                        sx={{ borderRadius: 6, mr: 1 }}
                        disabled={sortedMemesByVotes.length === 0}
                    >
                        FOCUS
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={() => setEndRetroDialogOpen(true)}
                        sx={{ borderRadius: 6 }}
                    >
                        End Retro
                    </Button>
                </Toolbar>
            </AppBar>

            {/* Board */}
            <Box data-board-container sx={{ flexGrow: 1, overflowX: 'auto', overflowY: 'hidden', p: 3 }}>
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

                            <Stack spacing={2} sx={{
                                overflowY: 'auto',
                                flexGrow: 1,
                                flexShrink: 1,
                                pr: 1,
                                pb: 2,
                                minHeight: 0,
                                '&::-webkit-scrollbar': {
                                    width: '8px',
                                },
                                '&::-webkit-scrollbar-track': {
                                    background: 'rgba(255,255,255,0.05)',
                                    borderRadius: '4px',
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    background: 'rgba(139, 92, 246, 0.3)',
                                    borderRadius: '4px',
                                    '&:hover': {
                                        background: 'rgba(139, 92, 246, 0.5)',
                                    }
                                }
                            }}>
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

                                {filteredMemes[lane.id]?.map((meme: MemeEntry) => (
                                    <MemeCard
                                        key={meme.id}
                                        meme={meme}
                                        onReact={(emoji) => handleReact(meme.id, emoji)}
                                        onDelete={() => handleDelete(meme.id)}
                                        onClick={() => setViewingMeme(meme)}
                                    />
                                ))}
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
                maxWidth="lg"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: 3,
                        bgcolor: 'background.paper',
                        backgroundImage: 'none',
                        border: '1px solid rgba(255,255,255,0.1)',
                        m: 2
                    }
                }}
            >
                {viewingMeme && (() => {
                    // Get the live meme data from retro to ensure reactions are up-to-date
                    const liveMeme = retro?.memes?.find((m: MemeEntry) => m.id === viewingMeme.id) || viewingMeme;

                    return (
                        <>
                            <DialogContent sx={{
                                p: 3,
                                position: 'relative',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                minHeight: 400,
                                '&::-webkit-scrollbar': {
                                    width: '8px',
                                },
                                '&::-webkit-scrollbar-track': {
                                    background: 'rgba(255,255,255,0.05)',
                                    borderRadius: '4px',
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    background: 'rgba(139, 92, 246, 0.3)',
                                    borderRadius: '4px',
                                    '&:hover': {
                                        background: 'rgba(139, 92, 246, 0.5)',
                                    }
                                }
                            }}>
                                {liveMeme.generatedImageUrl ? (
                                    <Box
                                        component="img"
                                        src={liveMeme.generatedImageUrl}
                                        alt="Meme"
                                        sx={{
                                            width: '100%',
                                            height: 'auto',
                                            maxHeight: '75vh',
                                            maxWidth: '100%',
                                            objectFit: 'contain',
                                            bgcolor: '#000',
                                            borderRadius: 2
                                        }}
                                    />
                                ) : (
                                    <Box sx={{
                                        width: '100%',
                                        minHeight: 400,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        p: 6,
                                        bgcolor: '#fef3c7',
                                        color: '#4b5563',
                                        borderRadius: 2
                                    }}>
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif',
                                                lineHeight: 1.4,
                                                wordBreak: 'break-word',
                                                fontStyle: 'italic',
                                                textAlign: 'center',
                                                maxWidth: '90%'
                                            }}
                                        >
                                            "{liveMeme.textContent}"
                                        </Typography>
                                    </Box>
                                )}
                            </DialogContent>
                            <DialogActions sx={{ p: 3, pt: 2, bgcolor: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)', flexDirection: 'column', alignItems: 'stretch' }}>
                                {liveMeme.description && (
                                    <Box sx={{ mb: 2, p: 2, bgcolor: 'rgba(139, 92, 246, 0.1)', borderRadius: 2, border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                                        <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 'bold', textTransform: 'uppercase', mb: 0.5, display: 'block' }}>
                                            Description
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                                            {liveMeme.description}
                                        </Typography>
                                    </Box>
                                )}
                                <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                    {['👀', '😡', '😕'].map(emoji => {
                                        const reactions = JSON.parse(liveMeme.reactions || '{}');
                                        const count = reactions[emoji] || 0;
                                        return (
                                            <Box
                                                key={emoji}
                                                onClick={() => handleReact(liveMeme.id, emoji)}
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 0.5,
                                                    px: 1.5,
                                                    py: 0.75,
                                                    borderRadius: 2,
                                                    bgcolor: count > 0 ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255,255,255,0.05)',
                                                    border: '1px solid',
                                                    borderColor: count > 0 ? 'primary.main' : 'rgba(255,255,255,0.1)',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.2s',
                                                    '&:hover': {
                                                        bgcolor: 'rgba(139, 92, 246, 0.3)',
                                                        transform: 'scale(1.05)'
                                                    }
                                                }}
                                            >
                                                <Typography sx={{ fontSize: '1.25rem' }}>{emoji}</Typography>
                                                <Typography variant="caption" fontWeight="bold" color={count > 0 ? 'primary.main' : 'text.secondary'}>
                                                    {count}
                                                </Typography>
                                            </Box>
                                        );
                                    })}
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                        <Box sx={{
                                            width: 36, height: 36, borderRadius: '50%',
                                            bgcolor: viewingMeme.participant?.avatarColor || '#777',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: '1rem', fontWeight: 'bold'
                                        }}>
                                            {viewingMeme.participant?.displayName?.[0] || '?'}
                                        </Box>
                                        <Typography variant="body1" fontWeight="600">
                                            {viewingMeme.participant?.displayName}
                                        </Typography>
                                    </Box>
                                    <Button
                                        onClick={() => setViewingMeme(null)}
                                        variant="contained"
                                        size="large"
                                        sx={{ borderRadius: 2, px: 4, fontWeight: 'bold' }}
                                    >
                                        Close
                                    </Button>
                                </Box>
                            </DialogActions>
                        </>
                    );
                })()}
            </Dialog>

            <Dialog
                open={endRetroDialogOpen}
                onClose={() => setEndRetroDialogOpen(false)}
                maxWidth="md"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: 3,
                        bgcolor: 'background.paper',
                        backgroundImage: 'none',
                        border: '1px solid rgba(255,255,255,0.1)',
                        overflow: 'hidden'
                    }
                }}
            >
                <DialogTitle sx={{
                    color: 'error.main',
                    fontWeight: 800,
                    pb: 1,
                    fontSize: '1.75rem',
                    textAlign: 'center'
                }}>
                    🔥 The Outrageometer 🔥
                </DialogTitle>
                <DialogContent sx={{ pt: 3 }}>
                    <DialogContentText color="text.secondary" sx={{ mb: 3, textAlign: 'center', fontSize: '1rem' }}>
                        Rate your retro experience on the Fire Level Scale
                    </DialogContentText>

                    <Box sx={{ px: 2 }}>
                        <Slider
                            value={outrageScore}
                            onChange={(_, value) => setOutrageScore(value as number)}
                            min={1}
                            max={3}
                            step={1}
                            marks={[
                                { value: 1, label: '😌' },
                                { value: 2, label: '😐' },
                                { value: 3, label: '😡' }
                            ]}
                            sx={{
                                '& .MuiSlider-thumb': {
                                    width: 24,
                                    height: 24,
                                    bgcolor: 'error.main',
                                    '&:hover': {
                                        boxShadow: '0 0 0 8px rgba(244, 67, 54, 0.16)'
                                    }
                                },
                                '& .MuiSlider-track': {
                                    bgcolor: 'error.main',
                                    border: 'none'
                                },
                                '& .MuiSlider-rail': {
                                    bgcolor: 'rgba(255,255,255,0.1)'
                                },
                                '& .MuiSlider-mark': {
                                    bgcolor: 'error.main',
                                    width: 3,
                                    height: 3
                                },
                                '& .MuiSlider-markLabel': {
                                    fontSize: '1.5rem',
                                    top: 35
                                }
                            }}
                        />
                    </Box>

                    <Box sx={{
                        mt: 5,
                        p: 3,
                        bgcolor: 'rgba(244, 67, 54, 0.1)',
                        borderRadius: 2,
                        border: '1px solid rgba(244, 67, 54, 0.3)'
                    }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: 'error.main' }}>
                            {outrageScore === 1 && 'Low: Mildly Annoyed'}
                            {outrageScore === 2 && 'Mid: Spicy Frustrated'}
                            {outrageScore === 3 && 'High: Full Blazing Outrage'}
                        </Typography>
                        <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                            {outrageScore === 1 && '"Yeah it was dumb, but I\'ll live."'}
                            {outrageScore === 2 && '"I have feedback. And none of it is polite."'}
                            {outrageScore === 3 && '"This retro is now evidence for a future court case."'}
                        </Typography>
                    </Box>
                </DialogContent>
                <DialogActions sx={{ p: 3, pt: 2 }}>
                    <Button
                        onClick={() => setEndRetroDialogOpen(false)}
                        color="inherit"
                        sx={{ fontWeight: 'bold' }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={async () => {
                            console.log('Retro ended with outrage score:', outrageScore);
                            setEndRetroDialogOpen(false);

                            // Export PDF
                            await handleExportPDF();

                            // Small delay to ensure PDF download starts
                            setTimeout(() => {
                                router.push('/');
                            }, 500);
                        }}
                        variant="contained"
                        color="error"
                        sx={{ borderRadius: 2, fontWeight: 'bold', px: 3 }}
                    >
                        End Retro
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Focus Mode Modal */}
            <Dialog
                open={focusModeOpen}
                onClose={() => setFocusModeOpen(false)}
                maxWidth="xl"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: 3,
                        bgcolor: 'background.paper',
                        backgroundImage: 'none',
                        border: '1px solid rgba(255,255,255,0.1)',
                        m: 1,
                        maxHeight: '95vh'
                    }
                }}
            >
                {sortedMemesByVotes.length > 0 && (() => {
                    const currentMeme = sortedMemesByVotes[focusMemeIndex];
                    const reactions = JSON.parse(currentMeme.reactions || '{}');
                    const totalVotes = Object.values(reactions).reduce((sum: number, count) => sum + (count as number), 0);

                    return (
                        <>
                            <DialogTitle sx={{
                                fontWeight: 800,
                                fontSize: '1.75rem',
                                textAlign: 'center',
                                pb: 1
                            }}>
                                🔥 No going back now! 🔥
                            </DialogTitle>
                            <DialogContent sx={{
                                p: 3,
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                minHeight: 400,
                                '&::-webkit-scrollbar': {
                                    width: '8px',
                                },
                                '&::-webkit-scrollbar-track': {
                                    background: 'rgba(255,255,255,0.05)',
                                    borderRadius: '4px',
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    background: 'rgba(139, 92, 246, 0.3)',
                                    borderRadius: '4px',
                                    '&:hover': {
                                        background: 'rgba(139, 92, 246, 0.5)',
                                    }
                                }
                            }}>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, textAlign: 'center' }}>
                                    Meme {focusMemeIndex + 1} of {sortedMemesByVotes.length} • {totalVotes} vote{totalVotes !== 1 ? 's' : ''}
                                </Typography>

                                {currentMeme.generatedImageUrl ? (
                                    <Box
                                        component="img"
                                        src={currentMeme.generatedImageUrl}
                                        alt="Meme"
                                        sx={{
                                            width: '100%',
                                            height: 'auto',
                                            maxHeight: '70vh',
                                            maxWidth: '100%',
                                            objectFit: 'contain',
                                            bgcolor: '#000',
                                            borderRadius: 2
                                        }}
                                    />
                                ) : (
                                    <Box sx={{
                                        width: '100%',
                                        minHeight: 300,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        p: 4,
                                        bgcolor: '#fef3c7',
                                        color: '#4b5563',
                                        borderRadius: 2
                                    }}>
                                        <Typography
                                            variant="h4"
                                            sx={{
                                                fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif',
                                                lineHeight: 1.4,
                                                wordBreak: 'break-word',
                                                fontStyle: 'italic',
                                                textAlign: 'center',
                                                maxWidth: '90%'
                                            }}
                                        >
                                            "{currentMeme.textContent}"
                                        </Typography>
                                    </Box>
                                )}

                                {currentMeme.description && (
                                    <Box sx={{ mt: 3, p: 2, bgcolor: 'rgba(139, 92, 246, 0.1)', borderRadius: 2, border: '1px solid rgba(139, 92, 246, 0.3)', width: '100%' }}>
                                        <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 'bold', textTransform: 'uppercase', mb: 0.5, display: 'block' }}>
                                            Description
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                                            {currentMeme.description}
                                        </Typography>
                                    </Box>
                                )}

                                {/* Vote Display */}
                                <Box sx={{ mt: 3, display: 'flex', gap: 1.5, flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
                                    {['👀', '😡', '😕'].map(emoji => {
                                        const count = reactions[emoji] || 0;
                                        return (
                                            <Box
                                                key={emoji}
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 0.75,
                                                    px: 2,
                                                    py: 1,
                                                    borderRadius: 2,
                                                    bgcolor: count > 0 ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255,255,255,0.05)',
                                                    border: '1px solid',
                                                    borderColor: count > 0 ? 'primary.main' : 'rgba(255,255,255,0.1)',
                                                }}
                                            >
                                                <Typography sx={{ fontSize: '1.5rem' }}>{emoji}</Typography>
                                                <Typography variant="h6" fontWeight="bold" color={count > 0 ? 'primary.main' : 'text.secondary'}>
                                                    {count}
                                                </Typography>
                                            </Box>
                                        );
                                    })}
                                </Box>
                            </DialogContent>
                            <DialogActions sx={{ p: 3, pt: 2, justifyContent: 'space-between', bgcolor: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                <Button
                                    startIcon={<ChevronLeftIcon />}
                                    onClick={() => setFocusMemeIndex(Math.max(0, focusMemeIndex - 1))}
                                    disabled={focusMemeIndex === 0}
                                    variant="outlined"
                                    sx={{ borderRadius: 2 }}
                                >
                                    Previous
                                </Button>
                                <Button
                                    onClick={() => setFocusModeOpen(false)}
                                    variant="contained"
                                    sx={{ borderRadius: 2, px: 4, fontWeight: 'bold' }}
                                >
                                    Close
                                </Button>
                                <Button
                                    endIcon={<ChevronRightIcon />}
                                    onClick={() => setFocusMemeIndex(Math.min(sortedMemesByVotes.length - 1, focusMemeIndex + 1))}
                                    disabled={focusMemeIndex === sortedMemesByVotes.length - 1}
                                    variant="outlined"
                                    sx={{ borderRadius: 2 }}
                                >
                                    Next
                                </Button>
                            </DialogActions>
                        </>
                    );
                })()}
            </Dialog>
        </Box >
    );
}
