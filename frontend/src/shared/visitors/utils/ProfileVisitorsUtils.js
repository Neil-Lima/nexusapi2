'use client';
import { useState } from 'react';

export const useProfileVisitors = () => {
  const [showModal, setShowModal] = useState(false);
  const [visitors] = useState([
    {
      id: 1,
      name: "João Silva",
      avatar: "https://picsum.photos/50/50?random=1",
      visitTime: "há 5 minutos",
      isFriend: false
    },
    {
      id: 2,
      name: "Maria Santos",
      avatar: "https://picsum.photos/50/50?random=2",
      visitTime: "há 30 minutos",
      isFriend: true
    },
    {
      id: 3,
      name: "Pedro Costa",
      avatar: "https://picsum.photos/50/50?random=3",
      visitTime: "há 1 hora",
      isFriend: false
    }
  ]);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleAddFriend = (visitorId) => {
    // Implementar lógica de adicionar amigo
    console.log(`Adicionando amigo ${visitorId}`);
  };

  const handleViewProfile = (visitorId) => {
    // Implementar navegação para o perfil
    console.log(`Visualizando perfil ${visitorId}`);
  };

  return {
    visitors,
    showModal,
    handleShowModal,
    handleCloseModal,
    handleAddFriend,
    handleViewProfile
  };
};
