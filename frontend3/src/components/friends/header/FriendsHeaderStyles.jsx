import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';

export const HeaderCard = styled(Card)`
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

export const HeaderContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.h2`
  margin: 0;
  font-size: 1.75rem;
  font-weight: 600;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const HeaderSubtitle = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

export const HeaderIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 1.5rem;
  color: #ffffff;
  box-shadow: ${props => props.theme.boxShadow};
`;

export const MenuButton = styled(Button)`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border: none;
  border-radius: 12px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${props => props.theme.transition};
  padding: 0;
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.secondaryColor}, ${props.theme.primaryColor})`};
    box-shadow: ${props => props.theme.boxShadow};
  }
`;
