'use client';
import styled from 'styled-components';

export const InputContainer = styled.div`

  padding: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;

export const InputActions = styled.div`
  display: flex;
  gap: 15px;
  color: rgba(255, 255, 255, 0.7);

  svg {
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: white;
    }
  }
`;

export const MessageInput = styled.input`
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 10px 15px;
  border-radius: 20px;
  color: white;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const SendButton = styled.button`
  background: ${props => props.disabled ? 
    'rgba(255, 255, 255, 0.1)' : 
    props.theme.primaryColor
  };
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;

  &:not(:disabled):hover {
    transform: scale(1.1);
  }
`;
