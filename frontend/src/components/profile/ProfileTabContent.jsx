import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import ProfileAboutComp from './ProfileAboutComp';
import ProfilePostsComp from './ProfilePostsComp';
import ProfileGalleryComp from './ProfileGalleryComp';
import ProfileConnectionsComp from './ProfileConnectionsComp';
import ProfileAchievementsComp from './ProfileAchievementsComp';
import ProfileEventsComp from './ProfileEventsComp';

const ProfileTabContent = ({ activeTab, profileData }) => {
  const { theme } = useTheme();

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <ProfileAboutComp profile={profileData} />;
      case 'posts':
        return <ProfilePostsComp posts={profileData.posts} />;
      case 'gallery':
        return <ProfileGalleryComp photos={profileData.photos} videos={profileData.videos} />;
      case 'connections':
        return <ProfileConnectionsComp connections={profileData.connections} />;
      case 'achievements':
        return <ProfileAchievementsComp achievements={profileData.achievements} />;
      case 'events':
        return <ProfileEventsComp events={profileData.events} />;
      default:
        return null;
    }
  };

  return renderContent();
};

export default ProfileTabContent;
