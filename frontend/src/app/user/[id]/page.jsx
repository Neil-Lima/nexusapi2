'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { useTheme } from '@/context/theme/ThemeContext';
import { GradientBackground } from '@/styles/GlobalStyles';
import UserMainComp from '@/components/user/main/components/UserMainComp';
import NavMenuComp from '@/shared/navbar/components/NavMenuComp';

export const dynamic = 'force-dynamic'

export default function UserProfilePage() {
  const { theme } = useTheme();
  const params = useParams();
  const userId = params.id;

  return (
    <>
    <NavMenuComp/>
     <GradientBackground theme={theme}>
      <UserMainComp userId={userId} />
    </GradientBackground>
    </>
   
  );
}
