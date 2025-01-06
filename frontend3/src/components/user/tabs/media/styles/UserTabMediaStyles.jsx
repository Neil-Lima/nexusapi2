'use client';
import styled from 'styled-components';

export const MediaContainer = styled.div`
  padding: 20px;
`;

export const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const MediaItem = styled.div`
  position: relative;
  padding-bottom: 100%;
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;
