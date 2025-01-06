'use client';
import { useState } from 'react';
import { faHandshake, faVideo, faUsers } from '@fortawesome/free-solid-svg-icons';

export const useNetworkingHub = () => {
  const [connections] = useState([
    {
      id: 1,
      name: 'Ana Silva',
      role: 'Senior Developer',
      company: 'TechCorp',
      avatar: '/avatars/ana.jpg'
    },
    {
      id: 2,
      name: 'João Santos',
      role: 'Product Manager',
      company: 'InnovateX',
      avatar: '/avatars/joao.jpg'
    },
    {
      id: 3,
      name: 'Maria Costa',
      role: 'UX Designer',
      company: 'DesignLab',
      avatar: '/avatars/maria.jpg'
    }
  ]);

  const [events] = useState([
    {
      id: 1,
      title: 'Tech Meetup 2024',
      date: '15 Mar 2024',
      description: 'Encontro de desenvolvedores e profissionais de tecnologia',
      attendees: 150,
      icon: faUsers
    },
    {
      id: 2,
      title: 'Workshop de Networking',
      date: '20 Mar 2024',
      description: 'Aprenda técnicas efetivas de networking profissional',
      attendees: 50,
      icon: faHandshake
    },
    {
      id: 3,
      title: 'Conferência Virtual',
      date: '25 Mar 2024',
      description: 'Conferência online sobre tendências em tecnologia',
      attendees: 300,
      icon: faVideo
    }
  ]);

  const [groups] = useState([
    {
      id: 1,
      name: 'Desenvolvedores React',
      description: 'Grupo para discussão sobre React e ecossistema',
      members: 1200,
      posts: 450,
      image: '/groups/react.jpg'
    },
    {
      id: 2,
      name: 'UX/UI Design',
      description: 'Compartilhamento de conhecimento em design',
      members: 800,
      posts: 320,
      image: '/groups/design.jpg'
    },
    {
      id: 3,
      name: 'Tech Leaders',
      description: 'Grupo para líderes técnicos e gestores',
      members: 500,
      posts: 180,
      image: '/groups/leaders.jpg'
    }
  ]);

  const [messages] = useState([
    {
      id: 1,
      sender: {
        name: 'Pedro Lima',
        avatar: '/avatars/pedro.jpg'
      },
      content: 'Gostaria de discutir uma oportunidade de projeto',
      time: '10:30'
    },
    {
      id: 2,
      sender: {
        name: 'Carla Souza',
        avatar: '/avatars/carla.jpg'
      },
      content: 'Parabéns pela apresentação no evento!',
      time: '09:15'
    }
  ]);

  const [recommendations] = useState([
    {
      id: 1,
      recommender: {
        name: 'Lucas Mendes',
        role: 'Tech Lead',
        avatar: '/avatars/lucas.jpg'
      },
      content: 'Excelente profissional, com grande conhecimento técnico e habilidades de liderança.',
      skills: ['React', 'Node.js', 'Liderança Técnica']
    },
    {
      id: 2,
      recommender: {
        name: 'Amanda Costa',
        role: 'Product Owner',
        avatar: '/avatars/amanda.jpg'
      },
      content: 'Ótima capacidade de trabalho em equipe e resolução de problemas complexos.',
      skills: ['Scrum', 'Gestão de Projetos', 'Comunicação']
    }
  ]);

  const handleConnect = (connectionId) => {
    console.log('Conectando com:', connectionId);
  };

  const handleEventJoin = (eventId) => {
    console.log('Participando do evento:', eventId);
  };

  const handleGroupJoin = (groupId) => {
    console.log('Entrando no grupo:', groupId);
  };

  const handleMessageSend = (userId) => {
    console.log('Enviando mensagem para:', userId);
  };

  const handleRecommendationAccept = (recId) => {
    console.log('Aceitando recomendação:', recId);
  };

  return {
    connections,
    events,
    groups,
    messages,
    recommendations,
    handleConnect,
    handleEventJoin,
    handleGroupJoin,
    handleMessageSend,
    handleRecommendationAccept
  };
};

