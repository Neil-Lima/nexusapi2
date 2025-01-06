'use client';
import { useState, useEffect } from 'react';

const mockMessages = [
  {
    id: 1,
    user: 'John Doe',
    avatar: 'https://picsum.photos/50/50?random=1',
    text: 'Olá! Como você está?',
    time: '10:30',
    isSent: false
  },
  {
    id: 2,
    user: 'Me',
    avatar: 'https://picsum.photos/50/50?random=2',
    text: 'Oi! Estou bem, e você?',
    time: '10:31',
    isSent: true
  },
  {
    id: 3,
    user: 'John Doe',
    avatar: 'https://picsum.photos/50/50?random=1',
    text: 'Também estou bem! Viu aquele novo projeto?',
    time: '10:32',
    isSent: false
  }
];

export const useMessenger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState(mockMessages);

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(true);
  };

  const handleOpen = () => {
    setIsOpen(true);
    setIsMinimized(false);
  };

  const handleSendMessage = () => {
    if (!messageText.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      user: 'Me',
      avatar: 'https://picsum.photos/50/50?random=2',
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isSent: true
    };

    setMessages([...messages, newMessage]);
    setMessageText('');
  };

  const handleAttachment = () => {
    // Implementar lógica de anexo
  };

  const handleEmojiSelect = (emoji) => {
    setMessageText(prev => prev + emoji);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
    };

    document.addEventListener('keypress', handleKeyPress);
    return () => document.removeEventListener('keypress', handleKeyPress);
  }, [messageText]);

  return {
    isOpen,
    isMinimized,
    handleMinimize,
    handleClose,
    handleOpen,
    handleSendMessage,
    handleAttachment,
    handleEmojiSelect,
    showEmojiPicker,
    setShowEmojiPicker,
    messageText,
    setMessageText,
    messages
  };
};
