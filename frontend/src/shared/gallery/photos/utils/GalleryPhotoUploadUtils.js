'use client';
import { useState, useCallback } from 'react';
import axios from 'axios';

export const useGalleryPhotoUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const processFile = async (file) => {
    const formData = new FormData();
    formData.append('photo', file);

    try {
      const response = await axios.post('/api/photos/upload', formData, {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percentCompleted);
        }
      });
      return response.data;
    } catch (err) {
      console.error('Upload error:', err);
      throw err;
    }
  };

  const handleDrop = useCallback(async (e) => {
    e.preventDefault();
    setIsDragging(false);
    setUploading(true);

    try {
      const files = Array.from(e.dataTransfer.files);
      const uploadPromises = files.map(processFile);
      const results = await Promise.all(uploadPromises);
      return results;
    } catch (err) {
      console.error('Drop error:', err);
      throw err;
    } finally {
      setUploading(false);
      setProgress(0);
    }
  }, []);

  const handleFileSelect = useCallback(async (e) => {
    setUploading(true);
    try {
      const files = Array.from(e.target.files);
      const uploadPromises = files.map(processFile);
      const results = await Promise.all(uploadPromises);
      return results;
    } catch (err) {
      console.error('File select error:', err);
      throw err;
    } finally {
      setUploading(false);
      setProgress(0);
    }
  }, []);

  return {
    uploading,
    progress,
    isDragging,
    handleDrop,
    handleFileSelect,
    setIsDragging
  };
};
