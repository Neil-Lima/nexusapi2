// CommunitiesRelatedStyles.jsx
'use client';
import styled from 'styled-components';

export const RelatedContainer = styled.div`
 background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.textColor};
  box-shadow: ${props => props.theme.boxShadow};
  padding: 20px;
  
  h3 {
    color: white;
    margin-bottom: 20px;
  }
`;

export const RelatedList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const RelatedItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(5px);
  }
  
  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const RelatedInfo = styled.div`
  h4 {
    margin: 0;
    color: white;
    font-size: 1rem;
  }
  
  span {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
  }
`;
