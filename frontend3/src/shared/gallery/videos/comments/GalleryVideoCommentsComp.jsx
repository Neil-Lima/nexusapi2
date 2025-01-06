'use client';
import React, { useState } from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faReply } from '@fortawesome/free-solid-svg-icons';
import { CommentItem, CommentHeader, CommentActions, ReplySection } from '../styles/GalleryVideoStyles';

const GalleryVideoCommentItemComp = ({ comment }) => {
  const { theme } = useTheme();
  const [showReplies, setShowReplies] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleReply = (e) => {
    e.preventDefault();
    if (replyText.trim()) {
      // Lógica para adicionar resposta
      setReplyText('');
    }
  };

  return (
    <CommentItem theme={theme}>
      <CommentHeader>
        <img src={comment.avatar} alt={comment.user} />
        <span className="username">{comment.user}</span>
      </CommentHeader>
      
      <p>{comment.text}</p>
      
      <CommentActions>
        <button>
          <FontAwesomeIcon icon={faHeart} /> {comment.likes}
        </button>
        <button onClick={() => setShowReplies(!showReplies)}>
          <FontAwesomeIcon icon={faReply} /> Reply
        </button>
      </CommentActions>

      {showReplies && (
        <ReplySection>
          <form onSubmit={handleReply}>
            <input
              type="text"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Write a reply..."
            />
            <button type="submit">Reply</button>
          </form>
          
          {comment.replies?.map((reply) => (
            <CommentItem key={reply.id} theme={theme} isReply>
              <CommentHeader>
                <img src={reply.avatar} alt={reply.user} />
                <span className="username">{reply.user}</span>
              </CommentHeader>
              <p>{reply.text}</p>
              <CommentActions>
                <button>
                  <FontAwesomeIcon icon={faHeart} /> {reply.likes}
                </button>
              </CommentActions>
            </CommentItem>
          ))}
        </ReplySection>
      )}
    </CommentItem>
  );
};

export default GalleryVideoCommentItemComp;
