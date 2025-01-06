'use client';
import React, { useState, useRef } from 'react';
import { Modal } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faGlobe, faLock, faUsers, faPlus } from '@fortawesome/free-solid-svg-icons';
import { 
  UploadModal, 
  UploadForm, 
  PrivacyOptions,
  FormGroup,
  UploadButton,
  PreviewSection,
  AddVideoButton
} from '../styles/GalleryVideoStyles';

const GalleryVideoUploadComp = ({ onUpload }) => {
  const { theme } = useTheme();
  const fileInputRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [preview, setPreview] = useState(null);
  const [videoData, setVideoData] = useState({
    title: '',
    description: '',
    privacy: 'global',
    file: null
  });

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoData({...videoData, file});
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpload(videoData);
    setShowModal(false);
    setVideoData({ title: '', description: '', privacy: 'global', file: null });
    setPreview(null);
  };

  return (
    <>
      <AddVideoButton onClick={() => setShowModal(true)} theme={theme}>
        <FontAwesomeIcon icon={faPlus} /> Add New Video
      </AddVideoButton>

      <UploadModal show={showModal} onHide={() => setShowModal(false)} centered size="lg" theme={theme}>
        <Modal.Header closeButton>
          <Modal.Title>Upload New Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UploadForm onSubmit={handleSubmit} theme={theme}>
            <PreviewSection>
              {preview ? (
                <video src={preview} controls />
              ) : (
                <UploadButton onClick={() => fileInputRef.current.click()} type="button">
                  <FontAwesomeIcon icon={faUpload} size="2x" />
                  <span>Click to select video</span>
                </UploadButton>
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                accept="video/*"
                style={{ display: 'none' }}
              />
            </PreviewSection>

            <FormGroup>
              <label>Title</label>
              <input
                type="text"
                value={videoData.title}
                onChange={(e) => setVideoData({...videoData, title: e.target.value})}
                placeholder="Enter video title"
                required
              />
            </FormGroup>

            <FormGroup>
              <label>Description</label>
              <textarea
                value={videoData.description}
                onChange={(e) => setVideoData({...videoData, description: e.target.value})}
                placeholder="Enter video description"
                rows={4}
              />
            </FormGroup>

            <FormGroup>
              <label>Privacy Settings</label>
              <PrivacyOptions theme={theme}>
                <button
                  type="button"
                  className={videoData.privacy === 'global' ? 'active' : ''}
                  onClick={() => setVideoData({...videoData, privacy: 'global'})}
                >
                  <FontAwesomeIcon icon={faGlobe} /> Global
                </button>
                <button
                  type="button"
                  className={videoData.privacy === 'private' ? 'active' : ''}
                  onClick={() => setVideoData({...videoData, privacy: 'private'})}
                >
                  <FontAwesomeIcon icon={faLock} /> Private
                </button>
                <button
                  type="button"
                  className={videoData.privacy === 'personal' ? 'active' : ''}
                  onClick={() => setVideoData({...videoData, privacy: 'personal'})}
                >
                  <FontAwesomeIcon icon={faUsers} /> Personal
                </button>
              </PrivacyOptions>
            </FormGroup>

            <button type="submit" className="submit-btn">Upload Video</button>
          </UploadForm>
        </Modal.Body>
      </UploadModal>
    </>
  );
};

export default GalleryVideoUploadComp;
