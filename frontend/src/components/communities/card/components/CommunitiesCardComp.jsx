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
  const { handleJoinCommunity, handleLeaveCommunity, isParticipating, loading } = useCommunitiesCard();

  const getTypeIcon = (type) => {
    switch(type) {
      case 'public': return faGlobe;
      case 'private': return faLock;
      case 'moderated': return faUserShield;
      default: return faGlobe;
    }
  };

  const handleCardClick = () => {
    router.push(`/communities/${community._id}`);
  };

  const handleJoinClick = async (e) => {
    e.stopPropagation();
    try {
      if (isParticipating(community._id)) {
        await handleLeaveCommunity(community._id);
      } else {
        await handleJoinCommunity(community._id);
      }
    } catch (error) {
      console.error('Erro ao interagir com a comunidade:', error);
    }
  };

  return (
    <CardContainer theme={theme} onClick={handleCardClick}>
      <CardImage>
        <img src={community.image || '/default-community.jpg'} alt={community.name} />
      </CardImage>
      
      <CardContent>
        <CardTitle theme={theme}>{community.name}</CardTitle>
        
        <CardInfo>
          <CardType>
            <FontAwesomeIcon icon={getTypeIcon(community.privacy)} />
            {community.privacy}
          </CardType>
          
          <CardMembers>
            <FontAwesomeIcon icon={faUsers} />
            {community.stats?.totalMembers || 0} membros
          </CardMembers>
          
          <CardCategory theme={theme}>
            {community.category}
          </CardCategory>
        </CardInfo>

        <JoinButton 
          theme={theme}
          participating={isParticipating(community._id)}
          onClick={handleJoinClick}
          disabled={loading}
        >
          {loading ? 'Processando...' : isParticipating(community._id) ? 'Participando' : 'Participar'}
        </JoinButton>
      </CardContent>
    </CardContainer>
  );
}
