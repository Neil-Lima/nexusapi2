'use client';
import styled from 'styled-components';

export const ListContainer = styled.div`
  padding: 1rem;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 20px;
`;

export const DateDivider = styled.div`
  text-align: center;
  position: relative;
  margin: 20px 0;
  color: ${props => props.theme.textColor};
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
    background: ${props => props.theme.textColor};
    opacity: 0.2;
  }
  
  span {
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    padding: 0 15px;
    position: relative;
  }
`;
