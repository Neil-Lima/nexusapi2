'use client';
import styled from 'styled-components';

export const StoriesContainer = styled.div`
  margin-bottom: 20px;
  position: relative;

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

  .card-body {
    padding: 1rem;
    position: relative;
  }
`;

export const StoriesWrapper = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: hidden;
  padding: 10px 0;
  position: relative;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StoryItem = styled.div`
  min-width: 120px;
  height: 200px;
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.05);
  }

  .story-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StoryContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

export const StoryUser = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid ${props => props.theme.primaryColor};
    margin-bottom: 5px;
  }

  span {
    color: ${props => props.theme.textColor};
    font-size: 12px;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
`;

export const CreateStory = styled(StoryItem)`
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  
  .create-story-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => props.theme.textColor};
    gap: 10px;

    svg {
      font-size: 24px;
    }

    span {
      font-size: 12px;
    }
  }
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  ${props => props.direction === 'left' ? 'left: 10px;' : 'right: 10px;'};
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border: none;
  color: ${props => props.theme.textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    transform: translateY(-50%) scale(1.1);
    box-shadow: ${props => props.theme.boxShadow};
  }
`;
