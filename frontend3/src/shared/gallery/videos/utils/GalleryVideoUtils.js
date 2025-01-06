'use client';
import { useState } from 'react';

export const useGalleryVideo = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Amazing Sunset Timelapse",
      description: "Beautiful sunset captured over 2 hours",
      thumbnail: "https://picsum.photos/300/169?random=1",
      url: "https://example.com/video1.mp4",
      duration: 120,
      views: 1500,
      likes: 230,
      createdAt: "2023-12-01T12:00:00Z",
      privacy: "global",
      user: {
        name: "John Doe",
        avatar: "https://picsum.photos/30/30?random=1"
      },
      comments: [
        {
          id: 1,
          user: "Jane Smith",
          avatar: "https://picsum.photos/30/30?random=2",
          text: "Amazing work!",
          likes: 15,
          replies: []
        }
      ],
      related: [
        {
          id: 2,
          title: "Mountain Sunrise",
          thumbnail: "https://picsum.photos/300/169?random=2",
          views: 2300
        },
        {
          id: 3,
          title: "Ocean Waves",
          thumbnail: "https://picsum.photos/300/169?random=3", 
          views: 1800
        }
      ]
    },
    {
      id: 2,
      title: "Mountain Climbing Adventure",
      description: "Epic journey to the summit",
      thumbnail: "https://picsum.photos/300/169?random=4",
      url: "https://example.com/video2.mp4",
      duration: 480,
      views: 2500,
      likes: 450,
      createdAt: "2023-12-02T15:30:00Z",
      privacy: "personal",
      user: {
        name: "Sarah Wilson",
        avatar: "https://picsum.photos/30/30?random=5"
      },
      comments: [
        {
          id: 2,
          user: "Mike Johnson",
          avatar: "https://picsum.photos/30/30?random=6",
          text: "Incredible footage!",
          likes: 25,
          replies: [
            {
              id: 3,
              user: "Sarah Wilson",
              avatar: "https://picsum.photos/30/30?random=5",
              text: "Thanks Mike!",
              likes: 5
            }
          ]
        }
      ],
      related: [
        {
          id: 4,
          title: "Rock Climbing Basics",
          thumbnail: "https://picsum.photos/300/169?random=7",
          views: 3400
        }
      ]
    }
  ]);

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showStudioModal, setShowStudioModal] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [filters, setFilters] = useState({
    brightness: 100,
    contrast: 100,
    saturation: 100,
    hue: 0
  });
  const [subtitles, setSubtitles] = useState([]);
  const [editHistory, setEditHistory] = useState([]);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    setShowVideoModal(true);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

   const handleVideoUpload = (file) => {
    // Simulando upload com dados fictícios
    return {
      id: Date.now(),
      title: file.name,
      url: 'https://example.com/video.mp4',
      thumbnail: 'https://picsum.photos/300/169?random=' + Math.random(),
      duration: 120,
      views: 0,
      likes: 0,
      createdAt: new Date().toISOString(),
      user: {
        name: 'Usuário Atual',
        avatar: 'https://picsum.photos/30/30?random=' + Math.random()
      },
      comments: [],
      related: []
    };
  };

  const handleStudioOpen = (video) => {
    setSelectedVideo(video);
    setShowStudioModal(true);
  };

  const handleStudioClose = () => {
    setShowStudioModal(false);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const handleAddSubtitle = (subtitle) => {
    setSubtitles(prev => [...prev, subtitle]);
  };

  const handleEditVideo = (edit) => {
    setEditHistory(prev => [...prev, edit]);
  };

  const handleLikeVideo = (videoId) => {
    setVideos(prev => prev.map(video => 
      video.id === videoId 
        ? {...video, likes: video.likes + 1}
        : video
    ));
  };

  const handleAddComment = (videoId, comment) => {
    setVideos(prev => prev.map(video => 
      video.id === videoId 
        ? {
            ...video, 
            comments: [...video.comments, {
              id: Date.now(),
              ...comment,
              likes: 0,
              replies: []
            }]
          }
        : video
    ));
  };

  const handleLikeComment = (videoId, commentId) => {
    setVideos(prev => prev.map(video => 
      video.id === videoId 
        ? {
            ...video,
            comments: video.comments.map(comment =>
              comment.id === commentId
                ? {...comment, likes: comment.likes + 1}
                : comment
            )
          }
        : video
    ));
  };

  const handleReplyToComment = (videoId, commentId, reply) => {
    setVideos(prev => prev.map(video => 
      video.id === videoId 
        ? {
            ...video,
            comments: video.comments.map(comment =>
              comment.id === commentId
                ? {
                    ...comment,
                    replies: [...comment.replies, {
                      id: Date.now(),
                      ...reply,
                      likes: 0
                    }]
                  }
                : comment
            )
          }
        : video
    ));
  };

  const handlePrivacyChange = (videoId, privacy) => {
    setVideos(prev => prev.map(video =>
      video.id === videoId
        ? {...video, privacy}
        : video
    ));
  };

  return {
    videos,
    selectedVideo,
    showVideoModal,
    showStudioModal,
    activeTab,
    filters,
    subtitles,
    editHistory,
    handleVideoSelect,
    handleTabChange,
    handleVideoUpload,
    handleStudioOpen,
    handleStudioClose,
    handleFilterChange,
    handleAddSubtitle,
    handleEditVideo,
    handleLikeVideo,
    handleAddComment,
    handleLikeComment,
    handleReplyToComment,
    handlePrivacyChange,
    setShowVideoModal
  };
};

export const formatDuration = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export const formatViews = (views) => {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M`;
  }
  if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K`;
  }
  return views.toString();
};

export const formatTimeAgo = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  if (seconds < 60) return 'just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  if (seconds < 2592000) return `${Math.floor(seconds / 86400)}d ago`;
  return date.toLocaleDateString();
};

export const applyVideoFilters = (filters) => {
  return `brightness(${filters.brightness}%) contrast(${filters.contrast}%) saturate(${filters.saturation}%) hue-rotate(${filters.hue}deg)`;
};

export const generateThumbnail = (videoFile) => {
  return new Promise((resolve) => {
    const video = document.createElement('video');
    video.src = URL.createObjectURL(videoFile);
    video.addEventListener('loadeddata', () => {
      video.currentTime = 1;
    });
    video.addEventListener('seeked', () => {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL('image/jpeg'));
    });
  });
};

export const validateVideo = (file) => {
  const validTypes = ['video/mp4', 'video/webm', 'video/ogg'];
  const maxSize = 100 * 1024 * 1024; // 100MB

  if (!validTypes.includes(file.type)) {
    throw new Error('Invalid video format. Please use MP4, WebM, or OGG.');
  }

  if (file.size > maxSize) {
    throw new Error('Video file is too large. Maximum size is 100MB.');
  }

  return true;
};
