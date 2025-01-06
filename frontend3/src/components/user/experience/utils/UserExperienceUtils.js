'use client';
import { useState } from 'react';

export const useUserExperience = () => {
  const [experiences] = useState([
    { title: 'Nascido' },
    { title: 'Líder do Clã' },
    { title: 'Fundador da Vila' }
  ]);

  const handleAddExperience = () => {
    console.log('Adicionar nova experiência');
  };

  return {
    experiences,
    handleAddExperience
  };
};
