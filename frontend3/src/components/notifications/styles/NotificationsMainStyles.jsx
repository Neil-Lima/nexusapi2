'use client';
import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 2rem;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
