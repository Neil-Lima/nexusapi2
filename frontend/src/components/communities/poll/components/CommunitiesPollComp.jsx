// CommunitiesPollComp.jsx
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

export default function CommunitiesPollComp() {
  const { theme } = useTheme();
  const { currentPoll, handleVote, hasVoted, getTotalVotes } = useCommunitiesPoll();

  return (
    <PollContainer theme={theme}>
      <PollHeader>
        <PollTitle theme={theme}>
          <FontAwesomeIcon icon={faPoll} /> Enquete
        </PollTitle>
      </PollHeader>

      <PollQuestion>{currentPoll.question}</PollQuestion>

      <OptionsContainer>
        {currentPoll.options.map((option) => (
          <OptionItem key={option.id} theme={theme}>
            <OptionBar 
              percentage={option.votes / getTotalVotes() * 100}
              theme={theme}
              voted={hasVoted}
            />
            <OptionText>{option.text}</OptionText>
            {hasVoted && (
              <OptionStats>
                <span>{Math.round(option.votes / getTotalVotes() * 100)}%</span>
                <span>{option.votes} votos</span>
              </OptionStats>
            )}
            {!hasVoted && (
              <VoteButton 
                onClick={() => handleVote(option.id)}
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
        {getTotalVotes()} votos totais
      </PollFooter>
    </PollContainer>
  );
}
