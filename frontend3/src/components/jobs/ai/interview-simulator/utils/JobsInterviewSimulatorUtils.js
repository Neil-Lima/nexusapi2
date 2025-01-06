'use client';
import { useState } from 'react';

export const useInterviewSimulator = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [progress, setProgress] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState({
    confidence: 0,
    clarity: 0,
    knowledge: 0
  });

  const questions = [
    'Fale sobre sua experiência profissional',
    'Como você lida com desafios?',
    'Onde você se vê em 5 anos?',
    'Por que devemos te contratar?'
  ];

  const handleStartSimulation = () => {
    setIsRecording(true);
    setProgress(0);
    setCurrentQuestion(questions[0]);
    startAnalysis();
  };

  const handleStopSimulation = () => {
    setIsRecording(false);
    setProgress(0);
    setScore({
      confidence: 0,
      clarity: 0,
      knowledge: 0
    });
  };

  const handleConfigureSettings = () => {
    console.log('Configurando settings');
  };

  const startAnalysis = () => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });

      setScore(prev => ({
        confidence: Math.min(prev.confidence + 2, 95),
        clarity: Math.min(prev.clarity + 1, 90),
        knowledge: Math.min(prev.knowledge + 1.5, 85)
      }));
    }, 100);
  };

  return {
    isRecording,
    currentQuestion,
    progress,
    feedback,
    score,
    handleStartSimulation,
    handleStopSimulation,
    handleConfigureSettings
  };
};
