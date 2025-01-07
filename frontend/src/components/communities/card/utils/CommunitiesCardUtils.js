'use client';
import { useState } from 'react';
import { api } from '@/api/api';

export const useCommunitiesCard = () => {
  const [participatingCommunities, setParticipatingCommunities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleJoinCommunity = async (communityId) => {
    setLoading(true);
    setError(null);

    try {
      await api.post(`/communities/${communityId}/join`);
      setParticipatingCommunities(prev => [...prev, communityId]);
    } catch (err) {
      setError(err.response?.data?.message || 'Erro ao participar da comunidade');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleLeaveCommunity = async (communityId) => {
    setLoading(true);
    setError(null);

    try {
      await api.post(`/communities/${communityId}/leave`);
      setParticipatingCommunities(prev => prev.filter(id => id !== communityId));
    } catch (err) {
      setError(err.response?.data?.message || 'Erro ao sair da comunidade');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const isParticipating = (communityId) => {
    return participatingCommunities.includes(communityId);
  };

  return {
    participatingCommunities,
    loading,
    error,
    handleJoinCommunity,
    handleLeaveCommunity,
    isParticipating
  };
};
