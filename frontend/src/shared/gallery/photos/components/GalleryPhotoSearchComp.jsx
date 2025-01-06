'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { SearchContainer, SearchInput, SearchButton } from '../styles/GalleryPhotoSearchStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useGalleryPhotoSearch } from '../utils/GalleryPhotoSearchUtils';

const GalleryPhotoSearchComp = () => {
  const { theme } = useTheme();
  const { searchTerm, handleSearch, handleSubmit } = useGalleryPhotoSearch();

  return (
    <SearchContainer theme={theme}>
      <SearchInput
        type="text"
        placeholder="Buscar fotos..."
        value={searchTerm}
        onChange={handleSearch}
        theme={theme}
      />
      <SearchButton onClick={handleSubmit} theme={theme}>
        <FontAwesomeIcon icon={faSearch} /> Buscar
      </SearchButton>
    </SearchContainer>
  );
};

export default GalleryPhotoSearchComp;
