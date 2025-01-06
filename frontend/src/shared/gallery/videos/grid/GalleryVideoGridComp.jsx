'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faEye, faClock, faEdit } from '@fortawesome/free-solid-svg-icons';
import { VideoGrid, VideoItem, VideoOverlay, VideoInfo, VideoStats, UserInfo, StudioButton } from '../styles/GalleryVideoStyles';
import { formatDuration, formatViews, formatTimeAgo } from '../utils/GalleryVideoUtils';

const GalleryVideoGridComp = ({ videos, onVideoSelect, onStudioOpen }) => {
  const { theme } = useTheme();

  return (
    <VideoGrid>
      {videos.map((video) => (
        <VideoItem key={video.id} theme={theme}>
          <div className="video-thumbnail" onClick={() => onVideoSelect(video)}>
            <img src={video.thumbnail} alt={video.title} />
            <VideoOverlay>
              <FontAwesomeIcon icon={faPlay} />
              <span className="duration">{formatDuration(video.duration)}</span>
            </VideoOverlay>
          </div>
          <VideoInfo>
            <h3>{video.title}</h3>
            <VideoStats>
              <span><FontAwesomeIcon icon={faEye} /> {formatViews(video.views)}</span>
              <span><FontAwesomeIcon icon={faClock} /> {formatTimeAgo(video.createdAt)}</span>
            </VideoStats>
            <UserInfo>
              <img src={video.user.avatar} alt={video.user.name} />
              <span>{video.user.name}</span>
            </UserInfo>
            <StudioButton 
              theme={theme}
              onClick={(e) => {
                e.stopPropagation();
                onStudioOpen(video);
              }}
            >
              <FontAwesomeIcon icon={faEdit} /> Studio
            </StudioButton>
          </VideoInfo>
        </VideoItem>
      ))}
    </VideoGrid>
  );
};

export default GalleryVideoGridComp;
