'use client';
import { useState } from 'react';
import { api } from '@/api/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  const [postText, setPostText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);
  const [showPollCreator, setShowPollCreator] = useState(false);
  const [pollOptions, setPollOptions] = useState(['', '']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userAvatar, setUserAvatar] = useState('/default_avatar.jpg');

  const createPostMutation = useMutation({
    mutationFn: async (postData) => {
      const formData = new FormData();
      
      // Add basic post content
      formData.append('content', postData.content);
      
      // Handle media upload
      if (postData.media) {
        const reader = new FileReader();
        const mediaPromise = new Promise((resolve) => {
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(postData.media);
        });
        
        const mediaBase64 = await mediaPromise;
        formData.append('media', mediaBase64);
        formData.append('mediaType', postData.media.type.split('/')[0]);
      }
      
      // Handle poll options
      if (postData.pollOptions && postData.pollOptions.length >= 2) {
        formData.append('pollOptions', JSON.stringify(
          postData.pollOptions.map(option => ({ option }))
        ));
      }

      const { data } = await api.post('/posts', formData);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
      resetForm();
    },
    onError: (error) => {
      console.error('Post creation error:', error.response?.data);
    },
    onSettled: () => {
      setIsSubmitting(false);
    }
  });

  const handleMediaUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedMedia(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setMediaPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveMedia = () => {
    setSelectedMedia(null);
    setMediaPreview(null);
  };

  const handleEmojiSelect = (emojiData) => {
    setPostText(prev => prev + emojiData.emoji);
  };

  const togglePollCreator = () => {
    setShowPollCreator(!showPollCreator);
    if (!showPollCreator) {
      setPollOptions(['', '']);
    }
  };

  const handleAddPollOption = () => {
    if (pollOptions.length < 4) {
      setPollOptions([...pollOptions, '']);
    }
  };

  const handleRemovePollOption = (index) => {
    if (pollOptions.length > 2) {
      setPollOptions(pollOptions.filter((_, i) => i !== index));
    }
  };

  const handlePollOptionChange = (index, value) => {
    const newOptions = [...pollOptions];
    newOptions[index] = value;
    setPollOptions(newOptions);
  };

  const resetForm = () => {
    setPostText('');
    setSelectedMedia(null);
    setMediaPreview(null);
    setShowPollCreator(false);
    setPollOptions(['', '']);
    setShowEmojiPicker(false);
  };

  const handleCreatePost = async () => {
    if ((!postText && !selectedMedia && !showPollCreator) || isSubmitting) return;

    setIsSubmitting(true);
    const postData = {
      content: postText,
      media: selectedMedia,
      pollOptions: showPollCreator ? 
        pollOptions
          .filter(option => option.trim())
          .map(option => ({ option: option.trim() })) 
        : undefined
    };

    createPostMutation.mutate(postData);
  };

  return {
    postText,
    setPostText,
    showEmojiPicker,
    setShowEmojiPicker,
    selectedMedia,
    mediaPreview,
    showPollCreator,
    pollOptions,
    handleMediaUpload,
    handleCreatePost,
    handleEmojiSelect,
    handleRemoveMedia,
    handleAddPollOption,
    handleRemovePollOption,
    handlePollOptionChange,
    togglePollCreator,
    isSubmitting,
    userAvatar
  };
};
