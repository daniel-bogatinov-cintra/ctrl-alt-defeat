'use client';

import { useState, useEffect } from 'react';
import {
    Dialog, DialogContent, DialogActions,
    Button, TextField, Autocomplete, Box, Typography,
    CircularProgress, MenuItem, Select, FormControl, InputLabel,
    Stack, IconButton, DialogTitle, useTheme, useMediaQuery
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { MemegenClient, Template } from '@/lib/memegen';
import useSWR from 'swr';
import { Lane } from '@/types';

const fetcher = (url: string) => fetch(url).then(res => res.json());

interface Props {
    open: boolean;
    onClose: () => void;
    onSubmit: (data: { templateId: string, lines: string[], laneId: string }) => Promise<void>;
    lanes: Lane[];
    defaultLaneId?: string;
}

export default function MemeCreator({ open, onClose, onSubmit, lanes, defaultLaneId }: Props) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const { data: templates, isLoading } = useSWR<Template[]>('/api/templates', fetcher);

    const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
    const [lines, setLines] = useState<string[]>(['', '']);
    const [laneId, setLaneId] = useState(defaultLaneId || '');
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (lanes.length > 0 && !laneId) {
            setLaneId(lanes[0].id);
        }
    }, [lanes, laneId]);

    const handleTemplateChange = (_: any, newValue: Template | null) => {
        setSelectedTemplate(newValue);
        if (newValue) {
            setLines(Array(newValue.lines).fill(''));
        }
    };

    const handleLineChange = (index: number, value: string) => {
        const newLines = [...lines];
        newLines[index] = value;
        setLines(newLines);
    };

    const handleSubmit = async () => {
        if (!selectedTemplate || !laneId) return;
        setSubmitting(true);
        try {
            await onSubmit({
                templateId: selectedTemplate.id,
                lines,
                laneId
            });
            onClose();
            // Reset fields
            setLines(['', '']);
            setSelectedTemplate(null);
        } catch (e) {
            console.error(e);
        } finally {
            setSubmitting(false);
        }
    };

    const previewUrl = selectedTemplate
        ? MemegenClient.buildMemeUrl(selectedTemplate.id, lines)
        : null;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="md"
            fullScreen={fullScreen}
            PaperProps={{
                sx: {
                    borderRadius: fullScreen ? 0 : 4,
                    backgroundImage: 'none',
                    bgcolor: 'background.paper'
                }
            }}
        >
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h5" fontWeight="bold">Create a Meme</Typography>
                <IconButton onClick={onClose}><CloseIcon /></IconButton>
            </DialogTitle>

            <DialogContent dividers>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
                    {/* Left: Form */}
                    <Box sx={{ flex: 1 }}>
                        <Stack spacing={3}>
                            <FormControl fullWidth>
                                <InputLabel>Board Column</InputLabel>
                                <Select
                                    value={laneId}
                                    label="Board Column"
                                    onChange={(e) => setLaneId(e.target.value)}
                                >
                                    {lanes.map(lane => (
                                        <MenuItem key={lane.id} value={lane.id}>
                                            {lane.title}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <Autocomplete
                                options={templates || []}
                                getOptionLabel={(option) => option.name}
                                loading={isLoading}
                                value={selectedTemplate}
                                onChange={handleTemplateChange}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Select Meme Template"
                                        placeholder="Type to search..."
                                        InputProps={{
                                            ...params.InputProps,
                                            endAdornment: (
                                                <>
                                                    {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                                                    {params.InputProps.endAdornment}
                                                </>
                                            ),
                                        }}
                                    />
                                )}
                                renderOption={(props, option) => {
                                    const { key, ...otherProps } = props;
                                    return (
                                        <Box component="li" key={key} {...otherProps} sx={{ gap: 2 }}>
                                            <img
                                                loading="lazy"
                                                width="40"
                                                src={option.blank.replace(/\/images/, '/images')} // Simple hack, blank is url
                                                alt=""
                                                style={{ borderRadius: 4 }}
                                            />
                                            {option.name}
                                        </Box>
                                    );
                                }}
                            />

                            {selectedTemplate && (
                                <Stack spacing={2}>
                                    {Array.from({ length: selectedTemplate.lines }).map((_, i) => (
                                        <TextField
                                            key={i}
                                            label={`Line ${i + 1}`}
                                            value={lines[i] || ''}
                                            onChange={(e) => handleLineChange(i, e.target.value)}
                                            fullWidth
                                        />
                                    ))}
                                </Stack>
                            )}
                        </Stack>
                    </Box>

                    {/* Right: Preview */}
                    <Box sx={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                        {previewUrl ? (
                            <Box
                                component="img"
                                src={previewUrl}
                                sx={{
                                    maxWidth: '100%',
                                    maxHeight: 400,
                                    borderRadius: 2,
                                    boxShadow: 3
                                }}
                            />
                        ) : (
                            <Box sx={{
                                width: '100%',
                                height: 300,
                                bgcolor: 'action.hover',
                                borderRadius: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '2px dashed rgba(255,255,255,0.1)'
                            }}>
                                <Typography color="text.secondary">Select a template to preview</Typography>
                            </Box>
                        )}
                    </Box>
                </Stack>
            </DialogContent>

            <DialogActions sx={{ p: 3 }}>
                <Button onClick={onClose} size="large" sx={{ color: 'text.secondary' }}>Cancel</Button>
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    disabled={!selectedTemplate || submitting}
                    size="large"
                    sx={{ px: 4 }}
                >
                    {submitting ? 'Posting...' : 'Post Meme'}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
