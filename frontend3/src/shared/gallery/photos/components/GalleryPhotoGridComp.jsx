'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { 
  GridContainer, 
  PhotoCard, 
  PhotoImage, 
  PhotoOverlay, 
  PhotoInfo, 
  PhotoActions, 
  ActionButton,
  PaginationContainer,
  PageButton 
} from '../styles/GalleryPhotoGridStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import { useGalleryPhotoGrid } from '../utils/GalleryPhotoGridUtils';

const GalleryPhotoGridComp = ({ onPhotoSelect, onLike, onComment, onShare }) => {
  const { theme } = useTheme();
  const { 
    photos, 
    loading, 
    error, 
    currentPage, 
    totalPages, 
    handlePageChange 
  } = useGalleryPhotoGrid();

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar as imagens: {error}</div>;

  return (
    <>
      <GridContainer>
        {photos?.map((photo) => (
          <PhotoCard key={photo.id} theme={theme}>
            <PhotoImage 
              src={photo.url} 
              alt={photo.caption} 
              onClick={() => onPhotoSelect(photo)}
            />
            <PhotoOverlay theme={theme}>
              <PhotoInfo theme={theme}>
                <h4>{photo.caption}</h4>
                <p>{new Date(photo.date).toLocaleDateString()}</p>
              </PhotoInfo>
              <PhotoActions>
                <ActionButton onClick={() => onLike(photo.id)} theme={theme}>
                  <FontAwesomeIcon icon={faHeart} />
                  <span>{photo.likes}</span>
                </ActionButton>
                <ActionButton onClick={() => onComment(photo.id)} theme={theme}>
                  <FontAwesomeIcon icon={faComment} />
                  <span>{photo.comments?.length || 0}</span>
                </ActionButton>
                <ActionButton onClick={() => onShare(photo.id)} theme={theme}>
                  <FontAwesomeIcon icon={faShare} />
                  <span>{photo.shares}</span>
                </ActionButton>
              </PhotoActions>
            </PhotoOverlay>
          </PhotoCard>
        ))}
      </GridContainer>

      <PaginationContainer theme={theme}>
        <PageButton 
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          theme={theme}
        >
          Anterior
        </PageButton>
        {[...Array(totalPages)].map((_, index) => (
          <PageButton
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            $isActive={currentPage === index + 1}
            theme={theme}
          >
            {index + 1}
          </PageButton>
        ))}
        <PageButton 
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          theme={theme}
        >
          Próxima
        </PageButton>
      </PaginationContainer>
    </>
  );
};

export default GalleryPhotoGridComp;
