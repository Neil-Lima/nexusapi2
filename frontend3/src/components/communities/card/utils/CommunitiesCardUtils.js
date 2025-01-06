'use client';
import { useState } from 'react';

export const useCommunitiesCard = () => {
  const [participatingCommunities, setParticipatingCommunities] = useState([]);

  const handleJoinCommunity = (communityId) => {
    setParticipatingCommunities(prev => {
      if (prev.includes(communityId)) {
        return prev.filter(id => id !== communityId);
      }
      return [...prev, communityId];
    });
  };

  const isParticipating = (communityId) => {
    return participatingCommunities.includes(communityId);
  };

  return {
    handleJoinCommunity,
    isParticipating
  };
};
