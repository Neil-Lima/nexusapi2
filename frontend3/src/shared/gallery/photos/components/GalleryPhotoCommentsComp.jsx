'use client';
import React from 'react';
import { CommentsContainer, CommentInput, CommentList } from '../styles/GalleryPhotoCommentsStyles';
import { useGalleryPhotoComments } from '../utils/GalleryPhotoCommentsUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';

const GalleryPhotoCommentsComp = ({ photoId }) => {
  const { theme } = useTheme();
  const { 
    comments, 
    newComment, 
    handleCommentChange, 
    handleSubmitComment,
    handleLikeComment 
  } = useGalleryPhotoComments(photoId);

  return (
    <CommentsContainer theme={theme}>
      <CommentList theme={theme}>
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <img src={comment.userAvatar} alt={comment.author} />
            <div className="comment-content">
              <h5>{comment.author}</h5>
              <p>{comment.text}</p>
              <div className="comment-actions">
                <button 
                  onClick={() => handleLikeComment(comment.id)}
                  className={comment.isLiked ? 'liked' : ''}
                  theme={theme}
                >
                  <FontAwesomeIcon icon={faHeart} /> {comment.likes}
                </button>
                <span className="comment-date">
                  {new Date(comment.date).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </CommentList>
      <CommentInput theme={theme}>
        <input
          type="text"
          placeholder="Adicione um comentário..."
          value={newComment}
          onChange={handleCommentChange}
        />
        <button onClick={handleSubmitComment}>Enviar</button>
      </CommentInput>
    </CommentsContainer>
  );
};

export default GalleryPhotoCommentsComp;
