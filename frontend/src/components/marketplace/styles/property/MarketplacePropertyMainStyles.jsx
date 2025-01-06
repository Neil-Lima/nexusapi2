'use client'
import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background: ${props => props.theme.backgroundColor};
`;

export const ContentWrapper = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;
