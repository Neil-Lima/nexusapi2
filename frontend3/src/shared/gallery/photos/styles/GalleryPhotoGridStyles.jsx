'use client';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  animation: ${fadeIn} 0.3s ease;
`;

export const PhotoCard = styled.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  box-shadow: ${props => props.theme.boxShadow};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const PhotoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const PhotoOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: ${props => `linear-gradient(to top, ${props.theme.primaryColor}cc, transparent)`};
  opacity: 1;
`;

export const PhotoInfo = styled.div`
  color: ${props => props.theme.textColor};
  
  h4 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 600;
  }
  
  p {
    margin: 5px 0;
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;

export const PhotoActions = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
`;

export const ActionButton = styled.button`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  color: ${props => props.theme.textColor};
  border: none;
  padding: 8px 15px;
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
    font-size: 1rem;
  }

  span {
    font-weight: 500;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
  padding: 1rem;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
`;

export const PageButton = styled.button`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  color: ${props => props.theme.textColor};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: ${props => props.theme.borderRadius};
  transition: ${props => props.theme.transition};
  opacity: ${props => props.$isActive ? 1 : 0.7};

  &:hover {
    transform: ${props => props.theme.buttonHoverTransform};
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;
