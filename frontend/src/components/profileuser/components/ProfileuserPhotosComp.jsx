import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { StyledCard, PhotoGrid, PhotoItem } from '../styles/ProfileuserStyle';
import GalleryPhotoGridComp from '@/shared/gallery/photos/components/GalleryPhotoGridComp';

export function ProfileuserPhotosComp() {
  return (
   <>
   <GalleryPhotoGridComp/>
   </>
  );
}
