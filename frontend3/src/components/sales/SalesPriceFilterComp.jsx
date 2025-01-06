'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { PriceFilterContainer, RangeSlider, PriceInputs } from './styles/SalesStyle';
import { Form } from 'react-bootstrap';

export default function SalesPriceFilterComp({ priceRange, onPriceChange }) {
  const { theme } = useTheme();

  return (
    <PriceFilterContainer theme={theme}>
      <h6>Faixa de Preço</h6>
      <PriceInputs>
        <Form.Control
          type="number"
          value={priceRange.min}
          onChange={(e) => onPriceChange({ ...priceRange, min: Number(e.target.value) })}
          placeholder="Min"
        />
        <span>até</span>
        <Form.Control
          type="number"
          value={priceRange.max}
          onChange={(e) => onPriceChange({ ...priceRange, max: Number(e.target.value) })}
          placeholder="Max"
        />
      </PriceInputs>
      <RangeSlider
        type="range"
        min={0}
        max={10000}
        value={priceRange.max}
        onChange={(e) => onPriceChange({ ...priceRange, max: Number(e.target.value) })}
        theme={theme}
      />
    </PriceFilterContainer>
  );
}
