'use client';
import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 20px 0;
  min-height: 100vh;
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};

`;
