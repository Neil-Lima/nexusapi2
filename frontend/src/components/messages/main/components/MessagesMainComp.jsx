'use client';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MessagesContactListComp from '../../contact-list/components/MessagesContactListComp';
import MessagesConversationComp from '../../conversation/components/MessagesConversationComp';
import MessagesVideoCallComp from '../../video-call/components/MessagesVideoCallComp';
import { useMessagesMain } from '../utils/MessagesMainUtils';

export default function MessagesMainComp() {
  const { activeContact, setActiveContact, isVideoCallActive, handleEndCall } = useMessagesMain();

  return (
    <Container>
      <Row>
        <Col lg={4}>
          <MessagesContactListComp 
            activeContact={activeContact}
            setActiveContact={setActiveContact}
          />
        </Col>
        <Col lg={8}>
          {isVideoCallActive ? (
            <MessagesVideoCallComp 
              contact={activeContact}
              onEndCall={handleEndCall}
            />
          ) : (
            <MessagesConversationComp 
              contact={activeContact}
              onStartVideoCall={() => setIsVideoCallActive(true)}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}
