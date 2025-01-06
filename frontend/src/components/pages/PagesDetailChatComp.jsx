'use client'
import React, { useState } from 'react';
import { Form, InputGroup, Modal } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { ChatWindow, StyledButton } from './styles/PagesStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function PagesDetailChatComp({ show, onHide, pageData }) {
  const { theme } = useTheme();
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <ChatWindow show={show} onHide={onHide} centered theme={theme}>
      <Modal.Header closeButton>
        <Modal.Title>Chat with {pageData.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ height: '300px', overflowY: 'auto', marginBottom: '20px' }}>
          <p>Welcome to chat! How can we help?</p>
        </div>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Form.Control
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              style={{ background: 'rgba(255, 255, 255, 0.1)', color: theme.textColor }}
            />
            <StyledButton type="submit" theme={theme}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </StyledButton>
          </InputGroup>
        </Form>
      </Modal.Body>
    </ChatWindow>
  );
}
