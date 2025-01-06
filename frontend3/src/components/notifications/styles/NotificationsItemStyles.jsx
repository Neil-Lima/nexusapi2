'use client';
import styled from 'styled-components';

export const NotificationItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 15px;
  background: ${props => props.$unread ? 
    `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})` : 
    'rgba(255, 255, 255, 0.1)'
  };
  border-radius: ${props => props.theme.borderRadius};
  transition: ${props => props.theme.transition};
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    transform: ${props => props.theme.buttonHoverTransform};
  }
`;

export const NotificationIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: ${props => props.theme.textColor};
`;

export const NotificationContent = styled.div`
  flex: 1;
  color: ${props => props.theme.textColor};
`;

export const NotificationActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const ActionButton = styled.button`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  color: ${props => props.theme.textColor};
  border: none;
  padding: 5px 10px;
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  align-items: center;
  gap: 5px;
  transition: ${props => props.theme.transition};

  &:hover {
    transform: ${props => props.theme.buttonHoverTransform};
    opacity: 0.9;
  }
`;
