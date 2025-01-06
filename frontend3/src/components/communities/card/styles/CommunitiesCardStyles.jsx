'use client';
import styled from 'styled-components';

export const CardContainer = styled.div`
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.boxShadow};
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: 120px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardContent = styled.div`
  padding: 15px;
`;

export const CardTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 15px;
`;

export const CardType = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  
  svg {
    color: ${props => props.theme.primaryColor};
  }
`;

export const CardMembers = styled(CardType)``;

export const CardCategory = styled.span`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const JoinButton = styled.button`
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.participating ? 
    'rgba(255, 255, 255, 0.1)' : 
    `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`
  };
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.boxShadow};
  }
`;
