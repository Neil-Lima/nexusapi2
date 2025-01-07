'use client';
import { useState, useEffect } from 'react';
import { api } from '@/api/api';

export const useCommunitiesGrid = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [communities, setCommunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const response = await api.get('/communities/my-communities');
        setCommunities(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Erro ao carregar comunidades');
      } finally {
        setLoading(false);
      }
    };

    fetchCommunities();
  }, []);

  return {
    viewMode,
    setViewMode,
    communities,
    loading,
    error
  };
};
