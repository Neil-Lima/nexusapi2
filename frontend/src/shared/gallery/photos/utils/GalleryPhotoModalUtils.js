'use client';
import { useState, useCallback } from 'react';
import axios from 'axios';

export const useGalleryPhotoModal = () => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [sharing, setSharing] = useState(false);

  const handleLike = useCallback(async (photoId) => {
    try {
      const response = await axios.post(`/api/photos/${photoId}/like`);
      setLikes(response.data.likes);
      setIsLiked(true);
    } catch (err) {
      console.error('Like error:', err);
    }
  }, []);

  const handleComment = useCallback(async (photoId, comment) => {
    try {
      const response = await axios.post(`/api/photos/${photoId}/comments`, { text: comment });
      setComments(prev => [...prev, response.data]);
      return response.data;
    } catch (err) {
      console.error('Comment error:', err);
      throw err;
    }
  }, []);

  const handleShare = useCallback(async (photoId, platform) => {
    try {
      setSharing(true);
      const response = await axios.post(`/api/photos/${photoId}/share`, { platform });
      const shareUrl = response.data.shareUrl;
      
      switch(platform) {
        case 'facebook':
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`);
          break;
        case 'twitter':
          window.open(`https://twitter.com/intent/tweet?url=${shareUrl}`);
          break;
        case 'whatsapp':
          window.open(`https://api.whatsapp.com/send?text=${shareUrl}`);
          break;
        default:
          navigator.clipboard.writeText(shareUrl);
      }
      
      return shareUrl;
    } catch (err) {
      console.error('Share error:', err);
      throw err;
    } finally {
      setSharing(false);
    }
  }, []);

  const handleDownload = useCallback(async (photoId, quality = 'high') => {
    try {
      const response = await axios.get(`/api/photos/${photoId}/download?quality=${quality}`, {
        responseType: 'blob'
      });
      
      const url = window.URL.createObjectURL(response.data);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `photo-${photoId}.jpg`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download error:', err);
      throw err;
    }
  }, []);

  return {
    likes,
    comments,
    isLiked,
    sharing,
    handleLike,
    handleComment,
    handleShare,
    handleDownload
  };
};
