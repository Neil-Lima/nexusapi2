'use client'
import React from 'react';
import PagesDetailMainComp from '@/components/pages/PagesDetailMainComp';
import { GradientBackground } from '@/styles/GlobalStyles';
import { useTheme } from '@/context/theme/ThemeContext';
import NavMenuComp from '@/shared/navbar/components/NavMenuComp';

export default function PageDetailPage({ params }) {
  const { theme } = useTheme();
  const id = React.use(params).id;

  return (
    <>
     <NavMenuComp/>  
    <GradientBackground theme={theme}>      
      <PagesDetailMainComp id={id} />
    </GradientBackground>
    </>
   
  );
}
