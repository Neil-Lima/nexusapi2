'use client';
import styled from 'styled-components';

export const TabsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  padding: 10px;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    padding: 8px;
    gap: 8px;
  }
`;

export const TabButton = styled.button`
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  color: ${props => props.theme.textColor};
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const TabContent = styled.div`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;
