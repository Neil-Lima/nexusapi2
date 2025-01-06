'use client'
import React, { useState } from 'react';
import { Card, Form, Image } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faVideo, faHeart, faComment, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { StyledCard, StyledButton, PostCard, PostImage, ActionButton } from '../styles/ProfileuserStyle';
import { initialPosts, handlePostAction } from '../utils/ProfileuserUtils';
import PostCardComp from '@/shared/post/card/components/PostCardComp';

export function ProfileuserPostsComp() {
  const { theme } = useTheme();
  const [posts, setPosts] = useState(initialPosts);

  return (
    <>
     <PostCardComp/>
    </>
  );
}
