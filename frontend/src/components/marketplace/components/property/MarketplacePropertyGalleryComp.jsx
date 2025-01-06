'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { GradientBackground } from '@/styles/GlobalStyles';
import {
  GalleryHeader,
  GalleryGrid,
  ImageCard,
  FullscreenView,
  ThumbnailStrip,
  Controls,
  FilterSection
} from '../../styles/property/MarketplacePropertyGalleryStyles';
import { useMarketplacePropertyGallery } from '../../utils/property/MarketplacePropertyGalleryUtils';

function MarketplacePropertyGalleryComp() {
  const { theme } = useTheme();
  const {
    images,
    currentImage,
    isFullscreen,
    filters,
    handleImageClick,
    handleFullscreenClose,
    handlePrevious,
    handleNext,
    handleFilterChange,
    handleDownload
  } = useMarketplacePropertyGallery();

  return (
    <GradientBackground theme={theme}>
      <GalleryHeader theme={theme}>
        <h2>Galeria do Imóvel</h2>
        <div className="view-options">
          <button onClick={() => handleFilterChange('all')}>Todas</button>
          <button onClick={() => handleFilterChange('internal')}>Internas</button>
          <button onClick={() => handleFilterChange('external')}>Externas</button>
          <button onClick={() => handleFilterChange('aerial')}>Aéreas</button>
        </div>
      </GalleryHeader>

      <FilterSection theme={theme}>
        {filters.map((filter) => (
          <div key={filter.id} className="filter-item">
            <input
              type="checkbox"
              id={filter.id}
              checked={filter.active}
              onChange={() => handleFilterChange(filter.id)}
            />
            <label htmlFor={filter.id}>{filter.label}</label>
          </div>
        ))}
      </FilterSection>

      <GalleryGrid theme={theme}>
        {images.map((image) => (
          <ImageCard 
            key={image.id}
            onClick={() => handleImageClick(image.id)}
            theme={theme}
          >
            <img src={image.url} alt={image.description} />
            <div className="image-info">
              <span className="category">{image.category}</span>
              <span className="date">{image.date}</span>
            </div>
          </ImageCard>
        ))}
      </GalleryGrid>

      {isFullscreen && (
        <FullscreenView theme={theme}>
          <div className="main-image">
            <img src={currentImage.url} alt={currentImage.description} />
          </div>

          <div className="image-details">
            <h3>{currentImage.description}</h3>
            <p>{currentImage.details}</p>
            <button onClick={handleDownload}>Download</button>
          </div>

          <ThumbnailStrip theme={theme}>
            {images.map((image) => (
              <div 
                key={image.id}
                className={`thumbnail ${currentImage.id === image.id ? 'active' : ''}`}
                onClick={() => handleImageClick(image.id)}
              >
                <img src={image.thumbnail} alt={image.description} />
              </div>
            ))}
          </ThumbnailStrip>

          <Controls theme={theme}>
            <button onClick={handlePrevious}>Anterior</button>
            <button onClick={handleFullscreenClose}>Fechar</button>
            <button onClick={handleNext}>Próxima</button>
          </Controls>
        </FullscreenView>
      )}
    </GradientBackground>
  );
}

export default MarketplacePropertyGalleryComp;
