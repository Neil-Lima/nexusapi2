'use client';
import React, { useState } from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCut, faArrowLeft, faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { 
  EditControls, 
  TimelineControl, 
  ClipControl,
  EditButton,
  TimeMarker,
  TimelineWrapper
} from '../styles/GalleryVideoStyles';

const GalleryVideoEditComp = ({ video }) => {
  const { theme } = useTheme();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(video?.duration || 0);

  return (
    <EditControls theme={theme}>
      <TimelineWrapper>
        <TimelineControl theme={theme}>
          <div className="timeline">
            <div 
              className="progress" 
              style={{width: `${(currentTime/duration) * 100}%`}}
            />
            <div className="cursor" />
          </div>
          <div className="markers">
            <TimeMarker>{formatTime(0)}</TimeMarker>
            <TimeMarker>{formatTime(duration)}</TimeMarker>
          </div>
        </TimelineControl>
      </TimelineWrapper>

      <ClipControl>
        <EditButton theme={theme}>
          <FontAwesomeIcon icon={faCut} />
          <span>Split</span>
        </EditButton>
        <EditButton theme={theme}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Trim Start</span>
        </EditButton>
        <EditButton theme={theme}>
          <FontAwesomeIcon icon={faArrowRight} />
          <span>Trim End</span>
        </EditButton>
        <EditButton theme={theme} danger>
          <FontAwesomeIcon icon={faTrash} />
          <span>Delete</span>
        </EditButton>
      </ClipControl>
    </EditControls>
  );
};

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export default GalleryVideoEditComp;
