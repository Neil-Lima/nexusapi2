'use client';
import styled from 'styled-components';

export const UploadContainer = styled.div`
  padding: 2rem;
  margin-bottom: 2rem;
`;

export const DropZone = styled.div`
  border: 2px dashed ${props => props.isDragging ? props.theme.primaryColor : 'rgba(255,255,255,0.2)'};
  border-radius: ${props => props.theme.borderRadius};
  padding: 3rem;
  text-align: center;
  transition: all 0.3s ease;
  background: ${props => props.isDragging ? 'rgba(255,255,255,0.1)' : 'transparent'};

  .upload-button {
    background: ${props => props.theme.primaryColor};
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    cursor: pointer;
    display: inline-block;
    margin-top: 1rem;
  }
`;
