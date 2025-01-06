'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FilterContainer, FilterButton, CategoryBadge } from '../styles/NotificationsFilterStyles';
import { useNotificationsFilter } from '../utils/NotificationsFilterUtils';

const NotificationsFilterComp = () => {
  const { theme } = useTheme();
  const { filters, iconMap, activeFilter, handleFilterChange } = useNotificationsFilter();

  return (
    <FilterContainer theme={theme}>
      {filters.map((filter) => (
        <FilterButton
          key={filter.id}
          onClick={() => handleFilterChange(filter.id)}
          $active={activeFilter === filter.id}
          theme={theme}
        >
          <FontAwesomeIcon icon={iconMap[filter.id]} style={{ color: filter.color }} />
          <span>{filter.label}</span>
          <CategoryBadge color={filter.color} theme={theme}>
            {filter.count}
          </CategoryBadge>
        </FilterButton>
      ))}
    </FilterContainer>
  );
};

export default NotificationsFilterComp;
