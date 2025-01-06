'use client'
import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faImages, faVideo } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import { StyledCard, InfoItem } from '../styles/ProfileuserStyle';
import { statistics } from '../utils/ProfileuserUtils';

export function ProfileuserStatisticsComp() {
  const { theme } = useTheme();

  return (
    <StyledCard>
      <Card.Body>
        <Card.Title>Estatísticas</Card.Title>
        <InfoItem theme={theme}>
          <FontAwesomeIcon icon={faUserFriends} /> {statistics.connections}
        </InfoItem>
        <InfoItem theme={theme}>
          <FontAwesomeIcon icon={faImages} /> {statistics.photos}
        </InfoItem>
        <InfoItem theme={theme}>
          <FontAwesomeIcon icon={faVideo} /> {statistics.videos}
        </InfoItem>
      </Card.Body>
    </StyledCard>
  );
}
