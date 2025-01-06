'use client';
import { useState, useEffect } from 'react';

export const useMarketplacePropertyTour360 = () => {
  const [currentRoom, setCurrentRoom] = useState('');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [viewMode, setViewMode] = useState('normal');
  const [roomsList, setRoomsList] = useState([
    { id: 'living', name: 'Sala de Estar' },
    { id: 'kitchen', name: 'Cozinha' },
    { id: 'bedroom1', name: 'Quarto 1' },
    { id: 'bedroom2', name: 'Quarto 2' },
    { id: 'bathroom', name: 'Banheiro' }
  ]);

  const [roomInformation, setRoomInformation] = useState({
    name: '',
    description: '',
    features: []
  });

  useEffect(() => {
    // Simula carregamento inicial das informações
    if (currentRoom) {
      loadRoomInformation(currentRoom);
    }
  }, [currentRoom]);

  const handleRoomChange = (event) => {
    setCurrentRoom(event.target.value);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
  };

  const handleRotateLeft = () => {
    // Implementar rotação para esquerda
  };

  const handleRotateRight = () => {
    // Implementar rotação para direita
  };

  const toggleViewMode = () => {
    setViewMode(prev => prev === 'normal' ? 'vr' : 'normal');
  };

  const loadRoomInformation = (roomId) => {
    // Simula carregamento das informações do cômodo
    const roomInfo = {
      living: {
        name: 'Sala de Estar',
        description: 'Ampla sala com iluminação natural',
        features: ['40m²', 'Varanda', 'Piso em porcelanato']
      },
      kitchen: {
        name: 'Cozinha',
        description: 'Cozinha planejada moderna',
        features: ['20m²', 'Armários planejados', 'Ilha central']
      }
      // Adicionar informações para outros cômodos
    };

    setRoomInformation(roomInfo[roomId] || {
      name: '',
      description: '',
      features: []
    });
  };

  return {
    currentRoom,
    zoomLevel,
    viewMode,
    roomsList,
    handleRoomChange,
    handleZoomIn,
    handleZoomOut,
    handleRotateLeft,
    handleRotateRight,
    toggleViewMode,
    roomInformation
  };
};
