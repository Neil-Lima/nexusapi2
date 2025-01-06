'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faGlobe, faLock, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardInfo,
  CardType,
  CardMembers,
  CardCategory,
  JoinButton
} from '../styles/CommunitiesCardStyles';
import { useCommunitiesCard } from '../utils/CommunitiesCardUtils';

export default function CommunitiesCardComp({ community }) {
  const { theme } = useTheme();
  const router = useRouter();
  const { handleJoinCommunity, isParticipating } = useCommunitiesCard();

  const getTypeIcon = (type) => {
    switch(type) {
      case 'public': return faGlobe;
      case 'private': return faLock;
      case 'moderated': return faUserShield;
      default: return faGlobe;
    }
  };

  const handleCardClick = (e) => {
    e.preventDefault();
    router.push(`/communities/${community.id}`);
  };

  const handleJoinClick = (e) => {
    e.stopPropagation();
    handleJoinCommunity(community.id);
  };

  return (
    <CardContainer theme={theme} onClick={handleCardClick}>
      <CardImage>
        <img src={community.image} alt={community.name} />
      </CardImage>
      
      <CardContent>
        <CardTitle theme={theme}>{community.name}</CardTitle>
        
        <CardInfo>
          <CardType>
            <FontAwesomeIcon icon={getTypeIcon(community.type)} />
            {community.type}
          </CardType>
          
          <CardMembers>
            <FontAwesomeIcon icon={faUsers} />
            {community.members} membros
          </CardMembers>
          
          <CardCategory theme={theme}>
            {community.category}
          </CardCategory>
        </CardInfo>

        <JoinButton 
          theme={theme}
          participating={isParticipating(community.id)}
          onClick={handleJoinClick}
        >
          {isParticipating(community.id) ? 'Participando' : 'Participar'}
        </JoinButton>
      </CardContent>
    </CardContainer>
  );
}
