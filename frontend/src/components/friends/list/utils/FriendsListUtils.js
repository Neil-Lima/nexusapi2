import { useState } from 'react';

export const mockFriends = [
  { 
    id: 1, 
    name: 'John Smith', 
    image: 'https://randomuser.me/api/portraits/men/1.jpg', 
    role: 'Software Engineer',
    isFriend: true,
    mutualFriends: 12,
    isOnline: true,
    category: 'Close Friends'
  },
  { 
    id: 2, 
    name: 'Emma Wilson', 
    image: 'https://randomuser.me/api/portraits/women/2.jpg', 
    role: 'UX Designer',
    isFriend: true,
    mutualFriends: 8,
    isOnline: false,
    category: 'Work'
  },
  { 
    id: 3, 
    name: 'Michael Brown', 
    image: 'https://randomuser.me/api/portraits/men/3.jpg', 
    role: 'Product Manager',
    isFriend: false,
    mutualFriends: 15,
    isOnline: true,
    category: 'Work'
  },
  { 
    id: 4, 
    name: 'Sarah Davis', 
    image: 'https://randomuser.me/api/portraits/women/4.jpg', 
    role: 'Data Scientist',
    isFriend: true,
    mutualFriends: 6,
    isOnline: true,
    category: 'School'
  },
  { 
    id: 5, 
    name: 'James Wilson', 
    image: 'https://randomuser.me/api/portraits/men/5.jpg', 
    role: 'Frontend Developer',
    isFriend: false,
    mutualFriends: 10,
    isOnline: false,
    category: 'Work'
  },
  { 
    id: 6, 
    name: 'Emily Taylor', 
    image: 'https://randomuser.me/api/portraits/women/6.jpg', 
    role: 'Backend Developer',
    isFriend: true,
    mutualFriends: 9,
    isOnline: true,
    category: 'Work'
  },
  { 
    id: 7, 
    name: 'Daniel Martinez', 
    image: 'https://randomuser.me/api/portraits/men/7.jpg', 
    role: 'DevOps Engineer',
    isFriend: true,
    mutualFriends: 7,
    isOnline: false,
    category: 'Work'
  },
  { 
    id: 8, 
    name: 'Sophia Anderson', 
    image: 'https://randomuser.me/api/portraits/women/8.jpg', 
    role: 'UI Designer',
    isFriend: false,
    mutualFriends: 11,
    isOnline: true,
    category: 'School'
  },
  { 
    id: 9, 
    name: 'David Thompson', 
    image: 'https://randomuser.me/api/portraits/men/9.jpg', 
    role: 'Full Stack Developer',
    isFriend: true,
    mutualFriends: 14,
    isOnline: true,
    category: 'Work'
  },
  { 
    id: 10, 
    name: 'Olivia White', 
    image: 'https://randomuser.me/api/portraits/women/10.jpg', 
    role: 'System Analyst',
    isFriend: false,
    mutualFriends: 5,
    isOnline: false,
    category: 'School'
  },
  { 
    id: 11, 
    name: 'William Clark', 
    image: 'https://randomuser.me/api/portraits/men/11.jpg', 
    role: 'Mobile Developer',
    isFriend: true,
    mutualFriends: 13,
    isOnline: true,
    category: 'Work'
  },
  { 
    id: 12, 
    name: 'Isabella Lee', 
    image: 'https://randomuser.me/api/portraits/women/12.jpg', 
    role: 'QA Engineer',
    isFriend: true,
    mutualFriends: 8,
    isOnline: false,
    category: 'Work'
  }
];

export const FRIENDS_PER_PAGE = 12;

export const useFriendsList = () => {
  const [friends, setFriends] = useState(mockFriends);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const indexOfLastFriend = currentPage * FRIENDS_PER_PAGE;
  const indexOfFirstFriend = indexOfLastFriend - FRIENDS_PER_PAGE;
  const currentFriends = friends.slice(indexOfFirstFriend, indexOfLastFriend);
  const totalPages = Math.ceil(friends.length / FRIENDS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleFriendStatus = (friendId) => {
    setFriends(friends.map(friend => 
      friend.id === friendId 
        ? { ...friend, isFriend: !friend.isFriend }
        : friend
    ));
  };

  const handleUnfriend = (friend) => {
    setSelectedFriend(friend);
    setShowModal(true);
  };

  const confirmUnfriend = () => {
    toggleFriendStatus(selectedFriend.id);
    setShowModal(false);
    setSelectedFriend(null);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedFriend(null);
  };

  return {
    friends: currentFriends,
    totalPages,
    currentPage,
    showModal,
    selectedFriend,
    handlePageChange,
    toggleFriendStatus,
    handleUnfriend,
    confirmUnfriend,
    closeModal
  };
};
