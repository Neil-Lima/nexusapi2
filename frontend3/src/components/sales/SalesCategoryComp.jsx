'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { CategoryContainer, CategoryItem } from './styles/SalesStyle';
import { categories } from './utils/SalesUtils';

export default function SalesCategoryComp({ selectedCategory, onCategoryChange }) {
  const { theme } = useTheme();

  return (
    <CategoryContainer theme={theme}>
      <h6>Categories</h6>
      {Object.entries(categories).map(([key, category]) => (
        <CategoryItem
          key={key}
          $active={selectedCategory === key}
          onClick={() => onCategoryChange(key)}
          theme={theme}
        >
          {category.name}
        </CategoryItem>
      ))}
    </CategoryContainer>
  );
}
