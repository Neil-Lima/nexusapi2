'use client';
import { useState } from 'react';
import { api } from '@/api/api';

export const useCommunitiesModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleShowModal = () => {
    setError(null);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setError(null);
    setShowModal(false);
  };

  const handleSubmit = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      await api.post('/communities', formData);
      handleCloseModal();
      return true;
    } catch (err) {
      setError(err.response?.data?.message || 'Erro ao criar comunidade');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    showModal,
    loading,
    error,
    handleShowModal,
    handleCloseModal,
    handleSubmit
  };
};
