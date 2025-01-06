'use client';
import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';

export const StyledListGroup = styled(ListGroup)`
  margin-bottom: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  box-shadow: ${props => props.theme.boxShadow};
`;

export const StyledListGroupItem = styled(ListGroup.Item)`
  background-color: transparent;
  color: ${props => props.theme.textColor};
  padding: 15px 20px;
  display: flex;
  align-items: center;
  border: none;
  transition: ${props => props.theme.transition};
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(5px);
  }
`;

export const IconWrapper = styled.div`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  box-shadow: ${props => props.theme.boxShadow};
`;

export const MenuText = styled.span`
  font-size: 16px;
  color: ${props => props.theme.textColor};
  font-weight: 500;
`;
