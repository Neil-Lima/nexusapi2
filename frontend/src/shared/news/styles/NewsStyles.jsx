'use client';
import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';

export const NewsContainer = styled.div`
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
`;

export const NewsItem = styled(ListGroup.Item)`
  background: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const NewsTitle = styled.h6`
  color: ${props => props.theme.textColor};
  margin: 0 0 5px 0;
  font-weight: 500;
`;

export const NewsDate = styled.small`
  color: ${props => props.theme.textColor};
  opacity: 0.7;
`;
