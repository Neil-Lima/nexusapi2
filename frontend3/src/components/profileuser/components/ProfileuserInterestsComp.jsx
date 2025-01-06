import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faMusic, faPlane, faUtensils, faImages } from '@fortawesome/free-solid-svg-icons';
import { StyledCard } from '../styles/ProfileuserStyle';

export function ProfileuserInterestsComp() {
  const interests = [
    { icon: faBook, text: 'Literatura' },
    { icon: faMusic, text: 'Música Indie' },
    { icon: faPlane, text: 'Viagens' },
    { icon: faUtensils, text: 'Gastronomia' },
    { icon: faImages, text: 'Fotografia' }
  ];

  return (
    <StyledCard>
      <Card.Body>
        <Card.Title>Interesses</Card.Title>
        <ListGroup variant="flush">
          {interests.map((interest, index) => (
            <ListGroup.Item key={index} style={{background: 'transparent', color: '#ffffff'}}>
              <FontAwesomeIcon icon={interest.icon} style={{marginRight: '10px'}} />
              {interest.text}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </StyledCard>
  );
}
