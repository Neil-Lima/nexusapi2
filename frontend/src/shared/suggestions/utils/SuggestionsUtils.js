'use client';
import { useState, useEffect } from 'react';
import { api } from '@/api/api';

export const useSuggestions = () => {
  const [suggestions, setSuggestions] = useState([
    {
      id: 1,
      name: 'Rock Lee',
      avatar: 'https://picsum.photos/50/50?random=1',
      mutualFriends: 15
    },
    {
      id: 2,
      name: 'Hinata Hyuga',
      avatar: 'https://picsum.photos/50/50?random=2',
      mutualFriends: 23
    },
    {
      id: 3,
      name: 'Shikamaru Nara',
      avatar: 'https://picsum.photos/50/50?random=3',
      mutualFriends: 8
    }
  ]);

  const handleAddFriend = (id) => {
    console.log(`Adding friend with id: ${id}`);
    setSuggestions(prev => prev.filter(suggestion => suggestion.id !== id));
  };

  const handleIgnoreSuggestion = (id) => {
    setSuggestions(prev => prev.filter(suggestion => suggestion.id !== id));
  };

  const fetchSuggestions = async () => {
    try {
      // Implement API call to fetch suggestions
      // setSuggestions(await response.json());
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  useEffect(() => {
    fetchSuggestions();
  }, []);

  return {
    suggestions,
    handleAddFriend,
    handleIgnoreSuggestion
  };
};
