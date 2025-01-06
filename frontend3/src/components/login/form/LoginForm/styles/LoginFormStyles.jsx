'use client'

import styled from 'styled-components';
import { Card, Button, Form } from 'react-bootstrap';

export const StyledCard = styled(Card)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
`;

export const StyledButton = styled(Button)`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border: none;
  border-radius: 25px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const GradientText = styled.span`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StyledFormControl = styled(Form.Control)`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;

  &:focus {
    background: rgba(255, 255, 255, 0.2);
    border-color: ${props => props.theme.primaryColor};
    box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);
    color: white;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;
