// [id]/page.jsx
'use client';
import React from 'react';
import CommunitiesDetailComp from '@/components/communities/detail/components/CommunitiesDetailComp';
import { useTheme } from '@/context/theme/ThemeContext';
import { GradientBackground } from '@/styles/GlobalStyles';
import NavMenuComp from '@/shared/navbar/components/NavMenuComp';

export default function CommunityDetailPage({ params }) {
  const { theme } = useTheme();
  
  return (
    <>
      <NavMenuComp />
      <GradientBackground theme={theme}>
        <CommunitiesDetailComp id={params.id} />
      </GradientBackground>
    </>
  );
}
