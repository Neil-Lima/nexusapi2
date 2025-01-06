'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import { useEventsHeader } from '../utils/EventsHeaderUtils';
import {
  HeaderContainer,
  HeaderContent,
  HeaderTitle,
  HeaderSubtitle,
  HeaderIcon,
  CreateEventButton
} from '../styles/EventsHeaderStyles';

export default function EventsHeaderComp() {
  const { theme } = useTheme();
  const { handleCreateEvent } = useEventsHeader();

  return (
    <HeaderContainer theme={theme}>
      <HeaderContent>
        <div className="d-flex align-items-center">
          <HeaderIcon theme={theme}>
            <FontAwesomeIcon icon={faUserFriends} />
          </HeaderIcon>
          <div>
            <HeaderTitle theme={theme}>Eventos</HeaderTitle>
            <HeaderSubtitle>Descubra eventos incríveis</HeaderSubtitle>
          </div>
        </div>
        <CreateEventButton 
          onClick={handleCreateEvent}
          theme={theme}
        >
          <FontAwesomeIcon icon={faCalendarPlus} />
          Criar Evento
        </CreateEventButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
