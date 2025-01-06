'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import { useSession } from 'next-auth/react';
import {
  PostContainer,
  PostHeader,
  PostBody,
  PostFooter,
  UserAvatar,
  UserInfo,
  PostActions,
  ActionButton,
  PostImage,
  PostText,
  CommentSection,
  CommentInput,
  PostDropdown,
  MediaContainer,
  AudioPlayer,
  PollContainer,
  PollOption,
  PollBar
} from '../styles/PostCardStyles';
import { usePostCard } from '../utils/PostCardUtils';

function PostCardComp() {
  const { theme } = useTheme();
  const { data: session } = useSession();
  const { posts, ...postActions } = usePostCard(session?.user?.id);

  if (!posts) {
    return null;
  }

  const renderMedia = (post) => {
    if (!post.media) return null;

    switch (post.mediaType) {
      case 'image':
        return <PostImage src={post.media} alt="Post content" theme={theme} />;
      case 'video':
        return (
          <MediaContainer theme={theme}>
            <video controls src={post.media} />
          </MediaContainer>
        );
      case 'audio':
        return (
          <AudioPlayer theme={theme}>
            <audio controls src={post.media} />
          </AudioPlayer>
        );
      default:
        return null;
    }
  };

  const renderPoll = (post) => {
    if (!post.poll) return null;
    
    const totalVotes = post.poll.options.reduce((sum, option) => sum + option.votes.length, 0);

    return (
      <PollContainer theme={theme}>
        {post.poll.options.map((option, index) => {
          const percentage = totalVotes ? (option.votes.length / totalVotes) * 100 : 0;
          const hasVoted = postActions.userVote === index;

          return (
            <PollOption 
              key={index}
              onClick={() => postActions.handlePollVote(post._id, index)}
              $hasVoted={hasVoted}
              theme={theme}
            >
              <span>{option.option}</span>
              <PollBar $percentage={percentage} $hasVoted={hasVoted} theme={theme} />
              <span>{percentage.toFixed(1)}%</span>
            </PollOption>
          );
        })}
      </PollContainer>
    );
  };

  return (
    <>
      {posts.map((post) => (
        <PostContainer key={post._id} theme={theme}>
          <PostHeader>
            <UserAvatar src={post.author.profileImage} alt={post.author.nome} theme={theme} />
            <UserInfo theme={theme}>
              <h6>{`${post.author.nome} ${post.author.sobrenome}`}</h6>
              <small>{new Date(post.createdAt).toLocaleString()}</small>
            </UserInfo>
            <PostDropdown theme={theme}>
              <FontAwesomeIcon icon={faEllipsisV} onClick={postActions.handlePostOptions} />
            </PostDropdown>
          </PostHeader>

          <PostBody>
            <PostText theme={theme}>{post.content}</PostText>
            {renderMedia(post)}
            {renderPoll(post)}
          </PostBody>

          <PostFooter>
            <PostActions>
              <ActionButton 
                onClick={() => postActions.handleLike(post._id)} 
                $isActive={postActions.isLiked}
                theme={theme}
              >
                <FontAwesomeIcon icon={faHeart} />
                <span>{post.likes.length} Curtidas</span>
              </ActionButton>
              <ActionButton 
                onClick={() => postActions.setShowComments(!postActions.showComments)}
                theme={theme}
              >
                <FontAwesomeIcon icon={faComment} />
                <span>{post.comments.length} Comentários</span>
              </ActionButton>
              <ActionButton 
                onClick={postActions.handleShare}
                theme={theme}
              >
                <FontAwesomeIcon icon={faShare} />
                <span>Compartilhar</span>
              </ActionButton>
            </PostActions>

            {postActions.showComments && (
              <CommentSection theme={theme}>
                {post.comments.map((comment) => (
                  <div key={comment._id} className="comment">
                    <UserAvatar src={comment.author.profileImage} alt={comment.author.nome} theme={theme} />
                    <div className="comment-content">
                      <h6>{`${comment.author.nome} ${comment.author.sobrenome}`}</h6>
                      <p>{comment.content}</p>
                      <small>{new Date(comment.createdAt).toLocaleString()}</small>
                    </div>
                  </div>
                ))}
                <CommentInput theme={theme}>
                  <UserAvatar src={session?.user?.profileImage} alt="Your avatar" theme={theme} />
                  <input
                    type="text"
                    placeholder="Escreva um comentário..."
                    value={postActions.commentText}
                    onChange={(e) => postActions.setCommentText(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') postActions.handleComment(post._id);
                    }}
                  />
                </CommentInput>
              </CommentSection>
            )}
          </PostFooter>
        </PostContainer>
      ))}
    </>
  );
}

export default PostCardComp;
