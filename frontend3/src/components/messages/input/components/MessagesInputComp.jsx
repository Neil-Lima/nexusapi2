'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSmile, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import MessagesEmojiSelectorComp from '../../emoji-selector/components/MessagesEmojiSelectorComp';
import {
  InputContainer,
  MessageInput,
  InputActions,
  SendButton
} from '../styles/MessagesInputStyles';
import { useMessagesInput } from '../utils/MessagesInputUtils';

export default function MessagesInputComp() {
  const { 
    message, 
    showEmojis, 
    handleMessageChange, 
    handleEmojiSelect, 
    handleAttachment,
    toggleEmojiPicker,
    handleSend 
  } = useMessagesInput();

  return (
    <InputContainer>
      <InputActions>
        <FontAwesomeIcon 
          icon={faSmile} 
          onClick={toggleEmojiPicker}
        />
        <FontAwesomeIcon 
          icon={faPaperclip} 
          onClick={handleAttachment}
        />
      </InputActions>
      
      <MessageInput
        value={message}
        onChange={handleMessageChange}
        placeholder="Digite uma mensagem..."
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
      />
      
      <SendButton 
        onClick={handleSend}
        disabled={!message.trim()}
      >
        <FontAwesomeIcon icon={faPaperPlane} />
      </SendButton>

      {showEmojis && (
        <MessagesEmojiSelectorComp
          onEmojiSelect={handleEmojiSelect}
        />
      )}
    </InputContainer>
  );
}
