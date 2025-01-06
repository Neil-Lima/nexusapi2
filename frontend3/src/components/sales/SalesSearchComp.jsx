'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { SearchContainer, SearchInput } from './styles/SalesStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SalesSearchComp({ searchTerm, onSearch }) {
  const { theme } = useTheme();

  return (
    <SearchContainer theme={theme}>
      <SearchInput
        type="text"
        placeholder="O que você procura?"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        theme={theme}
      />
      <FontAwesomeIcon icon={faSearch} />
    </SearchContainer>
  );
}
