'use client';
import { useState } from 'react';
import { api } from '@/api/api';
import { useRouter } from 'next/navigation';

export const useCommunitiesCreate = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    privacy: 'public',
    image: null,
    rules: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          image: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrivacyChange = (privacy) => {
    setFormData(prev => ({
      ...prev,
      privacy
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await api.post('/communities', formData);
      router.push(`/communities/${response.data._id}`);
    } catch (err) {
      setError(err.response?.data?.message || 'Erro ao criar comunidade');
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    error,
    handleInputChange,
    handleImageUpload,
    handlePrivacyChange,
    handleSubmit
  };
};
