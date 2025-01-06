'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faPhone, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import {
  HeaderContainer,
  ContactInfo,
  Avatar,
  ActionButtons,
  ActionButton
} from '../styles/MessagesHeaderStyles';
import { useMessagesHeader } from '../utils/MessagesHeaderUtils';

export default function MessagesHeaderComp({ contact, onStartVideoCall }) {
  const { handleAudioCall, handleOpenMenu } = useMessagesHeader();

  return (
    <HeaderContainer>
      <ContactInfo>
        <Avatar $online={contact?.online}>
          <img src={contact?.avatar} alt={contact?.name} />
        </Avatar>
        <div>
          <h6>{contact?.name}</h6>
          <small>{contact?.online ? 'Online' : 'Offline'}</small>
        </div>
      </ContactInfo>
      
      <ActionButtons>
        <ActionButton onClick={onStartVideoCall}>
          <FontAwesomeIcon icon={faVideo} />
        </ActionButton>
        <ActionButton onClick={handleAudioCall}>
          <FontAwesomeIcon icon={faPhone} />
        </ActionButton>
        <ActionButton onClick={handleOpenMenu}>
          <FontAwesomeIcon icon={faEllipsisV} />
        </ActionButton>
      </ActionButtons>
    </HeaderContainer>
  );
}
