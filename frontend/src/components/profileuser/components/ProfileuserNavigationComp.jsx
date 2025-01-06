'use client'
import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faImages, faVideo } from '@fortawesome/free-solid-svg-icons';
import { StyledNav } from '../styles/ProfileuserStyle';
import { ProfileuserPostsComp } from './ProfileuserPostsComp';
import { ProfileuserAboutComp } from './ProfileuserAboutComp';
import { ProfileuserFriendsComp } from './ProfileuserFriendsComp';
import { ProfileuserPhotosComp } from './ProfileuserPhotosComp';
import { ProfileuserVideosComp } from './ProfileuserVideosComp';

export function ProfileuserNavigationComp({ activeTab, setActiveTab, theme, posts, setPosts, showAllFriends, setShowAllFriends }) {
  const renderContent = () => {
    switch (activeTab) {
      case 'posts':
        return <ProfileuserPostsComp posts={posts} setPosts={setPosts} theme={theme} />;
      case 'about':
        return <ProfileuserAboutComp theme={theme} />;
      case 'friends':
        return <ProfileuserFriendsComp theme={theme} showAllFriends={showAllFriends} setShowAllFriends={setShowAllFriends} />;
      case 'photos':
        return <ProfileuserPhotosComp theme={theme} />;
      case 'videos':
        return <ProfileuserVideosComp theme={theme} />;
      default:
        return null;
    }
  };

  return (
    <>
      <StyledNav variant="tabs" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
        <Nav.Item>
          <Nav.Link eventKey="posts">Posts</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="about">Sobre</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="friends">
            <FontAwesomeIcon icon={faUserFriends} /> Amigos
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="photos">
            <FontAwesomeIcon icon={faImages} /> Fotos
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="videos">
            <FontAwesomeIcon icon={faVideo} /> Vídeos
          </Nav.Link>
        </Nav.Item>
      </StyledNav>
      {renderContent()}
    </>
  );
}
