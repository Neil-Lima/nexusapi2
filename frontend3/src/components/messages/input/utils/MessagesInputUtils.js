'use client';
import { useState } from 'react';

export const useMessagesInput = () => {
  const [message, setMessage] = useState('');
  const [showEmojis, setShowEmojis] = useState(false);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleEmojiSelect = (emoji) => {
    setMessage(prev => prev + emoji);
    setShowEmojis(false);
  };

  const handleAttachment = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*, video/*, .pdf, .doc, .docx';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        // Implementar lógica de upload
        console.log('Arquivo selecionado:', file);
      }
    };
    input.click();
  };

  const toggleEmojiPicker = () => {
    setShowEmojis(!showEmojis);
  };

  const handleSend = () => {
    if (message.trim()) {
      // Implementar lógica de envio
      console.log('Mensagem enviada:', message);
      setMessage('');
    }
  };

  return {
    message,
    showEmojis,
    handleMessageChange,
    handleEmojiSelect,
    handleAttachment,
    toggleEmojiPicker,
    handleSend
  };
};
