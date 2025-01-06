'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { GradientBackground } from '@/styles/GlobalStyles';
import NavMenuComp from '@/shared/navbar/components/NavMenuComp';
import DatingProfileComp from '@/components/dating/profile/components/DatingProfileComp';

export default function DatingProfilePage({ params }) {
  const { theme } = useTheme();

  return (
    <>
      <NavMenuComp />
      <GradientBackground theme={theme}>
        <DatingProfileComp profileId={params.id} />
      </GradientBackground>
    </>
  );
}
