'use client';
import { useState, useCallback } from 'react';
import axios from 'axios';

export const useGalleryPhotoEditor = () => {
  const [filters, setFilters] = useState([
    { id: 'normal', name: 'Normal' },
    { id: 'grayscale', name: 'Preto e Branco' },
    { id: 'sepia', name: 'Sépia' },
    { id: 'vintage', name: 'Vintage' },
    { id: 'blur', name: 'Desfoque' }
  ]);

  const [adjustments, setAdjustments] = useState({
    brightness: 100,
    contrast: 100,
    saturation: 100,
    blur: 0
  });

  const [activeFilter, setActiveFilter] = useState('normal');
  const [editedImage, setEditedImage] = useState(null);

  const handleFilterChange = useCallback(async (filterId, photoId) => {
    try {
      const response = await axios.post(`/api/photos/${photoId}/filter`, {
        filter: filterId
      });
      setActiveFilter(filterId);
      setEditedImage(response.data.url);
    } catch (err) {
      console.error('Filter error:', err);
      throw err;
    }
  }, []);

  const handleAdjustment = useCallback(async (type, value, photoId) => {
    try {
      setAdjustments(prev => ({
        ...prev,
        [type]: value
      }));

      const response = await axios.post(`/api/photos/${photoId}/adjust`, {
        type,
        value
      });
      setEditedImage(response.data.url);
    } catch (err) {
      console.error('Adjustment error:', err);
      throw err;
    }
  }, []);

  const saveEdits = useCallback(async (photoId) => {
    try {
      const response = await axios.post(`/api/photos/${photoId}/save`, {
        filter: activeFilter,
        adjustments
      });
      return response.data;
    } catch (err) {
      console.error('Save error:', err);
      throw err;
    }
  }, [activeFilter, adjustments]);

  return {
    filters,
    adjustments,
    activeFilter,
    editedImage,
    handleFilterChange,
    handleAdjustment,
    saveEdits
  };
};
