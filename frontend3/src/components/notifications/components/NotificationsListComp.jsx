'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { 
  ListContainer,
  DateDivider 
} from '../styles/NotificationsListStyles';
import { useNotificationsList } from '../utils/NotificationsListUtils';
import NotificationsItemComp from './NotificationsItemComp';

const NotificationsListComp = () => {
  const { theme } = useTheme();
  const { notifications, loading, groupByDate } = useNotificationsList();

  if (loading) return <div>Carregando...</div>;

  const groupedNotifications = groupByDate(notifications);

  return (
    <ListContainer theme={theme}>
      {Object.entries(groupedNotifications).map(([date, items]) => (
        <div key={date}>
          <DateDivider theme={theme}>
            <span>{date}</span>
          </DateDivider>
          {items.map(notification => (
            <NotificationsItemComp 
              key={notification.id} 
              notification={notification}
            />
          ))}
        </div>
      ))}
    </ListContainer>
  );
};

export default NotificationsListComp;
