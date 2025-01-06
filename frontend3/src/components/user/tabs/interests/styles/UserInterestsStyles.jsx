'use client';
import styled from 'styled-components';

export const InterestsContainer = styled.div`
  padding: 20px;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 20px;

  h3, h4 {
    color: white;
    margin-bottom: 20px;
  }
`;

export const InterestSearch = styled.div`
  margin-bottom: 20px;
  
  input {
    width: 100%;
    padding: 10px;
    border-radius: ${props => props.theme.borderRadius};
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.1);
    color: white;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
    
    &:focus {
      outline: none;
      border-color: ${props => props.theme.primaryColor};
    }
  }
`;

export const InterestGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  margin-bottom: 20px;
`;

export const InterestTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: ${props => props.$selected ? 
    'rgba(255, 255, 255, 0.2)' : 
    'rgba(255, 255, 255, 0.1)'};
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.2);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
