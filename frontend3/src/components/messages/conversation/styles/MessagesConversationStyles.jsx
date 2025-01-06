'use client';
import styled from 'styled-components';

export const ConversationContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
`;

export const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const MessageGroup = styled.div`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Message = styled.div`
  max-width: 60%;
  padding: 15px;
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: ${props => props.$sent ? '0 0 0 auto' : '0 auto 0 0'};
  background-color: ${props => props.$sent ? 
    props.theme.primaryColor : 
    'rgba(255, 255, 255, 0.1)'
  };
  color: #ffffff;
  
  p {
    margin: 0;
    padding: 0;
  }
`;

export const MessageTime = styled.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 5px;
  align-self: ${props => props.$sent ? 'flex-end' : 'flex-start'};
`;

export const MessageStatus = styled.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 2px;
  align-self: flex-end;
`;

export const DateDivider = styled.div`
  text-align: center;
  margin: 20px 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
  }
  
  span {
    background: rgba(0, 0, 0, 0.5);
    padding: 0 10px;
    position: relative;
    color: #ffffff;
  }
`;
