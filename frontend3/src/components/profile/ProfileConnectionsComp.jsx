'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { TabContent, ConnectionCard, Grid } from './styles/ProfileStyles';
import SuggestionsFriendComp from '@/shared/suggestions/components/SuggestionsFriendComp';

const ProfileConnectionsComp = ({ followers, following }) => {
  const { theme } = useTheme();

  return (
    <TabContent theme={theme}>
      <h3>Followers ({followers.length})</h3>
      <Grid>
        {followers.map((follower) => (
          <ConnectionCard key={follower.id} theme={theme}>
            <img 
              className="connection-avatar" 
              src={follower.avatar} 
              alt={follower.name} 
            />
            <div className="connection-info">
              <div className="connection-name">{follower.name}</div>
              <div className="connection-bio">{follower.bio}</div>
              <div className="connection-meta">
                {follower.mutualConnections} mutual connections
              </div>
            </div>
          </ConnectionCard>
        ))}
      </Grid>

      <h3>Following ({following.length})</h3>
      <Grid>
        {following.map((follow) => (
          <ConnectionCard key={follow.id} theme={theme}>
            <img 
              className="connection-avatar" 
              src={follow.avatar} 
              alt={follow.name} 
            />
            <div className="connection-info">
              <div className="connection-name">{follow.name}</div>
              <div className="connection-bio">{follow.bio}</div>
              <div className="connection-meta">
                {follow.mutualConnections} mutual connections
              </div>
            </div>
          </ConnectionCard>
        ))}
      </Grid>

      <SuggestionsFriendComp />
    </TabContent>
  );
};

export default ProfileConnectionsComp;
