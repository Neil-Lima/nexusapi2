'use client';
import { useState, useEffect } from 'react';
import { api } from '@/api/api';

export const useCommunitiesForum = (communityId) => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCommunityTopics = async () => {
      try {
        const response = await api.get(`/communities/${communityId}`);
        setTopics(response.data.topics || []);
      } catch (err) {
        setError(err.response?.data?.message || 'Erro ao carregar tópicos');
      } finally {
        setLoading(false);
      }
    };

    if (communityId) {
      fetchCommunityTopics();
    }
  }, [communityId]);

  const handleCreateTopic = async (title, content) => {
    try {
      const response = await api.post(`/communities/${communityId}/topics`, {
        title,
        content
      });
      setTopics(response.data.topics);
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Erro ao criar tópico');
    }
  };

  const handleLikeTopic = async (topicIndex) => {
    try {
      const response = await api.post(`/communities/${communityId}/topics/${topicIndex}/like`);
      setTopics(response.data.topics);
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Erro ao curtir tópico');
    }
  };

  return {
    topics,
    loading,
    error,
    handleCreateTopic,
    handleLikeTopic
  };
};
