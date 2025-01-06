'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaperPlane,
  faImage,
  faSmile,
  faEllipsisV,
  faVideo,
  faPhone,
  faCircle
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  ChatContainer,
  ChatHeader,
  UserInfo,
  UserAvatar,
  UserStatus,
  UserName,
  HeaderActions,
  ActionButton,
  ChatMessages,
  MessageGroup,
  DateDivider,
  Message,
  MessageTime,
  ChatInput,
  InputActions,
  MessageField,
  SendButton,
  EmojiPicker
} from '../styles/DatingChatStyles';
import { useDatingChat } from '../utils/DatingChatUtils';

export default function DatingChatComp({ matchId }) {
  const { theme } = useTheme();
  const {
    match,
    messages,
    newMessage,
    showEmojis,
    handleSendMessage,
    handleInputChange,
    handleFileUpload,
    toggleEmojis,
    handleEmojiSelect,
    handleVideoCall,
    handleVoiceCall
  } = useDatingChat(matchId);

  return (
    <ChatContainer theme={theme}>
      <ChatHeader>
        <UserInfo>
          <UserAvatar>
            <img src={match.avatar} alt={match.name} />
            <UserStatus online={match.online}>
              <FontAwesomeIcon icon={faCircle} />
            </UserStatus>
          </UserAvatar>
          <UserName>
            <h3>{match.name}</h3>
            <span>{match.online ? 'Online' : 'Offline'}</span>
          </UserName>
        </UserInfo>

        <HeaderActions>
          <ActionButton onClick={handleVideoCall} theme={theme}>
            <FontAwesomeIcon icon={faVideo} />
          </ActionButton>
          <ActionButton onClick={handleVoiceCall} theme={theme}>
            <FontAwesomeIcon icon={faPhone} />
          </ActionButton>
          <ActionButton theme={theme}>
            <FontAwesomeIcon icon={faEllipsisV} />
          </ActionButton>
        </HeaderActions>
      </ChatHeader>

      <ChatMessages>
        {messages.map((group, index) => (
          <MessageGroup key={index}>
            <DateDivider>{group.date}</DateDivider>
            {group.messages.map((message, msgIndex) => (
              <Message key={msgIndex} sent={message.sent} theme={theme}>
                <p>{message.text}</p>
                <MessageTime>{message.time}</MessageTime>
              </Message>
            ))}
          </MessageGroup>
        ))}
      </ChatMessages>

      <ChatInput>
        <InputActions>
          <ActionButton onClick={toggleEmojis} theme={theme}>
            <FontAwesomeIcon icon={faSmile} />
          </ActionButton>
          <ActionButton theme={theme}>
            <label>
              <FontAwesomeIcon icon={faImage} />
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />
            </label>
          </ActionButton>
        </InputActions>

        <MessageField
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Digite sua mensagem..."
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />

        <SendButton 
          onClick={handleSendMessage}
          disabled={!newMessage.trim()}
          theme={theme}
        >
          <FontAwesomeIcon icon={faPaperPlane} />
        </SendButton>

        {showEmojis && (
          <EmojiPicker>
            {/* Implementar componente de emoji picker */}
          </EmojiPicker>
        )}
      </ChatInput>
    </ChatContainer>
  );
}
