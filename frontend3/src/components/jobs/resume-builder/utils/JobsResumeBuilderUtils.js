'use client';
import { useState } from 'react';

export const useResumeBuilder = () => {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      address: ''
    },
    education: [],
    experience: [],
    skills: []
  });

  const [selectedTemplate, setSelectedTemplate] = useState('moderno');

  const [sections, setSections] = useState([
    {
      id: 'education',
      title: 'Educação',
      items: [
        { id: 1, content: 'Graduação em Ciência da Computação - USP' },
        { id: 2, content: 'Mestrado em Engenharia de Software - UNICAMP' }
      ]
    },
    {
      id: 'experience',
      title: 'Experiência',
      items: [
        { id: 1, content: 'Desenvolvedor Senior - TechCorp (2020-2023)' },
        { id: 2, content: 'Tech Lead - StartupX (2018-2020)' }
      ]
    },
    {
      id: 'skills',
      title: 'Habilidades',
      items: [
        { id: 1, content: 'React, Node.js, TypeScript' },
        { id: 2, content: 'AWS, Docker, Kubernetes' }
      ]
    }
  ]);

  const handleSectionUpdate = (sectionId, itemId, content) => {
    setSections(prev => prev.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          items: section.items.map(item => 
            item.id === itemId ? { ...item, content } : item
          )
        };
      }
      return section;
    }));
  };

  const handleAddItem = (sectionId) => {
    setSections(prev => prev.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          items: [
            ...section.items,
            { id: Date.now(), content: '' }
          ]
        };
      }
      return section;
    }));
  };

  const handleRemoveItem = (sectionId, itemId) => {
    setSections(prev => prev.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          items: section.items.filter(item => item.id !== itemId)
        };
      }
      return section;
    }));
  };

  const handleTemplateChange = (template) => {
    setSelectedTemplate(template);
  };

  const handleExport = (format) => {
    // Lógica de exportação baseada no formato
    console.log(`Exportando currículo em formato ${format}`);
  };

  return {
    resumeData,
    selectedTemplate,
    sections,
    handleSectionUpdate,
    handleAddItem,
    handleRemoveItem,
    handleTemplateChange,
    handleExport
  };
};

