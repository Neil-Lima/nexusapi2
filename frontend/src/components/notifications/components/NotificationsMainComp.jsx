'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { MainContainer, ContentWrapper } from '../styles/NotificationsMainStyles';
import { useNotificationsMain } from '../utils/NotificationsMainUtils';
import NotificationsHeaderComp from './NotificationsHeaderComp';
import NotificationsFilterComp from './NotificationsFilterComp';
import NotificationsListComp from './NotificationsListComp';
import ProfileStatsCardComp from '@/shared/profile/components/ProfileStatsCardComp';
import ProfileCardComp from '@/shared/profile/components/card/components/ProfileCardComp';
import MenuListComp from '@/shared/profile/components/MenuListComp';

const NotificationsMainComp = () => {
  const { theme } = useTheme();
  const { unreadCount } = useNotificationsMain();

  return (
    <MainContainer theme={theme}>
      <Container>
        <Row>
        <Col lg={3}>
           <ProfileCardComp theme={theme}/>
           <ProfileStatsCardComp theme={theme}/>
           <MenuListComp   theme={theme}/> 
         </Col>
          <Col>
            <ContentWrapper>
              <NotificationsHeaderComp unreadCount={unreadCount} />
              <NotificationsFilterComp />
              <NotificationsListComp />
            </ContentWrapper>
          </Col>
        </Row>
      </Container>
    </MainContainer>
  );
};

export default NotificationsMainComp;
