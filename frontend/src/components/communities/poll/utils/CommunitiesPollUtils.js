'use client';
import { useState, useEffect } from 'react';
import { api } from '@/api/api';

export const useCommunitiesPoll = (communityId, topicId) => {
  const [currentPoll, setCurrentPoll] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPoll = async () => {
      try {
        const response = await api.get(`/communities/${communityId}/topics/${topicId}`);
        if (response.data.poll) {
          setCurrentPoll(response.data.poll);
          setHasVoted(response.data.poll.hasVoted);
        }
      } catch (err) {
        setError(err.response?.data?.message || 'Erro ao carregar enquete');
      } finally {
        setLoading(false);
      }
    };

    if (communityId && topicId) {
      fetchPoll();
    }
  }, [communityId, topicId]);

  const handleVote = async (optionId) => {
    try {
      const response = await api.post(`/communities/${communityId}/topics/${topicId}/poll/vote`, {
        optionId
      });
      setCurrentPoll(response.data.poll);
      setHasVoted(true);
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Erro ao votar');
    }
  };

  const getTotalVotes = () => {
    if (!currentPoll) return 0;
    return currentPoll.options.reduce((acc, curr) => acc + (curr.votes?.length || 0), 0);
  };

  return {
    currentPoll,
    hasVoted,
    loading,
    error,
    handleVote,
    getTotalVotes
  };
};
