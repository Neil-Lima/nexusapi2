'use client'

import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { StyledResultModal } from '../styles/LoginResultModalStyles';

function LoginResultModalComp({ showResultModal, setShowResultModal, resultModalContent }) {
  return (
    <StyledResultModal show={showResultModal} onHide={() => setShowResultModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{resultModalContent.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{resultModalContent.message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowResultModal(false)}>
          Fechar
        </Button>
      </Modal.Footer>
    </StyledResultModal>
  );
}

export default LoginResultModalComp;
