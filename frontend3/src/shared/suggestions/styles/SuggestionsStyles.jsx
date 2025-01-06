'use client';
import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';

export const SuggestionsContainer = styled.div`
  margin-bottom: 20px;

  .card {
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    border-radius: ${props => props.theme.borderRadius};
    border: none;
    box-shadow: ${props => props.theme.boxShadow};
    color: ${props => props.theme.textColor};
  }

  .card-header {
    background: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    h5 {
      margin: 0;
      color: ${props => props.theme.textColor};
    }
  }

  .list-group {
    background: transparent;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;
  }
`;

export const SuggestionItem = styled(ListGroup.Item)`
  background: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 15px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const UserInfo = styled.div`
  flex: 1;

  h6 {
    margin: 0;
    color: ${props => props.theme.textColor};
    font-weight: 500;
  }

  small {
    color: ${props => props.theme.textColor};
    opacity: 0.7;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const ActionButton = styled.button`
  background: ${props => props.danger ? 'rgba(255, 59, 48, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.textColor};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: ${props => props.danger ? 'rgba(255, 59, 48, 0.3)' : 'rgba(255, 255, 255, 0.2)'};
  }
`;
