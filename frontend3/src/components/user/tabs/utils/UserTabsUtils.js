'use client';
import { useState } from 'react';
import { 
  faNewspaper, 
  faImage, 
  faUserFriends, 
  faInfo 
} from '@fortawesome/free-solid-svg-icons';

export const useUserTabs = (isOwnProfile) => {
  const [activeTab, setActiveTab] = useState('posts');

  const tabs = [
    { id: 'posts', label: 'Posts', icon: faNewspaper },
    { id: 'media', label: 'Mídia', icon: faImage },
    { id: 'connections', label: 'Conexões', icon: faUserFriends },
    { id: 'about', label: 'Sobre', icon: faInfo }
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return {
    activeTab,
    tabs,
    handleTabChange
  };
};
