'use client';
import { useState, useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/api/api';

export const useUserHeader = (user, isOwnProfile) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableFields, setEditableFields] = useState({
    nome: user?.nome || '',
    location: user?.location || '',
    work: user?.work || '',
    education: user?.education || '',
    bio: user?.bio || ''
  });
  const [coverImage, setCoverImage] = useState(user?.coverImage);
  const [profileImage, setProfileImage] = useState(user?.profileImage);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (user) {
      setEditableFields({
        nome: user.nome || '',
        location: user.location || '',
        work: user.work || '',
        education: user.education || '',
        bio: user.bio || ''
      });
      setCoverImage(user.coverImage);
      setProfileImage(user.profileImage);
    }
  }, [user]);

  const updateProfileMutation = useMutation({
    mutationFn: async (data) => {
      const formData = new FormData();
      Object.keys(data).forEach(key => {
        if (data[key]) formData.append(key, data[key]);
      });
      
      const response = await api.patch(`/users/${user._id}`, formData);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['userData']);
      queryClient.invalidateQueries(['userProfile']);
      setIsEditing(false);
    }
  });

  const handleFieldChange = (field, value) => {
    setEditableFields(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = async (event, type) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'cover') {
          setCoverImage(reader.result);
        } else {
          setProfileImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = (type) => {
    if (isOwnProfile) {
      const inputId = type === 'cover' ? 'coverUpload' : 'profileUpload';
      document.getElementById(inputId).click();
    }
  };

  const handleSaveChanges = () => {
    const formData = new FormData();
    Object.keys(editableFields).forEach(key => {
      formData.append(key, editableFields[key]);
    });

    if (profileImage && profileImage !== user.profileImage) {
      formData.append('profileImage', profileImage);
    }
    if (coverImage && coverImage !== user.coverImage) {
      formData.append('coverImage', coverImage);
    }

    updateProfileMutation.mutate(formData);
  };

  return {
    isEditing,
    setIsEditing,
    editableFields,
    handleFieldChange,
    coverImage,
    profileImage,
    handleImageUpload,
    handleSaveChanges,
    handleImageClick,
    isUpdating: updateProfileMutation.isLoading
  };
};
