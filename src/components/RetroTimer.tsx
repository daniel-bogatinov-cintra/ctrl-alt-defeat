import { useState, useEffect } from 'react';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import TimerIcon from '@mui/icons-material/Timer';
import StopIcon from '@mui/icons-material/Stop';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
    expiresAt?: string;
    onAction: (action: 'start' | 'stop', duration?: number) => void;
    onFinish?: () => void;
}

export default function RetroTimer({ expiresAt, onAction, onFinish }: Props) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [timeLeft, setTimeLeft] = useState<number | null>(null);
    const [hasFinished, setHasFinished] = useState(false);

    // Reset finished state when expiresAt changes
    useEffect(() => {
        setHasFinished(false);
    }, [expiresAt]);

    useEffect(() => {
        if (!expiresAt) {
            setTimeLeft(null);
            return;
        }

        const tick = () => {
            const now = Date.now();
            const end = new Date(expiresAt).getTime();
            const diff = Math.ceil((end - now) / 1000);

            if (diff <= 0) {
                setTimeLeft(0);
                if (!hasFinished) {
                    setHasFinished(true);
                    if (onFinish) onFinish();
                }
            } else {
                setTimeLeft(diff);
            }
        };

        tick();
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, [expiresAt, hasFinished, onFinish]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleStart = (minutes: number) => {
        onAction('start', minutes);
        handleMenuClose();
    };

    const handleStop = () => {
        onAction('stop');
    };

    const isRunning = timeLeft !== null && timeLeft > 0;
    const isExpired = timeLeft === 0;

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <AnimatePresence mode='wait'>
                {!expiresAt ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        key="start-btn"
                    >
                        <IconButton
                            onClick={handleMenuOpen}
                            color="inherit"
                            sx={{
                                bgcolor: 'rgba(255,255,255,0.05)',
                                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                                borderRadius: 3,
                                px: 2,
                                py: 1,
                                gap: 1
                            }}
                        >
                            <TimerIcon fontSize="small" />
                            <Typography variant="body2" fontWeight="bold">Timer</Typography>
                        </IconButton>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        key="timer-display"
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, bgcolor: isExpired ? 'error.dark' : 'primary.dark', px: 2, py: 0.8, borderRadius: 4 }}>
                            <Typography variant="body2" fontWeight="bold" sx={{ fontFamily: 'monospace', fontSize: '1.2rem' }}>
                                {timeLeft !== null ? formatTime(timeLeft) : '--:--'}
                            </Typography>
                            <IconButton size="small" onClick={handleStop} sx={{ color: 'white', p: 0.5, ml: 1 }}>
                                <StopIcon fontSize="small" />
                            </IconButton>
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                    sx: {
                        borderRadius: 3,
                        mt: 1.5,
                        minWidth: 160,
                        p: 1.5
                    }
                }}
            >
                <MenuItem onClick={() => handleStart(1)} sx={{ borderRadius: 2, py: 1.5, mb: 0.5 }}>1 Minute</MenuItem>
                <MenuItem onClick={() => handleStart(3)} sx={{ borderRadius: 2, py: 1.5, mb: 0.5 }}>3 Minutes</MenuItem>
                <MenuItem onClick={() => handleStart(5)} sx={{ borderRadius: 2, py: 1.5 }}>5 Minutes</MenuItem>
            </Menu>
        </Box>
    );
}
