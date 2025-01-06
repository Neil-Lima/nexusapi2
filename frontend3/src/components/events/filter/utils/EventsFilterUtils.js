'use client';
import { useState } from 'react';

const defaultCategories = [
  'Música',
  'Esportes',
  'Arte',
  'Tecnologia',
  'Negócios',
  'Gastronomia',
  'Educação',
  'Entretenimento'
];

const defaultLocations = [
  'São Paulo',
  'Rio de Janeiro',
  'Belo Horizonte',
  'Curitiba',
  'Porto Alegre',
  'Salvador',
  'Recife'
];

export const useEventsFilter = () => {
  const [filters, setFilters] = useState({
    search: '',
    date: null,
    location: '',
    category: ''
  });

  const [selectedTags, setSelectedTags] = useState([]);
  const [categories] = useState(defaultCategories);
  const [locations] = useState(defaultLocations);

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleTagToggle = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleDateChange = (date) => {
    setFilters(prev => ({ ...prev, date }));
  };

  const handleApplyFilters = () => {
    const appliedFilters = {
      ...filters,
      tags: selectedTags
    };
    console.log('Filtros aplicados:', appliedFilters);
  };

  const handleResetFilters = () => {
    setFilters({
      search: '',
      date: null,
      location: '',
      category: ''
    });
    setSelectedTags([]);
  };

  return {
    filters,
    categories,
    locations,
    selectedTags,
    handleFilterChange,
    handleTagToggle,
    handleDateChange,
    handleApplyFilters,
    handleResetFilters
  };
};
