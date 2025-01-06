'use client';
import React from 'react';
import MessagesHeaderComp from '../../header/components/MessagesHeaderComp';
import MessagesInputComp from '../../input/components/MessagesInputComp';
import {
  ConversationContainer,
  MessagesContainer,
  Message,
  MessageTime,
  MessageStatus,
  MessageGroup,
  DateDivider
} from '../styles/MessagesConversationStyles';
import { useMessagesConversation } from '../utils/MessagesConversationUtils';

export default function MessagesConversationComp({ contact, onStartVideoCall }) {
  const { messages, messageGroups } = useMessagesConversation();

  return (
    <ConversationContainer>
      <MessagesHeaderComp 
        contact={contact} 
        onStartVideoCall={onStartVideoCall} 
      />
      
      <MessagesContainer>
        {Object.entries(messageGroups).map(([date, messages]) => (
          <MessageGroup key={date}>
            <DateDivider>
              <span>{new Date(date).toLocaleDateString()}</span>
            </DateDivider>
            {messages.map(msg => (
              <Message key={msg.id} $sent={msg.sent}>
                <p>{msg.text}</p>
                <MessageTime>
                  {new Date(msg.time).toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </MessageTime>
                {msg.sent && (
                  <MessageStatus>
                    {msg.read ? 'Read' : 'Sent'}
                  </MessageStatus>
                )}
              </Message>
            ))}
          </MessageGroup>
        ))}
      </MessagesContainer>

      <MessagesInputComp />
    </ConversationContainer>
  );
}
