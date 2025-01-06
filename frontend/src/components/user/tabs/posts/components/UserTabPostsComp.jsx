'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { PostsContainer } from '../styles/UserTabPostsStyles';
import { useUserTabPosts } from '../utils/UserTabPostsUtils';
import PostCardComp from '@/shared/post/card/components/PostCardComp';
import CreatePostComp from '@/shared/post/create-card/components/CreatePostComp';

function UserTabPostsComp({ userId, isOwnProfile }) {
  const { theme } = useTheme();
  const { posts, isLoading } = useUserTabPosts(userId);

  if (isLoading) return <div>Carregando posts...</div>;

  return (
    <PostsContainer theme={theme}>
      {isOwnProfile && <CreatePostComp />}
      {posts?.map(post => (
        <PostCardComp key={post._id} post={post} />
      ))}
    </PostsContainer>
  );
}

export default UserTabPostsComp;
