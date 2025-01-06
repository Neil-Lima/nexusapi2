'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { TabContent, AchievementCard, Grid } from './styles/ProfileStyles';

const ProfileAchievementsComp = ({ achievements }) => {
  const { theme } = useTheme();

  return (
    <TabContent theme={theme}>
      <h3>Badges</h3>
      <Grid>
        {achievements.badges.map((badge) => (
          <AchievementCard key={badge.id} theme={theme}>
            <img 
              className="achievement-icon" 
              src={badge.icon} 
              alt={badge.name} 
            />
            <div className="achievement-title">{badge.name}</div>
            <div className="achievement-description">{badge.description}</div>
            <div className="achievement-date">
              Earned on {new Date(badge.dateEarned).toLocaleDateString()}
            </div>
          </AchievementCard>
        ))}
      </Grid>

      <h3>Certificates</h3>
      <Grid>
        {achievements.certificates.map((cert) => (
          <AchievementCard key={cert.id} theme={theme}>
            <img 
              className="achievement-icon" 
              src={cert.icon} 
              alt={cert.name} 
            />
            <div className="achievement-title">{cert.name}</div>
            <div className="achievement-description">
              Issued by {cert.issuer}
            </div>
            <div className="achievement-date">
              Issued on {new Date(cert.date).toLocaleDateString()}
            </div>
          </AchievementCard>
        ))}
      </Grid>
    </TabContent>
  );
};

export default ProfileAchievementsComp;
