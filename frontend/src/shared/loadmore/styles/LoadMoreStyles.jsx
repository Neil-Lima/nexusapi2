'use client';
import styled from 'styled-components';

export const LoadMoreButton = styled.button`
  width: 100%;
  padding: 15px;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.textColor};
  font-weight: bold;
  cursor: pointer;
  transition: ${props => props.theme.transition};
  
  &:hover:not(:disabled) {
    transform: ${props => props.theme.buttonHoverTransform};
    box-shadow: ${props => props.theme.boxShadow};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${props => props.theme.textColor};
`;
