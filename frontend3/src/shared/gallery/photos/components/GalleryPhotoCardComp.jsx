'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare, faDownload } from '@fortawesome/free-solid-svg-icons';
import { 
  PhotoCard, 
  PhotoImage, 
  PhotoOverlay, 
  PhotoInfo, 
  PhotoActions, 
  ActionButton 
} from '../styles/GalleryPhotoCardStyles';

const GalleryPhotoCardComp = ({ photo, onSelect, onLike, onComment, onShare, onDownload }) => {
  return (
    <PhotoCard>
      <PhotoImage 
        src={photo.url} 
        alt={photo.caption} 
        onClick={() => onSelect(photo)}
      />
      <PhotoOverlay>
        <PhotoInfo>
          <h4>{photo.caption}</h4>
          <p>{new Date(photo.date).toLocaleDateString()}</p>
        </PhotoInfo>
        <PhotoActions>
          <ActionButton onClick={() => onLike(photo.id)}>
            <FontAwesomeIcon icon={faHeart} />
            <span>{photo.likes}</span>
          </ActionButton>
          <ActionButton onClick={() => onComment(photo.id)}>
            <FontAwesomeIcon icon={faComment} />
            <span>{photo.comments?.length || 0}</span>
          </ActionButton>
          <ActionButton onClick={() => onShare(photo.id)}>
            <FontAwesomeIcon icon={faShare} />
            <span>{photo.shares}</span>
          </ActionButton>
          <ActionButton onClick={() => onDownload(photo.id)}>
            <FontAwesomeIcon icon={faDownload} />
          </ActionButton>
        </PhotoActions>
      </PhotoOverlay>
    </PhotoCard>
  );
};

export default GalleryPhotoCardComp;
