'use client';
import { useState, useCallback } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export const useGalleryPhoto = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  const [showMoodBoard, setShowMoodBoard] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePhotoSelect = useCallback((photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  }, []);

  const handleLike = useCallback(async (photoId) => {
    // Implementação específica do like
  }, []);

  const handleComment = useCallback(async (photoId, comment) => {
    // Implementação específica do comentário
  }, []);

  const handleShare = useCallback(async (photoId, platform) => {
    // Implementação específica do compartilhamento
  }, []);

  const handleDownload = useCallback(async (photoId) => {
    try {
      const response = await fetch(`/api/photos/${photoId}`);
      const blob = await response.blob();
      saveAs(blob, `photo-${photoId}.jpg`);
    } catch (err) {
      console.error('Erro ao baixar foto:', err);
    }
  }, []);

  const handleBulkDownload = useCallback(async (selectedPhotos) => {
    try {
      setLoading(true);
      const zip = new JSZip();

      for (const photo of selectedPhotos) {
        const response = await fetch(photo.url);
        const blob = await response.blob();
        zip.file(`photo-${photo.id}.jpg`, blob);
      }

      const content = await zip.generateAsync({ type: 'blob' });
      saveAs(content, 'photos.zip');
    } catch (err) {
      console.error('Erro ao baixar fotos em lote:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleColorChange = useCallback((color) => {
    setSelectedColor(color.hex);
  }, []);

  const handleModalClose = useCallback(() => {
    setShowModal(false);
    setSelectedPhoto(null);
  }, []);

  return {
    selectedPhoto,
    showModal,
    showColorPicker,
    selectedColor,
    showMoodBoard,
    loading,
    handlePhotoSelect,
    handleModalClose,
    handleLike,
    handleComment,
    handleShare,
    handleDownload,
    handleBulkDownload,
    handleColorChange,
    setShowModal,
    setShowMoodBoard,
    setShowColorPicker
  };
};
