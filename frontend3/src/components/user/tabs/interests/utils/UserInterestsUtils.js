'use client';
import { useState } from 'react';

export const useUserInterests = () => {
  const [interests] = useState([
    { id: 1, name: "Música" },
    { id: 2, name: "Cinema" },
    { id: 3, name: "Esportes" },
    { id: 4, name: "Tecnologia" },
    { id: 5, name: "Viagens" },
    { id: 6, name: "Culinária" },
    { id: 7, name: "Arte" },
    { id: 8, name: "Literatura" }
  ]);

  const [selectedInterests, setSelectedInterests] = useState([]);
  const [searchInterest, setSearchInterest] = useState('');

  const handleInterestSelect = (interestId) => {
    setSelectedInterests(prev => {
      if (prev.includes(interestId)) {
        return prev.filter(id => id !== interestId);
      }
      return [...prev, interestId];
    });
  };

  const handleInterestRemove = (interestId) => {
    setSelectedInterests(prev => prev.filter(id => id !== interestId));
  };

  const handleInterestSearch = (e) => {
    setSearchInterest(e.target.value);
  };

  return {
    interests,
    selectedInterests,
    searchInterest,
    handleInterestSelect,
    handleInterestRemove,
    handleInterestSearch
  };
};
