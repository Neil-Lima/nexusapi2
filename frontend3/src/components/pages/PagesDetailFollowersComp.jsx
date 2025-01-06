'use client'
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { useTheme } from '@/context/theme/ThemeContext';
import { FollowerItem, FollowerAvatar, StyledButton } from './styles/PagesStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { followers } from './utils/PagesUtils';

export default function PagesDetailFollowersComp() {
  const { theme } = useTheme();

  return (
    <Row>
      {followers.map(follower => (
        <Col md={6} lg={4} key={follower.id} className="mb-4">
          <FollowerItem theme={theme}>
            {follower.avatar && follower.avatar !== "" && (
              <Image 
                src={follower.avatar} 
                alt={follower.name}
                width={80}
                height={80}
                className="rounded-circle mb-3"
              />
            )}
            <div>
              <h5>{follower.name}</h5>
              <p className="text-muted">{follower.role}</p>
              <StyledButton size="sm" theme={theme}>
                <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                Follow
              </StyledButton>
            </div>
          </FollowerItem>
        </Col>
      ))}
    </Row>
  );
}
