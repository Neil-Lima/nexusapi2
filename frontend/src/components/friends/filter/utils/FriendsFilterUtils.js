import { useState } from 'react';

export const defaultCategories = [
  'All',
  'Close Friends',
  'Family',
  'Work',
  'School',
  'Gaming',
  'Sports',
  'Art',
  'Music',
  'Travel'
];

export const useFilterCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filterFriendsByCategory = (friends, category) => {
    if (category === 'All') return friends;
    return friends.filter(friend => friend.category === category);
  };

  return {
    selectedCategory,
    setSelectedCategory,
    filterFriendsByCategory
  };
};
