'use client';
import { useState, useCallback } from 'react';
import axios from 'axios';

export const useGalleryPhotoCard = (photo) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(photo?.likes || 0);
  const [shares, setShares] = useState(photo?.shares || 0);

  const handleLike = useCallback(async () => {
    try {
      const response = await axios.post(`/api/photos/${photo.id}/like`);
      setLikes(response.data.likes);
      setIsLiked(true);
    } catch (err) {
      console.error('Erro ao curtir:', err);
    }
  }, [photo.id]);

  const handleComment = useCallback(async (comment) => {
    try {
      const response = await axios.post(`/api/photos/${photo.id}/comments`, {
        text: comment
      });
      return response.data;
    } catch (err) {
      console.error('Erro ao comentar:', err);
      throw err;
    }
  }, [photo.id]);

  const handleShare = useCallback(async (platform) => {
    try {
      const shareUrl = photo.url;
      const shareText = encodeURIComponent(`Confira esta foto: ${photo.caption}`);

      switch(platform) {
        case 'facebook':
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`);
          break;
        case 'twitter':
          window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`);
          break;
        case 'whatsapp':
          window.open(`https://api.whatsapp.com/send?text=${shareText} ${shareUrl}`);
          break;
        default:
          await navigator.clipboard.writeText(`${photo.caption} ${shareUrl}`);
      }
      
      setShares(prev => prev + 1);
    } catch (err) {
      console.error('Erro ao compartilhar:', err);
    }
  }, [photo]);

  const handleDownload = useCallback(async () => {
    try {
      const response = await fetch(photo.url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `photo-${photo.id}.jpg`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Erro ao baixar:', err);
    }
  }, [photo]);

  return {
    isLiked,
    likes,
    shares,
    handleLike,
    handleComment,
    handleShare,
    handleDownload
  };
};
