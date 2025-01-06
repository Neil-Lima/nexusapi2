'use client';
import React from 'react';
import { Badge, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faClock } from '@fortawesome/free-solid-svg-icons';
import { Discussion, StyledButton } from './styles/GroupStyles';
import { useTheme } from '@/context/theme/ThemeContext';

function GroupDiscussionsComp({ discussions }) {
  const { theme } = useTheme();

  return (
    <>
      <StyledButton theme={theme} className="mb-3">
        <FontAwesomeIcon icon={faPlus} /> Nova Discussão
      </StyledButton>
      {discussions.map(discussion => (
        <Discussion key={discussion.id}>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h5>{discussion.title}</h5>
              <Badge bg="primary" pill>{discussion.replies} respostas</Badge>
            </div>
            <div className="d-flex align-items-center mt-2">
              <Image src={discussion.author.avatar} roundedCircle width={30} height={30} className="mr-2" />
              <span>{discussion.author.name}</span>
              <span className="mx-2">•</span>
              <small>
                <FontAwesomeIcon icon={faClock} /> 
                Última resposta: {new Date(discussion.lastReply).toLocaleString()}
              </small>
            </div>
            <StyledButton theme={theme} size="sm" className="mt-3">
              Ver Discussão
            </StyledButton>
          </div>
        </Discussion>
      ))}
    </>
  );
}

export default GroupDiscussionsComp;
