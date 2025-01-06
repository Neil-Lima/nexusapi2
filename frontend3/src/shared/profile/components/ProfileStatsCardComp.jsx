import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { StyledStatsCard, StatItem } from '../styles/ProfileStatsCardCompStyles';

function ProfileStatsCardComp() {
  const { theme } = useTheme();

  const stats = [
    { label: 'Posts', value: '30' },
    { label: 'Seguidores', value: '3000' },
    { label: 'Seguindo', value: '30' }
  ];

  return (
    <StyledStatsCard theme={theme}>
      <Card.Body>
        <Row>
          {stats.map((stat, index) => (
            <Col key={index}>
              <StatItem theme={theme}>
                <span className="value">{stat.value}</span>
                <span className="label">{stat.label}</span>
              </StatItem>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </StyledStatsCard>
  );
}

export default ProfileStatsCardComp;
