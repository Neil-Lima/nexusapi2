'use client';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/api/api';

export const useUserTabConnections = (userId) => {
  const { data: connections, isLoading: isLoadingConnections } = useQuery({
    queryKey: ['userConnections', userId],
    queryFn: async () => {
      const response = await api.get(`/users/${userId}/friends`);
      return response.data;
    },
    enabled: !!userId
  });

  const { data: suggestions, isLoading: isLoadingSuggestions } = useQuery({
    queryKey: ['friendSuggestions'],
    queryFn: async () => {
      const response = await api.get('/users/friends/suggestions');
      return response.data;
    },
    enabled: !!userId
  });

  return {
    connections,
    suggestions,
    isLoading: isLoadingConnections || isLoadingSuggestions
  };
};
