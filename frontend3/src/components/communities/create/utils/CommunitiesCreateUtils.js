// CommunitiesCreateUtils.js
'use client';
import { useState } from 'react';

export const useCommunitiesCreate = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    image: null,
    privacy: 'public'
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
    setFormData(prev => ({
      ...prev,
      image: file
    }));
  };

  const handlePrivacyChange = (privacy) => {
    setFormData(prev => ({
      ...prev,
      privacy
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return {
    formData,
    handleInputChange,
    handleImageUpload,
    handlePrivacyChange,
    handleSubmit
  };
};
