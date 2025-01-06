'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import { LoadMoreButton, LoadingSpinner } from './styles/LoadMoreStyles';
import { useLoadMore } from './utils/LoadMoreUtils';

function LoadMoreComp({ onLoadMore }) {
  const { theme } = useTheme();
  const { isLoading, handleLoadMore } = useLoadMore(onLoadMore);

  return (
    <LoadMoreButton 
      onClick={handleLoadMore} 
      disabled={isLoading}
      theme={theme}
    >
      {isLoading ? (
        <LoadingSpinner>
          <FontAwesomeIcon icon={faSpinner} spin />
        </LoadingSpinner>
      ) : (
        'Load More'
      )}
    </LoadMoreButton>
  );
}

export default LoadMoreComp;
