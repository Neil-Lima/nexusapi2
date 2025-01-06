'use client'
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { StatsContainer, Stat, StatNumber, StatLabel } from './styles/PagesStyle';

export default function PagesDetailStatsComp({ pageData }) {
  const { theme } = useTheme();

  return (
    <StatsContainer theme={theme}>
      <Stat>
        <StatNumber theme={theme}>{pageData.followers.toLocaleString()}</StatNumber>
        <StatLabel theme={theme}>Followers</StatLabel>
      </Stat>
      <Stat>
        <StatNumber theme={theme}>{pageData.likes.toLocaleString()}</StatNumber>
        <StatLabel theme={theme}>Likes</StatLabel>
      </Stat>
      <Stat>
        <StatNumber theme={theme}>{pageData.posts.toLocaleString()}</StatNumber>
        <StatLabel theme={theme}>Posts</StatLabel>
      </Stat>
    </StatsContainer>
  );
}
