'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { GradientBackground } from '@/styles/GlobalStyles';
import NavMenuComp from '@/shared/navbar/components/NavMenuComp';
import DatingMainComp from '@/components/dating/main/components/DatingMainComp';

export default function DatingPage() {
  const { theme } = useTheme();

  return (
    <>
      <NavMenuComp />
      <GradientBackground theme={theme}>
        <DatingMainComp />
      </GradientBackground>
    </>
  );
}
