'use client';
import { useState, useEffect } from 'react';
import { api } from '@/api/api';

export const useCommunitiesRelated = (communityId) => {
  const [relatedCommunities, setRelatedCommunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRelatedCommunities = async () => {
      try {
        const response = await api.get(`/communities`);
        const filtered = response.data
          .filter(community => community._id !== communityId)
          .slice(0, 3);
        setRelatedCommunities(filtered);
      } catch (err) {
        setError(err.response?.data?.message || 'Erro ao carregar comunidades relacionadas');
      } finally {
        setLoading(false);
      }
    };

    if (communityId) {
      fetchRelatedCommunities();
    }
  }, [communityId]);

  return {
    relatedCommunities,
    loading,
    error
  };
};
