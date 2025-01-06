'use client';
import { useState, useCallback } from 'react';
import axios from 'axios';
import { useGalleryVideo } from '@/shared/gallery/videos/utils/GalleryVideoUtils';
import { useLoadMore } from '@/shared/loadmore/utils/LoadMoreUtils';

export const useProfileActions = () => {
  const { handleVideoUpload } = useGalleryVideo();
  const [activeTab, setActiveTab] = useState('about');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showMoodBoard, setShowMoodBoard] = useState(false);
  const [moodBoardItems, setMoodBoardItems] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [uploadedMedia, setUploadedMedia] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [connections, setConnections] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [events, setEvents] = useState([]);
  const [profileStats, setProfileStats] = useState({});

  const { handleLoadMore } = useLoadMore(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('/api/profile/posts?page=${currentPage}');
      setPosts([...posts, ...response.data]);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  });

  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  const handleEmojiSelect = useCallback((emoji) => {
    setNewComment(prev => prev + emoji.native);
  }, []);

  const handlePhotoSelect = useCallback(async (photo) => {
    setSelectedPhoto(photo);
    setShowPhotoModal(true);
    try {
      await axios.post('/api/profile/photos/view', { photoId: photo.id });
      setProfileStats(prev => ({
        ...prev,
        photoViews: prev.photoViews + 1
      }));
    } catch (error) {
      setError(error.message);
    }
  }, []);

  const handleVideoSelect = useCallback(async (video) => {
    setSelectedVideo(video);
    setShowVideoModal(true);
    try {
      await axios.post('/api/profile/videos/view', { videoId: video.id });
      setProfileStats(prev => ({
        ...prev,
        videoViews: prev.videoViews + 1
      }));
    } catch (error) {
      setError(error.message);
    }
  }, []);

  const handlePostSubmit = useCallback(async (postContent, mediaFiles) => {
    setIsLoading(true);
    try {
      const mediaUrls = [];
      if (mediaFiles?.length) {
        for (const file of mediaFiles) {
          if (file.type.includes('image')) {
            const imageUrl = await handleImageUpload(file);
            mediaUrls.push({ type: 'image', url: imageUrl });
          } else if (file.type.includes('video')) {
            const videoUrl = await handleVideoUpload(file);
            mediaUrls.push({ type: 'video', url: videoUrl });
          }
        }
      }

      const newPost = {
        id: Date.now(),
        content: postContent,
        media: mediaUrls,
        author: {
          id: mockProfileData.id,
          name: mockProfileData.name,
          avatar: mockProfileData.avatar
        },
        date: new Date().toISOString(),
        likes: 0,
        comments: [],
        shares: 0
      };

      const response = await axios.post('/api/profile/posts', newPost);
      setPosts(prev => [response.data, ...prev]);
      
      setProfileStats(prev => ({
        ...prev,
        totalPosts: prev.totalPosts + 1
      }));

      if (response.data.isFirstPost) {
        setAchievements(prev => [...prev, {
          id: Date.now(),
          type: 'First Post',
          icon: 'first-post-badge.png',
          date: new Date().toISOString()
        }]);
      }

    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleCommentSubmit = useCallback(async (postId, commentText) => {
    try {
      const response = await axios.post(`/api/profile/posts/${postId}/comments`, {
        text: commentText,
        author: {
          id: mockProfileData.id,
          name: mockProfileData.name,
          avatar: mockProfileData.avatar
        }
      });

      setPosts(prev => prev.map(post => 
        post.id === postId 
          ? { ...post, comments: [...post.comments, response.data] }
          : post
      ));

      setNewComment('');
      
      setProfileStats(prev => ({
        ...prev,
        totalComments: prev.totalComments + 1
      }));

    } catch (error) {
      setError(error.message);
    }
  }, []);

  const handleLikePost = useCallback(async (postId) => {
    try {
      const response = await axios.post(`/api/profile/posts/${postId}/like`);
      
      setPosts(prev => prev.map(post =>
        post.id === postId
          ? { ...post, likes: response.data.likes }
          : post
      ));

      setProfileStats(prev => ({
        ...prev,
        totalLikes: prev.totalLikes + 1
      }));

    } catch (error) {
      setError(error.message);
    }
  }, []);

  const handleSharePost = useCallback(async (postId) => {
    try {
      const response = await axios.post(`/api/profile/posts/${postId}/share`);
      
      setPosts(prev => prev.map(post =>
        post.id === postId
          ? { ...post, shares: response.data.shares }
          : post
      ));

      setProfileStats(prev => ({
        ...prev,
        totalShares: prev.totalShares + 1
      }));

    } catch (error) {
      setError(error.message);
    }
  }, []);

  const handleFollow = useCallback(async (userId) => {
    try {
      const response = await axios.post(`/api/profile/connections/follow`, {
        followId: userId
      });

      setConnections(prev => ({
        ...prev,
        following: [...prev.following, response.data]
      }));

      setProfileStats(prev => ({
        ...prev,
        totalFollowing: prev.totalFollowing + 1
      }));

      setNotifications(prev => [...prev, {
        id: Date.now(),
        type: 'follow',
        user: response.data,
        date: new Date().toISOString()
      }]);

    } catch (error) {
      setError(error.message);
    }
  }, []);

  const handleUnfollow = useCallback(async (userId) => {
    try {
      await axios.post(`/api/profile/connections/unfollow`, {
        unfollowId: userId
      });

      setConnections(prev => ({
        ...prev,
        following: prev.following.filter(user => user.id !== userId)
      }));

      setProfileStats(prev => ({
        ...prev,
        totalFollowing: prev.totalFollowing - 1
      }));

    } catch (error) {
      setError(error.message);
    }
  }, []);

  const handleMoodBoardAdd = useCallback((item) => {
    setMoodBoardItems(prev => [...prev, {
      ...item,
      position: prev.length
    }]);
  }, []);

  const handleMoodBoardRemove = useCallback((itemId) => {
    setMoodBoardItems(prev => 
      prev.filter(item => item.id !== itemId)
        .map((item, index) => ({
          ...item,
          position: index
        }))
    );
  }, []);

  const handleMoodBoardReorder = useCallback((result) => {
    if (!result.destination) return;

    const items = Array.from(moodBoardItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setMoodBoardItems(items.map((item, index) => ({
      ...item,
      position: index
    })));
  }, [moodBoardItems]);

  const handleCreateEvent = useCallback(async (eventData) => {
    try {
      const response = await axios.post('/api/profile/events', eventData);
      setEvents(prev => [...prev, response.data]);

      setProfileStats(prev => ({
        ...prev,
        totalEvents: prev.totalEvents + 1
      }));

    } catch (error) {
      setError(error.message);
    }
  }, []);

  const handleUpdateProfile = useCallback(async (profileData) => {
    try {
      const response = await axios.put('/api/profile', profileData);
      return response.data;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  }, []);

  return {
    activeTab,
    showEmojiPicker,
    selectedPhoto,
    selectedVideo,
    showPhotoModal,
    showVideoModal,
    showMoodBoard,
    moodBoardItems,
    posts,
    comments,
    newComment,
    uploadedMedia,
    isLoading,
    error,
    notifications,
    connections,
    achievements,
    events,
    profileStats,
    handleTabChange,
    handleEmojiSelect,
    handlePhotoSelect,
    handleVideoSelect,
    handlePostSubmit,
    handleCommentSubmit,
    handleLikePost,
    handleSharePost,
    handleFollow,
    handleUnfollow,
    handleMoodBoardAdd,
    handleMoodBoardRemove,
    handleMoodBoardReorder,
    handleCreateEvent,
    handleUpdateProfile,
    handleLoadMore,
    setShowEmojiPicker,
    setShowPhotoModal,
    setShowVideoModal,
    setShowMoodBoard,
    setNewComment,
    setError
  };
};

export const mockProfileData = {
  id: '1',
  name: 'John Doe',
  avatar: 'https://picsum.photos/200',
  coverImage: 'https://picsum.photos/1200/400',
  bio: 'Software Developer | Tech Enthusiast',
  skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'Next.js'],
  education: [
    {
      id: 1,
      school: 'MIT',
      degree: 'Computer Science',
      years: '2018-2022',
      description: 'Focus on Web Development and AI',
      location: 'Cambridge, MA'
    }
  ],
  experience: [
    {
      id: 1,
      company: 'Google',
      position: 'Senior Developer',
      years: '2022-Present',
      description: 'Leading frontend development team',
      location: 'Mountain View, CA',
      technologies: ['React', 'TypeScript', 'GraphQL']
    }
  ],
  info: {
    location: 'New York, USA',
    website: 'www.johndoe.com',
    occupation: 'Senior Developer',
    joinDate: '2023',
    email: 'john@example.com',
    phone: '+1 234 567 890',
    languages: ['English', 'Spanish'],
    interests: ['Technology', 'Photography', 'Travel']
  },
  posts: [
    {
      id: 1,
      content: 'Just launched my new project!',
      media: [
        {
          type: 'image',
          url: 'https://picsum.photos/400/300'
        }
      ],
      date: '2023-12-01T10:00:00Z',
      likes: 150,
      comments: [
        {
          id: 1,
          author: {
            id: 2,
            name: 'Jane Smith',
            avatar: 'https://picsum.photos/50'
          },
          text: 'Amazing work!',
          date: '2023-12-01T10:30:00Z',
          likes: 5
        }
      ],
      shares: 25
    }
  ],
  photos: [
    {
      id: 1,
      url: 'https://picsum.photos/400/400?random=1',
      caption: 'Beautiful sunset',
      date: '2023-11-30T15:00:00Z',
      likes: 120,
      comments: []
    },
    {
      id: 2, 
      url: 'https://picsum.photos/400/400?random=2',
      caption: 'City lights',
      date: '2023-11-29T20:00:00Z', 
      likes: 85,
      comments: []
    }
  ],
  videos: [
    {
      id: 1,
      url: 'https://example.com/video1.mp4',
      thumbnail: 'https://picsum.photos/400/225?random=1',
      title: 'Coding Tutorial',
      description: 'Learn React Hooks in 20 minutes',
      duration: 1200,
      views: 1500,
      likes: 230,
      date: '2023-11-28T14:00:00Z',
      comments: []
    }
  ],
  stats: {
    totalPosts: 156,
    totalPhotos: 483,
    totalVideos: 24,
    totalFollowers: 1234,
    totalFollowing: 567,
    totalLikes: 8900,
    totalComments: 3200,
    totalShares: 1500
  },
  achievements: [
    {
      id: 1,
      title: 'Code Master',
      description: 'Completed 100 coding challenges',
      icon: 'code-master-badge.png',
      dateEarned: '2023-10-15T00:00:00Z'
    },
    {
      id: 2,
      title: 'Popular Creator',
      description: 'Reached 1000 followers',
      icon: 'popular-badge.png', 
      dateEarned: '2023-11-01T00:00:00Z'
    }
  ],
  events: [
    {
      id: 1,
      title: 'Tech Conference 2024',
      description: 'Annual developer conference',
      date: '2024-03-15T09:00:00Z',
      location: 'San Francisco, CA',
      attendees: [
        {
          id: 2,
          name: 'Jane Smith',
          avatar: 'https://picsum.photos/50'
        }
      ],
      totalAttendees: 150
    }
  ]
};

