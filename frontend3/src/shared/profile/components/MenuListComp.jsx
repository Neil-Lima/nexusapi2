// MenuListComp.jsx
'use client';
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconWrapper, StyledListGroup, StyledListGroupItem, MenuText } from '../styles/MenuListStyles';
import { useTheme } from '@/context/theme/ThemeContext';
import { menuItems } from '../utils/MenuListUtils';

function MenuListComp() {
  const { theme } = useTheme();

  return (
    <StyledListGroup theme={theme}>
      {menuItems.map((item, index) => (
        <StyledListGroupItem 
          key={index} 
          className="d-flex align-items-center"
          theme={theme}
        >
          <IconWrapper theme={theme}>
            <FontAwesomeIcon icon={item.icon} style={{fontSize: '18px', color: '#ffffff'}} />
          </IconWrapper>
          <MenuText theme={theme}>{item.text}</MenuText>
        </StyledListGroupItem>
      ))}
    </StyledListGroup>
  );
}

export default MenuListComp;
