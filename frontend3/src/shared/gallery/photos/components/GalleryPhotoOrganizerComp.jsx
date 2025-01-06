'use client';
import React from 'react';
import { OrganizerContainer, AlbumGrid } from '../styles/GalleryPhotoOrganizerStyles';
import { useGalleryPhotoOrganizer } from '../utils/GalleryPhotoOrganizerUtils';

const GalleryPhotoOrganizerComp = () => {
  const { albums, handleCreateAlbum, handleAddToAlbum } = useGalleryPhotoOrganizer();

  return (
    <OrganizerContainer>
      <button onClick={handleCreateAlbum}>Criar Novo Álbum</button>
      <AlbumGrid>
        {albums.map(album => (
          <div key={album.id} className="album-card">
            <img src={album.coverUrl} alt={album.name} />
            <h4>{album.name}</h4>
            <p>{album.photoCount} fotos</p>
            <button onClick={() => handleAddToAlbum(album.id)}>
              Adicionar Fotos
            </button>
          </div>
        ))}
      </AlbumGrid>
    </OrganizerContainer>
  );
};

export default GalleryPhotoOrganizerComp;
