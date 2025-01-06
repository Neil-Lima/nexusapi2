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

export default function CommunitiesModalComp({ show, onClose }) {
  const { theme } = useTheme();

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
      <CommunitiesCreateComp onClose={onClose} />
    </StyledModal>
  );
}
