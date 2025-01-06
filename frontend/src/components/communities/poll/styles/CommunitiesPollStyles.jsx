// CommunitiesPollStyles.jsx
'use client';
import styled from 'styled-components';

export const PollContainer = styled.div`
background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.textColor};
  box-shadow: ${props => props.theme.boxShadow};
  padding: 20px;
  margin-bottom: 20px;
`;

export const PollHeader = styled.div`
  margin-bottom: 20px;
`;

export const PollTitle = styled.h3`
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

export const PollQuestion = styled.h4`
  margin: 0 0 20px 0;
  color: white;
  font-size: 1.1rem;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`;

export const OptionItem = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${props => props.theme.borderRadius};
  padding: 15px;
  cursor: pointer;
  overflow: hidden;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const OptionBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${props => props.percentage}%;
  background: ${props => props.voted ? 
    `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})` :
    'rgba(255, 255, 255, 0.1)'
  };
  opacity: 0.2;
  transition: width 0.3s ease;
`;

export const OptionText = styled.span`
  position: relative;
  color: white;
  z-index: 1;
`;

export const OptionStats = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-top: 10px;
  z-index: 1;
`;

export const VoteButton = styled.button`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-50%) scale(1.1);
  }
`;

export const PollFooter = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 8px;
`;
