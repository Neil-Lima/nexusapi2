'use client';
import styled from 'styled-components';

export const GridContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

export const ViewToggleContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
  margin-bottom: 30px;
  backdrop-filter: blur(10px);
`;

export const ViewToggleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ViewTitle = styled.h1`
  margin: 0;
  font-size: 1.2rem;
  color: white;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ViewToggleButton = styled.button`
  background: ${props => props.active ? 
    `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})` : 
    'transparent'
  };
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    background: ${props => props.active ? 
      `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})` : 
      'rgba(255, 255, 255, 0.1)'
    };
  }
`;

export const CreateButton = styled(ViewToggleButton)`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  
  &:hover {
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.secondaryColor}, ${props.theme.primaryColor})`};
  }
`;

export const GridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
`;

export const GridCol = styled.div`
  height: 100%;
`;
