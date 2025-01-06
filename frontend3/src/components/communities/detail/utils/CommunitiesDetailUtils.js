'use client';
import { useState } from 'react';

export const useCommunitiesDetail = () => {
  const [community] = useState({
    id: 1,
    name: "Eu amo Animes!",
    banner: "https://picsum.photos/1200/400",
    avatar: "https://picsum.photos/200/200",
    members: 15420,
    language: "Português",
    createdAt: "01/01/2024",
    location: "Brasil",
    description: "Uma comunidade dedicada aos amantes de anime e cultura japonesa. Compartilhe suas experiências, discuta seus animes favoritos e faça novos amigos!",
    owner: {
      name: "João Silva",
      avatar: "https://picsum.photos/100/100",
      since: "01/01/2024"
    }
  });

  return {
    community
  };
};
