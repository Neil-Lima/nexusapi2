'use client';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

export const useMessagesConversation = () => {
  const [messages, setMessages] = useState([]);
  const [messageGroups, setMessageGroups] = useState({});

  useEffect(() => {
    const fetchMessagesList = async () => {
      const response = [
        {
          id: 1,
          text: "Hey, how are you?",
          time: new Date().toISOString(),
          sent: true,
          read: true
        },
        {
          id: 2,
          text: "I'm good, thanks! How about you?",
          time: new Date().toISOString(),
          sent: false,
          read: true
        },
        {
          id: 3,
          text: "Great! Want to train together today?",
          time: new Date().toISOString(),
          sent: true,
          read: true
        }
      ];
      setMessages(response);
      groupMessagesByDate(response);
    };

    fetchMessagesList();
  }, []);

  const groupMessagesByDate = (messages) => {
    const groups = {};
    messages.forEach(message => {
      if (message && message.time) {
        const date = format(new Date(message.time), 'yyyy-MM-dd');
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(message);
      }
    });
    setMessageGroups(groups);
  };

  return {
    messages,
    messageGroups
  };
};
