'use client';
import { useState } from 'react';

export const useMarketplaceChat = () => {
    const [messages, setMessages] = useState([
        {
            sender: 'seller',
            text: 'Olá! Como posso ajudar?',
            time: '10:30'
        },
        {
            sender: 'user',
            text: 'Oi! Gostaria de saber mais sobre o produto',
            time: '10:31'
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');

    const handleSendMessage = () => {
        if (!inputMessage.trim()) return;

        const newMessage = {
            sender: 'user',
            text: inputMessage,
            time: new Date().toLocaleTimeString().slice(0, 5)
        };

        setMessages([...messages, newMessage]);
        setInputMessage('');
    };

    const handleInputChange = (e) => {
        setInputMessage(e.target.value);
    };

    const handleImageUpload = () => {
        // Implement image upload logic
        console.log('Uploading image...');
    };

    const handleEmojiSelect = () => {
        // Implement emoji selector
        console.log('Opening emoji selector...');
    };

    return {
        messages,
        inputMessage,
        handleSendMessage,
        handleInputChange,
        handleImageUpload,
        handleEmojiSelect
    };
};
