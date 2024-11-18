import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Box, Typography, Paper } from '@mui/material';

function History({ history }) {
    return (
        <Box mt={4}>
            <Typography variant="h6" gutterBottom>
                Request History
            </Typography>
            {history.length === 0 ? (
                <Typography variant="body1" color="textSecondary">
                    No history available.
                </Typography>
            ) : (

                history.map((entry, index) => (
                    <Paper key={index} sx={{ p: 2, mb: 2 }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            <ReactMarkdown>{entry.message}</ReactMarkdown>
                        </Typography>
                        <Typography variant="body2"><ReactMarkdown>{entry.result}</ReactMarkdown></Typography>
                    </Paper>
                ))
            )}
        </Box>
    );
}

export default History;
