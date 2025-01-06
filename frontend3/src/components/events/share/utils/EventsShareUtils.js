'use client';
import { useState } from 'react';

export const useEventsShare = (eventId) => {
  const [showCopySuccess, setShowCopySuccess] = useState(false);

  const handleShare = (platform) => {
    const url = `https://seusite.com/events/${eventId}`;
    
    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`);
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${url}`);
        break;
    }
  };

  const handleCopyLink = () => {
    const url = `https://seusite.com/events/${eventId}`;
    navigator.clipboard.writeText(url);
    setShowCopySuccess(true);
    setTimeout(() => setShowCopySuccess(false), 2000);
  };

  return {
    handleShare,
    handleCopyLink,
    showCopySuccess
  };
};
