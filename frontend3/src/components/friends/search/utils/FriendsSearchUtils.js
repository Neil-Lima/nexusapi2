import { useState } from 'react';
import { mockFriends } from '../../list/utils/FriendsListUtils';

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const handleSearch = (term) => {
    setSearchTerm(term);
    if (!term.trim()) {
      setSearchResults([]);
      return;
    }
    
    const results = mockFriends.filter(friend =>
      friend.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  return {
    searchTerm,
    searchResults,
    handleSearch,
    clearSearch
  };
};
