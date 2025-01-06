'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faMapMarker, 
  faCalendarWeek, 
  faCircle, 
  faUsers, 
  faHeart 
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import { useEventsTabs } from '../utils/EventsTabsUtils';
import {
  TabsContainer,
  TabsList,
  TabItem,
  TabLink,
  TabIcon,
  TabLabel
} from '../styles/EventsTabsStyles';

export default function EventsTabsComp({ activeTab, onTabChange }) {
  const { theme } = useTheme();
  const { tabs } = useEventsTabs();

  return (
    <TabsContainer theme={theme}>
      <TabsList>
        {tabs.map((tab) => (
          <TabItem key={tab.key}>
            <TabLink
              onClick={() => onTabChange(tab.key)}
              $isActive={activeTab === tab.key}
              theme={theme}
            >
              <TabIcon>
                <FontAwesomeIcon icon={tab.icon} />
              </TabIcon>
              <TabLabel>{tab.label}</TabLabel>
            </TabLink>
          </TabItem>
        ))}
      </TabsList>
    </TabsContainer>
  );
}
