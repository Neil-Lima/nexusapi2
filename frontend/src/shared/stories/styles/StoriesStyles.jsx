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
    padding: 15px;
    
    h5 {
      margin: 0;
      color: ${props => props.theme.textColor};
      font-size: 18px;
    }

    @media (max-width: 576px) {
      padding: 10px;
      
      h5 {
        font-size: 16px;
      }
    }
  }

  .card-body {
    padding: 1rem;
    position: relative;

    @media (max-width: 576px) {
      padding: 0.5rem;
    }
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

  @media (max-width: 768px) {
    gap: 8px;
  }

  @media (max-width: 576px) {
    gap: 6px;
    padding: 5px 0;
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

  @media (max-width: 768px) {
    min-width: 100px;
    height: 180px;
  }

  @media (max-width: 576px) {
    min-width: 80px;
    height: 140px;
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

  @media (max-width: 768px) {
    .user-avatar {
      width: 35px;
      height: 35px;
      border-width: 2px;
    }
    
    span {
      font-size: 11px;
    }
  }

  @media (max-width: 576px) {
    bottom: 5px;
    left: 5px;
    right: 5px;

    .user-avatar {
      width: 30px;
      height: 30px;
    }
    
    span {
      font-size: 10px;
    }
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

  @media (max-width: 768px) {
    .create-story-content {
      gap: 8px;

      svg {
        font-size: 20px;
      }

      span {
        font-size: 11px;
      }
    }
  }

  @media (max-width: 576px) {
    .create-story-content {
      gap: 5px;

      svg {
        font-size: 18px;
      }

      span {
        display: none;
      }
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

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }

  @media (max-width: 576px) {
    width: 20px;
    height: 20px;
    ${props => props.direction === 'left' ? 'left: 5px;' : 'right: 5px;'};
  }
`;
