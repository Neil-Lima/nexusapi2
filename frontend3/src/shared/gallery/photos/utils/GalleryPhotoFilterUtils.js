'use client';
import { useState, useCallback } from 'react';

export const useGalleryPhotoFilter = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Todas' },
    { id: 'recent', label: 'Recentes' },
    { id: 'favorites', label: 'Favoritas' },
    { id: 'albums', label: 'Álbuns' }
  ];

  const handleFilterChange = useCallback((filterId) => {
    setActiveFilter(filterId);
  }, []);

  return {
    filters,
    activeFilter,
    handleFilterChange
  };
};
