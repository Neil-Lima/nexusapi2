'use client';
import styled from 'styled-components';

export const EditorContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1.5rem;
`;

export const ToolBar = styled.div`
  width: 300px;
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  padding: 1rem;

  .filters {
    margin-bottom: 2rem;
  }

  .adjustment-control {
    margin: 1rem 0;
    
    input[type="range"] {
      width: 100%;
    }
  }
`;

export const Canvas = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: auto;
  }
`;
