'use client';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { GradientBackground, ToggleButton, SidebarColumn, Overlay } from '@/styles/GlobalStyles';

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
            <SidebarColumn as={Col} lg={3} isOpen={isOpen} theme={theme}>
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
