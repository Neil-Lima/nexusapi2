'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import {
    ProfileContainer,
    ProfileImage,
    ProfileInfo,
    ProfileName,
    ProfileRole,
    ProfileStats,
    StatItem
} from '../styles/MarketplaceUserProfileStyles';
import { useMarketplaceUserProfile } from '../utils/MarketplaceUserProfileUtils';

function MarketplaceUserProfileComp() {
    const { theme } = useTheme();
    const { userProfile, profileStats } = useMarketplaceUserProfile();

    return (
        <ProfileContainer theme={theme}>
            <ProfileImage 
                src={userProfile.avatar} 
                alt={userProfile.name} 
                theme={theme} 
            />
            <ProfileInfo theme={theme}>
                <ProfileName theme={theme}>{userProfile.name}</ProfileName>
                <ProfileRole theme={theme}>{userProfile.role}</ProfileRole>
            </ProfileInfo>
            <ProfileStats theme={theme}>
                {profileStats.map((stat, index) => (
                    <StatItem key={index} theme={theme}>
                        <span className="value">{stat.value}</span>
                        <span className="label">{stat.label}</span>
                    </StatItem>
                ))}
            </ProfileStats>
        </ProfileContainer>
    );
}

export default MarketplaceUserProfileComp;
