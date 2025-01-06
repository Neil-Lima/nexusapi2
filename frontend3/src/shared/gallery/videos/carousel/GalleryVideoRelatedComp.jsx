'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { Carousel } from 'react-bootstrap';
import { RelatedVideosContainer, RelatedVideoItem } from '../styles/GalleryVideoStyles';

const GalleryVideoRelatedComp = ({ relatedVideos }) => {
  const { theme } = useTheme();

  return (
    <RelatedVideosContainer theme={theme}>
      <h3>Related Videos</h3>
      <Carousel>
        {relatedVideos?.map((video, index) => (
          <Carousel.Item key={video.id}>
            <RelatedVideoItem theme={theme}>
              <img src={video.thumbnail} alt={video.title} />
              <div className="video-info">
                <h4>{video.title}</h4>
                <p>{video.views} views</p>
              </div>
            </RelatedVideoItem>
          </Carousel.Item>
        ))}
      </Carousel>
    </RelatedVideosContainer>
  );
};

export default GalleryVideoRelatedComp;
