'use client';
import { useState } from 'react';

export const useDatingStories = () => {
  const [stories] = useState([
    {
      id: 1,
      username: 'Julia Silva',
      avatar: 'https://picsum.photos/200/200?random=1',
      viewed: false
    },
    {
      id: 2,
      username: 'Pedro Santos',
      avatar: 'https://picsum.photos/200/200?random=2',
      viewed: true
    },
    {
      id: 3,
      username: 'Ana Costa',
      avatar: 'https://picsum.photos/200/200?random=3',
      viewed: false
    },
    {
      id: 4,
      username: 'Lucas Oliveira',
      avatar: 'https://picsum.photos/200/200?random=4',
      viewed: true
    },
    {
      id: 5,
      username: 'Mariana Lima',
      avatar: 'https://picsum.photos/200/200?random=5',
      viewed: false
    }
  ]);

  const handleAddStory = () => {
    console.log('Adicionar story');
  };

  const handleViewStory = (storyId) => {
    console.log('Visualizar story:', storyId);
  };

  return {
    stories,
    handleAddStory,
    handleViewStory
  };
};
