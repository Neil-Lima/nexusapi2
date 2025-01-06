'use client';
import React from 'react';
import Calendar from 'react-calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import { useEventsCalendar } from '../utils/EventsCalendarUtils';
import {
  CalendarContainer,
  CalendarHeader,
  CalendarTitle,
  StyledCalendar,
  EventList,
  EventItem,
  EventTime,
  EventInfo
} from '../styles/EventsCalendarStyles';

export default function EventsCalendarComp() {
  const { theme } = useTheme();
  const {
    selectedDate,
    events,
    handleDateChange,
    handleEventClick
  } = useEventsCalendar();

  return (
    <CalendarContainer theme={theme}>
      <CalendarHeader>
        <CalendarTitle theme={theme}>
          <FontAwesomeIcon icon={faCalendarAlt} />
          Calendário de Eventos
        </CalendarTitle>
      </CalendarHeader>

      <StyledCalendar
        onChange={handleDateChange}
        value={selectedDate}
        prevLabel={<FontAwesomeIcon icon={faChevronLeft} />}
        nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
        theme={theme}
      />

      <EventList>
        {events.map(event => (
          <EventItem 
            key={event.id}
            onClick={() => handleEventClick(event)}
            theme={theme}
          >
            <EventTime theme={theme}>
              {event.time}
            </EventTime>
            <EventInfo>
              <h4>{event.title}</h4>
              <p>{event.location}</p>
            </EventInfo>
          </EventItem>
        ))}
      </EventList>
    </CalendarContainer>
  );
}
