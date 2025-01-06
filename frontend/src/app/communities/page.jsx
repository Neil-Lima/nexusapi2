// page.jsx
'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { GradientBackground } from '@/styles/GlobalStyles';
import CommunitiesMainComp from '@/components/communities/main/CommunitiesMainComp';
import NavMenuComp from '@/shared/navbar/components/NavMenuComp';

export default function CommunitiesPage() {
  const { theme } = useTheme();
  return (
    <>
      <NavMenuComp />
      <GradientBackground theme={theme}>
        <CommunitiesMainComp />
      </GradientBackground>
    </>
  );
}
