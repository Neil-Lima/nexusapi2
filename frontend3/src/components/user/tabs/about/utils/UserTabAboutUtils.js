'use client';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/api/api';

export const useUserTabAbout = (user, isOwnProfile) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    description: user?.description || '',
    interests: user?.interests || [],
    privacy: user?.privacy || {}
  });
  
  const queryClient = useQueryClient();

  const updateProfileMutation = useMutation({
    mutationFn: async (data) => {
      const response = await api.patch(`/users/${user._id}`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['userData']);
      queryClient.invalidateQueries(['userProfile']);
      setIsEditing(false);
    }
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePrivacyChange = (section, value) => {
    setFormData(prev => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [section]: value
      }
    }));
  };

  const handleSave = () => {
    updateProfileMutation.mutate(formData);
  };

  return {
    isEditing,
    setIsEditing,
    formData,
    handleInputChange,
    handlePrivacyChange,
    handleSave,
    isUpdating: updateProfileMutation.isLoading
  };
};
