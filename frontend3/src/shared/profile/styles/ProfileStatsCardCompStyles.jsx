'use client';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const StyledStatsCard = styled(Card)`
  text-align: center;
  border-style: none;
  margin-bottom: 24px;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.textColor};
  box-shadow: ${props => props.theme.boxShadow};
`;

export const StatItem = styled.div`
  padding: 10px;
  
  .value {
    display: block;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${props => props.theme.textColor};
  }

  .label {
    display: block;
    font-size: 0.9rem;
    color: ${props => props.theme.textColor};
    opacity: 0.8;
  }
`;
