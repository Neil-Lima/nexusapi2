'use client';
import styled from 'styled-components';
import { InputGroup } from 'react-bootstrap';

export const MainContainer = styled.div`
  min-height: 100vh;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  box-shadow: ${props => props.theme.boxShadow};  padding: 20px 0;
`;

export const SearchContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
 border-radius: ${props => props.theme.borderRadius};
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  box-shadow: ${props => props.theme.boxShadow};  backdrop-filter: blur(10px);
  padding: 25px;
`;

export const StyledInputGroup = styled(InputGroup)`
  .form-control {
    height: 50px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    font-size: 1.1rem;
    padding-left: 20px;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
    
    &:focus {
      box-shadow: none;
      background: rgba(255, 255, 255, 0.15);
    }
  }

  .btn {
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    border: none;
    width: 50px;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
  }
`;

export const ViewToggleContainer = styled.div`
 border-radius: ${props => props.theme.borderRadius};
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  box-shadow: ${props => props.theme.boxShadow};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px;
  backdrop-filter: blur(10px);
  border-radius: 15px;
`;

export const ViewToggleButton = styled.button`
  background: ${props => props.active ? 
    `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})` : 
    'transparent'
  };
  color: white;
  border: none;
  padding: 10px;
  margin-left: 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? 
      `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})` : 
      'rgba(255, 255, 255, 0.1)'
    };
  }
`;

export const LocationTitle = styled.h2`
  color: white;
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;

  svg {
    color: ${props => props.theme.primaryColor};
  }
`;