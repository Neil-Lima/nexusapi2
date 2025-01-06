'use client';
import styled from 'styled-components';

export const ConnectionsContainer = styled.div`
  padding: 20px;

  h3 {
    color: ${props => props.theme.textColor};
    margin-bottom: 20px;
  }
`;

export const ConnectionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const ConnectionCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  padding: 15px;
  text-align: center;
  transition: all 0.3s ease;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  h4 {
    color: ${props => props.theme.textColor};
    margin-bottom: 5px;
  }

  p {
    color: ${props => props.theme.textColor};
    opacity: 0.7;
    font-size: 0.9em;
  }

  button {
    background: ${props => props.theme.highlightColor};
    border: none;
    padding: 8px 15px;
    border-radius: 20px;
    color: white;
    margin-top: 10px;
    transition: all 0.3s ease;

    &:hover {
      background: ${props => props.theme.secondaryHighlightColor};
      transform: translateY(-2px);
    }
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const SuggestionsContainer = styled.div`
  margin-top: 40px;
`;
