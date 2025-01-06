'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useCommunitiesModal } from '../modal/utils/CommunitiesModalUtils';
import CommunitiesGridComp from '../grid/components/CommunitiesGridComp';
import CommunitiesModalComp from '../modal/components/CommunitiesModalComp';
import ProfileCardComp from '@/shared/profile/components/card/components/ProfileCardComp';
import ProfileStatsCardComp from '@/shared/profile/components/ProfileStatsCardComp';
import MenuListComp from '@/shared/profile/components/MenuListComp';

export default function CommunitiesMainComp() {
  const { showModal, handleShowModal, handleCloseModal } = useCommunitiesModal();

  return (
    <Container>
      <Row>
        <Col lg={3}>
          <ProfileCardComp />
          <ProfileStatsCardComp/>
          <MenuListComp />          
        </Col>
        <Col lg={9}>
          <CommunitiesGridComp onCreateClick={handleShowModal} />                
        </Col>
      </Row>

      <CommunitiesModalComp 
        show={showModal} 
        onClose={handleCloseModal}
      />
    </Container>
  );
}
