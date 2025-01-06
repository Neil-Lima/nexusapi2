// frontend/src/components/events/modal/styles/EventsModalStyles.jsx
'use client';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

export const StyledModal = styled(Modal)`
  .modal-dialog {
   background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    max-width: 90%;
    margin: 1.75rem auto;
  }

  .modal-content {
    background: none;
    border: none;
  }
`;

export const GradientBorder = styled.div`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  padding: 1px;
  border-radius: ${props => props.theme.borderRadius};
`;

export const ModalContainer = styled.div`
background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};

  backdrop-filter: blur(20px);
  border-radius: ${props => props.theme.borderRadius};
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  color: ${props => props.theme.textColor};
  position: relative;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    border-radius: 4px;
  }
`;

export const CloseButton = styled.button`
background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};

  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.primaryColor};
    transform: rotate(90deg);
  }
`;

export const EventHeader = styled.div`
  position: relative;
  height: 400px;
`;

export const EventDate = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  padding: 12px 24px;
  border-radius: 25px;
  color: white;
  font-weight: 500;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: ${props => props.theme.boxShadow};
`;

export const EventImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BuyTicketButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.boxShadow};
  }
`;

export const EventContent = styled.div`
  padding: 30px;
`;

export const EventTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 15px;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const EventDescription = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.textColor};
  margin-bottom: 20px;
  line-height: 1.6;
  opacity: 0.8;
`;

export const EventLink = styled.a`
background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  color: ${props => props.theme.primaryColor};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 30px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }
`;

export const InfoSection = styled.div`
  margin: 30px 0;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const InfoItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const BaseInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;

  svg {
    font-size: 1.5rem;
    color: ${props => props.theme.primaryColor};
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h4 {
    margin: 0 0 5px;
    font-size: 1.1rem;
    color: ${props => props.theme.textColor};
    font-weight: 600;
  }

  p {
    margin: 0;
    color: ${props => props.theme.textColor};
    opacity: 0.8;
  }
`;

export const TimingInfo = styled(BaseInfo)``;
export const FeesInfo = styled(BaseInfo)``;
export const CategoryInfo = styled(BaseInfo)``;
export const TurnoutInfo = styled(BaseInfo)`
  .estimate-tag {
    display: inline-block;
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 0.8rem;
    margin-top: 8px;
    color: white;
  }
`;

export const InterestSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: ${props => props.theme.borderRadius};
  margin: 30px 0;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .interest-info {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      color: ${props => props.theme.primaryColor};
      font-size: 1.2rem;
      background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    p {
      margin: 0;
      color: ${props => props.theme.textColor};
      opacity: 0.8;
    }
  }
`;

export const InterestButton = styled.button`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  color: white;
  border: none;
  padding: ${props => props.small ? '8px 16px' : '12px 24px'};
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.boxShadow};
  }

  svg {
    font-size: ${props => props.small ? '0.9rem' : '1.1rem'};
  }
`;

export const AttendanceStats = styled.div`
  display: grid;
      background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};

  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 30px 0;
`;

export const StatItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.1);
  }

  h4 {
    margin: 0;
    font-size: 1.5rem;
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
  }

  p {
    margin: 5px 0 0;
    color: ${props => props.theme.textColor};
    opacity: 0.8;
  }
`;

export const RelatedEvents = styled.div`
  margin: 30px 0;

  h3 {
    margin-bottom: 20px;
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
   color: ${props => props.theme.textColor};
    font-weight: 600;
  }

  .related-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`;

export const RelatedEventCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
      background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};

  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.1);
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  .event-info {
    padding: 15px;

    h4 {
      margin: 0 0 10px;
      color: ${props => props.theme.textColor};
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 0 0 15px;
      color: ${props => props.theme.textColor};
      opacity: 0.8;
      font-size: 0.9rem;

      svg {
        color: ${props => props.theme.primaryColor};
        background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
`;

export const LocationSection = styled.div`
  margin: 30px 0;

  h3 {
    margin-bottom: 20px;
    color: ${props => props.theme.textColor};
    font-weight: 600;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const AddressInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: ${props => props.theme.borderRadius};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  svg {
    font-size: 1.5rem;
    color: ${props => props.theme.primaryColor};
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h4 {
    margin: 0 0 5px;
    color: ${props => props.theme.textColor};
    font-weight: 600;
  }

  p {
    margin: 0;
    color: ${props => props.theme.textColor};
    opacity: 0.8;
  }
`;

