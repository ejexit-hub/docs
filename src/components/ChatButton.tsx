'use client';

import React, { useState } from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import InternalChat from './InternalChat';

export default function ChatButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  console.log('ChatButton component rendered'); // Debug log

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => {
          console.log('Chat button clicked'); // Debug log
          setIsChatOpen(true);
        }}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
        aria-label="Open AI Assistant"
        style={{ 
          position: 'fixed', 
          bottom: '24px', 
          right: '24px', 
          zIndex: 9999,
          borderRadius: '16px',
          width: '72px',
          height: '72px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
          background: 'linear-gradient(135deg, #3B82F6 0%, #4F46E5 100%)',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}
      >
        <Sparkles className="w-6 h-6 mb-1" />
        <span style={{ 
          fontSize: '10px', 
          display: 'block', 
          fontWeight: '600',
          letterSpacing: '0.5px',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
        }}>
          AI
        </span>
      </button>
      {isChatOpen && <InternalChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />}
    </>
  );
} 