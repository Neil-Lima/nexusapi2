'use client'
import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { 
  ContactListContainer,
  SearchBar,
  ContactList,
  ContactItem,
  Avatar,
  ContactInfo,
  LastMessage,
  MessageTime,
  UnreadBadge
} from '../styles/MessagesContactListStyles';
import { useMessagesContactList } from '../utils/MessagesContactListUtils';

export default function MessagesContactListComp({ activeContact, setActiveContact }) {
  const { contacts, searchContacts } = useMessagesContactList();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <ContactListContainer>
      <SearchBar>
        <InputGroup>
          <Form.Control
            placeholder="Pesquisar contatos"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="outline-secondary">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </InputGroup>
      </SearchBar>

      <ContactList>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            data-active={activeContact?.id === contact.id}
            onClick={() => setActiveContact(contact)}
          >
            <Avatar $online={contact.online}>
              <Image 
                src={contact.avatar} 
                alt={contact.name}
                width={50}
                height={50}
              />
            </Avatar>
            <ContactInfo>
              <h6>{contact.name}</h6>
              <LastMessage>{contact.lastMessage}</LastMessage>
            </ContactInfo>
            <div>
              <MessageTime>{contact.lastMessageTime}</MessageTime>
              {contact.unreadCount > 0 && (
                <UnreadBadge>{contact.unreadCount}</UnreadBadge>
              )}
            </div>
          </ContactItem>
        ))}
      </ContactList>
    </ContactListContainer>
  );
}
