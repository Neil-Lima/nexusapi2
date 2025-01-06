'use client';
import { useState } from 'react';

export const useApplicationTracker = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      company: 'TechCorp',
      position: 'Senior Developer',
      status: 'pending',
      date: '2023-07-15'
    },
    {
      id: 2,
      company: 'FinanceHub',
      position: 'Tech Lead',
      status: 'interview',
      date: '2023-07-18'
    },
    {
      id: 3,
      company: 'StartupX',
      position: 'Full Stack Developer',
      status: 'offer',
      date: '2023-07-20'
    },
    {
      id: 4,
      company: 'BigTech',
      position: 'Software Architect',
      status: 'rejected',
      date: '2023-07-10'
    }
  ]);

  const [stats] = useState({
    total: 15,
    interviews: 5,
    waiting: 8
  });

  const [filters, setFilters] = useState({
    search: '',
    company: 'all'
  });

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('applicationId', id.toString());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, status) => {
    e.preventDefault();
    const applicationId = parseInt(e.dataTransfer.getData('applicationId'));
    
    setApplications(prev => prev.map(app => 
      app.id === applicationId ? { ...app, status } : app
    ));
  };

  const handleFilterChange = (e) => {
    setFilters(prev => ({
      ...prev,
      company: e.target.value
    }));
  };

  const handleSearch = (e) => {
    setFilters(prev => ({
      ...prev,
      search: e.target.value
    }));
  };

  return {
    applications,
    stats,
    filters,
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleFilterChange,
    handleSearch
  };
};
