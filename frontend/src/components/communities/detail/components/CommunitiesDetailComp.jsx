'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCrown, 
  faGlobe, 
  faUsers, 
  faCalendar,
  faMapMarker,
  faHeart,
  faComment,
  faShare
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import CommunitiesMembersComp from '../../members/components/CommunitiesMembersComp';
import CommunitiesForumComp from '../../forum/components/CommunitiesForumComp';
import CommunitiesPollComp from '../../poll/components/CommunitiesPollComp';
import CommunitiesRelatedComp from '../../related/components/CommunitiesRelatedComp';
import {
  DetailContainer,
  DetailHeader,
  CommunityBanner,
  CommunityAvatar,
  CommunityInfo,
  CommunityTitle,
  CommunityStats,
  StatItem,
  DetailContent,
  DetailSection,
  OwnerSection,
  OwnerInfo,
  ActionButtons,
  ActionButton,
  SocialStats,
  SocialItem
} from '../styles/CommunitiesDetailStyles';
import { useCommunitiesDetail } from '../utils/CommunitiesDetailUtils';

export default function CommunitiesDetailComp({ id }) {
  const { theme } = useTheme();
  const { 
    community, 
    loading, 
    error, 
    handleJoin, 
    handleLeave 
  } = useCommunitiesDetail(id);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;
  if (!community) return <div>Comunidade não encontrada</div>;

  const isParticipating = community.members?.includes(id);

  return (
    <Container>
      <Row>
        <Col lg={8}>
          <DetailContainer theme={theme}>
            <DetailHeader>
              <CommunityBanner src={community.coverImage || '/default-cover.jpg'} alt="Banner" />
              <CommunityAvatar src={community.image || '/default-avatar.jpg'} alt={community.name} theme={theme} />
              <CommunityInfo>
                <CommunityTitle>{community.name}</CommunityTitle>
                <CommunityStats>
                  <StatItem theme={theme}>
                    <FontAwesomeIcon icon={faUsers} />
                    {community.stats?.totalMembers || 0} membros
                  </StatItem>
                  <StatItem theme={theme}>
                    <FontAwesomeIcon icon={faGlobe} />
                    {community.privacy}
                  </StatItem>
                  <StatItem theme={theme}>
                    <FontAwesomeIcon icon={faCalendar} />
                    Criada em {new Date(community.createdAt).toLocaleDateString()}
                  </StatItem>
                </CommunityStats>
              </CommunityInfo>
            </DetailHeader>

            <DetailContent>
              <ActionButtons>
                <ActionButton 
                  onClick={isParticipating ? handleLeave : handleJoin} 
                  theme={theme} 
                  primary
                >
                  <FontAwesomeIcon icon={faUsers} />
                  {isParticipating ? 'Sair' : 'Participar'}
                </ActionButton>
              </ActionButtons>

              <DetailSection>
                <h3>Sobre a Comunidade</h3>
                <p>{community.description}</p>
              </DetailSection>

              <CommunitiesForumComp communityId={id} />
              <CommunitiesPollComp communityId={id} />
            </DetailContent>
          </DetailContainer>
        </Col>

        <Col lg={4}>
          <OwnerSection theme={theme}>
            <h3>
              <FontAwesomeIcon icon={faCrown} /> Dono
            </h3>
            <OwnerInfo theme={theme}>
              <img src={community.owner?.profileImage || '/default-avatar.jpg'} alt={community.owner?.nome} />
              <div>
                <h4>{community.owner?.nome}</h4>
                <span>Desde {new Date(community.createdAt).toLocaleDateString()}</span>
              </div>
            </OwnerInfo>
          </OwnerSection>
          
          <CommunitiesMembersComp communityId={id} />
          <CommunitiesRelatedComp communityId={id} />
        </Col>
      </Row>
    </Container>
  );
}
