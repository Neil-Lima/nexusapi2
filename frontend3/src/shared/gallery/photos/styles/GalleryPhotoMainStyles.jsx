'use client';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const MainContainer = styled(Container)`
  padding: 2rem 0;
  min-height: 100vh;
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
`;

export const GallerySection = styled.section`
  margin-bottom: 2rem;
  padding: 1rem;
  
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
    padding: 1rem 0;
  }
`;
