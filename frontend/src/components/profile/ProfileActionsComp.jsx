'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { ProfileActions, ActionButton } from './styles/ProfileStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faEnvelope, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const ProfileActionsComp = () => {
  const { theme } = useTheme();

  return (
    <ProfileActions>
      <ActionButton primary theme={theme}>
        <FontAwesomeIcon icon={faUserPlus} /> Follow
      </ActionButton>
      <ActionButton theme={theme}>
        <FontAwesomeIcon icon={faEnvelope} /> Message
      </ActionButton>
      <ActionButton theme={theme}>
        <FontAwesomeIcon icon={faEllipsisH} />
      </ActionButton>
    </ProfileActions>
  );
};

export default ProfileActionsComp;
