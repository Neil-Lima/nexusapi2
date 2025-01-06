'use client';
import React from 'react';
import { Container } from 'react-bootstrap';
import { ThemeProvider } from '@/context/theme/ThemeContext';
import MarketplaceMainComp from '@/components/marketplace/components/MarketplaceMainComp';

function MarketplacePage() {
  return (
    <ThemeProvider>
      <Container fluid className="p-0">
        <MarketplaceMainComp />
      </Container>
    </ThemeProvider>
  );
}

export default MarketplacePage;
