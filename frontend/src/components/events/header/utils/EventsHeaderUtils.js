'use client';
import { useState } from 'react';

export const useEventsHeader = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleCreateEvent = () => {
    setShowCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setShowCreateModal(false);
  };

  return {
    showCreateModal,
    handleCreateEvent,
    handleCloseCreateModal
  };
};
