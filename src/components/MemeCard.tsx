'use client';
import { Card, CardMedia, CardContent, Typography, Box, Stack } from '@mui/material';
import { MemeEntry } from '@/types';
import { motion } from 'framer-motion';

interface Props {
    meme: MemeEntry;
    onReact: (emoji: string) => void;
}

const REACTION_OPTIONS = ['🔥', '😂', '💀', '✅'];

export default function MemeCard({ meme, onReact }: Props) {
    let reactions: Record<string, number> = {};
    try {
        reactions = JSON.parse(meme.reactions);
    } catch (e) { }

    return (
        <Card
            component={motion.div}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            sx={{ overflow: 'hidden', position: 'relative' }}
        >
            {meme.generatedImageUrl ? (
                <CardMedia
                    component="img"
                    image={meme.generatedImageUrl}
                    alt="Meme"
                    sx={{ bgcolor: '#000', minHeight: 200, objectFit: 'contain' }}
                />
            ) : (
                <Box sx={{
                    minHeight: 200,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 3,
                    bgcolor: '#fef3c7', // Amber-100 (Sticky note yellow)
                    color: '#4b5563', // Gray-600
                    textAlign: 'center'
                }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif',
                            lineHeight: 1.4,
                            wordBreak: 'break-word',
                            fontStyle: 'italic'
                        }}
                    >
                        "{meme.textContent}"
                    </Typography>
                </Box>
            )}
            <CardContent sx={{ p: '12px !important' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{
                            width: 24, height: 24, borderRadius: '50%',
                            bgcolor: meme.participant?.avatarColor || '#777',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '0.7rem', fontWeight: 'bold'
                        }}>
                            {meme.participant?.displayName?.[0] || '?'}
                        </Box>
                        <Typography variant="caption" fontWeight="600">
                            {meme.participant?.displayName}
                        </Typography>
                    </Box>
                </Box>

            </CardContent>
            <Box sx={{ p: 1.5, pt: 0 }}>
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                    {REACTION_OPTIONS.map(emoji => (
                        <Box
                            key={emoji}
                            onClick={() => onReact(emoji)}
                            component={motion.button}
                            whileTap={{ scale: 0.9 }}
                            sx={{
                                cursor: 'pointer',
                                border: 'none',
                                outline: 'none',
                                px: 1, py: 0.5,
                                borderRadius: 4,
                                bgcolor: reactions[emoji] ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255,255,255,0.05)',
                                color: reactions[emoji] ? '#d8b4fe' : 'text.secondary',
                                display: 'flex', alignItems: 'center', gap: 0.5,
                                fontSize: '0.85rem',
                                transition: 'all 0.2s',
                                '&:hover': { bgcolor: 'rgba(139, 92, 246, 0.3)' }
                            }}
                        >
                            <span>{emoji}</span>
                            {reactions[emoji] > 0 && <span style={{ fontWeight: 600 }}>{reactions[emoji]}</span>}
                        </Box>
                    ))}
                </Stack>
            </Box>
        </Card >
    );
}
