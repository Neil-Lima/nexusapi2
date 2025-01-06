'use client';
import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUserMinus, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import { FriendItem, StyledButton } from '../styles/FriendsCardStyles';
import { handleFriendAction, getActionButtonProps } from '../utils/FriendsCardUtils';

function FriendsCardComp({ friend, onToggleFriend }) {
  const { theme } = useTheme();
  const actionProps = getActionButtonProps(friend.isFriend);

  return (
    <FriendItem>
      <Card.Body>
        <div className="d-flex flex-column align-items-center text-center">
          <img 
            src={friend.image} 
            alt={friend.name} 
            className="rounded-circle" 
            style={{width: '100px', height: '100px', marginBottom: '15px'}} 
          />
          <h5>{friend.name}</h5>
          <div className="mt-3">
            <StyledButton theme={theme} className="me-2">
              <FontAwesomeIcon icon={faEnvelope} />
            </StyledButton>
            <StyledButton 
              {...actionProps}
              theme={theme}
              onClick={() => handleFriendAction(friend.id, friend.isFriend, onToggleFriend)}
            >
              <FontAwesomeIcon icon={actionProps.icon} />
            </StyledButton>
          </div>
        </div>
      </Card.Body>
    </FriendItem>
  );
}

export default FriendsCardComp;
