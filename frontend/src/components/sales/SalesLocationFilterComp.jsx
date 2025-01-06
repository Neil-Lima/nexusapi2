'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { LocationContainer, LocationSelect } from './styles/SalesStyle';
import { locations } from './utils/SalesUtils';

export default function SalesLocationFilterComp({ selectedLocation, onLocationChange }) {
  const { theme } = useTheme();

  return (
    <LocationContainer theme={theme}>
      <h6>Location</h6>
      <LocationSelect
        value={selectedLocation || ''}
        onChange={(e) => onLocationChange(e.target.value)}
        theme={theme}
      >
        <option value="">All locations</option>
        {locations.map(location => (
          <option key={location.value} value={location.value}>
            {location.label}
          </option>
        ))}
      </LocationSelect>
    </LocationContainer>
  );
}
