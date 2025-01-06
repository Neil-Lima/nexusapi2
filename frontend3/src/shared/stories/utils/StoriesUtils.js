'use client';
import { useState, useRef } from 'react';

export const useStories = () => {
  const storiesRef = useRef(null);
  const [currentStory, setCurrentStory] = useState(null);
  const [isCreatingStory, setIsCreatingStory] = useState(false);
  const [storyViewerOpen, setStoryViewerOpen] = useState(false);

  const stories = [
    { 
      id: 1, 
      user: 'João Silva', 
      image: 'https://picsum.photos/200/300?random=1', 
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      timestamp: '2h',
      views: 245
    },
    { 
      id: 2, 
      user: 'Maria Santos', 
      image: 'https://picsum.photos/200/300?random=2', 
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      timestamp: '3h',
      views: 182
    },
    { 
      id: 3, 
      user: 'Pedro Costa', 
      image: 'https://picsum.photos/200/300?random=3', 
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      timestamp: '4h',
      views: 367
    },
    { 
      id: 4, 
      user: 'Ana Lima', 
      image: 'https://picsum.photos/200/300?random=4', 
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      timestamp: '5h',
      views: 421
    },
    { 
      id: 5, 
      user: 'Carlos Santos', 
      image: 'https://picsum.photos/200/300?random=5', 
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
      timestamp: '6h',
      views: 198
    },
    { 
      id: 6, 
      user: 'Julia Pereira', 
      image: 'https://picsum.photos/200/300?random=6', 
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
      timestamp: '7h',
      views: 276
    }
  ];

  const handleScroll = (direction) => {
    const container = storiesRef.current;
    const scrollAmount = 340;
    if (container) {
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const handleStoryClick = (storyId) => {
    setCurrentStory(storyId);
    setStoryViewerOpen(true);
    console.log('Story clicked:', storyId);
  };

  const handleCreateStory = () => {
    setIsCreatingStory(true);
    console.log('Create story clicked');
  };

  const handleCloseStoryViewer = () => {
    setStoryViewerOpen(false);
    setCurrentStory(null);
  };

  const handleStoryView = (storyId) => {
    console.log('Story viewed:', storyId);
  };

  const handleStoryReaction = (storyId, reaction) => {
    console.log('Story reaction:', storyId, reaction);
  };

  return {
    storiesRef,
    stories,
    currentStory,
    isCreatingStory,
    storyViewerOpen,
    handleScroll,
    handleStoryClick,
    handleCreateStory,
    handleCloseStoryViewer,
    handleStoryView,
    handleStoryReaction
  };
};
