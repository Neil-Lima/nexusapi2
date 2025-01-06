'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  TabsContainer,
  TabButton,
  TabContent
} from '../styles/UserTabsStyles';
import { useUserTabs } from '../utils/UserTabsUtils';
import UserTabPostsComp from '../posts/components/UserTabPostsComp';
import UserTabMediaComp from '../media/components/UserTabMediaComp';
import UserTabConnectionsComp from '../connections/components/UserTabConnectionsComp';
import UserTabAboutComp from '../about/components/UserTabAboutComp';


function UserTabsComp({ user, isOwnProfile, loggedUser }) {
  const { theme } = useTheme();
  const { activeTab, tabs, handleTabChange } = useUserTabs(isOwnProfile);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'posts':
        return <UserTabPostsComp userId={user?._id} isOwnProfile={isOwnProfile} />;
      case 'media':
        return <UserTabMediaComp userId={user?._id} isOwnProfile={isOwnProfile} />;
      case 'connections':
        return <UserTabConnectionsComp userId={user?._id} isOwnProfile={isOwnProfile} />;
      case 'about':
        return <UserTabAboutComp user={user} isOwnProfile={isOwnProfile} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <TabsContainer theme={theme}>
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            active={activeTab === tab.id}
            onClick={() => handleTabChange(tab.id)}
            theme={theme}
          >
            <FontAwesomeIcon icon={tab.icon} />
            {tab.label}
          </TabButton>
        ))}
      </TabsContainer>
      <TabContent>
        {renderTabContent()}
      </TabContent>
    </div>
  );
}

export default UserTabsComp;
