'use client';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  StatsCard, 
  StatsContainer,
  StatBox,
  StatIcon,
  StatInfo,
  StatLabel,
  StatValue,
  StatsHeader,
  StatsTitle
} from '../styles/FriendsStatsStyles';
import { statsConfig, useStats } from '../utils/FriendsStatsUtils';
import { useTheme } from '@/context/theme/ThemeContext';

function FriendsStatsComp() {
  const { theme } = useTheme();
  const { stats } = useStats();

  return (
    <StatsCard theme={theme}>
      <StatsContainer>
        <StatsHeader>
          <StatsTitle theme={theme}>Friends Statistics</StatsTitle>
        </StatsHeader>
        <Row className="g-3">
          {statsConfig.map((stat, index) => (
            <Col key={index} xs={6}>
              <StatBox>
                <StatIcon theme={theme}>
                  <FontAwesomeIcon icon={stat.icon} />
                </StatIcon>
                <StatInfo>
                  <StatLabel>{stat.label}</StatLabel>
                  <StatValue theme={theme}>
                    {stats[stat.value]}
                  </StatValue>
                </StatInfo>
              </StatBox>
            </Col>
          ))}
        </Row>
      </StatsContainer>
    </StatsCard>
  );
}

export default FriendsStatsComp;
