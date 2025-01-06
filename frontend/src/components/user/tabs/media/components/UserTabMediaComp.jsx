'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  MediaContainer,
  MediaGrid,
  MediaItem
} from '../styles/UserTabMediaStyles';
import { useUserTabMedia } from '../utils/UserTabMediaUtils';

function UserTabMediaComp({ userId, isOwnProfile }) {
  const { theme } = useTheme();
  const { media, isLoading } = useUserTabMedia(userId);

  if (isLoading) return <div>Carregando mídia...</div>;

  return (
    <MediaContainer theme={theme}>
      <MediaGrid>
        {media?.map((item, index) => (
          <MediaItem key={index} theme={theme}>
            <img src={item.url} alt={item.description} />
          </MediaItem>
        ))}
      </MediaGrid>
    </MediaContainer>
  );
}

export default UserTabMediaComp;
