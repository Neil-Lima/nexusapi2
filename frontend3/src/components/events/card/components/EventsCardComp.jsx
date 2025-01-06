// EventsCardComp.jsx
'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faCalendarAlt, 
  faClock,
  faUsers,
  faHeart 
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardInfo,
  CardInfoItem,
  CardFooter,
  AttendeesList,
  AttendeeAvatar,
  InterestButton,
  ListViewContainer,
  ListViewImage,
  ListViewContent,
  ListViewInfo,
  ListViewActions
} from '../styles/EventsCardStyles';
import { useEventsCard } from '../utils/EventsCardUtils';

export default function EventsCardComp({ event, onSelect, viewMode }) {
  const { theme } = useTheme();
  const { handleInterest } = useEventsCard();

  if (viewMode === 'list') {
    return (
      <ListViewContainer theme={theme} onClick={() => onSelect(event)}>
        <ListViewImage theme={theme}>
          <img src={event.image} alt={event.title} />
        </ListViewImage>
        
        <ListViewContent>
          <CardTitle theme={theme}>{event.title}</CardTitle>
          <ListViewInfo>
            <CardInfoItem>
              <FontAwesomeIcon icon={faCalendarAlt} />
              <span>{event.date}</span>
            </CardInfoItem>
            <CardInfoItem>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>{event.location}</span>
            </CardInfoItem>
          </ListViewInfo>
        </ListViewContent>

        <ListViewActions>
          <CardInfoItem>
            <FontAwesomeIcon icon={faUsers} />
            <span>{event.attendees}</span>
          </CardInfoItem>
          <InterestButton 
            onClick={(e) => {
              e.stopPropagation();
              handleInterest(event.id);
            }}
            theme={theme}
            listView
          >
            <FontAwesomeIcon icon={faHeart} />
          </InterestButton>
        </ListViewActions>
      </ListViewContainer>
    );
  }

  return (
    <CardContainer theme={theme} onClick={() => onSelect(event)}>
      <CardImage>
        <img src={event.image} alt={event.title} />
      </CardImage>
      
      <CardContent>
        <CardTitle theme={theme}>{event.title}</CardTitle>
        
        <CardInfo>
          <CardInfoItem>
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span>{event.date}</span>
          </CardInfoItem>
          <CardInfoItem>
            <FontAwesomeIcon icon={faClock} />
            <span>{event.time}</span>
          </CardInfoItem>
          <CardInfoItem>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>{event.location}</span>
          </CardInfoItem>
        </CardInfo>

        <CardFooter>
          <AttendeesList>
            <AttendeeAvatar theme={theme}>
              {event.attendees}
            </AttendeeAvatar>
            <span>participantes</span>
          </AttendeesList>
          
          <InterestButton 
            onClick={(e) => {
              e.stopPropagation();
              handleInterest(event.id);
            }}
            theme={theme}
          >
            <FontAwesomeIcon icon={faHeart} />
            <span>Interessado</span>
          </InterestButton>
        </CardFooter>
      </CardContent>
    </CardContainer>
  );
}
