'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { FilterContainer } from './styles/SalesStyle';
import SalesCategoryComp from './SalesCategoryComp';
import SalesPriceFilterComp from './SalesPriceFilterComp';
import SalesConditionFilterComp from './SalesConditionFilterComp';
import SalesLocationFilterComp from './SalesLocationFilterComp';

export default function SalesFilterComp({ filters, onFilterChange }) {
  const { theme } = useTheme();

  return (
    <FilterContainer theme={theme}>
      <SalesCategoryComp 
        selectedCategory={filters.category}
        onCategoryChange={(category) => onFilterChange({ category })}
      />
      <SalesPriceFilterComp 
        priceRange={filters.price}
        onPriceChange={(price) => onFilterChange({ price })}
      />
      <SalesConditionFilterComp 
        selectedConditions={filters.condition}
        onConditionChange={(condition) => onFilterChange({ condition })}
      />
      <SalesLocationFilterComp 
        selectedLocation={filters.location}
        onLocationChange={(location) => onFilterChange({ location })}
      />
    </FilterContainer>
  );
}
