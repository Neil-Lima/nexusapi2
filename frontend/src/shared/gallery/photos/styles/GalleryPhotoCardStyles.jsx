'use client';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const PhotoOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const PhotoCard = styled.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.cardBackground};
  box-shadow: ${props => props.theme.boxShadow};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    
    ${PhotoOverlay} {
      opacity: 1;
    }
  }
`;

export const PhotoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${PhotoCard}:hover & {
    transform: scale(1.1);
  }
`;

export const PhotoInfo = styled.div`
  color: white;
  
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
  background: ${props => props.theme.primaryColor};
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background: ${props => props.theme.secondaryColor};
    transform: translateY(-2px);
  }

  svg {
    font-size: 1rem;
  }

  span {
    font-weight: 500;
  }
`;
                                                                                