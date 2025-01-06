'use client';
import { useState, useCallback } from 'react';
import axios from 'axios';

export const useGalleryPhotoOrganizer = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAlbums = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/albums');
      setAlbums(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAlbum = useCallback(async (albumData) => {
    try {
      const response = await axios.post('/api/albums', albumData);
      setAlbums(prev => [...prev, response.data]);
      return response.data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  const handleAddToAlbum = useCallback(async (albumId, photoIds) => {
    try {
      const response = await axios.post(`/api/albums/${albumId}/photos`, {
        photoIds
      });
      setAlbums(prev => prev.map(album => 
        album.id === albumId ? response.data : album
      ));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  const handleRemoveFromAlbum = useCallback(async (albumId, photoId) => {
    try {
      await axios.delete(`/api/albums/${albumId}/photos/${photoId}`);
      setAlbums(prev => prev.map(album => {
        if (album.id === albumId) {
          return {
            ...album,
            photos: album.photos.filter(photo => photo.id !== photoId)
          };
        }
        return album;
      }));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  const handleDeleteAlbum = useCallback(async (albumId) => {
    try {
      await axios.delete(`/api/albums/${albumId}`);
      setAlbums(prev => prev.filter(album => album.id !== albumId));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  return {
    albums,
    loading,
    error,
    fetchAlbums,
    handleCreateAlbum,
    handleAddToAlbum,
    handleRemoveFromAlbum,
    handleDeleteAlbum
  };
};
