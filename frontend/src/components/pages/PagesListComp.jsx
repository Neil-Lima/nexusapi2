'use client'
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { GridView, ListView } from './styles/PagesStyle';
import PagesGridCardComp from './PagesGridCardComp';
import PagesListCardComp from './PagesListCardComp';

export default function PagesListComp({ pages, viewMode }) {
  const { theme } = useTheme();

  return viewMode === 'grid' ? (
    <GridView theme={theme}>
      {pages.map(page => (
        <PagesGridCardComp key={page.id} page={page} />
      ))}
    </GridView>
  ) : (
    <ListView theme={theme}>
      {pages.map(page => (
        <PagesListCardComp key={page.id} page={page} />
      ))}
    </ListView>
  );
}
