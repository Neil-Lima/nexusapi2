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

  const processImage = async (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(file);
    });
  };

  const createPostMutation = useMutation({
    mutationFn: async (postData) => {
      const { data } = await api.post('/posts', postData);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
      resetForm();
    }
  });

  const handleMediaUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        console.error('Arquivo muito grande. Máximo 5MB');
        return;
      }
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
    try {
      let mediaBase64 = null;
      let mediaType = null;

      if (selectedMedia) {
        mediaBase64 = await processImage(selectedMedia);
        mediaType = selectedMedia.type.split('/')[0];
      }

      const postData = {
        content: postText,
        media: mediaBase64,
        mediaType: mediaType,
        pollOptions: showPollCreator ? pollOptions.filter(option => option.trim()).map(option => ({
          option: option
        })) : undefined
      };

      await createPostMutation.mutateAsync(postData);
    } catch (error) {
      console.error('Erro ao criar post:', error);
    } finally {
      setIsSubmitting(false);
    }
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
