'use client';
import styled, { keyframes } from 'styled-components';
import { Card, Button, Image } from 'react-bootstrap';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const ProfileContainer = styled.div`
  min-height: 100vh;
  padding: 20px 0;
  background: ${props => props.theme.backgroundColor};
`;

export const ProfileHeader = styled.div`
  position: relative;
  height: 300px;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  margin-bottom: 80px;
`;

export const CoverImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.7));
  }
`;

export const ProfileAvatar = styled(Image)`
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

export const ProfileInfo = styled.div`
  text-align: center;
  color: ${props => props.theme.textColor};
  padding: 20px;
  animation: ${fadeIn} 0.5s ease;

  h1 {
    font-size: 2rem;
    margin: 10px 0;
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.1rem;
    opacity: 0.9;
    margin-bottom: 15px;
  }
`;

export const ProfileStats = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 20px 0;

  .stat-item {
    text-align: center;

    .number {
      font-size: 1.5rem;
      font-weight: bold;
      color: ${props => props.theme.primaryColor};
    }

    .label {
      font-size: 0.9rem;
      opacity: 0.8;
    }
  }
`;

export const ProfileActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 20px 0;
`;

export const ActionButton = styled(Button)`
  background: ${props => props.primary ? 
    `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})` : 
    'transparent'
  };
  border: ${props => props.primary ? 'none' : `2px solid ${props.theme.primaryColor}`};
  color: ${props => props.primary ? '#ffffff' : props.theme.primaryColor};
  padding: 10px 25px;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    background: ${props => props.primary ? 
      `linear-gradient(${props.theme.gradientDirection}, ${props.theme.secondaryColor}, ${props.theme.primaryColor})` : 
      props.theme.primaryColor
    };
    color: #ffffff;
  }
`;

export const ProfileTabs = styled.div`
  margin-top: 20px;
`;

export const TabList = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const TabButton = styled.button`
  background: ${props => props.$active ? props.theme.primaryColor : 'transparent'};
  color: ${props => props.$active ? '#fff' : props.theme.textColor};
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.primaryColor};
    color: #fff;
  }
`;

export const TabContent = styled.div`
  animation: ${fadeIn} 0.5s ease;
  padding: 20px;
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  backdrop-filter: blur(10px);
  border-radius: 15px;
  
  h3 {
    color: ${props => props.theme.textColor};
    margin-bottom: 20px;
  }
`;

export const InfoCard = styled(Card)`
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
  color: #ffffff;

  h3 {
    color: ${props => props.theme.primaryColor};
    margin-bottom: 15px;
  }
`;

export const SkillTag = styled.span`
  display: inline-block;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  padding: 5px 15px;
  border-radius: 15px;
  color: #ffffff;
  margin: 5px;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 10px rgba(0,0,0,0.2);
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  padding-left: 30px;
  margin-bottom: 30px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${props => props.theme.primaryColor};
  }

  &::after {
    content: '';
    position: absolute;
    left: -4px;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${props => props.theme.primaryColor};
  }

  .timeline-date {
    font-size: 0.9rem;
    opacity: 0.8;
    margin-bottom: 5px;
  }

  .timeline-title {
    font-weight: bold;
    margin-bottom: 5px;
  }

  .timeline-subtitle {
    color: ${props => props.theme.primaryColor};
    margin-bottom: 10px;
  }

  .timeline-description {
    font-size: 0.95rem;
    opacity: 0.9;
  }
`;

export const AchievementCard = styled(Card)`
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 15px;
  color: #ffffff;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }

  .achievement-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }

  .achievement-title {
    font-weight: bold;
    margin-bottom: 5px;
  }

  .achievement-date {
    font-size: 0.8rem;
    opacity: 0.8;
  }
`;

export const ConnectionCard = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 15px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }

  .connection-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  .connection-info {
    flex: 1;

    .connection-name {
      font-weight: bold;
      margin-bottom: 5px;
    }

    .connection-bio {
      font-size: 0.9rem;
      opacity: 0.8;
    }

    .connection-meta {
      font-size: 0.8rem;
      color: ${props => props.theme.primaryColor};
    }
  }
`;

export const EventCard = styled(Card)`
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
  color: #ffffff;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }

  .event-date {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${props => props.theme.primaryColor};
    margin-bottom: 10px;
  }

  .event-title {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }

  .event-location {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.9rem;
    opacity: 0.8;
    margin-bottom: 15px;
  }

  .event-description {
    font-size: 0.95rem;
    opacity: 0.9;
    margin-bottom: 15px;
  }

  .event-attendees {
    display: flex;
    align-items: center;
    gap: 5px;

    .attendee-avatar {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 2px solid #ffffff;
      margin-left: -10px;

      &:first-child {
        margin-left: 0;
      }
    }

    .attendees-count {
      font-size: 0.9rem;
      opacity: 0.8;
    }
  }
`;

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;

  .spinner {
    width: 40px;
    height: 40px;
    border: 3px solid rgba(255,255,255,0.1);
    border-radius: 50%;
    border-top-color: ${props => props.theme.primaryColor};
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

export const ErrorMessage = styled.div`
  background: rgba(255,0,0,0.1);
  color: #ff4444;
  padding: 15px;
  border-radius: 10px;
  margin: 20px 0;
  text-align: center;
`;

export const SuccessMessage = styled.div`
  background: rgba(0,255,0,0.1);
  color: #44ff44;
  padding: 15px;
  border-radius: 10px;
  margin: 20px 0;
  text-align: center;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 20px;
  padding: 30px;
  max-width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  color: ${props => props.theme.textColor};

  .close-button {
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    color: ${props => props.theme.textColor};
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: rotate(90deg);
      color: ${props => props.theme.primaryColor};
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  input, textarea, select {
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 10px;
    padding: 12px;
    color: ${props => props.theme.textColor};
    width: 100%;

    &:focus {
      outline: none;
      border-color: ${props => props.theme.primaryColor};
    }

    &::placeholder {
      color: rgba(255,255,255,0.5);
    }
  }

  textarea {
    min-height: 100px;
    resize: vertical;
  }

  button {
    background: ${props => props.theme.primaryColor};
    color: #ffffff;
    border: none;
    padding: 12px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: ${props => props.theme.secondaryColor};
      transform: translateY(-2px);
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
`;

export const Tooltip = styled.div`
  position: relative;
  display: inline-block;

  .tooltip-content {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0,0,0,0.9);
    color: #ffffff;
    padding: 8px 12px;
    border-radius: 5px;
    font-size: 0.8rem;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;

    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border: 5px solid transparent;
      border-top-color: rgba(0,0,0,0.9);
    }
  }

  &:hover .tooltip-content {
    opacity: 1;
    visibility: visible;
    bottom: calc(100% + 5px);
  }
`;

export const Badge = styled.span`
  display: inline-block;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  background: ${props => props.theme.primaryColor};
  color: #ffffff;
  margin-left: 5px;
`;

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background: rgba(255,255,255,0.1);
  margin: 20px 0;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.textColor};
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 8px;
  border-radius: 50%;

  &:hover {
    color: ${props => props.theme.primaryColor};
    background: rgba(255,255,255,0.1);
    transform: scale(1.1);
  }
`;

export const SearchInput = styled.input`
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 20px;
  padding: 10px 20px;
  color: ${props => props.theme.textColor};
  width: 100%;
  margin-bottom: 20px;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.primaryColor};
  }

  &::placeholder {
    color: rgba(255,255,255,0.5);
  }
`;

export const FilterDropdown = styled.select`
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 20px;
  padding: 10px 20px;
  color: ${props => props.theme.textColor};
  cursor: pointer;
  margin-bottom: 20px;

  option {
    background: #1a1a1a;
    color: ${props => props.theme.textColor};
  }
`;
