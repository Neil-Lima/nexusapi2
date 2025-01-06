'use client';
import { useState } from 'react';

const initialPreferences = {
  gender: 'all',
  ageMin: 18,
  ageMax: 50,
  distance: 25,
  education: 'any',
  occupation: '',
  religion: 'any',
  interests: []
};

const availableInterestsList = [
  'Arte', 'Música', 'Viagens', 'Esportes', 'Gastronomia',
  'Literatura', 'Cinema', 'Tecnologia', 'Fotografia', 'Yoga',
  'Dança', 'Games', 'Política', 'Natureza', 'Pets'
];

export const useDatingPreferences = () => {
  const [preferences, setPreferences] = useState(initialPreferences);
  const [availableInterests] = useState(availableInterestsList);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPreferences(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestToggle = (interest) => {
    setPreferences(prev => {
      const newInterests = prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest];

      return {
        ...prev,
        interests: newInterests
      };
    });
  };

  const handleApplyFilters = (event) => {
    event.preventDefault();
    // Implementar lógica de aplicação dos filtros
    console.log('Applying filters:', preferences);
  };

  return {
    preferences,
    availableInterests,
    handleInputChange,
    handleInterestToggle,
    handleApplyFilters
  };
};
