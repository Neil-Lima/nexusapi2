'use client';
import { useState, useEffect } from 'react';
import { api } from '@/api/api';

export const useCommunitiesDetail = (id) => {
  const [community, setCommunity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCommunity = async () => {
      try {
        const response = await api.get(`/communities/${id}`);
        setCommunity(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Erro ao carregar comunidade');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCommunity();
    }
  }, [id]);

  const handleJoin = async () => {
    try {
      const response = await api.post(`/communities/${id}/join`);
      setCommunity(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Erro ao participar da comunidade');
    }
  };

  const handleLeave = async () => {
    try {
      const response = await api.post(`/communities/${id}/leave`);
      setCommunity(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Erro ao sair da comunidade');
    }
  };

  return {
    community,
    loading,
    error,
    handleJoin,
    handleLeave
  };
};
