import React from 'react';
import ChatBot from 'react-chatbotify';
import 'react-chatbotify/dist/react-chatbotify.css';

// CustomHeader component for the chatbot


const MKChatbot = () => {
  // Define custom conversation messages
  const helpOptions = ["Booking", "Contact", "FB Page", "Menu", "Other"];
  const flow = {
      start: {
          message: "Hello, I'm Manna Kitchen FAQ BOT 👋! I'm excited that you are using our " +
              "chatbot 😊!",
          transition: {duration: 1000},
          path: "show_options"
      },
      show_options: {
          message: "Let's get you started",
          options: helpOptions,
          path: "process_options"
      },
      prompt_again: {
          message: "Do you need any other help?",
          options: helpOptions,
          path: "process_options"
      },
      unknown_input: {
          message: "Sorry, I do not understand your message 😢! If you require further assistance, Please call 09-558 3817 ",
          options: helpOptions,
          path: "process_options"
      },
      process_options: {
          transition: {duration: 0},
          path: (params) => {
              let link = "";
              switch (params.userInput) {
              case "Booking":
                
                  link = "https://booking-link";
                  break;
              case "Contact":
                  link = "https://booking-link";
                  break;
              case "FB PAGE":
                  link = "https://booking-link";
                  break;
              case "Menu":
                  link = "https://booking-link";
                  break;

              default:
                  return "unknown_input";
              }
              params.injectMessage("Sit tight! I'll send you right there!");
              setTimeout(() => {
                  window.open(link);
              }, 1000)
              return "repeat"
          },
      },
      repeat: {
          transition: {duration: 3000},
          path: "prompt_again"
      },
}

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
