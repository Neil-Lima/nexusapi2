'use client';
import styled from 'styled-components';
import { Card, ListGroup } from 'react-bootstrap';

export const ProfileCard = styled(Card)`
   border-radius: ${props => props.theme.borderRadius};
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  box-shadow: ${props => props.theme.boxShadow};
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 15px;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.div`
  position: relative;
  padding: 15px;
  text-align: center;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 6px solid white;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
  }
`;

export const StyledListGroup = styled(ListGroup)`

  background: transparent;
  
  .list-group-item {
    background: transparent;
    border: none;
    color: white;
    padding: 12px 15px;
    
    svg {
      color: ${props => props.theme.primaryColor};
    }
    
    strong {
      margin-right: 5px;
    }
  }
`;

export const ProfileInfo = styled.div`
  padding: 20px;
  color: white;
  text-align: center;

  h4 {
    margin-bottom: 10px;
    font-weight: bold;
  }

  p {
    opacity: 0.8;
    margin-bottom: 20px;
  }
`;

export const StatsContainer = styled(Card)`
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  box-shadow: ${props => props.theme.boxShadow};
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const StatItem = styled.div`
  flex: 1;
  padding: 15px;
  text-align: center;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  svg {
    font-size: 1.5rem;
    color: ${props => props.theme.primaryColor};
    margin-bottom: 5px;
  }

  span {
    display: block;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 5px 0;
  }

  p {
    margin: 0;
    opacity: 0.8;
    font-size: 0.9rem;
  }
`;
