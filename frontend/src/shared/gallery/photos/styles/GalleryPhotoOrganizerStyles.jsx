'use client';
import styled from 'styled-components';

export const OrganizerContainer = styled.div`
  padding: 1.5rem;
`;

export const AlbumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;

  .album-card {
    background: ${props => props.theme.cardBackground};
    border-radius: ${props => props.theme.borderRadius};
    padding: 1rem;
    text-align: center;
    
    img {
      width: 100%;
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: ${props => props.theme.borderRadius};
      margin-bottom: 1rem;
    }
  }
`;
