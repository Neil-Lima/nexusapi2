'use client'
import React from 'react';
import { ProfileuserPostsComp } from '../components/ProfileuserPostsComp';
import { ProfileuserAboutComp } from '../components/ProfileuserAboutComp';
import { ProfileuserFriendsComp } from '../components/ProfileuserFriendsComp';
import { ProfileuserPhotosComp } from '../components/ProfileuserPhotosComp';
import { ProfileuserVideosComp } from '../components/ProfileuserVideosComp';

export const initialPosts = [
  { id: 1, user: 'John Doe', userImage: 'https://picsum.photos/50/50?random=1', content: 'Just had an amazing day at the beach! 🏖️', image: 'https://picsum.photos/400/300?random=1', likes: 150, comments: 45, shares: 20 },
  { id: 2, user: 'Jane Smith', userImage: 'https://picsum.photos/50/50?random=2', content: 'Excited to start my new job tomorrow! 🎉', likes: 200, comments: 60, shares: 30 },
  { id: 3, user: 'John Doe', userImage: 'https://picsum.photos/50/50?random=1', content: 'Check out this delicious meal I cooked! 🍝', image: 'https://picsum.photos/400/300?random=3', likes: 180, comments: 55, shares: 25 },
];

export const handlePostAction = (postId, action, posts, setPosts) => {
  setPosts(posts.map(post => {
    if (post.id === postId) {
      return { ...post, [action]: post[action] + 1 };
    }
    return post;
  }));
};

export const renderContent = (activeTab, theme, posts, setPosts, showAllFriends, setShowAllFriends) => {
  switch (activeTab) {
    case 'posts':
      return <ProfileuserPostsComp posts={posts} setPosts={setPosts} theme={theme} />;
    case 'about':
      return <ProfileuserAboutComp theme={theme} />;
    case 'friends':
      return <ProfileuserFriendsComp theme={theme} showAllFriends={showAllFriends} setShowAllFriends={setShowAllFriends} />;
    case 'photos':
      return <ProfileuserPhotosComp theme={theme} />;
    case 'videos':
      return <ProfileuserVideosComp theme={theme} />;
    default:
      return null;
  }
};

export const allFriends = [
  'Alice Johnson', 
  'Bob Smith', 
  'Carol Williams', 
  'David Brown', 
  'Eva Davis', 
  'Frank Miller', 
  'Grace Lee', 
  'Henry Wilson', 
  'Ivy Chen', 
  'Jack Taylor'
];

export const interests = [
  { icon: 'faBook', text: 'Literatura' },
  { icon: 'faMusic', text: 'Música Indie' },
  { icon: 'faPlane', text: 'Viagens' },
  { icon: 'faUtensils', text: 'Gastronomia' },
  { icon: 'faImages', text: 'Fotografia' }
];

export const userInfo = {
  name: 'John Doe',
  bio: 'Designer gráfico apaixonado por criar visuais impactantes e contar histórias através da arte.',
  location: 'São Paulo, Brasil',
  profession: 'Designer Gráfico na ArtCorp',
  education: 'Design Gráfico, Universidade XYZ',
  email: 'johndoe@email.com',
  phone: '+55 11 98765-4321',
  birthday: '15 de março'
};

export const statistics = {
  connections: '500+ conexões',
  photos: '200+ fotos',
  videos: '20+ vídeos'
};
