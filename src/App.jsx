import React, { useState } from 'react';
import {
  Button,
  Container,
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import Grok from './Grok';
import Moonshot from './Moonshot'; // Assuming you have a Moonshot component similar to Grok
import PromptGenerator from './PromptGenerator';
import MongoDB from './MongoDB';
import ChoosePrompt from './ChoosePrompt';
import './App.css';

function App() {
  // State to determine which AI service is active
  const [activeAI, setActiveAI] = useState('grok'); // 'grok', 'moonshot', or 'prompt'

  // Function to handle the AI service switch
  const handleChange = (event, newAI) => {
    if (newAI !== null) {
      setActiveAI(newAI);
    }
  };

  // Function to render the selected component
  const renderActiveComponent = () => {
    if (activeAI === 'grok') {
      return <Grok />;
    } else if (activeAI === 'moonshot') {
      return <Moonshot />;
    } else if (activeAI === 'prompt') {
      return <PromptGenerator />;
    } else if (activeAI === 'mongo') {
      return <MongoDB />;
    }
    return null;
  };

  return (
    <Container maxWidth="md" sx={{ mx: 'auto', my: 4 }}>
      <Box mb={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <ToggleButtonGroup
          color="primary"
          value={activeAI}
          exclusive
          onChange={handleChange}
          aria-label="AI Service"
          sx={{ justifyContent: 'center', mb: 2 }}
        >
          <ToggleButton value="grok">Grok</ToggleButton>
          <ToggleButton value="moonshot">Moonshot</ToggleButton>
          <ToggleButton value="prompt">Prompt Generator</ToggleButton>
          <ToggleButton value="mongo">Mongo DB</ToggleButton>

        </ToggleButtonGroup>
      </Box>
      <ChoosePrompt />
      {/* Render the selected component */}
      {renderActiveComponent()}
    </Container>
  );
}

export default App;
