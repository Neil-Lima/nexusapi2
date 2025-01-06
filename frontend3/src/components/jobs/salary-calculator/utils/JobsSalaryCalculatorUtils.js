'use client';
import { useState } from 'react';
import { faLightbulb, faChartLine, faBriefcase } from '@fortawesome/free-solid-svg-icons';

export const useSalaryCalculator = () => {
  const [formData, setFormData] = useState({
    position: '',
    location: '',
    education: 'bachelor',
    experience: 0,
    benefits: [
      { name: 'Vale Refeição', value: 800, selected: false },
      { name: 'Vale Transporte', value: 400, selected: false },
      { name: 'Plano de Saúde', value: 600, selected: false },
      { name: 'Gympass', value: 100, selected: false }
    ]
  });

  const [results, setResults] = useState({
    minSalary: '5.000',
    maxSalary: '15.000',
    percentile: 65,
    totalBenefits: 0,
    insights: [
      {
        icon: faLightbulb,
        title: 'Potencial de Crescimento',
        description: 'Profissionais com seu perfil têm alto potencial de crescimento nos próximos 2 anos.'
      },
      {
        icon: faChartLine,
        title: 'Tendência de Mercado',
        description: 'Demanda crescente para esta posição em startups e empresas de tecnologia.'
      },
      {
        icon: faBriefcase,
        title: 'Certificações Valorizadas',
        description: 'AWS e Azure são certificações muito valorizadas para esta posição.'
      }
    ]
  });

  const [marketData] = useState({
    trends: [
      {
        title: 'Crescimento Salarial',
        description: 'Aumento médio anual para a posição',
        value: 12,
        direction: 'up'
      },
      {
        title: 'Demanda de Mercado',
        description: 'Crescimento nas vagas disponíveis',
        value: 25,
        direction: 'up'
      },
      {
        title: 'Competitividade',
        description: 'Candidatos por vaga',
        value: 15,
        direction: 'down'
      }
    ]
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCalculate = () => {
    // Lógica de cálculo salarial
    console.log('Calculando salário com os dados:', formData);
  };

  const handleLocationChange = (e) => {
    handleInputChange(e);
    // Lógica adicional específica para mudança de localização
  };

  const handleExperienceChange = (e) => {
    handleInputChange(e);
    // Lógica adicional específica para mudança de experiência
  };

  const handleEducationChange = (e) => {
    handleInputChange(e);
    // Lógica adicional específica para mudança de educação
  };

  return {
    formData,
    results,
    marketData,
    handleInputChange,
    handleCalculate,
    handleLocationChange,
    handleExperienceChange,
    handleEducationChange
  };
};
