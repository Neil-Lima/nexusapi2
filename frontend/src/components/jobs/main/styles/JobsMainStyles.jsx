'use client';
import styled from 'styled-components';

export const MainNav = styled.div`
  margin-bottom: 20px;
  
  .nav-pills {
    background: rgba(255, 255, 255, 0.1);
    padding: 10px;
    border-radius: ${props => props.theme.borderRadius};
    
    .nav-link {
      color: ${props => props.theme.textColor};
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      
      &.active {
        background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
      }
      
      &:hover:not(.active) {
        background: rgba(255, 255, 255, 0.1);
      }

      svg {
        font-size: 16px;
      }
    }
  }
`;

export const ContentArea = styled.div`
  min-height: 500px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
  backdrop-filter: blur(10px);
  box-shadow: ${props => props.theme.boxShadow};
`;
