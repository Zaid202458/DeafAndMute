import React, { useState, useEffect, useRef } from 'react';

const LiveChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isSignMode, setIsSignMode] = useState(true);
  const chatEndRef = useRef(null);

  const dummyMessages = [
    { id: 1, text: 'Hello! How can I help you today?', sender: 'assistant', timestamp: new Date() },
    { id: 2, text: 'I need help with sign language', sender: 'user', timestamp: new Date() }
  ];

  useEffect(() => {
    setMessages(dummyMessages);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'user',
        timestamp: new Date()
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const toggleMode = () => {
    setIsSignMode(!isSignMode);
  };

  return (
    <div className="live-chat">
      <h2>Live Chat Support</h2>
      <div className="chat-mode-toggle">
        <button 
          onClick={toggleMode}
          className={isSignMode ? 'active' : ''}
        >
          Sign Language Mode
        </button>
        <button 
          onClick={toggleMode}
          className={!isSignMode ? 'active' : ''}
        >
          Text Mode
        </button>
      </div>
      <div className="chat-container">
        <div className="messages">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`message ${message.sender}`}
            >
              <div className="message-content">
                <p>{message.text}</p>
                <span className="timestamp">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <form onSubmit={handleSend} className="message-input">
          {isSignMode ? (
            <div className="sign-input">
              <button type="button" className="record-sign">
                Record Sign
              </button>
            </div>
          ) : (
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
            />
          )}
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
