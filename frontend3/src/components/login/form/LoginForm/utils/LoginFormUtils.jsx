'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { api } from '@/api/api';

export const useLoginForm = () => {
  const router = useRouter();
  const [showResultModal, setShowResultModal] = useState(false);
  const [resultModalContent, setResultModalContent] = useState({ title: '', message: '' });

  const loginMutation = useMutation({
    mutationFn: async (credenciais) => {
      const { data } = await api.post('/auth/login', {
        email: credenciais.email,
        senha: credenciais.senha
      });
      return data;
    },
    onSuccess: (data) => {
      localStorage.setItem('token', data.access_token);
      setResultModalContent({
        title: 'Sucesso!',
        message: 'Login realizado com sucesso!'
      });
      setShowResultModal(true);
      setTimeout(() => {
        router.push('/feed');
      }, 2000);
    },
    onError: (erro) => {
      setResultModalContent({
        title: 'Erro no Login',
        message: 'Email ou senha inválidos'
      });
      setShowResultModal(true);
    }
  });

  const handleLoginSubmit = (evento) => {
    evento.preventDefault();
    const formData = new FormData(evento.target);
    
    const credenciais = {
      email: formData.get('email'),
      senha: formData.get('senha')
    };

    loginMutation.mutate(credenciais);
  };

  return {
    handleLoginSubmit,
    isLoading: loginMutation.isLoading,
    showResultModal,
    setShowResultModal,
    resultModalContent
  };
};
