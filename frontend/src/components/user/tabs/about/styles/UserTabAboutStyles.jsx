'use client';
import styled from 'styled-components';

export const AboutContainer = styled.div`
  padding: 20px;
`;

export const AboutSection = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
  margin-bottom: 20px;

  h3 {
    color: ${props => props.theme.textColor};
    margin-bottom: 15px;
  }

  p {
    color: ${props => props.theme.textColor};
    opacity: 0.9;
  }

  textarea {
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    padding: 10px;
    color: ${props => props.theme.textColor};
    min-height: 100px;
    margin-bottom: 10px;
  }

  select {
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    padding: 8px;
    color: ${props => props.theme.textColor};
    margin-bottom: 10px;

    option {
      background: ${props => props.theme.primaryColor};
    }
  }
`;

export const EditButton = styled.button`
  background: ${props => props.theme.highlightColor};
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  color: white;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: ${props => props.theme.secondaryHighlightColor};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
