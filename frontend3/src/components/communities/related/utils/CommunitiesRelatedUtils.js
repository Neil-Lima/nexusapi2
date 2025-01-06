// CommunitiesRelatedUtils.js
'use client';
import { useState } from 'react';

export const useCommunitiesRelated = () => {
  const [relatedCommunities] = useState([
    {
      id: 1,
      name: "Mangá Lovers",
      image: "https://picsum.photos/100/100?random=1",
      members: 8500
    },
    {
      id: 2,
      name: "Cosplay Brasil",
      image: "https://picsum.photos/100/100?random=2",
      members: 12300
    },
    {
      id: 3,
      name: "J-Pop & K-Pop",
      image: "https://picsum.photos/100/100?random=3",
      members: 15600
    }
  ]);

  return {
    relatedCommunities
  };
};
