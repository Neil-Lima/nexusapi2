'use client';
import { useState, useCallback } from 'react';
import { 
  faHeart, 
  faComment, 
  faAt, 
  faBell 
} from '@fortawesome/free-solid-svg-icons';

export const useNotificationsFilter = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const iconMap = {
    all: faBell,
    likes: faHeart,
    comments: faComment,
    mentions: faAt
  };

  const filters = [
    { id: 'all', label: 'Todas', color: '#5f27cd', count: 10 },
    { id: 'likes', label: 'Curtidas', color: '#ff4757', count: 5 },
    { id: 'comments', label: 'Comentários', color: '#2e86de', count: 3 },
    { id: 'mentions', label: 'Menções', color: '#ffa502', count: 2 }
  ];

  const handleFilterChange = useCallback((filterId) => {
    setActiveFilter(filterId);
  }, []);

  const handleSortChange = useCallback((sortType) => {
    setSortBy(sortType);
  }, []);

  return {
    filters,
    iconMap,
    activeFilter,
    sortBy,
    handleFilterChange,
    handleSortChange
  };
};
