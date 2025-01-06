'use client';
import { useState } from 'react';

export const useMessagesMain = () => {
  const [activeContact, setActiveContact] = useState(null);
  const [isVideoCallActive, setIsVideoCallActive] = useState(false);

  const handleEndCall = () => {
    setIsVideoCallActive(false);
  };

  return {
    activeContact,
    setActiveContact,
    isVideoCallActive,
    setIsVideoCallActive,
    handleEndCall
  };
};
