'use client';
import { useState } from 'react';
import { faBook, faVideo, faCode, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

export const useInterviewPrep = () => {
  const [questions] = useState([
    {
      id: 1,
      title: 'Complexidade de Algoritmos',
      description: 'Explique a diferença entre complexidade de tempo e espaço.',
      category: 'technical',
      difficulty: 3
    },
    {
      id: 2,
      title: 'Liderança de Equipe',
      description: 'Descreva uma situação em que você teve que resolver um conflito na equipe.',
      category: 'behavioral',
      difficulty: 2
    },
    {
      id: 3,
      title: 'Arquitetura Distribuída',
      description: 'Como você projetaria um sistema de mensagens em tempo real?',
      category: 'system-design',
      difficulty: 4
    }
  ]);

  const [currentSimulation, setCurrentSimulation] = useState(null);

  const [feedback] = useState([
    {
      id: 1,
      title: 'Análise de Comunicação',
      content: 'Boa clareza na explicação, mas pode melhorar o contato visual.',
      metrics: {
        'Clareza': 85,
        'Estrutura': 75,
        'Confiança': 90
      }
    },
    {
      id: 2,
      title: 'Conhecimento Técnico',
      content: 'Demonstrou profundo conhecimento em algoritmos e estruturas de dados.',
      metrics: {
        'Precisão': 95,
        'Profundidade': 88,
        'Exemplos': 70
      }
    }
  ]);

  const [resources] = useState([
    {
      id: 1,
      title: 'Guia de Algoritmos',
      description: 'Material completo sobre complexidade e estruturas de dados',
      type: 'Documento',
      icon: faBook
    },
    {
      id: 2,
      title: 'Mock Interviews',
      description: 'Simulações de entrevistas técnicas gravadas',
      type: 'Vídeo',
      icon: faVideo
    },
    {
      id: 3,
      title: 'Desafios de Código',
      description: 'Problemas práticos de programação',
      type: 'Prática',
      icon: faCode
    },
    {
      id: 4,
      title: 'Mentoria Individual',
      description: 'Sessões personalizadas com profissionais experientes',
      type: 'Mentoria',
      icon: faChalkboardTeacher
    }
  ]);

  const handleStartSimulation = () => {
    setCurrentSimulation({
      question: 'Como você implementaria um sistema de cache distribuído?',
      timeLimit: 180
    });
  };

  const handleAnswerQuestion = (questionId) => {
    console.log('Respondendo questão:', questionId);
  };

  const handleFeedback = (feedbackId) => {
    console.log('Visualizando feedback:', feedbackId);
  };

  const handleResourceSelect = (resourceId) => {
    console.log('Recurso selecionado:', resourceId);
  };

  return {
    questions,
    currentSimulation,
    resources,
    feedback,
    handleStartSimulation,
    handleAnswerQuestion,
    handleFeedback,
    handleResourceSelect
  };
};
