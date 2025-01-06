'use client';
import { useState } from 'react';

export const useDatingMain = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchLocation, setSearchLocation] = useState('Umarizal, Belém - PA');

  const handleSearch = (value) => {
    setSearchLocation(value);
  };

  return {
    viewMode,
    setViewMode,
    searchLocation,
    handleSearch
  };
};