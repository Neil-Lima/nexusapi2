'use client';
import styled from 'styled-components';

export const ContactListContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  height: calc(100vh - 40px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const SearchBar = styled.div`
  padding: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    padding: 8px;
    border-radius: 20px;
    color: white;
    width: 100%;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

export const ContactList = styled.div`
background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.textColor};
  box-shadow: ${props => props.theme.boxShadow};
  flex: 1;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }
`;

export const ContactItem = styled.div`
  padding: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 15px;
  background: ${props => props['data-active'] ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  &::after {
    content: '';
    display: ${props => props.$online ? 'block' : 'none'};
    position: absolute;
    bottom: 2px;
    right: 2px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #44b700;
    border: 2px solid white;
  }
`;

export const ContactInfo = styled.div`
  flex: 1;
  h6 {
    margin: 0;
    color: white;
  }
`;

export const LastMessage = styled.p`
  margin: 0;
  font-size: 0.9em;
  color: rgba(255, 255, 255, 0.7);
`;

export const MessageTime = styled.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
`;

export const UnreadBadge = styled.span`
  background: ${props => props.theme.highlightColor};
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.8em;
  margin-top: 5px;
  display: inline-block;
`;
