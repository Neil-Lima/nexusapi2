'use client';
import { useState } from 'react';
import { faCode, faProjectDiagram, faDatabase, faCloud } from '@fortawesome/free-solid-svg-icons';

export const useSkillsAnalyzer = () => {
  const [skills, setSkills] = useState([
    {
      id: 1,
      name: 'Desenvolvimento Frontend',
      level: 'Avançado',
      marketDemand: 85,
      icon: faCode
    },
    {
      id: 2,
      name: 'Arquitetura de Software',
      level: 'Intermediário',
      marketDemand: 90,
      icon: faProjectDiagram
    },
    {
      id: 3,
      name: 'Banco de Dados',
      level: 'Avançado',
      marketDemand: 75,
      icon: faDatabase
    },
    {
      id: 4,
      name: 'Cloud Computing',
      level: 'Intermediário',
      marketDemand: 95,
      icon: faCloud
    }
  ]);

  const [recommendations, setRecommendations] = useState([
    {
      id: 1,
      title: 'Aprofunde em Cloud Native',
      description: 'Foco em Kubernetes e arquiteturas serverless'
    },
    {
      id: 2,
      title: 'Expanda conhecimentos em IA',
      description: 'Machine Learning e processamento de linguagem natural'
    }
  ]);

  const [trendingSkills, setTrendingSkills] = useState([
    { id: 1, name: 'React', growth: 45 },
    { id: 2, name: 'Python', growth: 38 },
    { id: 3, name: 'AWS', growth: 52 },
    { id: 4, name: 'DevOps', growth: 40 }
  ]);

  const handleSkillUpdate = (skillId, newLevel) => {
    setSkills(prev => prev.map(skill => 
      skill.id === skillId ? { ...skill, level: newLevel } : skill
    ));
  };

  const handleAnalyze = () => {
    console.log('Analisando perfil...');
  };

  const handleExport = () => {
    console.log('Exportando relatório...');
  };

  return {
    skills,
    recommendations,
    trendingSkills,
    handleSkillUpdate,
    handleAnalyze,
    handleExport
  };
};
