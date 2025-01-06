'use client';
import { useState, useEffect } from 'react';

export const useMarketplacePropertySecurityIndex = () => {
  const [securityScore, setSecurityScore] = useState({
    overall: 8.7,
    comparison: '+15%',
    categories: {
      'Segurança Pública': 8.5,
      'Vigilância': 9.0,
      'Iluminação': 8.8,
      'Monitoramento': 8.9,
      'Controle de Acesso': 8.5
    }
  });

  const [metrics, setMetrics] = useState([
    {
      id: 1,
      name: 'Ocorrências/mês',
      value: '2.3',
      trend: 'down',
      trendValue: '-30% vs. ano anterior',
      icon: '📊'
    },
    {
      id: 2,
      name: 'Tempo de Resposta',
      value: '5min',
      trend: 'up',
      trendValue: '-2min vs. média',
      icon: '⚡'
    },
    {
      id: 3,
      name: 'Câmeras',
      value: '24/7',
      trend: 'stable',
      trendValue: 'Cobertura total',
      icon: '📹'
    },
    {
      id: 4,
      name: 'Rondas',
      value: '12/dia',
      trend: 'up',
      trendValue: '+2 vs. mês anterior',
      icon: '👮'
    }
  ]);

  const [incidents, setIncidents] = useState([
    {
      id: 1,
      type: 'Tentativa de Furto',
      date: '2024-03-15',
      location: 'Estacionamento B',
      status: 'resolved'
    },
    {
      id: 2,
      type: 'Vandalismo',
      date: '2024-03-10',
      location: 'Área Externa',
      status: 'investigating'
    },
    {
      id: 3,
      type: 'Alarme Falso',
      date: '2024-03-05',
      location: 'Bloco A',
      status: 'resolved'
    }
  ]);

  const [securityFeatures, setSecurityFeatures] = useState([
    {
      id: 1,
      name: 'Sistema de CFTV',
      description: 'Monitoramento 24h com câmeras HD',
      status: 'active',
      icon: '📹'
    },
    {
      id: 2,
      name: 'Controle de Acesso',
      description: 'Biometria e cartão magnético',
      status: 'active',
      icon: '🔐'
    },
    {
      id: 3,
      name: 'Cerca Elétrica',
      description: 'Perímetro protegido',
      status: 'active',
      icon: '⚡'
    }
  ]);

  const [emergencyServices, setEmergencyServices] = useState([
    {
      id: 1,
      name: 'Delegacia',
      distance: 1.2,
      responseTime: 8,
      icon: '👮'
    },
    {
      id: 2,
      name: 'Corpo de Bombeiros',
      distance: 2.5,
      responseTime: 10,
      icon: '🚒'
    },
    {
      id: 3,
      name: 'Hospital',
      distance: 1.8,
      responseTime: 12,
      icon: '🏥'
    }
  ]);

  useEffect(() => {
    loadSecurityData();
  }, []);

  const loadSecurityData = async () => {
    // Implementar carregamento de dados da API
  };

  const handleTimeframeChange = (timeframe) => {
    // Atualizar dados baseado no período selecionado
  };

  const handleMapFilter = (filter) => {
    // Aplicar filtros no mapa de ocorrências
  };

  return {
    securityScore,
    metrics,
    incidents,
    securityFeatures,
    emergencyServices,
    handleTimeframeChange,
    handleMapFilter
  };
};
