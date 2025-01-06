// CommunitiesPollUtils.js
'use client';
import { useState } from 'react';

export const useCommunitiesPoll = () => {
  const [hasVoted, setHasVoted] = useState(false);
  const [currentPoll] = useState({
    id: 1,
    question: "Qual seu gênero de anime favorito?",
    options: [
      { id: 1, text: "Shonen", votes: 450 },
      { id: 2, text: "Seinen", votes: 280 },
      { id: 3, text: "Shoujo", votes: 320 },
      { id: 4, text: "Mecha", votes: 150 }
    ]
  });

  const handleVote = (optionId) => {
    setHasVoted(true);
    // Lógica para computar voto
  };

  const getTotalVotes = () => {
    return currentPoll.options.reduce((acc, curr) => acc + curr.votes, 0);
  };

  return {
    currentPoll,
    handleVote,
    hasVoted,
    getTotalVotes
  };
};
