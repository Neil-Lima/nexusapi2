'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { 
  HeaderCard, 
  HeaderContainer, 
  HeaderTitle, 
  HeaderSubtitle,
  HeaderIcon,
  MenuButton 
} from './FriendsHeaderStyles';
import { headerConfig, useHeaderActions } from './FriendsHeaderUtils';
import { useTheme } from '@/context/theme/ThemeContext';

function FriendsHeaderComp() {
  const { theme } = useTheme();
  const { isMobileMenuOpen, toggleMobileMenu } = useHeaderActions();

  return (
    <HeaderCard theme={theme}>
      <HeaderContainer>
        <div className="d-flex align-items-center">
          <HeaderIcon theme={theme}>
            <FontAwesomeIcon icon={faUserFriends} />
          </HeaderIcon>
          <div>
            <HeaderTitle theme={theme}>{headerConfig.title}</HeaderTitle>
            <HeaderSubtitle>{headerConfig.subtitle}</HeaderSubtitle>
          </div>
        </div>
        <MenuButton 
          className={`d-${headerConfig.mobileBreakpoint}-none`} 
          theme={theme}
          onClick={toggleMobileMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </MenuButton>
      </HeaderContainer>
    </HeaderCard>
  );
}

export default FriendsHeaderComp;
