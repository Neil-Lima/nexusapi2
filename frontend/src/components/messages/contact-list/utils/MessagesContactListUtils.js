'use client';
import { useState, useEffect } from 'react';

export const useMessagesContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContactsList = async () => {
      const response = [
        {
          id: 1,
          name: "Sasuke Uchiha",
          avatar: "https://picsum.photos/50/50?random=1",
          online: true,
          lastMessage: "Where are you, dobe?",
          lastMessageTime: "2min ago",
          unreadCount: 3
        },
        {
          id: 2,
          name: "Sakura Haruno",
          avatar: "https://picsum.photos/50/50?random=2",
          online: true,
          lastMessage: "Training at the hospital today",
          lastMessageTime: "1h ago",
          unreadCount: 0
        },
        {
          id: 3,
          name: "Kakashi Sensei",
          avatar: "https://picsum.photos/50/50?random=3",
          online: false,
          lastMessage: "Don't be late for training",
          lastMessageTime: "3h ago",
          unreadCount: 1
        }
      ];
      setContacts(response);
    };

    fetchContactsList();
  }, []);

  const searchContacts = (searchTerm) => {
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return {
    contacts,
    searchContacts
  };
};
