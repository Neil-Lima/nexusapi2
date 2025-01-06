'use client';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSliders, faClosedCaptioning } from '@fortawesome/free-solid-svg-icons';
import { 
  StudioModal,
  StudioContainer, 
  StudioPreview, 
  StudioControls,
  StudioTabs,
  StudioTabButton 
} from '../styles/GalleryVideoStyles';
import GalleryVideoFiltersComp from './GalleryVideoFiltersComp';
import GalleryVideoEditComp from './GalleryVideoEditComp';
import GalleryVideoSubtitlesComp from './GalleryVideoSubtitlesComp';

const GalleryVideoStudioComp = ({ show, video, onHide }) => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('edit');

  const tabs = [
    { id: 'edit', label: 'Edit Video', icon: faEdit },
    { id: 'filters', label: 'Filters', icon: faSliders },
    { id: 'subtitles', label: 'Subtitles', icon: faClosedCaptioning }
  ];

  return (
    <StudioModal show={show} onHide={onHide} size="xl" fullscreen theme={theme}>
      <Modal.Header closeButton>
        <Modal.Title>Video Studio - {video?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <StudioContainer theme={theme}>
          <StudioPreview>
            <video src={video?.url} controls />
          </StudioPreview>
          <StudioControls theme={theme}>
            <StudioTabs>
              {tabs.map(tab => (
                <StudioTabButton
                  key={tab.id}
                  active={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  theme={theme}
                >
                  <FontAwesomeIcon icon={tab.icon} />
                  {tab.label}
                </StudioTabButton>
              ))}
            </StudioTabs>

            <div className="tab-content">
              {activeTab === 'edit' && <GalleryVideoEditComp video={video} />}
              {activeTab === 'filters' && <GalleryVideoFiltersComp video={video} />}
              {activeTab === 'subtitles' && <GalleryVideoSubtitlesComp video={video} />}
            </div>
          </StudioControls>
        </StudioContainer>
      </Modal.Body>
    </StudioModal>
  );
};

export default GalleryVideoStudioComp;
