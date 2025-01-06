'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { ProductGrid } from './styles/SalesStyle';
import SalesProductCardComp from './SalesProductCardComp';

export default function SalesProductGridComp({ products }) {
  const { theme } = useTheme();

  return (
    <ProductGrid theme={theme}>
      {products.map(product => (
        <SalesProductCardComp key={product.id} product={product} />
      ))}
    </ProductGrid>
  );
}
