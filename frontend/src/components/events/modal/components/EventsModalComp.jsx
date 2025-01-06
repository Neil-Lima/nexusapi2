// frontend/src/components/events/modal/components/EventsModalComp.jsx
'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faCalendarAlt, 
  faClock,
  faUsers,
  faTicketAlt,
  faHeart,
  faShare,
  faLink,
  faTag,
  faBuilding,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  StyledModal,
  ModalContainer,
  CloseButton,
  EventHeader,
  EventDate,
  EventImage,
  BuyTicketButton,
  EventContent,
  EventTitle,
  EventDescription,
  EventLink,
  InfoSection,
  InfoGrid,
  InfoItem,
  TimingInfo,
  FeesInfo,
  CategoryInfo,
  TurnoutInfo,
  InterestSection,
  InterestButton,
  AttendanceStats,
  StatItem,
  RelatedEvents,
  RelatedEventCard,
  LocationSection,
  MapContainer,
  AddressInfo,
  GradientBorder,
  GradientBackground
} from '../styles/EventsModalStyles';

export default function EventsModalComp({ show, event, onHide }) {
  const { theme } = useTheme();

  if (!event) return null;

  return (
    <StyledModal 
      show={show} 
      onHide={onHide}
      centered
    >
      <GradientBorder theme={theme}>
        <ModalContainer theme={theme}>
          <CloseButton onClick={onHide} theme={theme}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>

          <EventHeader>
            <EventDate theme={theme}>
              <FontAwesomeIcon icon={faCalendarAlt} />
              Wednesday, Dec 08
            </EventDate>
            <EventImage src={event.image} alt={event.title} />
            <BuyTicketButton theme={theme}>
              <FontAwesomeIcon icon={faTicketAlt} />
              Buy Ticket
            </BuyTicketButton>
          </EventHeader>

          <EventContent>
            <EventTitle theme={theme}>{event.title}</EventTitle>
            <EventDescription theme={theme}>
              Join us for an immersive learning experience with industry experts and thought leaders.
            </EventDescription>
            <EventLink href="#" theme={theme}>
              <FontAwesomeIcon icon={faLink} />
              View Event Website
            </EventLink>

            <InfoSection>
              <InfoGrid>
                <InfoItem theme={theme}>
                  <TimingInfo theme={theme}>
                    <FontAwesomeIcon icon={faClock} />
                    <div>
                      <h4>Timings</h4>
                      <p>08:00 AM - 05:00 PM (Business)</p>
                    </div>
                  </TimingInfo>
                </InfoItem>

                <InfoItem theme={theme}>
                  <FeesInfo theme={theme}>
                    <FontAwesomeIcon icon={faTicketAlt} />
                    <div>
                      <h4>Entry Fees</h4>
                      <p>Free Ticket for Photography professionals</p>
                    </div>
                  </FeesInfo>
                </InfoItem>

                <InfoItem theme={theme}>
                  <CategoryInfo theme={theme}>
                    <FontAwesomeIcon icon={faTag} />
                    <div>
                      <h4>Category & Type</h4>
                      <p>Trade Show, Photography & Prewedding</p>
                    </div>
                  </CategoryInfo>
                </InfoItem>

                <InfoItem theme={theme}>
                  <TurnoutInfo theme={theme}>
                    <FontAwesomeIcon icon={faUsers} />
                    <div>
                      <h4>Estimated Turnout</h4>
                      <p>14000 Visitors • 100 Exhibitors</p>
                      <span className="estimate-tag">Estimated Count</span>
                    </div>
                  </TurnoutInfo>
                </InfoItem>
              </InfoGrid>
            </InfoSection>

            <InterestSection theme={theme}>
              <div className="interest-info">
                <FontAwesomeIcon icon={faHeart} />
                <p>50+ People have shown interest recently</p>
              </div>
              <InterestButton theme={theme}>
                <FontAwesomeIcon icon={faHeart} />
                Interested?
              </InterestButton>
            </InterestSection>

            <AttendanceStats>
              <StatItem theme={theme}>
                <h4>148.9K</h4>
                <p>Responded</p>
              </StatItem>
              <StatItem theme={theme}>
                <h4>356</h4>
                <p>Registered</p>
              </StatItem>
              <StatItem theme={theme}>
                <h4>350</h4>
                <p>Attendance</p>
              </StatItem>
            </AttendanceStats>

            <RelatedEvents>
              <h3>Related Events</h3>
              <div className="related-grid">
                {[1, 2, 3].map(id => (
                  <RelatedEventCard key={id} theme={theme}>
                    <img src={`https://picsum.photos/200/100?random=${id}`} alt="Related Event" />
                    <div className="event-info">
                      <h4>Photography Workshop</h4>
                      <p>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        New York, NY
                      </p>
                      <InterestButton small theme={theme}>
                        <FontAwesomeIcon icon={faHeart} />
                        Interested
                      </InterestButton>
                    </div>
                  </RelatedEventCard>
                ))}
              </div>
            </RelatedEvents>

            <LocationSection>
              <h3>Event Location</h3>
              <MapContainer theme={theme}>
                {/* Google Maps Integration */}
              </MapContainer>
              <AddressInfo theme={theme}>
                <FontAwesomeIcon icon={faBuilding} />
                <div>
                  <h4>Venue Address</h4>
                  <p>750 Sing Sing Rd, Horseheads, NY, 14845</p>
                </div>
              </AddressInfo>
            </LocationSection>
          </EventContent>
        </ModalContainer>
      </GradientBorder>
    </StyledModal>
  );
}
