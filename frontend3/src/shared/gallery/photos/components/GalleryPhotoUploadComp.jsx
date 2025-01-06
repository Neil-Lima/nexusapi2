'use client';
import React from 'react';
import { UploadContainer, DropZone } from '../styles/GalleryPhotoUploadStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { useGalleryPhotoUpload } from '../utils/GalleryPhotoUploadUtils';

const GalleryPhotoUploadComp = () => {
  const { handleDrop, handleFileSelect, isDragging } = useGalleryPhotoUpload();

  return (
    <UploadContainer>
      <DropZone
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        isDragging={isDragging}
      >
        <FontAwesomeIcon icon={faCloudUploadAlt} size="3x" />
        <h4>Arraste suas fotos aqui</h4>
        <p>ou</p>
        <input
          type="file"
          onChange={handleFileSelect}
          accept="image/*"
          multiple
          style={{ display: 'none' }}
          id="fileInput"
        />
        <label htmlFor="fileInput" className="upload-button">
          Selecione os arquivos
        </label>
      </DropZone>
    </UploadContainer>
  );
};

export default GalleryPhotoUploadComp;
