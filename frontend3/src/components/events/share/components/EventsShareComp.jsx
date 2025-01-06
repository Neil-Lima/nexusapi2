'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import { useEventsShare } from '../utils/EventsShareUtils';
import {
  ShareContainer,
  ShareTitle,
  ShareButtons,
  ShareButton,
  CopyLinkButton
} from '../styles/EventsShareStyles';

export default function EventsShareComp({ eventId }) {
  const { theme } = useTheme();
  const {
    handleShare,
    handleCopyLink,
    showCopySuccess
  } = useEventsShare(eventId);

  return (
    <ShareContainer theme={theme}>
      <ShareTitle theme={theme}>Compartilhar Evento</ShareTitle>
      
      <ShareButtons>
        <ShareButton 
          onClick={() => handleShare('facebook')}
          platform="facebook"
          theme={theme}
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </ShareButton>

        <ShareButton 
          onClick={() => handleShare('twitter')}
          platform="twitter"
          theme={theme}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </ShareButton>

        <ShareButton 
          onClick={() => handleShare('linkedin')}
          platform="linkedin"
          theme={theme}
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </ShareButton>

        <ShareButton 
          onClick={() => handleShare('whatsapp')}
          platform="whatsapp"
          theme={theme}
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </ShareButton>
      </ShareButtons>

      <CopyLinkButton 
        onClick={handleCopyLink}
        theme={theme}
      >
        <FontAwesomeIcon icon={faLink} />
        {showCopySuccess ? 'Link Copiado!' : 'Copiar Link'}
      </CopyLinkButton>
    </ShareContainer>
  );
}
