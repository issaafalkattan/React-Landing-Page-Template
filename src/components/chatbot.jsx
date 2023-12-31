import React from 'react';
import ChatBot from 'react-chatbotify';
import 'react-chatbotify/dist/react-chatbotify.css';

// CustomHeader component for the chatbot
const CustomHeader = () => {
  return (
    <div style={{ background: '#4CAF50', color: '#fff', padding: '10px', textAlign: 'center' }}>
      <h2>Manna Kitchen Chat</h2>
      <p>Your Virtual Assistant</p>
    </div>
  );
};

const MKChatbot = () => {
  // Define custom conversation messages
  const flow = [
    {
      id: '1',
      message: 'Hello! Welcome to Manna Kitchen. How can I assist you today?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Great! How can Manna Kitchen help you with your inquiry?',
      trigger: '4',
    },
    // Add more conversation steps as needed
  ];

  return (
    <ChatBot
      headerComponent={<CustomHeader />} // Use the CustomHeader component as the header
      subtitle="Your Virtual Assistant"
      steps={flow}
    />
  );
};

export { MKChatbot };
