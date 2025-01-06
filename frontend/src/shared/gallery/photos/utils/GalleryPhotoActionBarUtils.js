'use client';
import { useCallback, useState } from 'react';
import axios from 'axios';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export const useGalleryPhotoActionBar = () => {
  const [downloading, setDownloading] = useState(false);
  const [creating, setCreating] = useState(false);

  const handleDownload = useCallback(async (selectedPhotos) => {
    try {
      setDownloading(true);
      const zip = new JSZip();
      
      for (const photo of selectedPhotos) {
        const response = await axios.get(photo.url, { responseType: 'blob' });
        zip.file(`photo-${photo.id}.jpg`, response.data);
      }
      
      const content = await zip.generateAsync({ type: 'blob' });
      saveAs(content, 'photos.zip');
    } catch (err) {
      console.error('Download error:', err);
    } finally {
      setDownloading(false);
    }
  }, []);

  const handleViewPhotos = useCallback(async () => {
    try {
      const response = await axios.get('/api/photos/user');
      return response.data;
    } catch (err) {
      console.error('Error fetching photos:', err);
      return [];
    }
  }, []);

  const handleViewAlbums = useCallback(async () => {
    try {
      const response = await axios.get('/api/albums');
      return response.data;
    } catch (err) {
      console.error('Error fetching albums:', err);
      return [];
    }
  }, []);

  const handleCreateAlbum = useCallback(async (albumData) => {
    try {
      setCreating(true);
      const response = await axios.post('/api/albums', albumData);
      return response.data;
    } catch (err) {
      console.error('Error creating album:', err);
      throw err;
    } finally {
      setCreating(false);
    }
  }, []);

  return {
    downloading,
    creating,
    handleDownload,
    handleViewPhotos,
    handleViewAlbums,
    handleCreateAlbum
  };
};
