'use client';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { MainContainer, ContentArea } from '../styles/EventsMainStyles';
import ProfileCardComp from '@/shared/profile/components/card/components/ProfileCardComp';
import EventsHeaderComp from '../../header/components/EventsHeaderComp';
import EventsTabsComp from '../../tabs/components/EventsTabsComp';
import EventsGridComp from '../../grid/components/EventsGridComp';
import EventsFilterComp from '../../filter/components/EventsFilterComp';
import EventsModalComp from '../../modal/components/EventsModalComp';
import { useEventsMain } from '../utils/EventsMainUtils';
import MenuListComp from '@/shared/profile/components/MenuListComp';
import ProfileStatsCardComp from '@/shared/profile/components/ProfileStatsCardComp';

export default function EventsMainComp() {
  const { theme } = useTheme();
  const {
    activeTab,
    selectedEvent,
    showModal,
    handleTabChange,
    handleEventSelect,
    handleCloseModal
  } = useEventsMain();

  return (
    <>
     
     <MainContainer theme={theme}>     
      <Container>
        <Row>
          <Col lg={3}>
            <ProfileCardComp />
            <ProfileStatsCardComp />
            <MenuListComp />
          </Col>
          <Col lg={6}>
            <EventsHeaderComp />
            <EventsTabsComp 
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />
            <ContentArea theme={theme}>
              
              <EventsGridComp 
                onEventSelect={handleEventSelect}
              />
            </ContentArea>
          </Col>
          <Col lg={3}>
          <EventsFilterComp />
          </Col>
        </Row>
      </Container>

      <EventsModalComp 
        show={showModal}
        event={selectedEvent}
        onHide={handleCloseModal}
      />
    </MainContainer>
    </>
 
  );
}
