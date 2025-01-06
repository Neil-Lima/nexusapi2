'use client'
import React from 'react';
import PagesMainComp from '@/components/pages/PagesMainComp';
import { GradientBackground } from '@/styles/GlobalStyles';
import { useTheme } from '@/context/theme/ThemeContext';

export default function PagesPage() {
  const { theme } = useTheme();
  return (

    <GradientBackground theme={theme}>     
    <NavMenuComp/>  
      <PagesMainComp />
    </GradientBackground>
  );
}
