'use client';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

export const StyledModal = styled(Modal)`
  .modal-content {
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: ${props => props.theme.borderRadius};
  }

  .modal-body {
    padding: 0;
  }
`;

export const ModalHeader = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  h2 {
    margin: 0;
    color: ${props => props.theme.primaryColor};
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
   
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const CloseButton = styled.button`
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};

  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.primaryColor};
    transform: rotate(90deg);
  }
`;
