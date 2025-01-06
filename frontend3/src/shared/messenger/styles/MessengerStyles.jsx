'use client';
import styled from 'styled-components';

export const MessengerButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const MessengerContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 320px;
  height: ${props => props.$isMinimized ? '60px' : '450px'};
  background: ${props => props.theme.cardBackground};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius} ${props => props.theme.borderRadius} 0 0;
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export const MessengerHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  color: white;

  h6 {
    margin: 0;
    font-weight: bold;
  }

  span {
    font-size: 12px;
    opacity: 0.8;
  }
`;

export const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  border: 2px solid rgba(255, 255, 255, 0.2);
`;

export const HeaderActions = styled.div`
  margin-left: auto;
  display: flex;
  gap: 10px;
`;

export const HeaderButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  opacity: 0.8;
  transition: all 0.3s ease;
  padding: 5px;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

export const MessengerBody = styled.div`
  height: calc(100% - 120px);
  overflow-y: auto;
  padding: 15px;
  background: rgba(0, 0, 0, 0.05);

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }
`;

export const MessageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Message = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${props => props.$isSent ? 'flex-end' : 'flex-start'};

  .message-content {
    max-width: 70%;
    background: ${props => props.$isSent 
      ? `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`
      : 'rgba(255, 255, 255, 0.1)'};
    padding: 10px 15px;
    border-radius: 15px;
    color: white;

    p {
      margin: 0;
      font-size: 14px;
    }

    span {
      font-size: 11px;
      opacity: 0.7;
      display: block;
      margin-top: 5px;
    }
  }
`;

export const MessengerFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  gap: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.05);
`;

export const MessageInput = styled.input`
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 8px 15px;
  border-radius: 20px;
  color: white;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const SendButton = styled.button`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const AttachmentButton = styled(SendButton)`
  background: rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const EmojiButton = styled(SendButton)`
  background: rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;
