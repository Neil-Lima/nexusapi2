'use client';
import { useState, useEffect } from 'react';

export const useMarketplacePropertyBlueprintViewer = () => {
  const [selectedLayer, setSelectedLayer] = useState([]);
  const [layers, setLayers] = useState([
    { id: 'walls', name: 'Paredes' },
    { id: 'doors', name: 'Portas' },
    { id: 'windows', name: 'Janelas' },
    { id: 'furniture', name: 'Móveis' },
    { id: 'electrical', name: 'Elétrica' },
    { id: 'plumbing', name: 'Hidráulica' }
  ]);

  const [annotations, setAnnotations] = useState([]);
  const [measurements, setMeasurements] = useState([]);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [blueprintInfo, setBlueprintInfo] = useState({
    title: 'Planta Baixa - Apartamento 101',
    totalArea: 120,
    scale: '1:50',
    lastUpdate: '15/03/2024'
  });

  useEffect(() => {
    // Inicialização do viewer
    initializeViewer();
  }, []);

  const initializeViewer = () => {
    // Implementar inicialização do viewer
  };

  const handleLayerChange = (layerId) => {
    setSelectedLayer(prev => {
      if (prev.includes(layerId)) {
        return prev.filter(id => id !== layerId);
      }
      return [...prev, layerId];
    });
  };

  const handleAddAnnotation = (type) => {
    const newAnnotation = {
      id: Date.now(),
      type,
      text: type === 'text' ? 'Nova anotação' : 'Marcador',
      position: { x: 0, y: 0 }
    };
    setAnnotations(prev => [...prev, newAnnotation]);
  };

  const handleAddMeasurement = (type) => {
    const newMeasurement = {
      id: Date.now(),
      type,
      value: type === 'linear' ? '5.2m' : '25m²',
      points: []
    };
    setMeasurements(prev => [...prev, newMeasurement]);
  };

  const handleZoom = (action) => {
    setZoomLevel(prev => {
      if (action === 'in') {
        return Math.min(prev + 25, 200);
      }
      return Math.max(prev - 25, 25);
    });
  };

  return {
    selectedLayer,
    layers,
    annotations,
    measurements,
    zoomLevel,
    handleLayerChange,
    handleAddAnnotation,
    handleAddMeasurement,
    handleZoom,
    blueprintInfo
  };
};
