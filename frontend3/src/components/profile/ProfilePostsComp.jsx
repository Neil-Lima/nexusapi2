'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import CreatePostComp from '@/shared/post/create-card/components/CreatePostComp';
import PostCardComp from '@/shared/post/card/components/PostCardComp';
import LoadMoreComp from '@/shared/loadmore/LoadMoreComp';
import { TabContent } from './styles/ProfileStyles';

const ProfilePostsComp = ({ posts }) => {
  const { theme } = useTheme();

  return (
    <TabContent theme={theme}>
      <CreatePostComp />
      {posts.map((post) => (
        <PostCardComp key={post.id} post={post} />
      ))}
      <LoadMoreComp />
    </TabContent>
  );
};

export default ProfilePostsComp;
