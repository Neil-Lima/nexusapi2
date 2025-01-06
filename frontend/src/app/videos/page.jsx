'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { GradientBackground } from '@/styles/GlobalStyles';
import GalleryVideoGridComp from '@/shared/gallery/videos/grid/GalleryVideoGridComp';
import GalleryVideoModalComp from '@/shared/gallery/videos/modal/GalleryVideoModalComp';
import GalleryVideoUploadComp from '@/shared/gallery/videos/upload/GalleryVideoUploadComp';
import GalleryVideoTabsComp from '@/shared/gallery/videos/tabs/GalleryVideoTabsComp';
import GalleryVideoStudioComp from '@/shared/gallery/videos/studio/GalleryVideoStudioComp';
import ProfileCardComp from '@/shared/profile/components/card/components/ProfileCardComp';
import { useGalleryVideo } from '@/shared/gallery/videos/utils/GalleryVideoUtils';
import NavMenuComp from '@/shared/navbar/components/NavMenuComp';
import MenuListComp from '@/shared/profile/components/MenuListComp';

export default function VideoGalleryPage() {
  const { theme } = useTheme();
  const {
    videos,
    selectedVideo,
    showVideoModal,
    showStudioModal,
    activeTab,
    handleVideoSelect,
    handleTabChange,
    handleVideoUpload,
    handleStudioOpen,
    handleStudioClose,
    setShowVideoModal
  } = useGalleryVideo();

  return (
  <>
  <NavMenuComp />
  <GradientBackground theme={theme}>
      <Container>
        <Row>
          <Col lg={3}>
            <ProfileCardComp />
            <MenuListComp />
          </Col>
          <Col lg={9}>
            <GalleryVideoTabsComp 
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />
            
            <GalleryVideoUploadComp 
              onUpload={handleVideoUpload}
            />
            
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
          </Col>
        </Row>
      </Container>
    </GradientBackground>
  </>
    
  );
}
