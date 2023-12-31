import React from 'react';
import ChatBot from 'react-chatbotify';
import 'react-chatbotify/dist/react-chatbotify.css';

// CustomHeader component for the chatbot


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
      options={{
        title: "Manna Kitchen Chat",
        subtitle: "Your Virtual Assistant",
        theme: {
          // Add your custom styling here
        },
        chatHistory: { storageKey: "example_basic_form" },
      }}
      flow={flow}
    />
  );
};

export { MKChatbot };
