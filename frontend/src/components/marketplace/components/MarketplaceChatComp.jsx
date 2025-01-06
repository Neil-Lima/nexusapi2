"use client";
import React from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faImage,
  faSmile,
  faTimes,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/context/theme/ThemeContext";
import {
  ChatContainer,
  ChatHeader,
  ChatMessages,
  MessageItem,
  ChatInput,
  InputActions,
  ActionButton,
  CloseButton,
  OptionsButton,
} from "../styles/MarketplaceChatStyles";
import { useMarketplaceChat } from "../utils/MarketplaceChatUtils";

function MarketplaceChatComp({ isVisible, onClose, seller }) {
  const { theme } = useTheme();
  const {
    messages,
    inputMessage,
    handleSendMessage,
    handleInputChange,
    handleImageUpload,
    handleEmojiSelect,
  } = useMarketplaceChat();

  return (
    <Modal show={isVisible} onHide={onClose} centered size="lg">
      <ChatContainer theme={theme}>
        <ChatHeader>
          <div className="d-flex align-items-center">
            <img src={seller?.avatar} alt={seller?.name} />
            <div>
              <h5>{seller?.name}</h5>
              <span>Online agora</span>
            </div>
          </div>
          <div className="d-flex gap-2">
            <OptionsButton theme={theme}>
              <FontAwesomeIcon icon={faEllipsisV} />
            </OptionsButton>
            <CloseButton onClick={onClose} theme={theme}>
              <FontAwesomeIcon icon={faTimes} />
            </CloseButton>
          </div>
        </ChatHeader>

        <ChatMessages>
          {messages.map((message, index) => (
            <MessageItem
              key={index}
              isSender={message.sender === "user"}
              theme={theme}
            >
              <div className="message-content">{message.text}</div>
              <span className="message-time">{message.time}</span>
            </MessageItem>
          ))}
        </ChatMessages>

        <ChatInput>
          <InputActions>
            <ActionButton theme={theme} onClick={handleImageUpload}>
              <FontAwesomeIcon icon={faImage} />
            </ActionButton>
            <ActionButton theme={theme} onClick={handleEmojiSelect}>
              <FontAwesomeIcon icon={faSmile} />
            </ActionButton>
          </InputActions>
          <input
            type="text"
            placeholder="Digite sua mensagem..."
            value={inputMessage}
            onChange={handleInputChange}
          />
          <ActionButton theme={theme} primary onClick={handleSendMessage}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </ActionButton>
        </ChatInput>
      </ChatContainer>
    </Modal>
  );
}

export default MarketplaceChatComp;
