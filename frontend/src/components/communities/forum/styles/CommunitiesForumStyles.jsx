// CommunitiesForumStyles.jsx
'use client';
import styled from 'styled-components';

export const ForumContainer = styled.div`
background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.textColor};
  box-shadow: ${props => props.theme.boxShadow};
  padding: 20px;
  margin-bottom: 20px;
`;

export const ForumHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ForumTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
  
  svg {
    color: ${props => props.theme.primaryColor};
  }
`;

export const CreateTopicButton = styled.button`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.boxShadow};
  }
`;

export const TopicsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const TopicItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${props => props.theme.borderRadius};
  padding: 15px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const TopicTitle = styled.h4`
color: ${props => props.theme.primaryColor};
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
   
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  color: white;
`;

export const TopicInfo = styled.div`
color: ${props => props.theme.primaryColor};
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
   
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

export const TopicStats = styled.div`
color: ${props => props.theme.primaryColor};
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
   
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  
  button {
    background: none;
    border: none;
    color: ${props => props.theme.primaryColor};
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
   
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const PinnedBadge = styled.span`
  background: rgba(255, 255, 255, 0.1);
 color: ${props => props.theme.secondaryColor};
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
   
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
`;
