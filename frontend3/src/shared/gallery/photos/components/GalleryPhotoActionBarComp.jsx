'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { ActionBarContainer, ActionButton } from '../styles/GalleryPhotoActionBarStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faImages, faFolderOpen, faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { useGalleryPhotoActionBar } from '../utils/GalleryPhotoActionBarUtils';

const GalleryPhotoActionBarComp = () => {
  const { theme } = useTheme();
  const { handleDownload, handleViewPhotos, handleViewAlbums, handleCreateAlbum } = useGalleryPhotoActionBar();

  return (
    <ActionBarContainer theme={theme}>
      <ActionButton onClick={handleDownload} theme={theme}>
        <FontAwesomeIcon icon={faDownload} /> Download
      </ActionButton>
      <ActionButton onClick={handleViewPhotos} theme={theme}>
        <FontAwesomeIcon icon={faImages} /> Suas fotos
      </ActionButton>
      <ActionButton onClick={handleViewAlbums} theme={theme}>
        <FontAwesomeIcon icon={faFolderOpen} /> Seus álbuns
      </ActionButton>
      <ActionButton onClick={handleCreateAlbum} theme={theme}>
        <FontAwesomeIcon icon={faFolderPlus} /> Criar álbum
      </ActionButton>
    </ActionBarContainer>
  );
};

export default GalleryPhotoActionBarComp;
