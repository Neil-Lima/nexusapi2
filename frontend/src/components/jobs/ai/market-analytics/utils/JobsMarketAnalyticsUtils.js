'use client';
import { useState } from 'react';

export const useMarketAnalytics = () => {
  const [marketData] = useState([
    {
      id: 1,
      title: 'Vagas Disponíveis',
      value: '15.234',
      trend: 12
    },
    {
      id: 2,
      title: 'Média Salarial',
      value: 'R$ 8.500',
      trend: 5
    },
    {
      id: 3,
      title: 'Candidatos',
      value: '45.678',
      trend: -3
    }
  ]);

  const [industryTrends] = useState([
    {
      id: 1,
      name: 'Tecnologia',
      growth: 15,
      openings: 5000
    },
    {
      id: 2,
      name: 'Finanças',
      growth: 8,
      openings: 3000
    },
    {
      id: 3,
      name: 'Saúde',
      growth: 12,
      openings: 4000
    }
  ]);

  const [salaryData] = useState([
    {
      id: 1,
      title: 'Desenvolvedor Senior',
      salary: 12000,
      range: { min: 8000, max: 15000 }
    },
    {
      id: 2,
      title: 'Tech Lead',
      salary: 18000,
      range: { min: 15000, max: 22000 }
    },
    {
      id: 3,
      title: 'Product Manager',
      salary: 15000,
      range: { min: 12000, max: 20000 }
    }
  ]);

  const [demandMetrics] = useState([
    {
      id: 1,
      skill: 'React',
      demand: 85
    },
    {
      id: 2,
      skill: 'Node.js',
      demand: 75
    },
    {
      id: 3,
      skill: 'AWS',
      demand: 90
    }
  ]);

  const handleRegionChange = (e) => {
    console.log('Região selecionada:', e.target.value);
  };

  const handleIndustryFilter = (e) => {
    console.log('Indústria selecionada:', e.target.value);
  };

  const handleTimeframeChange = (e) => {
    console.log('Período selecionado:', e.target.value);
  };

  return {
    marketData,
    industryTrends,
    salaryData,
    demandMetrics,
    handleRegionChange,
    handleIndustryFilter,
    handleTimeframeChange
  };
};
