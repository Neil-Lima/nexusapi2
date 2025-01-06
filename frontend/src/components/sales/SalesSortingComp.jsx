'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { SortContainer, SortButton } from './styles/SalesStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortAmountDown, faSortAmountUp } from '@fortawesome/free-solid-svg-icons';
import { sortOptions } from './utils/SalesUtils';

export default function SalesSortingComp({ sortBy, onSort }) {
  const { theme } = useTheme();

  return (
    <SortContainer theme={theme}>
      {sortOptions.map(option => (
        <SortButton
          key={option.value}
          $active={sortBy === option.value}
          onClick={() => onSort(option.value)}
          theme={theme}
        >
          <FontAwesomeIcon icon={option.icon || faSort} />
          {option.label}
        </SortButton>
      ))}
    </SortContainer>
  );
}
