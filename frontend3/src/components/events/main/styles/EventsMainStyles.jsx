'use client';
import styled from 'styled-components';

export const MainContainer = styled.div`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};

  min-height: 100vh;
  padding: 20px 0;
  backdrop-filter: blur(10px);
  color: ${props => props.theme.textColor};
`;

export const ContentArea = styled.div`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
  margin-top: 20px;
  box-shadow: ${props => props.theme.boxShadow};
  border: 1px solid rgba(255, 255, 255, 0.1);
`;
