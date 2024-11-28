import React, { useState } from "react";

const ChatBot = ({ customizations }) => {
  const {
    buttonIcon,
    borderColor,
    borderRadius,
    titleBgColor,
    botBubbleBgColor,
    botTextColor,
    userBubbleBgColor,
    userTextColor,
    font,
  } = customizations;

  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = () => {
    if (userInput.trim()) {
      setMessages((prev) => [...prev, { sender: "user", text: userInput }]);
      setUserInput("");

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Thanks for your message!" },
        ]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div
      className="chatbot-container mt-10 shadow-2xl"
      style={{
        width: "400px",
        height: "500px",
        border: `2px solid ${borderColor}`,
        borderRadius: borderRadius,
        fontFamily: font,
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      <div
        className="chatbot-title"
        style={{
          backgroundColor: titleBgColor,
          padding: "10px",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <h2>Chat with us!</h2>
      </div>

      <div
        className="chat-area p-4"
        style={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.sender === "bot" ? "bot-message" : "user-message"}
            style={{
              backgroundColor:
                message.sender === "bot"
                  ? botBubbleBgColor
                  : userBubbleBgColor,
              color: message.sender === "bot" ? botTextColor : userTextColor,
              padding: "10px",
              borderRadius: "10px",
              maxWidth: "70%",
              alignSelf:
                message.sender === "bot" ? "flex-start" : "flex-end",
            }}
          >
            {message.text}
          </div>
        ))}
      </div>

      <div
        className="input-area"
        style={{
          display: "flex",
          padding: "10px",
          borderTop: `1px solid ${borderColor}`,
        }}
      >
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: "10px",
            border: `1px solid ${borderColor}`,
            borderRadius: `${borderRadius} 0 0 ${borderRadius}`,
            fontFamily: font,
          }}
        />
        
        <button
        className="chat-button"
        onClick={handleSendMessage}
        style={{
          padding: "10px",
            border: `1px solid ${borderColor}`,
            borderLeft: "none",
            borderRadius: `0 ${borderRadius} ${borderRadius} 0`,
            backgroundColor: titleBgColor,
            color: "#ffffff",
            cursor: "pointer",
        }}
      >
        {buttonIcon}
      </button>
      </div>
      
    </div>
  );
};

export default ChatBot;
