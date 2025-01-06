'use client'
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '../../context/theme/ThemeContext';
import { GradientBackground } from '../../components/profileuser/styles/ProfileuserStyle';
import { ProfileuserHeaderComp } from '../../components/profileuser/components/ProfileuserHeaderComp';
import { ProfileuserNavigationComp } from '../../components/profileuser/components/ProfileuserNavigationComp';
import { ProfileuserStatisticsComp } from '../../components/profileuser/components/ProfileuserStatisticsComp';
import { ProfileuserInterestsComp } from '../../components/profileuser/components/ProfileuserInterestsComp';
import { initialPosts } from '../../components/profileuser/utils/ProfileuserUtils';
import MessengerWindowComp from '@/shared/messenger/MessengerWindowComp';

export default function ProfileUserPage() {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState('posts');
  const [posts, setPosts] = useState(initialPosts);
  const [showAllFriends, setShowAllFriends] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <GradientBackground theme={theme}>
      <Container>
        <ProfileuserHeaderComp />
        <Row>
          <Col md={8}>
            <ProfileuserNavigationComp 
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              theme={theme}
              posts={posts}
              setPosts={setPosts}
              showAllFriends={showAllFriends}
              setShowAllFriends={setShowAllFriends}
            />
          </Col>
          <Col md={4}>
            <ProfileuserStatisticsComp />
            <ProfileuserInterestsComp />
          </Col>
        </Row>
      </Container>
      <MessengerWindowComp />
    </GradientBackground>
  );
}
