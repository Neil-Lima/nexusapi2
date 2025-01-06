'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { GradientBackground } from '@/styles/GlobalStyles';
import { MainContainer, GallerySection } from '../styles/GalleryPhotoMainStyles';
import { useGalleryPhoto } from '../utils/GalleryPhotoUtils';

import ProfileCardComp from '@/shared/profile/components/card/components/ProfileCardComp';
import MenuListComp from '@/shared/profile/components/MenuListComp';
import GalleryPhotoActionBarComp from './GalleryPhotoActionBarComp';
import GalleryPhotoSearchComp from './GalleryPhotoSearchComp';
import GalleryPhotoFilterComp from './GalleryPhotoFilterComp';
import GalleryPhotoGridComp from './GalleryPhotoGridComp';
import GalleryPhotoModalComp from './GalleryPhotoModalComp';
import ProfileStatsCardComp from '@/shared/profile/components/ProfileStatsCardComp';
import NavMenuComp from '@/shared/navbar/components/NavMenuComp';

const GalleryPhotoMainComp = () => {
  const { theme } = useTheme();
  const { 
    selectedPhoto, 
    showModal,
    handlePhotoSelect, 
    handleModalClose,
    handleLike,
    handleComment,
    handleShare,
    handleDownload
  } = useGalleryPhoto();

  return (
    <>   
    <GradientBackground theme={theme}> 
      <MainContainer>
        <Container fluid>
          <Row>
          <Col lg={3}>
           <ProfileCardComp theme={theme}/>
           <ProfileStatsCardComp theme={theme}/>
           <MenuListComp theme={theme}/> 
         </Col>
            <Col lg={9}>
              <GallerySection theme={theme}>
                <GalleryPhotoActionBarComp theme={theme} />
                <GalleryPhotoSearchComp theme={theme} />
                <GalleryPhotoFilterComp theme={theme} />
                
                <GalleryPhotoGridComp 
                  theme={theme}
                  onPhotoSelect={handlePhotoSelect}
                  onLike={handleLike}
                  onComment={handleComment}
                  onShare={handleShare}
                  onDownload={handleDownload}
                />

                <GalleryPhotoModalComp 
                  theme={theme}
                  show={showModal}
                  photo={selectedPhoto}
                  onHide={handleModalClose}
                  onLike={handleLike}
                  onComment={handleComment}
                  onShare={handleShare}
                  onDownload={handleDownload}
                />
              </GallerySection>
            </Col>
          </Row>
        </Container>
      </MainContainer>
    </GradientBackground>
    </>
 
  );
};

export default GalleryPhotoMainComp;
