'use client';
import React from 'react';
import { Badge, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Member, StyledButton } from './styles/GroupStyles';
import { useTheme } from '@/context/theme/ThemeContext';

function GroupMembersComp({ admins, moderators, members }) {
  const { theme } = useTheme();

  return (
    <>
      <h4>Administradores</h4>
      {admins.map((admin) => (
        <Member key={admin.id}>
          <img src={admin.avatar} alt={admin.name} />
          <div>
            <h5>{admin.name}</h5>
            <Badge bg="danger">Administrador</Badge>
          </div>
        </Member>
      ))}

      <h4 className="mt-4">Moderadores</h4>
      {moderators.map((mod) => (
        <Member key={mod.id}>
          <img src={mod.avatar} alt={mod.name} />
          <div>
            <h5>{mod.name}</h5>
            <Badge bg="warning">Moderador</Badge>
          </div>
        </Member>
      ))}

      <h4 className="mt-4">Membros</h4>
      <StyledButton theme={theme} className="mb-3">
        <FontAwesomeIcon icon={faUserPlus} /> Convidar Membros
      </StyledButton>
      <Row>
        {members.map((member) => (
          <Col key={member.id} xs={6} md={4} lg={3} className="mb-3">
            <Member>
              <img src={member.avatar} alt={member.name} />
              <div>
                <h6>{member.name}</h6>
              </div>
            </Member>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default GroupMembersComp;
