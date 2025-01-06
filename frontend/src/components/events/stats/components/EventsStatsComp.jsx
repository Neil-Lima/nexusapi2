'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, 
  faCalendarCheck, 
  faHeart, 
  faShare 
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import { useEventsStats } from '../utils/EventsStatsUtils';
import {
  StatsContainer,
  StatsHeader,
  StatsTitle,
  StatsGrid,
  StatCard,
  StatIcon,
  StatValue,
  StatLabel,
  StatTrend
} from '../styles/EventsStatsStyles';

export default function EventsStatsComp() {
  const { theme } = useTheme();
  const { stats } = useEventsStats();

  return (
    <StatsContainer theme={theme}>
      <StatsHeader>
        <StatsTitle theme={theme}>Estatísticas</StatsTitle>
      </StatsHeader>

      <StatsGrid>
        <StatCard theme={theme}>
          <StatIcon theme={theme}>
            <FontAwesomeIcon icon={faUsers} />
          </StatIcon>
          <StatValue>{stats.totalAttendees}</StatValue>
          <StatLabel>Participantes</StatLabel>
          <StatTrend positive={stats.attendeesTrend > 0}>
            {stats.attendeesTrend}%
          </StatTrend>
        </StatCard>

        <StatCard theme={theme}>
          <StatIcon theme={theme}>
            <FontAwesomeIcon icon={faCalendarCheck} />
          </StatIcon>
          <StatValue>{stats.totalEvents}</StatValue>
          <StatLabel>Eventos</StatLabel>
          <StatTrend positive={stats.eventsTrend > 0}>
            {stats.eventsTrend}%
          </StatTrend>
        </StatCard>

        <StatCard theme={theme}>
          <StatIcon theme={theme}>
            <FontAwesomeIcon icon={faHeart} />
          </StatIcon>
          <StatValue>{stats.totalInterested}</StatValue>
          <StatLabel>Interessados</StatLabel>
          <StatTrend positive={stats.interestedTrend > 0}>
            {stats.interestedTrend}%
          </StatTrend>
        </StatCard>

        <StatCard theme={theme}>
          <StatIcon theme={theme}>
            <FontAwesomeIcon icon={faShare} />
          </StatIcon>
          <StatValue>{stats.totalShares}</StatValue>
          <StatLabel>Compartilhamentos</StatLabel>
          <StatTrend positive={stats.sharesTrend > 0}>
            {stats.sharesTrend}%
          </StatTrend>
        </StatCard>
      </StatsGrid>
    </StatsContainer>
  );
}
