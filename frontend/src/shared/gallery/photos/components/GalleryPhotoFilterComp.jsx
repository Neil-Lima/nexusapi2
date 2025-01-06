'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { FilterContainer, FilterButton } from '../styles/GalleryPhotoFilterStyles';
import { useGalleryPhotoFilter } from '../utils/GalleryPhotoFilterUtils';

const GalleryPhotoFilterComp = () => {
  const { theme } = useTheme();
  const { filters, activeFilter, handleFilterChange } = useGalleryPhotoFilter();

  return (
    <FilterContainer theme={theme}>
      {filters.map((filter) => (
        <FilterButton
          key={filter.id}
          onClick={() => handleFilterChange(filter.id)}
          theme={theme}
          isActive={activeFilter === filter.id}
        >
          {filter.label}
        </FilterButton>
      ))}
    </FilterContainer>
  );
};

export default GalleryPhotoFilterComp;
