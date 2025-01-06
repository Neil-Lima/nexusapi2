// CommunitiesMembersUtils.js
'use client';
import { useState } from 'react';

export const useCommunitiesMembers = () => {
  const [members] = useState([
    {
      id: 1,
      name: "João Silva",
      avatar: "https://picsum.photos/100/100?random=1",
      role: "owner",
      roleTitle: "Dono",
      points: 1500
    },
    {
      id: 2,
      name: "Maria Santos",
      avatar: "https://picsum.photos/100/100?random=2",
      role: "mod",
      roleTitle: "Moderador",
      points: 1200
    },
    {
      id: 3,
      name: "Pedro Costa",
      avatar: "https://picsum.photos/100/100?random=3",
      role: "member",
      roleTitle: "Membro",
      points: 950
    }
  ]);

  const topMembers = [...members].sort((a, b) => b.points - a.points);

  return {
    members,
    topMembers
  };
};
