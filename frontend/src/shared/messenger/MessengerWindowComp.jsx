'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSmile, faImage, faEllipsisV, faMinimize, faTimes, faComments } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  MessengerContainer,
  MessengerHeader,
  MessengerBody,
  MessengerFooter,
  MessageInput,
  MessageList,
  Message,
  UserAvatar,
  HeaderActions,
  HeaderButton,
  SendButton,
  AttachmentButton,
  EmojiButton,
  MessengerButton
} from './styles/MessengerStyles';
import { useMessenger } from './utils/MessengerUtils';

function MessengerWindowComp() {
  const { theme } = useTheme();
  const {
    isOpen,
    isMinimized,
    handleMinimize,
    handleClose,
    handleOpen,
    handleSendMessage,
    handleAttachment,
    handleEmojiSelect,
    showEmojiPicker,
    setShowEmojiPicker,
    messageText,
    setMessageText,
    messages
  } = useMessenger();

  if (!isOpen) {
    return (
      <MessengerButton onClick={handleOpen} theme={theme}>
        <FontAwesomeIcon icon={faComments} />
      </MessengerButton>
    );
  }

  return (
    <MessengerContainer $isMinimized={isMinimized} theme={theme}>
      <MessengerHeader theme={theme}>
        <UserAvatar src="https://picsum.photos/50/50" alt="User" />
        <div>
          <h6>John Doe</h6>
          <span>Online</span>
        </div>
        <HeaderActions>
          <HeaderButton onClick={handleMinimize} theme={theme}>
            <FontAwesomeIcon icon={faMinimize} />
          </HeaderButton>
          <HeaderButton onClick={handleClose} theme={theme}>
            <FontAwesomeIcon icon={faTimes} />
          </HeaderButton>
        </HeaderActions>
      </MessengerHeader>

      <MessengerBody>
        <MessageList>
          {messages.map((message, index) => (
            <Message key={index} $isSent={message.isSent} theme={theme}>
              {!message.isSent && <UserAvatar src={message.avatar} alt={message.user} />}
              <div className="message-content">
                <p>{message.text}</p>
                <span>{message.time}</span>
              </div>
            </Message>
          ))}
        </MessageList>
      </MessengerBody>

      <MessengerFooter>
        <EmojiButton onClick={() => setShowEmojiPicker(!showEmojiPicker)} theme={theme}>
          <FontAwesomeIcon icon={faSmile} />
        </EmojiButton>
        <AttachmentButton onClick={handleAttachment} theme={theme}>
          <FontAwesomeIcon icon={faImage} />
        </AttachmentButton>
        <MessageInput
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Digite sua mensagem..."
          theme={theme}
        />
        <SendButton onClick={handleSendMessage} theme={theme}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </SendButton>
      </MessengerFooter>
    </MessengerContainer>
  );
}

export default MessengerWindowComp;
