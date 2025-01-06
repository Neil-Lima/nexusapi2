'use client';
import styled from 'styled-components';

export const TabsContainer = styled.div`
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: ${props => props.theme.boxShadow};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const TabsList = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 5px;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.primaryColor};
    border-radius: 2px;
  }
`;

export const TabItem = styled.div`
  flex: 0 0 auto;
`;

export const TabLink = styled.button`
  background: ${props => props.$isActive ? 
    `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})` : 
    'rgba(255, 255, 255, 0.1)'
  };
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    background: ${props => props.$isActive ?
      `linear-gradient(${props.theme.gradientDirection}, ${props.theme.secondaryColor}, ${props.theme.primaryColor})` :
      'rgba(255, 255, 255, 0.2)'
    };
  }
`;

export const TabIcon = styled.span`
  font-size: 1rem;
`;

export const TabLabel = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
`;
