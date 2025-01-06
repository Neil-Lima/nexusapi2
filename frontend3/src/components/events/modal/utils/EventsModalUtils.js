'use client';
import { useState } from 'react';

export const useEventsModal = () => {
  const [relatedEvents] = useState([
    {
      id: 1,
      title: 'Workshop de Fotografia',
      location: 'São Paulo, SP',
      image: 'https://picsum.photos/200/120?random=1'
    },
    {
      id: 2,
      title: 'Festival de Música',
      location: 'Rio de Janeiro, RJ',
      image: 'https://picsum.photos/200/120?random=2'
    },
    {
      id: 3,
      title: 'Conferência Tech',
      location: 'Belo Horizonte, MG',
      image: 'https://picsum.photos/200/120?random=3'
    }
  ]);

  const handleInterest = (eventId) => {
    console.log('Interesse registrado no evento:', eventId);
  };

  const handleShare = (eventId) => {
    console.log('Compartilhar evento:', eventId);
  };

  const handleBuyTicket = () => {
    console.log('Redirecionando para compra de ingresso');
  };

  return {
    relatedEvents,
    handleInterest,
    handleShare,
    handleBuyTicket
  };
};
