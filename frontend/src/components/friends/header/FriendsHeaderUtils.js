import { useState } from 'react';

export const headerConfig = {
  title: 'Friends',
  subtitle: 'Manage your connections',
  mobileBreakpoint: 'lg'
};

export const useHeaderActions = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return {
    isMobileMenuOpen,
    toggleMobileMenu
  };
};
