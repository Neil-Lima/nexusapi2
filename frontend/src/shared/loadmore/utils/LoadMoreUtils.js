'use client';
import { useState } from 'react';

export const useLoadMore = (onLoadMore) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    try {
      await onLoadMore();
    } catch (error) {
      console.error('Error loading more items:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    handleLoadMore
  };
};
