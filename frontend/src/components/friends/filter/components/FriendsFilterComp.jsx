'use client';
import React from 'react';
import { 
  FilterCard, 
  FilterContainer, 
  CategoryTag, 
  FilterHeader,
  FilterTitle,
  TagsContainer 
} from '../styles/FriendsFilterStyles';
import { defaultCategories, useFilterCategories } from '../utils/FriendsFilterUtils';
import { useTheme } from '@/context/theme/ThemeContext';

function FriendsFilterComp({ onCategoryChange }) {
  const { theme } = useTheme();
  const { selectedCategory, setSelectedCategory } = useFilterCategories();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <FilterCard theme={theme}>
      <FilterContainer>
        <FilterHeader>
          <FilterTitle theme={theme}>Filter Friends</FilterTitle>
        </FilterHeader>
        <TagsContainer>
          {defaultCategories.map((category) => (
            <CategoryTag
              key={category}
              selected={selectedCategory === category}
              onClick={() => handleCategoryClick(category)}
              theme={theme}
            >
              {category}
            </CategoryTag>
          ))}
        </TagsContainer>
      </FilterContainer>
    </FilterCard>
  );
}

export default FriendsFilterComp;
