'use client';
import { useState } from 'react';

export const useEventsMain = () => {
  const [activeTab, setActiveTab] = useState('principal');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  return {
    activeTab,
    selectedEvent,
    showModal,
    handleTabChange,
    handleEventSelect,
    handleCloseModal
  };
};
