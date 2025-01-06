'use client';
import { useState } from 'react';
import { faCode, faDatabase, faCloud, faMobile, faDesktop, faServer } from '@fortawesome/free-solid-svg-icons';

export const useSkillAssessment = () => {
  const [skills] = useState([
    {
      id: 1,
      name: 'Frontend Development',
      icon: faCode,
      progress: 85,
      level: 4,
      testsCompleted: 8
    },
    {
      id: 2,
      name: 'Backend Development',
      icon: faServer,
      progress: 75,
      level: 3,
      testsCompleted: 6
    },
    {
      id: 3,
      name: 'Database Management',
      icon: faDatabase,
      progress: 90,
      level: 5,
      testsCompleted: 10
    },
    {
      id: 4,
      name: 'Cloud Computing',
      icon: faCloud,
      progress: 70,
      level: 3,
      testsCompleted: 5
    },
    {
      id: 5,
      name: 'Mobile Development',
      icon: faMobile,
      progress: 65,
      level: 2,
      testsCompleted: 4
    },
    {
      id: 6,
      name: 'Desktop Development',
      icon: faDesktop,
      progress: 80,
      level: 4,
      testsCompleted: 7
    }
  ]);

  const [currentTest, setCurrentTest] = useState(null);

  const [results] = useState([
    {
      id: 1,
      skillName: 'Frontend Development',
      metrics: {
        'HTML/CSS': 90,
        'JavaScript': 85,
        'React': 80,
        'Vue': 70
      },
      recommendation: 'Foque em aprender TypeScript e testes automatizados.'
    },
    {
      id: 2,
      skillName: 'Backend Development',
      metrics: {
        'Node.js': 85,
        'Python': 75,
        'Java': 70,
        'SQL': 90
      },
      recommendation: 'Aprimore seus conhecimentos em microsserviços e APIs RESTful.'
    }
  ]);

  const [certificates] = useState([
    {
      id: 1,
      name: 'React Developer',
      description: 'Certificação avançada em desenvolvimento React',
      date: '2023-06-15'
    },
    {
      id: 2,
      name: 'Node.js Expert',
      description: 'Especialização em Node.js e Express',
      date: '2023-07-20'
    },
    {
      id: 3,
      name: 'AWS Cloud Practitioner',
      description: 'Certificação básica em AWS Cloud',
      date: '2023-08-10'
    }
  ]);

  const handleStartTest = () => {
    setCurrentTest({
      title: 'Avaliação de Frontend Development',
      timeRemaining: '45:00',
      currentQuestion: {
        title: 'React Hooks',
        description: 'Qual é a principal diferença entre useEffect e useLayoutEffect?',
        options: [
          'useEffect é assíncrono, useLayoutEffect é síncrono',
          'useEffect é executado após a renderização, useLayoutEffect antes',
          'useEffect não pode ter dependências, useLayoutEffect pode',
          'Não há diferença, são aliases um do outro'
        ]
      }
    });
  };

  const handleAnswerQuestion = (answer) => {
    console.log('Resposta selecionada:', answer);
  };

  const handleSkillSelect = (skillId) => {
    console.log('Habilidade selecionada:', skillId);
  };

  const handleCertificateDownload = (certId) => {
    console.log('Download do certificado:', certId);
  };

  return {
    skills,
    currentTest,
    results,
    certificates,
    handleStartTest,
    handleAnswerQuestion,
    handleSkillSelect,
    handleCertificateDownload
  };
};
