import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { analyzeEmotion } from '../../services/HumeService';
import './ChatBot.css';

const ChatBot = () => {
  const { setUserMood, addMoodEntry } = useContext(AppContext);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, user: true }];
      setMessages(newMessages);
      setInput('');

      try {
        const response = await analyzeEmotion(input);
        const moodScore = response.emotions[0]?.score || 0; // Simplified for example
        const moodEntry = { date: new Date().toISOString(), moodScore };

        // Add mood entry to context
        addMoodEntry(moodEntry);

        const botMessage = {
          text: `I detected the following emotions: ${JSON.stringify(response.emotions)}`,
          user: false,
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);

        // Update user mood in context
        setUserMood(response.emotions);
      } catch (error) {
        console.error('Error analyzing emotion:', error);
        const botMessage = {
          text: 'Sorry, I couldn\'t understand your emotion.',
          user: false,
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbot-header">ChatBot</div>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`chatbot-message ${message.user ? 'user' : 'bot'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
