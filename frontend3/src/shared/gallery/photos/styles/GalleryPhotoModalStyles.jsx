'use client';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

export const StyledModal = styled(Modal)`
  .modal-dialog {
    max-width: 90vw;
    margin: 1.75rem auto;
  }

  .modal-content {
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    border-radius: ${props => props.theme.borderRadius};
    color: ${props => props.theme.textColor};
    min-height: 90vh;
  }

  .modal-body {
    padding: 2rem;
  }
`;

export const PhotoSection = styled.div`
  height: 85vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: ${props => props.theme.borderRadius};
  }
`;

export const InfoSection = styled.div`
  padding: 1.5rem;
  height: 85vh;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${props => props.theme.backgroundColor};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.highlightColor};
    border-radius: 10px;
  }
  
  .actions {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
  }
`;

export const ActionButton = styled.button`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  color: ${props => props.theme.textColor};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
