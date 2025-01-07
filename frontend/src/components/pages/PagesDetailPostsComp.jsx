'use client'
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import CreatePostComp from '@/shared/post/create-card/components/CreatePostComp';
import PostCardComp from '@/shared/post/card/components/PostCardComp';
import { usePostCard } from '@/shared/post/card/utils/PostCardUtils';

export default function PagesDetailPostsComp() {
  const { theme } = useTheme();
  const { posts = [] } = usePostCard();
  const [visiblePosts, setVisiblePosts] = useState(3);

  return (
    <div>
      <CreatePostComp />
      <PostCardComp />
      {visiblePosts < posts.length && (
        <div className="text-center mt-3">
          <Button onClick={() => setVisiblePosts(prev => prev + 3)} variant="outline-light">
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}
