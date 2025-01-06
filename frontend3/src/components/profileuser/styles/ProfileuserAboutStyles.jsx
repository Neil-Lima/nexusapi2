'use client';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const AboutContainer = styled.div`
  margin-bottom: 20px;
`;

export const AboutCard = styled(Card)`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  border: none;
  box-shadow: ${props => props.theme.boxShadow};
  color: ${props => props.theme.textColor};

  .card-header {
    background: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 1rem;

    h4 {
      margin: 0;
      color: ${props => props.theme.textColor};
      font-weight: 600;
    }
  }

  .card-body {
    padding: 1rem;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(5px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const InfoIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 1.2rem;
`;

export const InfoContent = styled.div`
  flex: 1;
`;

export const InfoTitle = styled.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

export const InfoDetail = styled.div`
  opacity: 0.8;
  font-size: 0.9rem;
`;

export const EditButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: ${props => props.theme.textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;

  ${InfoItem}:hover & {
    opacity: 1;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
`;
