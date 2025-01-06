'use client';
import { useState } from 'react';

export const useMessagesEmojiSelector = ({ onEmojiSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recentEmojis, setRecentEmojis] = useState(['😊', '❤️', '👍', '🎉']);

  const emojiCategories = [
    {
      name: 'Sorrisos & Pessoas',
      emojis: ['😀', '😃', '😄', '😁', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘']
    },
    {
      name: 'Animais & Natureza',
      emojis: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔']
    },
    {
      name: 'Comidas & Bebidas',
      emojis: ['🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅']
    }
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEmojiClick = (emoji) => {
    setRecentEmojis(prev => {
      const updated = [emoji, ...prev.filter(e => e !== emoji)];
      return updated.slice(0, 8);
    });
    onEmojiSelect(emoji);
  };

  const filteredCategories = searchTerm
    ? emojiCategories.map(category => ({
        ...category,
        emojis: category.emojis.filter(emoji => 
          emoji.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(category => category.emojis.length > 0)
    : emojiCategories;

  return {
    searchTerm,
    recentEmojis,
    emojiCategories: filteredCategories,
    handleSearchChange,
    handleEmojiClick
  };
};
