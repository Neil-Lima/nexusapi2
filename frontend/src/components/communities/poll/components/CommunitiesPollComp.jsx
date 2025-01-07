'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPoll, faCheck, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  PollContainer,
  PollHeader,
  PollTitle,
  PollQuestion,
  OptionsContainer,
  OptionItem,
  OptionBar,
  OptionText,
  OptionStats,
  VoteButton,
  PollFooter
} from '../styles/CommunitiesPollStyles';
import { useCommunitiesPoll } from '../utils/CommunitiesPollUtils';

export default function CommunitiesPollComp({ communityId, topicId }) {
  const { theme } = useTheme();
  const { 
    currentPoll, 
    hasVoted, 
    loading, 
    error,
    handleVote, 
    getTotalVotes 
  } = useCommunitiesPoll(communityId, topicId);

  if (loading) return <div>Carregando enquete...</div>;
  if (error) return <div>Erro ao carregar enquete: {error}</div>;
  if (!currentPoll) return null;

  const totalVotes = getTotalVotes();

  return (
    <PollContainer theme={theme}>
      <PollHeader>
        <PollTitle theme={theme}>
          <FontAwesomeIcon icon={faPoll} /> Enquete
        </PollTitle>
      </PollHeader>

      <PollQuestion>{currentPoll.question}</PollQuestion>

      <OptionsContainer>
        {currentPoll.options.map((option, index) => (
          <OptionItem key={index} theme={theme}>
            <OptionBar 
              percentage={(option.votes.length / totalVotes) * 100}
              theme={theme}
              voted={hasVoted}
            />
            <OptionText>{option.option}</OptionText>
            {hasVoted && (
              <OptionStats>
                <span>{Math.round((option.votes.length / totalVotes) * 100)}%</span>
                <span>{option.votes.length} votos</span>
              </OptionStats>
            )}
            {!hasVoted && (
              <VoteButton 
                onClick={() => handleVote(index)}
                theme={theme}
              >
                <FontAwesomeIcon icon={faCheck} />
              </VoteButton>
            )}
          </OptionItem>
        ))}
      </OptionsContainer>

      <PollFooter>
        <FontAwesomeIcon icon={faUsers} />
        {totalVotes} votos totais
      </PollFooter>
    </PollContainer>
  );
}
