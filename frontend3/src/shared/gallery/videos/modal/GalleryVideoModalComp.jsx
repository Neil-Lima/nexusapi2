'use client';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import { VideoModal, VideoPlayer, VideoActions, VideoDetails } from '../styles/GalleryVideoStyles';
import GalleryVideoCommentsComp from '../comments/GalleryVideoCommentsComp';
import GalleryVideoRelatedComp from '../carousel/GalleryVideoRelatedComp';

const GalleryVideoModalComp = ({ show, video, onHide }) => {
  const { theme } = useTheme();
  const [showAllComments, setShowAllComments] = useState(false);

  return (
    <VideoModal show={show} onHide={onHide} size="xl" centered theme={theme}>
      <Modal.Header closeButton>
        <Modal.Title>{video?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <VideoPlayer>
          <video controls src={video?.url} />
        </VideoPlayer>
        <VideoDetails>
          <h2>{video?.title}</h2>
          <p>{video?.description}</p>
          <VideoActions theme={theme}>
            <button>
              <FontAwesomeIcon icon={faHeart} /> {video?.likes}
            </button>
            <button>
              <FontAwesomeIcon icon={faComment} /> {video?.comments?.length}
            </button>
            <button>
              <FontAwesomeIcon icon={faShare} /> Share
            </button>
          </VideoActions>
        </VideoDetails>
        
        <GalleryVideoCommentsComp 
          comments={video?.comments}
          showAll={showAllComments}
          onShowMore={() => setShowAllComments(true)}
        />
        
        <GalleryVideoRelatedComp relatedVideos={video?.related} />
      </Modal.Body>
    </VideoModal>
  );
};

export default GalleryVideoModalComp;
