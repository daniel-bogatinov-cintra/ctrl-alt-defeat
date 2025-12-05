'use client';
import { Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions, Typography, Box } from '@mui/material';
import { useState } from 'react';

interface Props {
    open: boolean;
    onSubmit: (name: string) => void;
}

export default function ParticipantDialog({ open, onSubmit }: Props) {
    const [name, setName] = useState('');

    const handleSubmit = () => {
        if (name.trim()) onSubmit(name.trim());
    };

    return (
        <Dialog
            open={open}
            disableEscapeKeyDown
            maxWidth="xs"
            fullWidth
            PaperProps={{
                sx: { borderRadius: 4, p: 1 }
            }}
        >
            <DialogTitle sx={{ textAlign: 'center', pb: 0 }}>
                <Typography variant="h5" component="span" fontWeight="bold">Who are you?</Typography>
            </DialogTitle>
            <DialogContent sx={{ pt: 3 }}>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3 }}>
                    Enter your name to start posting memes.
                </Typography>
                <TextField
                    autoFocus
                    label="Display Name"
                    placeholder="e.g. Meme Lord"
                    fullWidth
                    variant="outlined"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSubmit();
                    }}
                />
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
                <Button
                    onClick={handleSubmit}
                    disabled={!name.trim()}
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{ mx: 2 }}
                >
                    Let me in
                </Button>
            </DialogActions>
        </Dialog>
    );
}
