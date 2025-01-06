'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  ConnectionsContainer,
  ConnectionsGrid,
  ConnectionCard,
  SuggestionsContainer
} from '../styles/UserTabConnectionsStyles';
import { useUserTabConnections } from '../utils/UserTabConnectionsUtils';

function UserTabConnectionsComp({ userId, isOwnProfile }) {
  const { theme } = useTheme();
  const { connections, suggestions, isLoading } = useUserTabConnections(userId);

  if (isLoading) return <div>Carregando conexões...</div>;

  return (
    <ConnectionsContainer theme={theme}>
      <h3>Amigos ({connections?.length || 0})</h3>
      <ConnectionsGrid>
        {connections?.map(friend => (
          <ConnectionCard key={friend._id} theme={theme}>
            <img src={friend.profileImage} alt={friend.nome} />
            <h4>{`${friend.nome} ${friend.sobrenome}`}</h4>
            <p>{friend.mutualFriends} amigos em comum</p>
          </ConnectionCard>
        ))}
      </ConnectionsGrid>

      {isOwnProfile && suggestions?.length > 0 && (
        <SuggestionsContainer theme={theme}>
          <h3>Sugestões de Amizade</h3>
          <ConnectionsGrid>
            {suggestions.map(suggestion => (
              <ConnectionCard key={suggestion._id} theme={theme}>
                <img src={suggestion.profileImage} alt={suggestion.nome} />
                <h4>{`${suggestion.nome} ${suggestion.sobrenome}`}</h4>
                <p>{suggestion.mutualFriends} amigos em comum</p>
                <button onClick={() => handleFriendRequest(suggestion._id)}>
                  Adicionar Amigo
                </button>
              </ConnectionCard>
            ))}
          </ConnectionsGrid>
        </SuggestionsContainer>
      )}
    </ConnectionsContainer>
  );
}

export default UserTabConnectionsComp;
