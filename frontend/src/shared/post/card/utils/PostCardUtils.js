'use client';
import { useState, useEffect } from 'react';
import { api } from '@/api/api';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const usePostCard = (userId) => {
  const queryClient = useQueryClient();
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [commentText, setCommentText] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [userVote, setUserVote] = useState(null);

  const { data: posts } = useQuery({
    queryKey: ['posts', userId],
    queryFn: async () => {
      const { data } = await api.get(`/posts?userId=${userId}`);
      return data;
    }
  });

  useEffect(() => {
    if (posts && userId) {
      const post = posts.find(p => p._id === posts._id);
      if (post) {
        setIsLiked(post.likes.includes(userId));
        setLikeCount(post.likes.length);
        if (post.poll) {
          const voteIndex = post.poll.options.findIndex(
            option => option.votes.includes(userId)
          );
          setUserVote(voteIndex !== -1 ? voteIndex : null);
        }
      }
    }
  }, [posts, userId]);

  const likeMutation = useMutation({
    mutationFn: async (postId) => {
      const { data } = await api.post(`/posts/${postId}/like`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    }
  });

  const commentMutation = useMutation({
    mutationFn: async ({ postId, content }) => {
      const { data } = await api.post(`/posts/${postId}/comment`, { content });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
      setCommentText('');
    }
  });

  const pollVoteMutation = useMutation({
    mutationFn: async ({ postId, optionIndex }) => {
      const { data } = await api.post(`/posts/${postId}/vote/${optionIndex}`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    }
  });

  const handleLike = (postId) => {
    likeMutation.mutate(postId);
  };

  const handleComment = (postId) => {
    if (!commentText.trim()) return;
    commentMutation.mutate({ postId, content: commentText });
  };

  const handleShare = () => {
    console.log('Compartilhando post');
  };

  const handlePostOptions = () => {
    console.log('Opções do post');
  };

  const handlePollVote = (postId, optionIndex) => {
    pollVoteMutation.mutate({ postId, optionIndex });
  };

  return {
    posts,
    isLiked,
    likeCount,
    commentText,
    setCommentText,
    showComments,
    setShowComments,
    userVote,
    handleLike,
    handleComment,
    handleShare,
    handlePostOptions,
    handlePollVote
  };
};
