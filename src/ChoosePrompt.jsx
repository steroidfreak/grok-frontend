import React, { useState, useEffect } from "react";
const ChoosePrompt = () => {
    // List of available prompts
    const [prompts, setPrompts] = useState([
        "Explain the concept of React hooks",
        "What are the latest trends in web development?",
        "How to optimize React components?",
    ]);

    // The selected prompt state
    const [selectedPrompt, setSelectedPrompt] = useState("");

    // Function to handle prompt selection
    const handlePromptChange = (event) => {
        setSelectedPrompt(event.target.value);
    };

    // This useEffect would typically be used to update the chatbot's system prompt
    useEffect(() => {
        console.log("Prompt changed to:", selectedPrompt);
        // Here you could call an API or update the chatbot's system prompt
    }, [selectedPrompt]);

    return (
        <div>
            <h2>Choose a System Prompt for Grok Chatbot</h2>
            <select onChange={handlePromptChange} value={selectedPrompt}>
                <option value="">Select a prompt</option>
                {prompts.map((prompt, index) => (
                    <option key={index} value={prompt}>
                        {prompt}
                    </option>
                ))}
            </select>
            <p>Current Prompt: {selectedPrompt || "Not selected"}</p>
        </div>
    );
};

export default ChoosePrompt;