// EventsGridUtils.js
'use client';
import { useState } from 'react';

export const useEventsGrid = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [events] = useState([
    {
      id: 1,
      title: "Tech Conference 2024",
      date: "15/03/2024",
      time: "14:00",
      location: "São Paulo, SP",
      image: "https://picsum.photos/800/400?random=1",
      attendees: 250,
      category: "Tecnologia"
    },
    {
      id: 2,
      title: "Festival de Música",
      date: "20/04/2024",
      time: "16:00",
      location: "Rio de Janeiro, RJ",
      image: "https://picsum.photos/800/400?random=2",
      attendees: 500,
      category: "Entretenimento"
    },
    {
      id: 3,
      title: "Exposição de Arte",
      date: "10/05/2024",
      time: "10:00",
      location: "Curitiba, PR",
      image: "https://picsum.photos/800/400?random=3",
      attendees: 150,
      category: "Arte"
    },
    {
      id: 4,
      title: "Workshop de Design",
      date: "25/05/2024",
      time: "09:00",
      location: "Belo Horizonte, MG",
      image: "https://picsum.photos/800/400?random=4",
      attendees: 80,
      category: "Design"
    }
  ]);

  return {
    events,
    viewMode,
    setViewMode
  };
};
