'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from '@/context/theme/ThemeContext';
import { GradientBackground } from '@/styles/GlobalStyles';
import NavMenuComp from '@/shared/navbar/components/NavMenuComp';

const UserMainComp = dynamic(() => import('@/components/user/main/components/UserMainComp'), {
  ssr: false,
  loading: () => <p>Carregando...</p>
});

export default function UserPage() {
  const { theme } = useTheme();

  return (
    <>
      <NavMenuComp/>
      <GradientBackground theme={theme}>
        {typeof window !== 'undefined' && <UserMainComp />}
      </GradientBackground>
    </>
  );
}
