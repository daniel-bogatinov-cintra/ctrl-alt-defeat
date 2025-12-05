'use client';

import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#8b5cf6', // Violet 500
            light: '#a78bfa',
            dark: '#7c3aed',
        },
        secondary: {
            main: '#ec4899', // Pink 500
        },
        background: {
            default: '#0f172a', // Slate 900
            paper: '#1e293b', // Slate 800
        },
        text: {
            primary: '#f1f5f9',
            secondary: '#94a3b8',
        },
    },
    shape: {
        borderRadius: 16,
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
        h1: { fontWeight: 800, letterSpacing: '-0.025em' },
        h2: { fontWeight: 700, letterSpacing: '-0.025em' },
        h3: { fontWeight: 600 },
        button: { textTransform: 'none', fontWeight: 600 },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    padding: '10px 24px',
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    }
                },
                containedPrimary: {
                    background: 'linear-gradient(45deg, #8b5cf6 30%, #ec4899 90%)',
                }
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    border: '1px solid rgba(255,255,255,0.05)',
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                }
            }
        }
    },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyles styles={{
                    body: {
                        scrollBehavior: 'smooth',
                    }
                }} />
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}
