'use client';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faCalendarAlt, faComments, faImage, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { GroupNav } from './styles/GroupStyles';

function GroupDetailNavComp({ activeTab, setActiveTab }) {
  return (
    <GroupNav variant="tabs" defaultActiveKey="feed" onSelect={(k) => setActiveTab(k)}>
      <Nav.Item>
        <Nav.Link eventKey="feed"><FontAwesomeIcon icon={faHome} /> Feed</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="members"><FontAwesomeIcon icon={faUsers} /> Membros</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="events"><FontAwesomeIcon icon={faCalendarAlt} /> Eventos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="discussions"><FontAwesomeIcon icon={faComments} /> Discussões</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="media"><FontAwesomeIcon icon={faImage} /> Mídia</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="about"><FontAwesomeIcon icon={faInfoCircle} /> Sobre</Nav.Link>
      </Nav.Item>
    </GroupNav>
  );
}

export default GroupDetailNavComp;
