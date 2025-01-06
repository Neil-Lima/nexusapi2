'use client';
import { useState } from 'react';

export const useDatingChat = (matchId) => {
  const [match] = useState({
    id: matchId,
    name: 'Julia Silva',
    avatar: 'https://picsum.photos/200/200?random=1',
    online: true
  });

  const [messages, setMessages] = useState([
    {
      date: 'Hoje',
      messages: [
        {
          text: 'Oi! Tudo bem?',
          time: '10:30',
          sent: false
        },
        {
          text: 'Oi! Tudo ótimo e com você?',
          time: '10:32',
          sent: true
        },
        {
          text: 'Também! Vi que você gosta de fotografia',
          time: '10:33',
          sent: false
        }
      ]
    }
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [showEmojis, setShowEmojis] = useState(false);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setMessages(prev => {
      const lastGroup = prev[prev.length - 1];
      if (lastGroup.date === 'Hoje') {
        return [
          ...prev.slice(0, -1),
          {
            ...lastGroup,
            messages: [
              ...lastGroup.messages,
              { text: newMessage, time, sent: true }
            ]
          }
        ];
      }
      return [
        ...prev,
        {
          date: 'Hoje',
          messages: [{ text: newMessage, time, sent: true }]
        }
      ];
    });

    setNewMessage('');
  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleFileUpload = (e) => {
    // Implementar lógica de upload de arquivo
    console.log('File upload:', e.target.files[0]);
  };

  const toggleEmojis = () => {
    setShowEmojis(prev => !prev);
  };

  const handleEmojiSelect = (emoji) => {
    setNewMessage(prev => prev + emoji);
  };

  const handleVideoCall = () => {
    // Implementar lógica de chamada de vídeo
    console.log('Starting video call with:', matchId);
  };

  const handleVoiceCall = () => {
    // Implementar lógica de chamada de voz
    console.log('Starting voice call with:', matchId);
  };

  return {
    match,
    messages,
    newMessage,
    showEmojis,
    handleSendMessage,
    handleInputChange,
    handleFileUpload,
    toggleEmojis,
    handleEmojiSelect,
    handleVideoCall,
    handleVoiceCall
  };
};
