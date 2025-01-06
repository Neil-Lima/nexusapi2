// CommunitiesGridUtils.js
'use client';
import { useState } from 'react';

export const useCommunitiesGrid = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [communities] = useState([
    {
      id: 1,
      name: "Eu amo Animes!",
      type: "public",
      members: 15420,
      category: "Anime/Mangá",
      image: "https://picsum.photos/400/300?random=1",
      owner: "João Silva",
      description: "Para todos os amantes de animes e cultura japonesa"
    },
    {
      id: 2,
      name: "Viajantes do Mundo",
      type: "moderated",
      members: 8750,
      category: "Viagens",
      image: "https://picsum.photos/400/300?random=2",
      owner: "Maria Vieira",
      description: "Compartilhe suas experiências de viagem"
    },
    {
      id: 3,
      name: "Rock Classics",
      type: "public",
      members: 12300,
      category: "Música",
      image: "https://picsum.photos/400/300?random=3",
      owner: "Pedro Santos",
      description: "O melhor do rock de todos os tempos"
    },
    {
      id: 4,
      name: "Gamers Unidos",
      type: "public",
      members: 25600,
      category: "Games",
      image: "https://picsum.photos/400/300?random=4",
      owner: "Ana Costa",
      description: "Para todos os apaixonados por jogos"
    },
    {
      id: 5,
      name: "Cinéfilos Anônimos",
      type: "moderated",
      members: 9800,
      category: "Cinema",
      image: "https://picsum.photos/400/300?random=5",
      owner: "Lucas Mendes",
      description: "Discussões sobre cinema e séries"
    },
    {
      id: 6,
      name: "Foodies BR",
      type: "public",
      members: 18900,
      category: "Gastronomia",
      image: "https://picsum.photos/400/300?random=6",
      owner: "Julia Lima",
      description: "Amantes da boa gastronomia"
    }
  ]);

  return {
    viewMode,
    setViewMode,
    communities
  };
};
