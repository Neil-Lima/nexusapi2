'use client';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';

export const ExperienceCard = styled(Card)`
  margin-top: 18px;
  border: none;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Title = styled.h4`
  color: #ffffff;
  margin: 0;
`;

export const AddButton = styled(Button)`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

export const ExperienceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ExperienceItem = styled.li`
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;

  &:last-child {
    border-bottom: none;
  }

  h5 {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0;

    svg {
      color: ${props => props.theme.primaryColor};
    }
  }
`;
