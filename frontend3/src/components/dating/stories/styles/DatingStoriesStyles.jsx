'use client';
import styled from 'styled-components';

export const StoriesContainer = styled.div`
   border-radius: ${props => props.theme.borderRadius};
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  box-shadow: ${props => props.theme.boxShadow};
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 20px;
`;

export const StoriesList = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: auto;
  padding: 5px;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  min-width: 80px;
`;

export const StoryAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  padding: 3px;
  background: ${props => props.hasUnviewed ? 
    `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})` : 
    'rgba(255, 255, 255, 0.2)'
  };

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 3px solid #000;
    object-fit: cover;
  }
`;

export const StoryUsername = styled.span`
  color: white;
  font-size: 0.8rem;
  text-align: center;
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const AddStoryButton = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${props => props.theme.primaryColor};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }
`;
