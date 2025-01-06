'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { MainContainer } from '../styles/UserMainStyles';
import UserHeaderComp from '../../header/components/UserHeaderComp';
import UserTabsComp from '../../tabs/components/UserTabsComp';
import UserExperienceComp from '../../experience/components/UserExperienceComp';
import { useUserMain } from '../utils/UserMainUtils';

function UserMainComp() {
  const { theme } = useTheme();
  const {
    loggedUser,
    profileUser,
    isOwnProfile,
    friendStatus,
    handleFriendAction,
    isLoading
  } = useUserMain();

  if (isLoading) return <div>Carregando...</div>;

  return (
    <>     
        <MainContainer theme={theme}>
      <Container>
        <Row>
          <Col lg={9}>
            <UserHeaderComp 
              user={profileUser}
              isOwnProfile={isOwnProfile}
              friendStatus={friendStatus}
              onFriendAction={handleFriendAction}
              theme={theme}
            />
            <UserTabsComp 
              user={profileUser}
              isOwnProfile={isOwnProfile}
              loggedUser={loggedUser}
              theme={theme}
            />
          </Col>
          <Col lg={3}>
            <UserExperienceComp 
              user={profileUser}
              isOwnProfile={isOwnProfile}
              theme={theme}
            />
          </Col>
        </Row>
      </Container>
    </MainContainer>
    </>

  );
}

export default UserMainComp;
