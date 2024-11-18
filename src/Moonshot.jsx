import React, { useState } from 'react';
import {
    Button,
    TextField,
    Typography,
    Container,
    Box,
    CircularProgress
} from '@mui/material';
import ResultContainer from './ResultContainer';
import History from './History';  // Import the History component
import './App.css';

function Moonshot() {
    const [message, setMessage] = useState('');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);
    const [history, setHistory] = useState([]);  // State to store message and result history

    const sendRequest = async () => {
        setLoading(true);
        // Store the current message before clearing it
        const currentMessage = message;

        try {
            const response = await fetch('http://157.230.250.193/api/moonshot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: currentMessage }),
            });

            const data = await response.json();
            setResult(data.content);

            // Add the message and result to the history
            setHistory(prevHistory => [
                ...prevHistory,
                { message: currentMessage, result: data.content }
            ]);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
            // Clear the text field after the request is completed
            setMessage('');
        }
    };

    return (
        <Container maxWidth="md" sx={{ mx: 'auto' }}>
            <Box my={4}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'center' }}>
                    Moonshot Assistant
                </Typography>

                <Box mb={3}>
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        label="Ask Moonshot a question"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </Box>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={sendRequest}
                    disabled={loading}
                >
                    {loading ? <CircularProgress size={24} /> : 'Submit'}
                </Button>

                {/* Render ResultContainer to display the Markdown-rendered result */}
                <ResultContainer result={result} loading={loading} />

                {/* Render the History component to display the past interactions */}
                <History history={history} />
            </Box>
        </Container>
    );
}

export default Moonshot;