'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Settings, X, Loader2, MessageCircle, Sparkles } from 'lucide-react';
import axios from 'axios';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  provider?: string;
  model?: string;
}

interface LLMProvider {
  name: string;
  model: string;
  baseURL: string;
}

interface ChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InternalChat({ isOpen, onClose }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [providers, setProviders] = useState<LLMProvider[]>([]);
  const [selectedProvider, setSelectedProvider] = useState<string>('ollama');
  const [showSettings, setShowSettings] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const API_BASE_URL = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3001' 
    : process.env.REACT_APP_API_URL || 'http://localhost:3001';

  useEffect(() => {
    if (isOpen) {
      fetchProviders();
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fetchProviders = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/llm/providers`);
      setProviders(response.data.providers);
      if (response.data.providers.length > 0) {
        setSelectedProvider(response.data.providers[0].name);
      }
    } catch (error) {
      console.error('Failed to fetch providers:', error);
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Add loading message
      const loadingMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: '',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, loadingMessage]);

      // Stream the response
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          provider: selectedProvider,
          stream: true,
          context: `You are an AI assistant for Exit Technologies Inc. Help users with technical questions about IT equipment, product training, and work instructions. Be concise and professional.`
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split('\n');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6);
              if (data === '[DONE]') {
                // Update final message
                setMessages(prev => prev.map(msg => 
                  msg.id === loadingMessage.id 
                    ? { ...msg, content: assistantMessage, provider: selectedProvider }
                    : msg
                ));
                return;
              } else {
                try {
                  const parsed = JSON.parse(data);
                  if (parsed.content) {
                    assistantMessage += parsed.content;
                    // Update message in real-time
                    setMessages(prev => prev.map(msg => 
                      msg.id === loadingMessage.id 
                        ? { ...msg, content: assistantMessage }
                        : msg
                    ));
                  }
                } catch (e) {
                  // Skip invalid JSON
                }
              }
            }
          }
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => prev.map(msg => 
        msg.id === (Date.now() + 1).toString()
          ? { ...msg, content: 'Sorry, I encountered an error. Please try again.' }
          : msg
      ));
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      
      {/* Chat Window */}
      <div 
        className="bg-white shadow-2xl flex flex-col border border-gray-200 overflow-hidden"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '450px',
          height: '650px',
          maxWidth: '90vw',
          maxHeight: '85vh',
          zIndex: 10000,
          borderRadius: '20px',
          backgroundColor: 'white',
          color: 'black'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">AI Assistant</h3>
              <p className="text-sm text-gray-600 font-medium">Exit Technologies</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2.5 hover:bg-white/80 rounded-xl transition-all duration-200 hover:shadow-md"
              title="Settings"
            >
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 hover:bg-white/80 rounded-xl transition-all duration-200 hover:shadow-md"
              title="Close"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Settings Panel */}
        {showSettings && (
          <div className="p-6 border-b border-gray-100 bg-gray-50/50">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  AI Model
                </label>
                <select
                  value={selectedProvider}
                  onChange={(e) => setSelectedProvider(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white shadow-sm"
                >
                  {providers.map((provider) => (
                    <option key={provider.name} value={provider.name}>
                      {provider.name} ({provider.model})
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={clearChat}
                className="w-full px-4 py-3 text-sm font-medium text-red-600 border border-red-200 rounded-xl hover:bg-red-50 transition-all duration-200 bg-white shadow-sm"
              >
                Clear Chat History
              </button>
            </div>
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-gray-50/30 to-white">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 mt-12">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MessageCircle className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-800 text-xl mb-3">Welcome to AI Assistant</h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                Ask me anything about Exit Technologies products and procedures! I'm here to help you with technical questions and guidance.
              </p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] ${message.role === 'user' ? 'order-2' : 'order-1'}`}>
                  <div
                    className={`rounded-2xl px-5 py-4 shadow-sm ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
                        : 'bg-white text-gray-900 border border-gray-100'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      {message.role === 'assistant' && (
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Bot className="w-4 h-4 text-blue-600" />
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="text-sm leading-relaxed whitespace-pre-wrap font-medium">{message.content}</p>
                        {message.provider && (
                          <p className={`text-xs mt-3 font-medium ${message.role === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                            {message.provider} • {message.timestamp.toLocaleTimeString()}
                          </p>
                        )}
                      </div>
                      {message.role === 'user' && (
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <User className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-6 border-t border-gray-100 bg-white">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm bg-white shadow-sm"
                rows={1}
                disabled={isLoading}
                style={{ minHeight: '52px', maxHeight: '120px' }}
              />
            </div>
            <button
              onClick={sendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="px-5 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl hover:from-blue-600 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}