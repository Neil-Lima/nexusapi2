'use client';
import { useState } from 'react';

const mockEvents = [
  {
    id: 1,
    title: 'Workshop de Design',
    date: '2024-01-15',
    time: '14:00',
    location: 'São Paulo, SP'
  },
  {
    id: 2,
    title: 'Meetup de Tecnologia',
    date: '2024-01-15',
    time: '19:00',
    location: 'São Paulo, SP'
  },
  {
    id: 3,
    title: 'Conferência de Marketing',
    date: '2024-01-16',
    time: '09:00',
    location: 'Rio de Janeiro, RJ'
  }
];

export const useEventsCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events] = useState(mockEvents);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleEventClick = (event) => {
    console.log('Evento selecionado:', event);
  };

  return {
    selectedDate,
    events,
    handleDateChange,
    handleEventClick
  };
};
