'use client';
import { useState } from 'react';

export const useCareerPredictor = () => {
  const [careerPaths] = useState([
    {
      id: 1,
      title: 'Tech Lead',
      description: 'Liderança técnica e arquitetura de sistemas',
      probability: 85
    },
    {
      id: 2,
      title: 'Arquiteto de Software',
      description: 'Desenho de soluções e padrões arquiteturais',
      probability: 78
    },
    {
      id: 3,
      title: 'Product Manager',
      description: 'Gestão de produtos digitais',
      probability: 65
    }
  ]);

  const [salaryData] = useState([
    {
      id: 1,
      position: 'Tech Lead',
      salary: 18000,
      growth: 12
    },
    {
      id: 2,
      position: 'Arquiteto',
      salary: 22000,
      growth: 15
    },
    {
      id: 3,
      position: 'Product Manager',
      salary: 20000,
      growth: 10
    }
  ]);

  const [requiredSkills] = useState([
    {
      id: 1,
      name: 'Liderança Técnica',
      importance: 90
    },
    {
      id: 2,
      name: 'Arquitetura de Software',
      importance: 85
    },
    {
      id: 3,
      name: 'Gestão de Equipes',
      importance: 80
    },
    {
      id: 4,
      name: 'Cloud Computing',
      importance: 75
    }
  ]);

  const handlePathSelect = (pathId) => {
    console.log('Caminho selecionado:', pathId);
  };

  const handleAnalyze = () => {
    console.log('Analisando carreira...');
  };

  return {
    careerPaths,
    salaryData,
    requiredSkills,
    handlePathSelect,
    handleAnalyze
  };
};
