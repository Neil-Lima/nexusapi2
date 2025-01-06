'use client';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const initialPhotos = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  url: `https://picsum.photos/seed/${index + 1}/800/600`,
  caption: `Foto ${index + 1}`,
  date: new Date().toISOString(),
  likes: Math.floor(Math.random() * 100),
  comments: Array.from({ length: Math.floor(Math.random() * 5) }, (_, i) => ({
    id: i + 1,
    author: `User ${i + 1}`,
    text: `Comentário ${i + 1}`,
    date: new Date().toISOString(),
    likes: Math.floor(Math.random() * 10)
  })),
  shares: Math.floor(Math.random() * 50),
  views: Math.floor(Math.random() * 200),
  tags: ['nature', 'landscape', 'photography'].slice(0, Math.floor(Math.random() * 3) + 1)
}));

export const useGalleryPhotoGrid = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage] = useState(12);
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState('date');

  const fetchPhotos = useCallback(async () => {
    setLoading(true);
    try {
      // Simulating API call
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ data: initialPhotos });
        }, 500);
      });

      let filteredPhotos = response.data;

      // Apply tag filters
      if (selectedTags.length > 0) {
        filteredPhotos = filteredPhotos.filter(photo =>
          selectedTags.some(tag => photo.tags.includes(tag))
        );
      }

      // Apply sorting
      filteredPhotos.sort((a, b) => {
        switch (sortBy) {
          case 'likes':
            return b.likes - a.likes;
          case 'views':
            return b.views - a.views;
          case 'comments':
            return b.comments.length - a.comments.length;
          default:
            return new Date(b.date) - new Date(a.date);
        }
      });

      setPhotos(filteredPhotos);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar as fotos');
      console.error('Error fetching photos:', err);
    } finally {
      setLoading(false);
    }
  }, [selectedTags, sortBy]);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);
  const totalPages = Math.ceil(photos.length / photosPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTagSelect = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
    setCurrentPage(1);
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
    setCurrentPage(1);
  };

  return {
    photos: currentPhotos,
    loading,
    error,
    currentPage,
    totalPages,
    selectedTags,
    sortBy,
    handlePageChange,
    handleTagSelect,
    handleSortChange,
    refreshPhotos: fetchPhotos
  };
};
