// src/Chatbot.js
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { SERVER_URL } from "./constants";

const Chatbot = () => {
  const [messages, setMessages] = useState(() => {
    // Load messages from local storage if available
    const savedMessages = localStorage.getItem("messages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Scroll to the latest message
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

    // Save messages to local storage
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const renderMessageText = (text) => {
    return (
      <div>
        {text.split("\n").map((line, index) => (
          <p key={index} className="mb-2">
            {line.includes("**") ? (
              <span
                dangerouslySetInnerHTML={{
                  __html: line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                }}
              />
            ) : (
              line
            )}
          </p>
        ))}
      </div>
    );
  };

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = { sender: "user", text: input };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInput("");
      setIsTyping(true);

      // Simulate a bot response
      // setTimeout(() => {
      //   setIsTyping(false);
      //   const botResponse = {
      //     sender: "bot",
      //     text: "This is a simulated response.",
      //   };
      //   setMessages((prevMessages) => [...prevMessages, botResponse]);
      // }, 1500);
      axios
        .post(`${SERVER_URL}/api/ask`, newMessage, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setIsTyping(false);
          const botResponse = {
            sender: "bot",
            text:
              response?.data?.response?.choices[0]?.message?.content || "Error",
          };

          // console.log(response?.data?.response?.choices[0]?.message?.content);
          setMessages((prevMessages) => [...prevMessages, botResponse]);
        })
        .catch((error) => {
          console.error(error);
          setIsTyping(false);
          const botResponse = {
            sender: "bot",
            text: "An error occurred while processing your request.",
          };
          setMessages((prevMessages) => [...prevMessages, botResponse]);
        });
    }
  };

  const handleClearChat = () => {
    setMessages([]);
    localStorage.removeItem("messages");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-blue-500 text-white flex justify-between items-center py-4 px-4">
        <h1 className="text-2xl font-bold">Chatbot</h1>
        <button
          className="p-2 bg-red-500 text-white rounded"
          onClick={handleClearChat}
        >
          Clear All Chat
        </button>
      </header>
      <div className="flex-1 p-4 overflow-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex mb-4 ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`rounded-lg p-2 max-w-md ${
                message.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {renderMessageText(message.text)}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex mb-4 justify-start">
            <div className="rounded-lg p-2 max-w-md bg-gray-300 text-black">
              Typing...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex p-4 bg-white">
        <input
          className="flex-1 p-2 border rounded-l-lg border-gray-300"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type a message..."
        />
        <button
          className="p-2 bg-blue-500 text-white rounded-r-lg"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
