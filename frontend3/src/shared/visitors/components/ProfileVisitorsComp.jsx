'use client';
import React from 'react';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  VisitorButton,
  VisitorsModalContainer,
  VisitorsList,
  VisitorItem,
  VisitorAvatar,
  VisitorInfo,
  VisitTime,
  ActionButton
} from '../styles/ProfileVisitorsStyles';
import { useProfileVisitors } from '../utils/ProfileVisitorsUtils';

export default function ProfileVisitorsComp() {
  const { theme } = useTheme();
  const { 
    visitors, 
    showModal, 
    handleShowModal, 
    handleCloseModal,
    handleAddFriend,
    handleViewProfile 
  } = useProfileVisitors();

  return (
    <>
      <VisitorButton onClick={handleShowModal} theme={theme}>
        <FontAwesomeIcon icon={faEye} />
        Visitantes do Perfil ({visitors.length})
      </VisitorButton>

      <Modal show={showModal} onHide={handleCloseModal} centered size="md">
        <VisitorsModalContainer theme={theme}>
          <Modal.Header closeButton>
            <h4>Visitantes Recentes</h4>
          </Modal.Header>
          
          <Modal.Body>
            <VisitorsList>
              {visitors.map(visitor => (
                <VisitorItem key={visitor.id} theme={theme}>
                  <VisitorAvatar src={visitor.avatar} alt={visitor.name} />
                  <VisitorInfo>
                    <h5>{visitor.name}</h5>
                    <VisitTime>{visitor.visitTime}</VisitTime>
                  </VisitorInfo>
                  <div>
                    {!visitor.isFriend && (
                      <ActionButton onClick={() => handleAddFriend(visitor.id)} theme={theme}>
                        <FontAwesomeIcon icon={faUserPlus} />
                      </ActionButton>
                    )}
                    <ActionButton onClick={() => handleViewProfile(visitor.id)} theme={theme}>
                      Ver Perfil
                    </ActionButton>
                  </div>
                </VisitorItem>
              ))}
            </VisitorsList>
          </Modal.Body>
        </VisitorsModalContainer>
      </Modal>
    </>
  );
}
