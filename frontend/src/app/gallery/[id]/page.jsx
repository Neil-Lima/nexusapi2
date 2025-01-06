// src/app/gallery/[id]/page.jsx
'use client';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { GradientBackground } from '@/components/group/styles/GroupStyles';
import NavMenuComp from '@/shared/navbar/components/NavMenuComp';
import GalleryPhotoModalComp from '@/shared/gallery/photos/components/GalleryPhotoModalComp';
import GalleryCommentsComp from '@/shared/gallery/photos/GalleryCommentsComp';
import GalleryShareComp from '@/shared/gallery/photos/GalleryShareComp';
import { useGalleryPhoto } from '@/shared/gallery/photos/utils/GalleryPhotoUtils';

export default function GalleryPhotoPage({ params }) {
  const { theme } = useTheme();
  const {
    getPhotoById,
    handleLike,
    handleComment,
    handleShare,
    handleDownload,
    comments
  } = useGalleryPhoto();

  const photo = getPhotoById(params.id);

  return (
    <>
      <NavMenuComp />
      <GradientBackground theme={theme}>
        <Container>
          <GalleryPhotoModalComp
            photo={photo}
            handleLike={handleLike}
            handleComment={handleComment}
            handleShare={handleShare}
            handleDownload={handleDownload}
          />
          
          <GalleryCommentsComp 
            comments={comments}
            photoId={params.id}
          />
          
          <GalleryShareComp photoId={params.id} />
        </Container>
      </GradientBackground>
    </>
  );
}
