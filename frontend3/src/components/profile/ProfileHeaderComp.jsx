'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { ProfileHeader, CoverImage, ProfileAvatar, ProfileInfo, ProfileStats } from './styles/ProfileStyles';
import ProfileActionsComp from './ProfileActionsComp';

const ProfileHeaderComp = ({ profile }) => {
  const { theme } = useTheme();

  return (
    <ProfileHeader>
      <CoverImage src={profile.coverImage} />
      <ProfileAvatar src={profile.avatar} alt={profile.name} roundedCircle />
      <ProfileInfo theme={theme}>
        <h1>{profile.name}</h1>
        <p>{profile.bio}</p>
        <ProfileStats theme={theme}>
          <div className="stat-item">
            <div className="number">{profile.stats.totalPosts}</div>
            <div className="label">Posts</div>
          </div>
          <div className="stat-item">
            <div className="number">{profile.stats.totalFollowers}</div>
            <div className="label">Followers</div>
          </div>
          <div className="stat-item">
            <div className="number">{profile.stats.totalFollowing}</div>
            <div className="label">Following</div>
          </div>
        </ProfileStats>
        <ProfileActionsComp />
      </ProfileInfo>
    </ProfileHeader>
  );
};

export default ProfileHeaderComp;
