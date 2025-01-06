'use client';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/api/api';

export const useUserTabPosts = (userId) => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['userPosts', userId],
    queryFn: async () => {
      const response = await api.get(`/posts/user/${userId}`);
      return response.data;
    },
    enabled: !!userId
  });

  return {
    posts,
    isLoading
  };
};
