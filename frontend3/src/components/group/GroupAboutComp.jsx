'use client';
import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faGlobe, faLock, faInfoCircle, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Member } from './styles/GroupStyles';

function GroupAboutComp({ group }) {
  return (
    <>
      <h4>Sobre o Grupo</h4>
      <p>{group.description}</p>
      
      <h5>Detalhes</h5>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <FontAwesomeIcon icon={faUsers} /> {group.members.length} membros
        </ListGroup.Item>
        <ListGroup.Item>
          <FontAwesomeIcon icon={group.privacy === 'Público' ? faGlobe : faLock} /> {group.privacy}
        </ListGroup.Item>
        <ListGroup.Item>
          <FontAwesomeIcon icon={faInfoCircle} /> Categoria: {group.category}
        </ListGroup.Item>
        <ListGroup.Item>
          <FontAwesomeIcon icon={faCalendarAlt} /> 
          Criado em: {new Date(group.createdAt).toLocaleDateString()}
        </ListGroup.Item>
      </ListGroup>

      <h5 className="mt-4">Administradores</h5>
      {group.admins.map((admin) => (
        <Member key={admin.id}>
          <img src={admin.avatar} alt={admin.name} />
          <div>
            <h6>{admin.name}</h6>
            <Badge bg="danger">Administrador</Badge>
          </div>
        </Member>
      ))}

      <h5 className="mt-4">Moderadores</h5>
      {group.moderators.map((mod) => (
        <Member key={mod.id}>
          <img src={mod.avatar} alt={mod.name} />
          <div>
            <h6>{mod.name}</h6>
            <Badge bg="warning">Moderador</Badge>
          </div>
        </Member>
      ))}
    </>
  );
}

export default GroupAboutComp;
