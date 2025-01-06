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
  const { community, handleJoin, handleLike, handleShare } = useCommunitiesDetail(id);

  if (!community) return null;

  return (
    <Container>
      <Row>
        <Col lg={8}>
          <DetailContainer theme={theme}>
            <DetailHeader>
              <CommunityBanner src={community.banner} alt="Banner" />
              <CommunityAvatar src={community.avatar} alt={community.name} theme={theme} />
              <CommunityInfo>
                <CommunityTitle>{community.name}</CommunityTitle>
                <CommunityStats>
                  <StatItem theme={theme}>
                    <FontAwesomeIcon icon={faUsers} />
                    {community.members} membros
                  </StatItem>
                  <StatItem theme={theme}>
                    <FontAwesomeIcon icon={faGlobe} />
                    {community.language}
                  </StatItem>
                  <StatItem theme={theme}>
                    <FontAwesomeIcon icon={faCalendar} />
                    Criada em {community.createdAt}
                  </StatItem>
                  <StatItem theme={theme}>
                    <FontAwesomeIcon icon={faMapMarker} />
                    {community.location}
                  </StatItem>
                </CommunityStats>
              </CommunityInfo>
            </DetailHeader>

            <DetailContent>
              <ActionButtons>
                <ActionButton onClick={handleJoin} theme={theme} primary>
                  <FontAwesomeIcon icon={faUsers} /> Participar
                </ActionButton>
                <ActionButton onClick={handleLike} theme={theme}>
                  <FontAwesomeIcon icon={faHeart} /> Curtir
                </ActionButton>
                <ActionButton onClick={handleShare} theme={theme}>
                  <FontAwesomeIcon icon={faShare} /> Compartilhar
                </ActionButton>
              </ActionButtons>

              <DetailSection>
                <h3>Sobre a Comunidade</h3>
                <p>{community.description}</p>
              </DetailSection>

              <CommunitiesForumComp />
              <CommunitiesPollComp />
            </DetailContent>
          </DetailContainer>
        </Col>

        <Col lg={4}>
          <OwnerSection theme={theme}>
            <h3>
              <FontAwesomeIcon icon={faCrown} /> Dono
            </h3>
            <OwnerInfo theme={theme}>
              <img src={community.owner.avatar} alt={community.owner.name} />
              <div>
                <h4>{community.owner.name}</h4>
                <span>Desde {community.owner.since}</span>
              </div>
            </OwnerInfo>
          </OwnerSection>
          
          <CommunitiesMembersComp />
          <CommunitiesRelatedComp />
        </Col>
      </Row>
    </Container>
  );
}
