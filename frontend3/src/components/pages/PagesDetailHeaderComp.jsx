'use client'
import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import Image from 'next/image';
import { useTheme } from '@/context/theme/ThemeContext';
import { 
  StyledCard, 
  StyledButton, 
  CoverPhoto, 
  ProfilePhoto, 
  PageTitle, 
  PageCategory,
  HeaderStats,
  StatItem,
  HeaderActions,
  HeaderInfo,
  PageDescription,
  CategoryBadge,
  ProfileSection
} from './styles/PagesStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faShare, faBell, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

export default function PagesDetailHeaderComp({ pageData, setShowChat }) {
  const { theme } = useTheme();

  return (
    <StyledCard theme={theme}>
      <CoverPhoto src={pageData.coverPhoto} theme={theme}>
        <ProfileSection>
          {pageData.profilePhoto && pageData.profilePhoto !== "" && (
            <Image 
              src={pageData.profilePhoto} 
              alt={pageData.name}
              width={180}
              height={180}
              className="profile-photo"
              priority
            />
          )}
        </ProfileSection>
      </CoverPhoto>
      <Card.Body>
        <Row>
          <Col md={8}>
            <HeaderInfo>
              <PageTitle theme={theme}>
                {pageData.name}
                <CategoryBadge theme={theme}>{pageData.category}</CategoryBadge>
              </PageTitle>
              <PageDescription>{pageData.description}</PageDescription>
              <HeaderStats>
                <StatItem>
                  <span className="number">{pageData.followers.toLocaleString()}</span>
                  <span className="label">Seguidores</span>
                </StatItem>
                <StatItem>
                  <span className="number">{pageData.likes.toLocaleString()}</span>
                  <span className="label">Curtidas</span>
                </StatItem>
                <StatItem>
                  <span className="number">{pageData.posts.toLocaleString()}</span>
                  <span className="label">Posts</span>
                </StatItem>
              </HeaderStats>
            </HeaderInfo>
          </Col>
          <Col md={4}>
            <HeaderActions>
              <StyledButton theme={theme} className="main-action">
                <FontAwesomeIcon icon={faUser} className="me-2" />
                Seguir
              </StyledButton>
              <StyledButton theme={theme} variant="secondary" onClick={() => setShowChat(true)}>
                <FontAwesomeIcon icon={faEnvelope} />
              </StyledButton>
              <StyledButton theme={theme} variant="secondary">
                <FontAwesomeIcon icon={faBell} />
              </StyledButton>
              <StyledButton theme={theme} variant="secondary">
                <FontAwesomeIcon icon={faShare} />
              </StyledButton>
              <StyledButton theme={theme} variant="secondary">
                <FontAwesomeIcon icon={faEllipsisV} />
              </StyledButton>
            </HeaderActions>
          </Col>
        </Row>
      </Card.Body>
    </StyledCard>
  );
}
