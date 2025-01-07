'use client';
import { useState, useEffect } from 'react';
import { api } from '@/api/api';

export const useCommunitiesMembers = (communityId) => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCommunityMembers = async () => {
      try {
        const response = await api.get(`/communities/${communityId}`);
        const memberDetails = response.data.memberDetails || [];
        setMembers(memberDetails.map(detail => ({
          ...detail.user,
          role: detail.role,
          joinedAt: detail.joinedAt
        })));
      } catch (err) {
        setError(err.response?.data?.message || 'Erro ao carregar membros');
      } finally {
        setLoading(false);
      }
    };

    if (communityId) {
      fetchCommunityMembers();
    }
  }, [communityId]);

  const topMembers = [...members].sort((a, b) => 
    new Date(b.joinedAt) - new Date(a.joinedAt)
  ).slice(0, 5);

  return {
    members,
    topMembers,
    loading,
    error
  };
};
