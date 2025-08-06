"use client"

import {
  Send,
  Bot,
  X,
  Loader2,
  Sparkles,
  MessageCircle,
} from "lucide-react"
import { cn } from "../../lib/utils"
import { useState, useRef, useEffect } from "react"

export interface Message {
  id: string
  content: string
  sender: {
    name: string
    avatar: string
    isOnline: boolean
    isCurrentUser?: boolean
    isBot?: boolean
  }
  timestamp: string
  status: "sent" | "delivered" | "read" | "loading"
}

interface ChatCardProps {
  chatName?: string
  currentUser?: {
    name: string
    avatar: string
  }
  onSendMessage?: (message: string) => void
  onClose?: () => void
  className?: string
  theme?: "light" | "dark"
  isOpen?: boolean
}

export function ChatCard({
  chatName = "AI Assistant",
  currentUser = {
    name: "You",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  onSendMessage,
  onClose,
  className,
  theme = "dark",
  isOpen = true,
}: ChatCardProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatBoxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Handle click outside to minimize
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatBoxRef.current && !chatBoxRef.current.contains(event.target as Node)) {
        onClose?.()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: {
        name: currentUser.name,
        avatar: currentUser.avatar,
        isOnline: true,
        isCurrentUser: true,
      },
      timestamp: new Date().toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
      status: "sent",
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)
    onSendMessage?.(inputValue)

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm here to help! What can I assist you with today?",
        sender: {
          name: "AI Assistant",
          avatar: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=150&h=150&fit=crop&crop=face",
          isOnline: true,
          isBot: true,
        },
        timestamp: new Date().toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
        status: "read",
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
    }, 1000)
  }

  const isLightTheme = theme === "light"

  if (!isOpen) return null

  return (
    <div
      ref={chatBoxRef}
      className={cn(
        "w-80 h-96 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden",
        className,
      )}
      style={{ 
        backgroundColor: isLightTheme ? '#ffffff' : '#111827',
        backdropFilter: 'none'
      }}
    >
      <div className="flex flex-col h-full">
        {/* Modern Header */}
        <div
          className="p-4 border-b border-gray-100 dark:border-gray-800"
          style={{
            backgroundColor: isLightTheme ? '#ffffff' : '#111827'
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-gray-900" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                  {chatName}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Online • Ready to help
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Clean Messages Area */}
        <div 
          className="flex-1 p-4 space-y-4 overflow-y-auto"
          style={{
            backgroundColor: isLightTheme ? '#ffffff' : '#111827'
          }}
        >
          {messages.length === 0 && (
            <div className="text-center py-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                Welcome to AI Assistant
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                I'm here to help you with any questions or tasks. 
                Just type your message below and I'll assist you!
              </p>
            </div>
          )}
          
          {messages.map((message) => (
            <div key={message.id} className="flex gap-3">
              <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={message.sender.avatar}
                  alt={message.sender.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm text-gray-900 dark:text-white">
                    {message.sender.name}
                  </span>
                  <span className="text-xs text-gray-400">
                    {message.timestamp}
                  </span>
                </div>
                <div
                  className={cn(
                    "break-words p-3 rounded-2xl text-sm leading-relaxed",
                    message.sender.isCurrentUser
                      ? "bg-blue-500 text-white ml-4"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  )}
                >
                  {message.status === "loading" ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Thinking...</span>
                    </div>
                  ) : (
                    <p>{message.content}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Modern Input */}
        <div 
          className="p-4 border-t border-gray-100 dark:border-gray-800"
          style={{
            backgroundColor: isLightTheme ? '#ffffff' : '#111827'
          }}
        >
          <div className="flex gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSendMessage()
                  }
                }}
                placeholder="Type your message..."
                disabled={isLoading}
                className={cn(
                  "w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm",
                  isLoading && "opacity-50 cursor-not-allowed"
                )}
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim()}
              className={cn(
                "px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl transition-all duration-200 flex items-center justify-center",
                isLoading || !inputValue.trim()
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:shadow-lg hover:scale-105 active:scale-95",
              )}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 