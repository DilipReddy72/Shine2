import React, { useState } from 'react';
import axios from 'axios';

const ChatGPT = () => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const apiKey = process.env.REACT_APP_OPENAI_API_KEY; // Use the environment variable
        const endpoint = 'https://api.openai.com/v1/completions'; // Correct endpoint

        try {
            const result = await axios.post(
                endpoint,
                {
                    model: "text-davinci-003", // Adjust the model as necessary
                    prompt: input,
                    max_tokens: 150,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`,
                    },
                }
            );

            setResponse(result.data.choices[0].text);
        } catch (error) {
            console.error('Error communicating with OpenAI API:', error);
            setResponse('An error occurred while communicating with the API.');
        }
    };

    return (
        <div>
            <h1>ChatGPT React Integration</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Ask me anything..."
                />
                <button type="submit">Send</button>
            </form>
            <div>
                <h2>Response:</h2>
                <p>{response}</p>
            </div>
        </div>
    );
};

export default ChatGPT;
