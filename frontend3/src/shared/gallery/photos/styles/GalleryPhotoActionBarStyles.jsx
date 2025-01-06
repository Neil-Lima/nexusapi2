'use client';
import styled from 'styled-components';

export const ActionBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1.5rem;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
`;

export const ActionButton = styled.button`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  color: ${props => props.theme.textColor};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  align-items: center;
  gap: 8px;
  transition: ${props => props.theme.transition};
  font-weight: 500;

  &:hover {
    transform: ${props => props.theme.buttonHoverTransform};
    opacity: 0.9;
  }

  svg {
    font-size: 1.2rem;
  }
`;
