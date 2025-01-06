'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { TabContainer, TabButton } from '../styles/GalleryVideoStyles';

const GalleryVideoTabsComp = ({ activeTab, onTabChange }) => {
  const { theme } = useTheme();
  
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'live', label: 'Live' },
    { id: 'shows', label: 'Shows' },
    { id: 'saved', label: 'Saved Videos' }
  ];

  return (
    <TabContainer theme={theme}>
      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          active={activeTab === tab.id}
          onClick={() => onTabChange(tab.id)}
          theme={theme}
        >
          {tab.label}
        </TabButton>
      ))}
    </TabContainer>
  );
};

export default GalleryVideoTabsComp;
