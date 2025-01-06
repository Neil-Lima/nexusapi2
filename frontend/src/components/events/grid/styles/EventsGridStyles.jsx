// EventsGridStyles.jsx
'use client';
import styled from 'styled-components';

export const GridContainer = styled.div`
  width: 100%;
  padding: 20px;
  overflow: hidden;
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
  flex-wrap: wrap;
  gap: 15px;
`;

export const ViewTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: white;
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
  margin-left: 10px;
  
  &:hover {
    transform: translateY(-2px);
    background: ${props => props.active ? 
      `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})` : 
      'rgba(255, 255, 255, 0.1)'
    };
  }
`;

export const GridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  
  @media (max-width: 1200px) {
    gap: 15px;
  }
  
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const GridCol = styled.div`
  height: 100%;
  width: 100%;
  min-width: 0;
  display: flex;
  
  > * {
    width: 100%;
    max-width: 100%;
    flex: 1;
  }
`;

export const ListRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const ListCol = styled.div`
  width: 100%;
  min-width: 0;
`;

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 0;
  overflow: hidden;
`;
