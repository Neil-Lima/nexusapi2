import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';

export const FriendItem = styled(Card)`
  background: transparent;
  border: none;
  color: #ffffff;
  transition: ${props => props.theme.transition};
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
  }
`;

export const StyledButton = styled(Button)`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-weight: bold;
  transition: ${props => props.theme.transition};
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.boxShadow};
  }
`;
