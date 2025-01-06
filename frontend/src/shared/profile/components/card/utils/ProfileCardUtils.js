'use client';
import { api } from '@/api/api';
import { useQuery } from '@tanstack/react-query';

export const useProfileData = () => {
  const { data: userData, isLoading } = useQuery({
    queryKey: ['userData'],
    queryFn: async () => {
      const response = await api.get('/users/me');
      console.log('Dados do usuário:', response.data);
      return response.data;
    }
  });

  return {
    name: userData ? `${userData.nome} ${userData.sobrenome}` : 'Carregando...',
    imageUrl: userData?.profileImage || '/default_profile.jpg',
    coverUrl: userData?.coverImage || '/default_cover.jpg',
    isLoading
  };
};
