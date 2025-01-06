'use client';
import styled from 'styled-components';
import Calendar from 'react-calendar';

export const CalendarContainer = styled.div`
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
  box-shadow: ${props => props.theme.boxShadow};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const CalendarHeader = styled.div`
  margin-bottom: 20px;
`;

export const CalendarTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  font-size: 1.2rem;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  svg {
    color: ${props => props.theme.primaryColor};
  }
`;

export const StyledCalendar = styled(Calendar)`
  width: 100%;
  background: transparent;
  border: none;

  .react-calendar__navigation {
    display: flex;
    margin-bottom: 10px;

    button {
      background: none;
      border: none;
      color: ${props => props.theme.textColor};
      font-size: 1.2rem;
      padding: 5px 10px;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
        border-radius: ${props => props.theme.borderRadius};
      }

      &:disabled {
        opacity: 0.5;
      }
    }
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
  }

  .react-calendar__tile {
    background: none;
    border: none;
    color: ${props => props.theme.textColor};
    padding: 10px;
    position: relative;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-radius: ${props => props.theme.borderRadius};
    }

    &--active {
      background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
      border-radius: ${props => props.theme.borderRadius};
      color: white;
    }

    &--hasEvent {
      &::after {
        content: '';
        position: absolute;
        bottom: 5px;
        left: 50%;
        transform: translateX(-50%);
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: ${props => props.theme.primaryColor};
      }
    }
  }
`;

export const EventList = styled.div`
  margin-top: 20px;
  max-height: 300px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.primaryColor};
    border-radius: 2px;
  }
`;

export const EventItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: ${props => props.theme.borderRadius};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const EventTime = styled.div`
  padding: 8px;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  min-width: 80px;
`;

export const EventInfo = styled.div`
  h4 {
    margin: 0;
    font-size: 1rem;
    color: ${props => props.theme.textColor};
  }

  p {
    margin: 5px 0 0;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;
