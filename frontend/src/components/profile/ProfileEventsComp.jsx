'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { TabContent, EventCard, Grid } from './styles/ProfileStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendar, faUsers } from '@fortawesome/free-solid-svg-icons';

const ProfileEventsComp = ({ events }) => {
  const { theme } = useTheme();

  return (
    <TabContent theme={theme}>
      <Grid>
        {events.map((event) => (
          <EventCard key={event.id} theme={theme}>
            <div className="event-date">
              <FontAwesomeIcon icon={faCalendar} />
              {new Date(event.date).toLocaleDateString()}
            </div>
            <div className="event-title">{event.title}</div>
            <div className="event-location">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              {event.location}
            </div>
            <div className="event-description">{event.description}</div>
            <div className="event-attendees">
              <FontAwesomeIcon icon={faUsers} />
              {event.attendees.map((attendee) => (
                <img
                  key={attendee.id}
                  className="attendee-avatar"
                  src={attendee.avatar}
                  alt={attendee.name}
                />
              ))}
              <span className="attendees-count">
                +{event.totalAttendees} attending
              </span>
            </div>
          </EventCard>
        ))}
      </Grid>
    </TabContent>
  );
};

export default ProfileEventsComp;
