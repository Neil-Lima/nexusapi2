'use client';
import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserPlus, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { StyledCard, StyledButton } from './styles/GroupStyles';
import { useTheme } from '@/context/theme/ThemeContext';

function GroupCardComp({ group }) {
  const { theme } = useTheme();

  return (
    <StyledCard>
      <Card.Img variant="top" src={group.image} alt={group.name} />
      <Card.Body>
        <Card.Title>{group.name}</Card.Title>
        <Card.Text>{group.description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <Badge bg="primary" pill>
            <FontAwesomeIcon icon={faUsers} className="me-2" />
            {group.members} membros
          </Badge>
          <Badge bg="secondary" pill>{group.category}</Badge>
        </div>
        <div className="mt-3">
          <StyledButton theme={theme} size="sm" className="me-2">
            <FontAwesomeIcon icon={faUserPlus} className="me-2" />
            Participar
          </StyledButton>
          <StyledButton theme={theme} size="sm" variant="outline-primary">
            <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
            Detalhes
          </StyledButton>
        </div>
      </Card.Body>
    </StyledCard>
  );
}

export default GroupCardComp;
