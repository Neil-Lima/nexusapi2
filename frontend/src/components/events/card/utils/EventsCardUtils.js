// EventsCardUtils.js
'use client';
import { useState } from 'react';

export const useEventsCard = () => {
  const [interestedEvents, setInterestedEvents] = useState([]);

  const handleInterest = (eventId) => {
    setInterestedEvents(prev => {
      if (prev.includes(eventId)) {
        return prev.filter(id => id !== eventId);
      }
      return [...prev, eventId];
    });
  };

  return {
    handleInterest
  };
};
