'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { TabContent } from './styles/ProfileStyles';
import GalleryPhotoGridComp from '@/shared/gallery/photos/components/GalleryPhotoGridComp';
import GalleryVideoGridComp from '@/shared/gallery/videos/grid/GalleryVideoGridComp';
import GalleryVideoModalComp from '@/shared/gallery/videos/modal/GalleryVideoModalComp';
import GalleryVideoStudioComp from '@/shared/gallery/videos/studio/GalleryVideoStudioComp';
import GalleryVideoUploadComp from '@/shared/gallery/videos/upload/GalleryVideoUploadComp';
import { useGalleryVideo } from '@/shared/gallery/videos/utils/GalleryVideoUtils';

const ProfileGalleryComp = ({ photos, videos }) => {
  const { theme } = useTheme();
  const {
    selectedVideo,
    showVideoModal,
    showStudioModal,
    handleVideoSelect,
    handleStudioOpen,
    handleStudioClose,
    handleVideoUpload,
    setShowVideoModal
  } = useGalleryVideo();

  return (
    <TabContent theme={theme}>
      <h3>Photos</h3>
      <GalleryPhotoGridComp photos={photos} />
      
      <h3>Videos</h3>
      <GalleryVideoUploadComp onUpload={handleVideoUpload} />
      <GalleryVideoGridComp 
        videos={videos}
        onVideoSelect={handleVideoSelect}
        onStudioOpen={handleStudioOpen}
      />

      <GalleryVideoModalComp
        show={showVideoModal}
        video={selectedVideo}
        onHide={() => setShowVideoModal(false)}
      />

      <GalleryVideoStudioComp
        show={showStudioModal}
        video={selectedVideo}
        onHide={handleStudioClose}
      />
    </TabContent>
  );
};

export default ProfileGalleryComp;
