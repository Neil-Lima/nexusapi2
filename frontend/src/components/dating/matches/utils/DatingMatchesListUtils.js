'use client';
import { useState, useEffect } from 'react';

const mockMatches = [
  {
    id: 1,
    name: 'Julia Silva',
    avatar: 'https://picsum.photos/200/200?random=1',
    online: true,
    lastMessage: 'Adorei seu perfil! Vamos conversar?',
    lastMessageTime: '2min',
    liked: true
  },
  {
    id: 2,
    name: 'Pedro Santos',
    avatar: 'https://picsum.photos/200/200?random=2',
    online: false,
    lastMessage: 'Que legal! Também gosto de música indie',
    lastMessageTime: '1h',
    liked: false
  },
  {
    id: 3,
    name: 'Ana Costa',
    avatar: 'https://picsum.photos/200/200?random=3',
    online: true,
    lastMessage: 'Vi que você também curte fotografia!',
    lastMessageTime: '3h',
    liked: true
  }
];

export const useDatingMatchesList = () => {
  const [matches, setMatches] = useState(mockMatches);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMatches, setFilteredMatches] = useState(matches);

  useEffect(() => {
    const filtered = matches.filter(match =>
      match.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMatches(filtered);
  }, [matches, searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMatchClick = (matchId) => {
    console.log('Opening match profile:', matchId);
  };

  const handleMessageClick = (matchId) => {
    console.log('Opening chat with:', matchId);
  };

  const handleLikeMatch = (matchId) => {
    setMatches(prev => prev.map(match => 
      match.id === matchId 
        ? { ...match, liked: !match.liked }
        : match
    ));
  };

  return {
    matches,
    searchTerm,
    filteredMatches,
    handleSearchChange,
    handleMatchClick,
    handleMessageClick,
    handleLikeMatch
  };
};
