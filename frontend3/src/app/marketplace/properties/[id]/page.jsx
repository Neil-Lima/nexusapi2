'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { GradientBackground } from '@/styles/GlobalStyles';
import NavMenuComp from '@/shared/navbar/components/NavMenuComp';
import MarketplacePropertyListDetailComp from '@/components/marketplace/components/property/MarketplacePropertyListDetailComp';

export default function PropertyDetailPage({ params }) {
  const { theme } = useTheme();

  return (
    <>
      <NavMenuComp />
      <GradientBackground theme={theme}>
        <MarketplacePropertyListDetailComp propertyId={params.id} />
      </GradientBackground>
    </>
  );
}
