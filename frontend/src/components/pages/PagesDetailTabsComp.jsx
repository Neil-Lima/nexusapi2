'use client'
import React, { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { StyledNav } from './styles/PagesStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faImage, faVideo, faUser, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import PagesDetailPostsComp from './PagesDetailPostsComp';
import PagesDetailFollowersComp from './PagesDetailFollowersComp';
import PagesDetailInfoComp from './PagesDetailInfoComp';
import GalleryPhotoGridComp from '@/shared/gallery/photos/components/GalleryPhotoGridComp';
import GalleryPhotoUploadComp from '@/shared/gallery/photos/components/GalleryPhotoUploadComp';
import GalleryActionButtons from '@/shared/gallery/photos/GalleryActionButtons';
import GalleryAlbumGrid from '@/shared/gallery/photos/components/GalleryAlbumGrid';
import GalleryPhotoMoodboardComp from '@/shared/gallery/photos/components/GalleryPhotoMoodboardComp';

export default function PagesDetailTabsComp({ pageData }) {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('posts');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    {
      id: 1,
      src: 'https://picsum.photos/400/300?random=1',
      title: 'Photo 1',
      description: 'Beautiful landscape photo',
      likes: 120,
      comments: 45
    },
    {
      id: 2, 
      src: 'https://picsum.photos/400/300?random=2',
      title: 'Photo 2',
      description: 'Amazing sunset view',
      likes: 89,
      comments: 23
    },
    {
      id: 3,
      src: 'https://picsum.photos/400/300?random=3', 
      title: 'Photo 3',
      description: 'City lights at night',
      likes: 156,
      comments: 67
    },
    {
      id: 4,
      src: 'https://picsum.photos/400/300?random=4',
      title: 'Photo 4', 
      description: 'Mountain peaks',
      likes: 234,
      comments: 89
    },
    {
      id: 5,
      src: 'https://picsum.photos/400/300?random=5',
      title: 'Photo 5',
      description: 'Ocean waves',
      likes: 178,
      comments: 34
    },
    {
      id: 6,
      src: 'https://picsum.photos/400/300?random=6',
      title: 'Photo 6',
      description: 'Forest trail',
      likes: 145,
      comments: 56
    }
  ];

  const albums = [
    {
      id: 1,
      name: 'Nature Collection',
      description: 'Beautiful nature photos',
      image: 'https://picsum.photos/400/300?random=7',
      isPrivate: false,
      photos: photos.slice(0, 3)
    },
    {
      id: 2,
      name: 'City Life',
      description: 'Urban photography',
      image: 'https://picsum.photos/400/300?random=8',
      isPrivate: true,
      photos: photos.slice(3, 6)
    }
  ];

  const handlePhotoSelect = (photo) => {
    setSelectedPhoto(photo);
  };

  const handlePhotoMove = (sourceIndex, destinationIndex) => {
    // Implement photo reordering logic here
  };

  const handleEdit = (id) => {
    // Implement edit logic
  };

  const handleDelete = (id) => {
    // Implement delete logic
  };

  const handleShare = (id) => {
    // Implement share logic
  };

  const handleDownload = (id) => {
    // Implement download logic
  };

  const handleTogglePrivacy = (id) => {
    // Implement privacy toggle logic
  };

  const handleAlbumSelect = (album) => {
    // Implement album selection logic
  };

  const handleSort = () => {
    // Implement sort logic
  };

  const renderPhotoSection = () => (
    <div>
      <GalleryPhotoUploadComp />
      <GalleryActionButtons 
        viewMode={viewMode}
        setViewMode={setViewMode}
        handleSort={handleSort}
      />
      {viewMode === 'grid' ? (
        <GalleryPhotoGridComp 
          photos={photos}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onShare={handleShare}
          onDownload={handleDownload}
          onTogglePrivacy={handleTogglePrivacy}
          onPhotoSelect={handlePhotoSelect}
        />
      ) : viewMode === 'album' ? (
        <GalleryAlbumGrid 
          albums={albums}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onShare={handleShare}
          onDownload={handleDownload}
          onTogglePrivacy={handleTogglePrivacy}
          onAlbumSelect={handleAlbumSelect}
        />
      ) : (
        <GalleryPhotoMoodboardComp 
          photos={photos}
          onPhotoMove={handlePhotoMove}
          onPhotoSelect={handlePhotoSelect}
          selectedPhoto={selectedPhoto}
        />
      )}
    </div>
  );

  return (
    <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
      <StyledNav variant="tabs" theme={theme}>
        <Nav.Item>
          <Nav.Link eventKey="posts">
            <FontAwesomeIcon icon={faNewspaper} className="me-2" />
            Posts
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="photos">
            <FontAwesomeIcon icon={faImage} className="me-2" />
            Photos
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="videos">
            <FontAwesomeIcon icon={faVideo} className="me-2" />
            Videos
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="followers">
            <FontAwesomeIcon icon={faUser} className="me-2" />
            Followers
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="info">
            <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
            Info
          </Nav.Link>
        </Nav.Item>
      </StyledNav>

      <Tab.Content>
        <Tab.Pane eventKey="posts">
          <PagesDetailPostsComp />
        </Tab.Pane>
        <Tab.Pane eventKey="photos">
          {renderPhotoSection()}
        </Tab.Pane>
        <Tab.Pane eventKey="followers">
          <PagesDetailFollowersComp />
        </Tab.Pane>
        <Tab.Pane eventKey="info">
          <PagesDetailInfoComp pageData={pageData} />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}
