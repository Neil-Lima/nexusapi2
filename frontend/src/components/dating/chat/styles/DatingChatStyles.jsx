'use client';
import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  overflow: hidden;
`;

export const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const UserAvatar = styled.div`
  position: relative;
  width: 45px;
  height: 45px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const UserStatus = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  color: ${props => props.online ? '#4CAF50' : '#9e9e9e'};
  font-size: 0.8rem;
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
`;

export const UserName = styled.div`
  h3 {
    margin: 0;
    color: white;
    font-size: 1.1rem;
  }

  span {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 10px;
`;

export const ActionButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    transform: scale(1.1);
  }
`;

export const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
  }
`;

export const MessageGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DateDivider = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  margin: 10px 0;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 45%;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

export const Message = styled.div`
  max-width: 70%;
  align-self: ${props => props.sent ? 'flex-end' : 'flex-start'};
  background: ${props => props.sent ? 
    `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})` : 
    'rgba(255, 255, 255, 0.1)'
  };
  padding: 12px 15px;
  border-radius: 15px;
  color: white;

  p {
    margin: 0;
    line-height: 1.4;
  }
`;

export const MessageTime = styled.span`
  display: block;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 5px;
`;

export const ChatInput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.05);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
`;

export const InputActions = styled.div`
  display: flex;
  gap: 10px;
`;

export const MessageField = styled.input`
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 10px 15px;
  border-radius: 20px;
  color: white;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const SendButton = styled(ActionButton)`
  background: ${props => props.disabled ? 
    'rgba(255, 255, 255, 0.1)' : 
    `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`
  };
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

export const EmojiPicker = styled.div`
  position: absolute;
  bottom: 100%;
  left: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;
