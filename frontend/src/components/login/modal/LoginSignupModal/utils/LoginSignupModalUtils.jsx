'use client';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { api } from '@/api/api';

export const useSignupModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [resultModalContent, setResultModalContent] = useState({
    title: '',
    message: ''
  });

  const signupMutation = useMutation({
    mutationFn: async (userData) => {
      const formData = {
        ...userData,
        profileImage: userData.profileImage || null,
        coverImage: userData.coverImage || null
      };
      
      const { data } = await api.post('/users', formData);
      return data;
    },
    onSuccess: () => {
      setShowModal(false);
      setResultModalContent({
        title: 'Sucesso!',
        message: 'Cadastro realizado com sucesso! Você já pode fazer login.'
      });
      setShowResultModal(true);
    },
    onError: (error) => {
      setResultModalContent({
        title: 'Erro no Cadastro',
        message: error.response?.data?.message || 'Erro ao realizar cadastro'
      });
      setShowResultModal(true);
    }
  });

  const handleSignupSubmit = (event, profileImage, coverImage) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    const userData = {
      nome: formData.get('nome'),
      sobrenome: formData.get('sobrenome'),
      email: formData.get('email'),
      senha: formData.get('senha'),
      pais: formData.get('pais'),
      estado: formData.get('estado'),
      cidade: formData.get('cidade'),
      dataNascimento: `${formData.get('ano')}-${String(formData.get('mes')).padStart(2, '0')}-${String(formData.get('dia')).padStart(2, '0')}`,
      genero: formData.get('genero'),
      profileImage: profileImage,
      coverImage: coverImage
    };

    signupMutation.mutate(userData);
  };

  return {
    showModal,
    setShowModal,
    showResultModal,
    setShowResultModal,
    resultModalContent,
    handleSignupSubmit
  };
};
