// frontend/src/components/suggestions/friend/components/SuggestionsFriendComp.jsx
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
import { useSuggestions } from '../utils/SuggestionsUtils';

function SuggestionsFriendComp() {
  const { theme } = useTheme();
  const { suggestions, handleAddFriend, handleIgnoreSuggestion } = useSuggestions();

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
                  <ActionButton theme={theme} onClick={() => handleAddFriend(suggestion.id)}>
                    <FontAwesomeIcon icon={faUserPlus} />
                  </ActionButton>
                  <ActionButton 
                    theme={theme} 
                    data-danger="true" 
                    onClick={() => handleIgnoreSuggestion(suggestion.id)}
                  >
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
