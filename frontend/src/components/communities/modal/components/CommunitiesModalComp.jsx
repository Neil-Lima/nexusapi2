'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import CommunitiesCreateComp from '../../create/components/CommunitiesCreateComp';
import {
  StyledModal,
  ModalHeader,
  CloseButton
} from '../styles/CommunitiesModalStyles';
import { useCommunitiesModal } from '../utils/CommunitiesModalUtils';

export default function CommunitiesModalComp({ show, onClose }) {
  const { theme } = useTheme();
  const { loading, error, handleSubmit } = useCommunitiesModal();

  const handleCreateSuccess = async (formData) => {
    const success = await handleSubmit(formData);
    if (success) {
      onClose();
    }
  };

  return (
    <StyledModal
      show={show}
      onHide={onClose}
      size="lg"
      centered
      theme={theme}
    >
      <ModalHeader theme={theme}>
        <CloseButton onClick={onClose} theme={theme}>
          <FontAwesomeIcon icon={faTimes} />
        </CloseButton>
      </ModalHeader>
      
      {error && (
        <div style={{ color: 'red', padding: '10px 20px' }}>
          {error}
        </div>
      )}

      <CommunitiesCreateComp 
        onSubmit={handleCreateSuccess}
        loading={loading}
      />
    </StyledModal>
  );
}
