'use client';
import { useState, useEffect } from 'react';

export const useNotificationsMain = () => {
  const [unreadCount, setUnreadCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fetchUnreadCount = async () => {
      try {
        // Simulated API call
        setUnreadCount(5); // Example count
      } catch (error) {
        console.error('Erro ao buscar contagem:', error);
      }
    };

    fetchUnreadCount();
  }, []);

  if (!mounted) {
    return { unreadCount: 0 };
  }

  return { unreadCount };
};
