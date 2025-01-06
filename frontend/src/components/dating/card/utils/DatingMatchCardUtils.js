'use client';
import { useState } from 'react';

export const useDatingMatchCard = () => {
  const [matches] = useState([
    {
      id: 1,
      name: 'Julia Silva',
      nickname: 'Ju',
      photo: 'https://picsum.photos/400/400?random=1',
      isOnline: true,
      lastSeen: '2 min',
      bio: 'Amo viajar, conhecer lugares novos e fazer amizades. Adoro música e dança!',
      age: 28,
      photosCount: 12,
      location: 'Umarizal',
      views: 156,
      whatsapp: '5591999999999'
    },
    {
      id: 2,
      name: 'Pedro Santos',
      photo: 'https://picsum.photos/400/400?random=2',
      isOnline: false,
      lastSeen: '1h',
      bio: 'Desenvolvedor, apaixonado por tecnologia e inovação. Pratico esportes nos tempos livres.',
      age: 32,
      photosCount: 8,
      location: 'Nazaré',
      views: 98,
      whatsapp: '5591999999999'
    },
    {
      id: 3,
      name: 'Ana Costa',
      nickname: 'Aninha',
      photo: 'https://picsum.photos/400/400?random=3',
      isOnline: true,
      lastSeen: '5 min',
      bio: 'Médica, amo ajudar pessoas. Nas horas vagas gosto de ler e assistir séries.',
      age: 30,
      photosCount: 15,
      location: 'Marco',
      views: 234,
      whatsapp: '5591999999999'
    },
    {
      id: 4,
      name: 'Lucas Oliveira',
      photo: 'https://picsum.photos/400/400?random=4',
      isOnline: true,
      lastSeen: '1 min',
      bio: 'Professor de educação física, atleta e amante da vida saudável.',
      age: 29,
      photosCount: 20,
      location: 'Umarizal',
      views: 178,
      whatsapp: '5591999999999'
    },
    {
      id: 5,
      name: 'Mariana Lima',
      nickname: 'Mari',
      photo: 'https://picsum.photos/400/400?random=5',
      isOnline: false,
      lastSeen: '3h',
      bio: 'Arquiteta, apaixonada por arte e design. Adoro café e conversas interessantes.',
      age: 31,
      photosCount: 18,
      location: 'Batista Campos',
      views: 145,
      whatsapp: '5591999999999'
    },
    {
      id: 6,
      name: 'Rafael Mendes',
      photo: 'https://picsum.photos/400/400?random=6',
      isOnline: true,
      lastSeen: '15 min',
      bio: 'Músico, compositor e professor de violão. A música é minha vida!',
      age: 27,
      photosCount: 10,
      location: 'Nazaré',
      views: 167,
      whatsapp: '5591999999999'
    }
  ]);

  const handleWhatsappClick = (number) => {
    window.open(`https://wa.me/${number}`, '_blank');
  };

  const handleCardClick = (matchId) => {
    console.log('Navegando para perfil:', matchId);
  };

  return {
    matches,
    handleWhatsappClick,
    handleCardClick
  };
};