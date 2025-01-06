'use client'
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { GradientBackground } from './styles/PagesStyle';
import PagesDetailHeaderComp from './PagesDetailHeaderComp';
import PagesDetailStatsComp from './PagesDetailStatsComp';
import PagesDetailTabsComp from './PagesDetailTabsComp';
import PagesDetailChatComp from './PagesDetailChatComp';
import { pageData } from './utils/PagesUtils';
import NavMenuComp from '@/shared/navbar/components/NavMenuComp';

export default function PagesDetailMainComp({ id }) {
  const { theme } = useTheme();
  const [showChat, setShowChat] = useState(false);

  return (
    <>    
    <GradientBackground theme={theme}>
      <Container>
        <Row>
          <Col lg={12}>
            <PagesDetailHeaderComp pageData={pageData} setShowChat={setShowChat} />
            <PagesDetailStatsComp pageData={pageData} />
            <PagesDetailTabsComp pageData={pageData} />
          </Col>
        </Row>
      </Container>
      <PagesDetailChatComp show={showChat} onHide={() => setShowChat(false)} pageData={pageData} />
    </GradientBackground>
    </>
    
  );
}
