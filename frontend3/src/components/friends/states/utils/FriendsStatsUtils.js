import { useState } from 'react';
import { mockFriends } from '../../list/utils/FriendsListUtils';

export const statsConfig = [
  { 
    icon: 'faUsers', 
    label: 'Total Friends', 
    value: 'totalFriends',
    color: '#FF0080'
  },
  { 
    icon: 'faUserPlus', 
    label: 'Pending Requests', 
    value: 'pendingRequests',
    color: '#7928CA'
  },
  { 
    icon: 'faUserFriends', 
    label: 'Mutual Friends', 
    value: 'mutualFriends',
    color: '#4a00e0'
  },
  { 
    icon: 'faCircle', 
    label: 'Online Friends', 
    value: 'onlineFriends',
    color: '#8e2de2'
  }
];

export const useStats = () => {
  const [stats, setStats] = useState({
    totalFriends: mockFriends.filter(f => f.isFriend).length,
    pendingRequests: 5,
    mutualFriends: 12,
    onlineFriends: mockFriends.filter(f => f.isOnline).length
  });

  const updateStats = (newStats) => {
    setStats({ ...stats, ...newStats });
  };

  return {
    stats,
    updateStats
  };
};
