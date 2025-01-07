'use client';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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

const ToggleButton = styled.button`
  display: none;
  position: fixed;
  left: 10px;
  top: 70px;
  z-index: 1100;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: ${props => props.theme === 'dark' ? '#2c2c2c' : '#ffffff'};
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#2c2c2c'};

  @media (max-width: 991px) {
    display: block;
  }
`;

const SidebarColumn = styled(Col)`
  @media (max-width: 991px) {
    position: fixed;
    top: 0;
    left: ${props => props.isOpen ? '0' : '-100%'};
    height: 100vh;
    width: 300px;
    z-index: 1000;
    padding-top: 80px;
    transition: all 0.3s ease;
    overflow-y: auto;
  }
`;

const Overlay = styled.div`
  display: none;
  @media (max-width: 991px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 999;
  }
`;

export default function FeedMainComp() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavMenuComp />
      <GradientBackground theme={theme}>     
        <ToggleButton onClick={() => setIsOpen(!isOpen)} theme={theme}>
          {isOpen ? '✕' : '☰'}
        </ToggleButton>
        
        <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />
        
        <Container>
          <Row>
            <SidebarColumn lg={3} isOpen={isOpen}>
              <ProfileCardComp theme={theme}/>
              <ProfileStatsCardComp theme={theme}/>
              <MenuListComp theme={theme} /> 
            </SidebarColumn>
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
