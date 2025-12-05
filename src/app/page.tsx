'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  Card,
  CardContent,
  Stack
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [teamName, setTeamName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    if (!title) return;
    setLoading(true);
    try {
      const res = await fetch('/api/retros', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, teamName })
      });
      const data = await res.json();
      if (data.shareId) {
        router.push(`/retro/${data.shareId}`);
      } else {
        setLoading(false);
      }
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', py: 8 }}>
      <Stack spacing={8} alignItems="center">
        <Box
          component={motion.div}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center' }}
        >
          <Typography variant="h1" gutterBottom sx={{
            background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 900,
            fontSize: { xs: '3rem', md: '5rem' }
          }}>
            Meme Retro
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}>
            The vibe check for your sprint. <br />
            Less boring bullet points, more spicy memes.
          </Typography>
        </Box>

        <Card
          component={motion.div}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          sx={{ width: '100%', maxWidth: 520, p: 3, backdropFilter: 'blur(20px)', backgroundColor: 'rgba(30, 41, 59, 0.7)' }}
        >
          <CardContent>
            <Stack spacing={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                <Box sx={{ p: 1.5, borderRadius: '12px', bgcolor: 'primary.main', display: 'flex' }}>
                  <RocketLaunchIcon sx={{ color: '#fff', fontSize: 28 }} />
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight="bold">Start a new session</Typography>
                  <Typography variant="body2" color="text.secondary">No login required.</Typography>
                </Box>
              </Box>

              <Stack spacing={2}>
                <TextField
                  label="Retro Title"
                  placeholder="e.g. Sprint 42 - The Bug Slayers"
                  fullWidth
                  variant="outlined"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  autoFocus
                />

                <TextField
                  label="Team Name (Optional)"
                  placeholder="e.g. Engineering"
                  fullWidth
                  variant="outlined"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                />
              </Stack>

              <Button
                variant="contained"
                size="large"
                fullWidth
                onClick={handleCreate}
                disabled={!title || loading}
                startIcon={<AddIcon />}
                sx={{
                  height: 56,
                  fontSize: '1.1rem',
                  borderRadius: '14px',
                }}
              >
                {loading ? 'Launching...' : 'Create Retro Board'}
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
}
