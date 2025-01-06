'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart, 
  faComments, 
  faCircle, 
  faSearch,
  faFilter
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  MatchesContainer,
  MatchesHeader,
  SearchBar,
  FilterButton,
  MatchesList,
  MatchItem,
  MatchAvatar,
  MatchInfo,
  MatchName,
  LastMessage,
  OnlineStatus,
  MatchActions,
  ActionButton,
  NoMatches
} from '../styles/DatingMatchesListStyles';
import { useDatingMatchesList } from '../utils/DatingMatchesListUtils';

export default function DatingMatchesListComp() {
  const { theme } = useTheme();
  const {
    matches,
    searchTerm,
    handleSearchChange,
    handleMatchClick,
    handleMessageClick,
    handleLikeMatch,
    filteredMatches
  } = useDatingMatchesList();

  return (
    <MatchesContainer theme={theme}>
      <MatchesHeader>
        <h2>Seus Matches</h2>
        <span>{matches.length} conexões</span>
      </MatchesHeader>

      <SearchBar>
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          placeholder="Buscar matches..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <FilterButton theme={theme}>
          <FontAwesomeIcon icon={faFilter} />
        </FilterButton>
      </SearchBar>

      <MatchesList>
        {filteredMatches.length > 0 ? (
          filteredMatches.map((match) => (
            <MatchItem key={match.id} onClick={() => handleMatchClick(match.id)}>
              <MatchAvatar>
                <img src={match.avatar} alt={match.name} />
                <OnlineStatus online={match.online}>
                  <FontAwesomeIcon icon={faCircle} />
                </OnlineStatus>
              </MatchAvatar>

              <MatchInfo>
                <MatchName>{match.name}</MatchName>
                <LastMessage>
                  {match.lastMessage}
                  <span>{match.lastMessageTime}</span>
                </LastMessage>
              </MatchInfo>

              <MatchActions>
                <ActionButton 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMessageClick(match.id);
                  }}
                  theme={theme}
                >
                  <FontAwesomeIcon icon={faComments} />
                </ActionButton>
                <ActionButton 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLikeMatch(match.id);
                  }}
                  theme={theme}
                  liked={match.liked}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </ActionButton>
              </MatchActions>
            </MatchItem>
          ))
        ) : (
          <NoMatches>
            <FontAwesomeIcon icon={faHeart} />
            <p>Nenhum match encontrado</p>
          </NoMatches>
        )}
      </MatchesList>
    </MatchesContainer>
  );
}
