'use client';
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faGlobeAmericas, faUsers } from '@fortawesome/free-solid-svg-icons';
import { IconWrapper, SidebarWrapper } from './styles/GroupStyles';
import { useTheme } from '@/context/theme/ThemeContext';
import ProfileCardComp from '@/shared/profile/components/card/components/ProfileCardComp';

function GroupSidebarComp({ show, onHide }) {
  const { theme } = useTheme();

  return (
    <SidebarWrapper show={show}>
      <ProfileCardComp />
      <ListGroup className="mb-4">
        {[
          { icon: faHome, text: 'Feed', color: '#FF0080' },
          { icon: faUser, text: 'Conexões', color: '#7928CA' },
          { icon: faGlobeAmericas, text: 'Ultimas noticias', color: '#4a00e0' },
          { icon: faUsers, text: 'Grupos', color: '#8e2de2' }
        ].map((item, index) => (
          <ListGroup.Item 
            key={index} 
            className="border-0 d-flex align-items-center" 
            style={{backgroundColor: 'transparent', color: '#ffffff', padding: '15px 0'}}
          >
            <IconWrapper theme={theme}>
              <FontAwesomeIcon icon={item.icon} style={{fontSize: '20px', color: '#ffffff'}} />
            </IconWrapper>
            <span style={{fontSize: '18px'}}>{item.text}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </SidebarWrapper>
  );
}

export default GroupSidebarComp;
