'use client';
import styled from 'styled-components';

export const EmojiContainer = styled.div`
  position: absolute;
  bottom: 100%;
  right: 0;
  background: ${props => props.theme.cardBackground};
  backdrop-filter: blur(10px);
  border-radius: ${props => props.theme.borderRadius};
  padding: 10px;
  margin-bottom: 10px;
  width: 320px;
  box-shadow: ${props => props.theme.boxShadow};
`;

export const EmojiHeader = styled.div`
  padding: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
`;

export const EmojiSearch = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  input {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    padding: 5px 10px;
    border-radius: 15px;
    color: white;
    width: 100%;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

export const EmojiCategories = styled.div`
  overflow-y: auto;
  max-height: 300px;
`;

export const EmojiCategory = styled.div`
  padding: 10px;
  
  h6 {
    margin-bottom: 10px;
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const EmojiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 5px;
`;

export const EmojiButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.2);
  }
`;

export const RecentEmojis = styled.div`
  padding: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  h6 {
    display: flex;
    align-items: center;
    gap: 5px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 10px;
  }
`;
