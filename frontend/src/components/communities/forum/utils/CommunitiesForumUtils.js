// CommunitiesForumUtils.js
'use client';
import { useState } from 'react';

export const useCommunitiesForum = () => {
  const [topics] = useState([
    {
      id: 1,
      title: "Regras da Comunidade",
      author: "Admin",
      date: "01/01/2024",
      replies: 45,
      likes: 230,
      isPinned: true
    },
    {
      id: 2,
      title: "Qual seu anime favorito?",
      author: "João Silva",
      date: "05/01/2024",
      replies: 128,
      likes: 89,
      isPinned: false
    },
    {
      id: 3,
      title: "Eventos de Anime 2024",
      author: "Maria Santos",
      date: "10/01/2024",
      replies: 67,
      likes: 45,
      isPinned: false
    }
  ]);

  const handleCreateTopic = () => {
    // Lógica para criar novo tópico
  };

  const handleLikeTopic = (topicId) => {
    // Lógica para dar like no tópico
  };

  return {
    topics,
    handleCreateTopic,
    handleLikeTopic
  };
};
