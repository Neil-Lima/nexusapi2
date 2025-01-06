'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faAt } from '@fortawesome/free-solid-svg-icons';
import {
  NotificationItem,
  NotificationIcon,
  NotificationContent,
  NotificationActions,
  ActionButton
} from '../styles/NotificationsItemStyles';
import { useNotificationsItem } from '../utils/NotificationsItemUtils';

const NotificationsItemComp = ({ notification }) => {
  const { theme } = useTheme();
  const { handleMarkAsRead } = useNotificationsItem();

  return (
    <NotificationItem theme={theme} $unread={notification.unread}>
      <NotificationIcon theme={theme}>
        <FontAwesomeIcon icon={getNotificationIcon(notification.type)} />
      </NotificationIcon>
      <NotificationContent theme={theme}>
        <strong>{notification.user}</strong>
        <p>{notification.text}</p>
        <NotificationActions>
          <ActionButton 
            onClick={() => handleMarkAsRead(notification.id)}
            theme={theme}
          >
            Marcar como lida
          </ActionButton>
        </NotificationActions>
      </NotificationContent>
    </NotificationItem>
  );
};

const getNotificationIcon = (type) => {
  switch (type) {
    case 'like': return faHeart;
    case 'comment': return faComment;
    case 'mention': return faAt;
    default: return faBell;
  }
};

export default NotificationsItemComp;
