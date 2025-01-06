'use client';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/api/api';

export const useUserTabMedia = (userId) => {
  const { data: media, isLoading } = useQuery({
    queryKey: ['userMedia', userId],
    queryFn: async () => {
      const response = await api.get(`/users/${userId}/media`);
      return response.data;
    },
    enabled: !!userId
  });

  return {
    media,
    isLoading
  };
};
