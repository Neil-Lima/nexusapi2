'use client';
import React from 'react';
import { Modal, Form } from 'react-bootstrap';
import { StyledModal, StyledButton, StyledFormControl } from './styles/GroupStyles';
import { useTheme } from '@/context/theme/ThemeContext';

function GroupDetailModalComp({ showInviteModal, setShowInviteModal, handleInvite }) {
  const { theme } = useTheme();

  return (
    <StyledModal show={showInviteModal} onHide={() => setShowInviteModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Convidar Membros</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleInvite}>
          <Form.Group className="mb-3">
            <Form.Label>E-mail</Form.Label>
            <StyledFormControl type="email" placeholder="Digite o e-mail do convidado" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mensagem (opcional)</Form.Label>
            <StyledFormControl as="textarea" rows={3} placeholder="Digite uma mensagem personalizada" />
          </Form.Group>
          <StyledButton theme={theme} type="submit">
            Enviar Convite
          </StyledButton>
        </Form>
      </Modal.Body>
    </StyledModal>
  );
}

export default GroupDetailModalComp;
