'use client';
import React from 'react';
import { Card, Form, InputGroup, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { StyledCard, StyledButton } from './styles/GroupStyles';
import GroupCardComp from './GroupCardComp';
import { useTheme } from '@/context/theme/ThemeContext';

function GroupListComp({ 
  showModal, 
  handleModalShow, 
  searchTerm, 
  setSearchTerm, 
  filteredGroups 
}) {
  const { theme } = useTheme();

  return (
    <StyledCard>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Grupos</h2>
          <StyledButton onClick={handleModalShow} theme={theme}>
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            Criar Grupo
          </StyledButton>
        </div>
        <InputGroup className="mb-3">
          <InputGroup.Text>
            <FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>
          <Form.Control
            placeholder="Buscar grupos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
        <Row>
          {filteredGroups.map((group) => (
            <Col md={6} key={group.id}>
              <GroupCardComp group={group} />
            </Col>
          ))}
        </Row>
      </Card.Body>
    </StyledCard>
  );
}

export default GroupListComp;
