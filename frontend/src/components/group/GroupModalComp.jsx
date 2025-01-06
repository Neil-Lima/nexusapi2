'use client';
import React from 'react';
import { Modal, Form } from 'react-bootstrap';
import { StyledModal, StyledButton, StyledFormControl } from './styles/GroupStyles';
import { useTheme } from '@/context/theme/ThemeContext';

function GroupModalComp({
  showModal,
  handleModalClose,
  handleCreateGroup,
  handleInputChange,
  handleImageUpload,
  newGroup
}) {
  const { theme } = useTheme();

  return (
    <StyledModal show={showModal} onHide={handleModalClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Criar Novo Grupo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleCreateGroup}>
          <Form.Group className="mb-3">
            <Form.Label>Nome do Grupo</Form.Label>
            <StyledFormControl
              type="text"
              placeholder="Digite o nome do grupo"
              name="name"
              value={newGroup.name}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descrição</Form.Label>
            <StyledFormControl
              as="textarea"
              rows={3}
              placeholder="Descreva o grupo"
              name="description"
              value={newGroup.description}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Categoria</Form.Label>
            <StyledFormControl
              type="text"
              placeholder="Digite a categoria do grupo"
              name="category"
              value={newGroup.category}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Imagem do Grupo</Form.Label>
            <StyledFormControl
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </Form.Group>
          <StyledButton type="submit" theme={theme}>
            Criar Grupo
          </StyledButton>
        </Form>
      </Modal.Body>
    </StyledModal>
  );
}

export default GroupModalComp;
