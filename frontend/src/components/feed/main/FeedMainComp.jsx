'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { GradientBackground } from '@/styles/GlobalStyles';

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

  return (
    <>
      <NavMenuComp />
      <GradientBackground theme={theme}>     
        <Container>
          <Row>
            <Col lg={3}>
              <ProfileCardComp theme={theme}/>
              <ProfileStatsCardComp theme={theme}/>
              <MenuListComp theme={theme} /> 
            </Col>
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