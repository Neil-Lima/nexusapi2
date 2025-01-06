'use client';
import { useState, useEffect } from 'react';

export const useMarketplacePropertyGallery = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      url: '/images/property/1.jpg',
      thumbnail: '/images/property/thumb-1.jpg',
      description: 'Vista da Sala',
      details: 'Sala ampla com iluminação natural',
      category: 'internal',
      date: '2024-03-15'
    },
    {
      id: 2,
      url: '/images/property/2.jpg',
      thumbnail: '/images/property/thumb-2.jpg',
      description: 'Fachada',
      details: 'Vista frontal do imóvel',
      category: 'external',
      date: '2024-03-15'
    },
    {
      id: 3,
      url: '/images/property/3.jpg',
      thumbnail: '/images/property/thumb-3.jpg',
      description: 'Vista Aérea',
      details: 'Vista panorâmica do condomínio',
      category: 'aerial',
      date: '2024-03-15'
    }
  ]);

  const [currentImage, setCurrentImage] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [filters, setFilters] = useState([
    { id: 'internal', label: 'Internas', active: true },
    { id: 'external', label: 'Externas', active: true },
    { id: 'aerial', label: 'Aéreas', active: true }
  ]);

  useEffect(() => {
    loadGalleryData();
  }, []);

  const loadGalleryData = async () => {
    // Implementar carregamento de dados da API
  };

  const handleImageClick = (imageId) => {
    const selected = images.find(img => img.id === imageId);
    setCurrentImage(selected);
    setIsFullscreen(true);
  };

  const handleFullscreenClose = () => {
    setIsFullscreen(false);
    setCurrentImage(null);
  };

  const handlePrevious = () => {
    const currentIndex = images.findIndex(img => img.id === currentImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = images.findIndex(img => img.id === currentImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  };

  const handleFilterChange = (filterId) => {
    setFilters(prevFilters => 
      prevFilters.map(filter => 
        filter.id === filterId 
          ? { ...filter, active: !filter.active }
          : filter
      )
    );
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = currentImage.url;
    link.download = `property-image-${currentImage.id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return {
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
  };
};

