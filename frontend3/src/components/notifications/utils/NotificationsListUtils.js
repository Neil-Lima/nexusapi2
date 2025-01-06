'use client';
import { useState, useEffect } from 'react';
import { format, isToday, isYesterday, isThisWeek } from 'date-fns';

export const useNotificationsList = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'like',
      user: 'João Silva',
      text: 'curtiu sua foto',
      time: new Date().toISOString(),
      unread: true
    },
    {
      id: 2,
      type: 'comment',
      user: 'Maria Santos',
      text: 'comentou em sua publicação',
      time: new Date(Date.now() - 3600000).toISOString(),
      unread: false
    }
  ]);
  const [loading, setLoading] = useState(false);

  const groupByDate = (items) => {
    const groups = {};
    
    items.forEach(notification => {
      const date = new Date(notification.time);
      let groupKey;

      if (isToday(date)) {
        groupKey = 'Hoje';
      } else if (isYesterday(date)) {
        groupKey = 'Ontem';
      } else if (isThisWeek(date)) {
        groupKey = 'Esta Semana';
      } else {
        groupKey = format(date, 'dd/MM/yyyy');
      }

      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(notification);
    });

    return groups;
  };

  return {
    notifications,
    loading,
    groupByDate
  };
};
