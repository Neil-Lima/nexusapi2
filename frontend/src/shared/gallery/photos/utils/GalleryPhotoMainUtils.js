'use client';
import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

export const useGalleryPhoto = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  const [showMoodBoard, setShowMoodBoard] = useState(false);
  const [moodBoardItems, setMoodBoardItems] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/photos');
      setPhotos(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePhotoSelect = useCallback((photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
    updatePhotoViews(photo.id);
  }, []);

  const updatePhotoViews = async (photoId) => {
    try {
      await axios.post(`/api/photos/${photoId}/views`);
    } catch (err) {
      console.error('Error updating views:', err);
    }
  };

  const handleModalClose = useCallback(() => {
    setShowModal(false);
    setSelectedPhoto(null);
  }, []);

  const handlePhotoDelete = async (photoId) => {
    try {
      await axios.delete(`/api/photos/${photoId}`);
      setPhotos(photos.filter(photo => photo.id !== photoId));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleColorChange = useCallback((color) => {
    setSelectedColor(color.hex);
  }, []);

  const handleMoodBoardToggle = useCallback(() => {
    setShowMoodBoard(prev => !prev);
  }, []);

  const handleAddToMoodBoard = useCallback((photo) => {
    setMoodBoardItems(prev => [...prev, photo]);
  }, []);

  const handleRemoveFromMoodBoard = useCallback((photoId) => {
    setMoodBoardItems(prev => prev.filter(item => item.id !== photoId));
  }, []);

  const handleDragEnd = useCallback((result) => {
    if (!result.destination) return;

    const items = Array.from(moodBoardItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setMoodBoardItems(items);
  }, [moodBoardItems]);

  const handleLike = useCallback(async (photoId) => {
    try {
      const response = await axios.post(`/api/photos/${photoId}/like`);
      setPhotos(prev => prev.map(photo => 
        photo.id === photoId ? { ...photo, likes: response.data.likes } : photo
      ));
    } catch (err) {
      setError(err.message);
    }
  }, []);

  const handleComment = useCallback(async (photoId, comment) => {
    try {
      const response = await axios.post(`/api/photos/${photoId}/comments`, { text: comment });
      setPhotos(prev => prev.map(photo => 
        photo.id === photoId ? { ...photo, comments: [...photo.comments, response.data] } : photo
      ));
    } catch (err) {
      setError(err.message);
    }
  }, []);

  const handleShare = useCallback(async (photoId) => {
    try {
      const response = await axios.post(`/api/photos/${photoId}/share`);
      setPhotos(prev => prev.map(photo => 
        photo.id === photoId ? { ...photo, shares: response.data.shares } : photo
      ));
    } catch (err) {
      setError(err.message);
    }
  }, []);

  return {
    photos,
    selectedPhoto,
    showModal,
    loading,
    error,
    showColorPicker,
    selectedColor,
    showMoodBoard,
    moodBoardItems,
    handlePhotoSelect,
    handleModalClose,
    handlePhotoDelete,
    handleColorChange,
    handleMoodBoardToggle,
    handleAddToMoodBoard,
    handleRemoveFromMoodBoard,
    handleDragEnd,
    handleLike,
    handleComment,
    handleShare,
    setShowModal,
    setShowColorPicker,
    setShowMoodBoard
  };
};
