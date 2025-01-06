'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { ProductCard, ProductImage, ProductInfo } from './styles/SalesStyle';
import Link from 'next/link';

export default function SalesProductCardComp({ product }) {
  const { theme } = useTheme();

  return (
    <Link href={`/sales/${product.id}`}>
      <ProductCard theme={theme}>
        <ProductImage src={product.image} alt={product.title} />
        <ProductInfo>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <div className="price">R$ {product.price}</div>
        </ProductInfo>
      </ProductCard>
    </Link>
  );
}
