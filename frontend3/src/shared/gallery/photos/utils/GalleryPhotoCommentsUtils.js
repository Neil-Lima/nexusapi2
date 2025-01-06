'use client';
import { useState, useCallback, useEffect } from 'react';

const mockComments = [
  {
    id: 1,
    author: 'João Silva',
    userAvatar: 'https://i.pravatar.cc/150?img=1',
    text: 'Que foto incrível! Adorei as cores.',
    date: '2024-01-15T10:30:00',
    likes: 12,
    isLiked: false
  },
  {
    id: 2,
    author: 'Maria Santos',
    userAvatar: 'https://i.pravatar.cc/150?img=5',
    text: 'Composição perfeita! Qual câmera você usou?',
    date: '2024-01-15T11:15:00',
    likes: 8,
    isLiked: false
  },
  {
    id: 3,
    author: 'Pedro Costa',
    userAvatar: 'https://i.pravatar.cc/150?img=3',
    text: 'Simplesmente fantástico!',
    date: '2024-01-15T12:00:00',
    likes: 15,
    isLiked: false
  }
];

export const useGalleryPhotoComments = (photoId) => {
  const [comments, setComments] = useState(mockComments);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = useCallback((e) => {
    setNewComment(e.target.value);
  }, []);

  const handleSubmitComment = useCallback(() => {
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      author: 'Usuário Atual',
      userAvatar: 'https://i.pravatar.cc/150?img=8',
      text: newComment,
      date: new Date().toISOString(),
      likes: 0,
      isLiked: false
    };

    setComments(prev => [comment, ...prev]);
    setNewComment('');
  }, [newComment]);

  const handleLikeComment = useCallback((commentId) => {
    setComments(prev => prev.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
          isLiked: !comment.isLiked
        };
      }
      return comment;
    }));
  }, []);

  return {
    comments,
    newComment,
    handleCommentChange,
    handleSubmitComment,
    handleLikeComment
  };
};
