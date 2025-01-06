import styled from 'styled-components';
import { Card, Button, Form } from 'react-bootstrap';

export const SearchCard = styled(Card)`
  border-radius: ${props => props.theme.borderRadius};
  border: none;
  background: ${props => props.theme.cardBackground};
  backdrop-filter: blur(20px);
  color: #ffffff;
  box-shadow: ${props => props.theme.boxShadow};
  transition: ${props => props.theme.transition};
  margin-bottom: 1rem;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  }
`;

export const SearchContainer = styled.div`
  padding: 1rem;
`;

export const SearchInput = styled(Form.Control)`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #ffffff;
  padding: 0.75rem 2.5rem;
  font-size: 1rem;
  border-radius: 25px;
  transition: all 0.3s ease;

  &:focus {
    background: rgba(255, 255, 255, 0.15);
    box-shadow: none;
    color: #ffffff;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const SearchButton = styled(Button)`
  background: ${props => props.variant === 'clear' ? 
    'transparent' : 
    `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`
  };
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${props => props.theme.transition};
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  padding: 0;
  
  &:hover {
    transform: translateY(-50%) scale(1.1);
    background: ${props => props.variant === 'clear' ? 
      'rgba(255, 255, 255, 0.1)' : 
      `linear-gradient(${props.theme.gradientDirection}, ${props.theme.secondaryColor}, ${props.theme.primaryColor})`
    };
  }
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  color: ${props => props.theme.primaryColor};
  font-size: 1rem;
`;
