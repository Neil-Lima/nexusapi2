'use client';
import React from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { StyledModal, PhotoSection, InfoSection, ActionButton } from '../styles/GalleryPhotoModalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import { useGalleryPhotoModal } from '../utils/GalleryPhotoModalUtils';
import GalleryPhotoCommentsComp from './GalleryPhotoCommentsComp';

const GalleryPhotoModalComp = ({ show, photo, onHide }) => {
  const { theme } = useTheme();
  const { handleLike, handleComment, handleShare } = useGalleryPhotoModal();

  return (
    <StyledModal show={show} onHide={onHide} size="xl" theme={theme}>
      <Modal.Body>
        <Row>
          <Col lg={8}>
            <PhotoSection>
              <img src={photo?.url} alt={photo?.caption} />
            </PhotoSection>
          </Col>
          <Col lg={4}>
            <InfoSection>
              <h3>{photo?.caption}</h3>
              <div className="actions">
                <ActionButton onClick={handleLike} theme={theme}>
                  <FontAwesomeIcon icon={faHeart} /> {photo?.likes}
                </ActionButton>
                <ActionButton onClick={handleComment} theme={theme}>
                  <FontAwesomeIcon icon={faComment} /> {photo?.comments?.length}
                </ActionButton>
                <ActionButton onClick={handleShare} theme={theme}>
                  <FontAwesomeIcon icon={faShare} /> Compartilhar
                </ActionButton>
              </div>
              <GalleryPhotoCommentsComp photoId={photo?.id} />
            </InfoSection>
          </Col>
        </Row>
      </Modal.Body>
    </StyledModal>
  );
};

export default GalleryPhotoModalComp;
