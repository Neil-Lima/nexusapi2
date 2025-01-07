'use client';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { GradientBackground } from './styles/PagesStyle';
import PagesListComp from './PagesListComp';
import PagesSearchComp from './PagesSearchComp';
import ProfileCardComp from '@/shared/profile/components/card/components/ProfileCardComp';
import { fetchPages } from './utils/PagesUtils';
import MenuListComp from '@/shared/profile/components/MenuListComp';

export default function PagesMainComp() {
  const { theme } = useTheme();
  const [pages, setPages] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setPages(fetchPages());
  }, []);

  const filteredPages = pages.filter(page =>
    page.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <GradientBackground theme={theme}>
      <Container>
        <Row>
          <Col lg={3}>
            <ProfileCardComp />
            <MenuListComp />
          </Col>
          <Col lg={9}>
            <PagesSearchComp 
              searchTerm={searchTerm} 
              setSearchTerm={setSearchTerm}
              viewMode={viewMode}
              setViewMode={setViewMode}
            />
            <PagesListComp 
              pages={filteredPages}
              viewMode={viewMode}
            />
          </Col>
        </Row>
      </Container>
    </GradientBackground>
  );
}
