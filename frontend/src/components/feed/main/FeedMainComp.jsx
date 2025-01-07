'use client';
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { GradientBackground } from '@/styles/GlobalStyles';
import styled from 'styled-components';

// Componentes Globais
import NavMenuComp from '@/shared/navbar/components/NavMenuComp';
import ProfileCardComp from '@/shared/profile/components/card/components/ProfileCardComp';
import StoriesComp from '@/shared/stories/StoriesComp';
import CreatePostComp from '@/shared/post/create-card/components/CreatePostComp';
import PostCardComp from '@/shared/post/card/components/PostCardComp';
import LoadMoreComp from '@/shared/loadmore/LoadMoreComp';
import SuggestionsFriendComp from '@/shared/suggestions/components/SuggestionsFriendComp';
import NewsLatestComp from '@/shared/news/components/NewsLatestComp';
import MessengerWindowComp from '@/shared/messenger/MessengerWindowComp';
import ProfileStatsCardComp from '@/shared/profile/components/ProfileStatsCardComp';
import MenuListComp from '@/shared/profile/components/MenuListComp';
import ProfileVisitorsComp from '@/shared/visitors/components/ProfileVisitorsComp';

const SidebarButton = styled(Button)`
  position: fixed;
  left: 20px;
  top: 80px;
  z-index: 1000;
  display: none;
  @media (max-width: 991px) {
    display: block;
  }
`;

const Sidebar = styled(Col)`
  transition: transform 0.3s ease-in-out;
  background: ${props => props.theme === 'dark' ? '#1a1a1a' : '#fff'};
  @media (max-width: 991px) {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    z-index: 999;
    padding: 80px 15px;
    transform: translateX(${props => props.isOpen ? '0' : '-100%'});
    box-shadow: ${props => props.isOpen ? '2px 0 5px rgba(0,0,0,0.2)' : 'none'};
  }
`;

export default function FeedMainComp() {
  const { theme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <NavMenuComp />
      <GradientBackground theme={theme}>     
        <SidebarButton 
          onClick={toggleSidebar}
          variant={theme === 'dark' ? 'light' : 'dark'}
        >
          {sidebarOpen ? '✕' : '☰'}
        </SidebarButton>
        <Container>
          <Row>
            <Sidebar lg={3} theme={theme} isOpen={sidebarOpen}>
              <ProfileCardComp theme={theme}/>
              <ProfileStatsCardComp theme={theme}/>
              <MenuListComp theme={theme} /> 
            </Sidebar>
            <Col lg={6}>
              <ProfileVisitorsComp />
              <StoriesComp />
              <CreatePostComp />
              <PostCardComp />
              <LoadMoreComp />
            </Col>
            <Col lg={3}>
              <SuggestionsFriendComp />
              <NewsLatestComp />
            </Col>
          </Row>
        </Container>
        <MessengerWindowComp />
      </GradientBackground>
    </>
  );
}
