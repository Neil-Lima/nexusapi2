'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCalendarAlt, faMapMarkerAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Event, StyledButton } from './styles/GroupStyles';
import { useTheme } from '@/context/theme/ThemeContext';

function GroupEventsComp({ events }) {
  const { theme } = useTheme();

  return (
    <>
      <StyledButton theme={theme} className="mb-3">
        <FontAwesomeIcon icon={faPlus} /> Criar Evento
      </StyledButton>
      {events.map(event => (
        <Event key={event.id}>
          <div className="card-body">
            <h5>{event.name}</h5>
            <p><FontAwesomeIcon icon={faCalendarAlt} /> {event.date} às {event.time}</p>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {event.location}</p>
            <p>{event.description}</p>
            <p><FontAwesomeIcon icon={faUsers} /> {event.attendees} participantes</p>
            <StyledButton theme={theme} size="sm">Participar</StyledButton>
          </div>
        </Event>
      ))}
    </>
  );
}

export default GroupEventsComp;
