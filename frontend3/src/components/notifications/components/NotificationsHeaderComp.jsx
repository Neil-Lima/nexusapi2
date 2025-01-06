'use client';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCheck } from '@fortawesome/free-solid-svg-icons';
import { 
  StyledCard, 
  HeaderTitle, 
  HeaderActions,
  ActionButton,
  NotificationBadge 
} from '../styles/NotificationsHeaderStyles';
import { useNotificationsHeader } from '../utils/NotificationsHeaderUtils';

const NotificationsHeaderComp = ({ unreadCount }) => {
  const { theme } = useTheme();
  const { handleMarkAllRead } = useNotificationsHeader();

  return (
    <StyledCard theme={theme}>
      <Card.Body>
        <HeaderTitle>
          <div className="position-relative">
            <FontAwesomeIcon icon={faBell} />
            {unreadCount > 0 && (
              <NotificationBadge theme={theme}>
                {unreadCount}
              </NotificationBadge>
            )}
          </div>
          <div>
            <h4>Notificações</h4>
            <small>Mantenha-se atualizado</small>
          </div>
        </HeaderTitle>
        <HeaderActions>
          <ActionButton onClick={handleMarkAllRead} theme={theme}>
            <FontAwesomeIcon icon={faCheck} />
            <span>Marcar todas como lidas</span>
          </ActionButton>
        </HeaderActions>
      </Card.Body>
    </StyledCard>
  );
};

export default NotificationsHeaderComp;
