'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { ChatCard } from './ui/chat-card';

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Component mounted
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSendMessage = (message: string) => {
    // Handle message sending
  };

  const handleReaction = (messageId: string, emoji: string) => {
    // Handle reaction
  };

  const handleMoreClick = () => {
    // Handle more options
  };

  return (
    <div style={{ position: 'fixed', bottom: '16px', right: '16px', zIndex: 9999 }}>
      {/* Floating Action Button */}
      <button
        onClick={toggleChat}
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
          border: '2px solid white',
          color: 'white',
          boxShadow: '0 6px 16px rgba(59, 130, 246, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          fontSize: '18px',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
        aria-label="Open AI Assistant"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Card - Vertical Layout */}
      <div style={{ 
        position: 'absolute', 
        bottom: '60px', 
        right: '0px',
        display: isOpen ? 'block' : 'none'
      }}>
        <ChatCard
          isOpen={isOpen}
          onClose={handleClose}
          onSendMessage={handleSendMessage}
          onReaction={handleReaction}
          onMoreClick={handleMoreClick}
          theme="dark"
          chatName="AI Assistant"
          currentUser={{
            name: "You",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
          }}
          className="chat-card"
        />
      </div>
    </div>
  );
} 