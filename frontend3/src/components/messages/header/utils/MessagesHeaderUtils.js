'use client';
import { useState } from 'react';

export const useMessagesHeader = () => {
  const [isAudioCallActive, setIsAudioCallActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleAudioCall = (event) => {
    setIsAudioCallActive(true);
    // Aqui poderia integrar com uma API de chamadas
    // Por exemplo: initializeAudioCall(contactId)
  };

  const handleEndAudioCall = () => {
    setIsAudioCallActive(false);
    // Aqui poderia finalizar a chamada na API
    // Por exemplo: endAudioCall(callId)
  };

  const handleOpenMenu = (event) => {
    setMenuAnchor(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuAnchor(null);
    setIsMenuOpen(false);
  };

  const menuOptions = [
    {
      label: 'Ver perfil',
      action: () => {
        console.log('Visualizar perfil');
        handleCloseMenu();
      }
    },
    {
      label: 'Silenciar notificações',
      action: () => {
        console.log('Silenciar notificações');
        handleCloseMenu();
      }
    },
    {
      label: 'Bloquear contato',
      action: () => {
        console.log('Bloquear contato');
        handleCloseMenu();
      }
    },
    {
      label: 'Limpar conversa',
      action: () => {
        console.log('Limpar conversa');
        handleCloseMenu();
      }
    }
  ];

  return {
    isAudioCallActive,
    isMenuOpen,
    menuAnchor,
    menuOptions,
    handleAudioCall,
    handleEndAudioCall,
    handleOpenMenu,
    handleCloseMenu
  };
};
