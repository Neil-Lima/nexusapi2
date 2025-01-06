'use client';
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  SuggestionsContainer,
  SuggestionItem,
  UserInfo,
  ActionButtons,
  ActionButton
} from '../styles/SuggestionsStyles';

function SuggestionsFriendComp() {
  const { theme } = useTheme();
  const suggestions = [
    {
      id: 1,
      name: 'João Silva',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      mutualFriends: 12
    },
    {
      id: 2,
      name: 'Maria Santos',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      mutualFriends: 8
    },
    {
      id: 3,
      name: 'Pedro Costa',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      mutualFriends: 15
    }
  ];

  return (
    <SuggestionsContainer theme={theme}>
      <Card>
        <Card.Header>
          <h5>Sugestões de Amizade</h5>
        </Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            {suggestions.map(suggestion => (
              <SuggestionItem key={suggestion.id} theme={theme}>
                <img src={suggestion.avatar} alt={suggestion.name} className="avatar" />
                <UserInfo theme={theme}>
                  <h6>{suggestion.name}</h6>
                  <small>{suggestion.mutualFriends} amigos em comum</small>
                </UserInfo>
                <ActionButtons>
                  <ActionButton theme={theme}>
                    <FontAwesomeIcon icon={faUserPlus} />
                  </ActionButton>
                  <ActionButton theme={theme} danger>
                    <FontAwesomeIcon icon={faTimes} />
                  </ActionButton>
                </ActionButtons>
              </SuggestionItem>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </SuggestionsContainer>
  );
}

export default SuggestionsFriendComp;
