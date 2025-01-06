'use client';
import React, { useState } from 'react';
import { Form, Image, Dropdown, Button, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faVideo, faPoll, faEllipsisV, faEdit, faTrash, faClock, faThumbsUp, faComments, faShare, faSmile, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Post, Comment, EmojiPicker, Poll, PollOption, PollBar, StyledButton } from './styles/GroupStyles';
import { useTheme } from '@/context/theme/ThemeContext';

function GroupFeedComp({ posts, handleLike, handleComment, handleShare, handlePollVote }) {
  const { theme } = useTheme();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  return (
    <>
      <Form className="mb-4">
        <Form.Group>
          <Form.Control as="textarea" rows={3} placeholder="O que você está pensando?" />
        </Form.Group>
        <div className="d-flex justify-content-between mt-2">
          <StyledButton theme={theme} size="sm">
            <FontAwesomeIcon icon={faImage} /> Foto
          </StyledButton>
          <StyledButton theme={theme} size="sm">
            <FontAwesomeIcon icon={faVideo} /> Vídeo
          </StyledButton>
          <StyledButton theme={theme} size="sm">
            <FontAwesomeIcon icon={faPoll} /> Enquete
          </StyledButton>
          <StyledButton theme={theme}>Publicar</StyledButton>
        </div>
      </Form>

      {posts.map(post => (
        <Post key={post.id}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center">
              <Image src={post.author.avatar} roundedCircle width={40} height={40} className="mr-2" />
              <div>
                <h5 className="mb-0">{post.author.name}</h5>
                <small><FontAwesomeIcon icon={faClock} /> {new Date(post.createdAt).toLocaleString()}</small>
              </div>
            </div>
            <Dropdown>
              <Dropdown.Toggle variant="link" id={`dropdown-post-${post.id}`}>
                <FontAwesomeIcon icon={faEllipsisV} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item><FontAwesomeIcon icon={faEdit} /> Editar</Dropdown.Item>
                <Dropdown.Item><FontAwesomeIcon icon={faTrash} /> Excluir</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <p>{post.content}</p>
          {post.image && <Image src={post.image} fluid className="mb-3 rounded" />}
          
          {post.poll && (
            <Poll>
              <h6>{post.poll.question}</h6>
              {post.poll.options.map(option => (
                <PollOption key={option.id} onClick={() => handlePollVote(post.id, option.id)}>
                  <PollBar 
                    theme={theme}
                    style={{width: `${(option.votes / post.poll.totalVotes) * 100}%`}}
                  />
                  <span>{option.text} ({Math.round((option.votes / post.poll.totalVotes) * 100)}%)</span>
                </PollOption>
              ))}
              <small>{post.poll.totalVotes} votos</small>
            </Poll>
          )}

          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              <Button variant="link" onClick={() => handleLike(post.id)}>
                <FontAwesomeIcon icon={faThumbsUp} /> {post.likes}
              </Button>
              <Button variant="link">
                <FontAwesomeIcon icon={faComments} /> {post.comments.length}
              </Button>
              <Button variant="link" onClick={() => handleShare(post.id)}>
                <FontAwesomeIcon icon={faShare} /> {post.shares}
              </Button>
            </div>
            <small>{post.comments.length} comentários</small>
          </div>

          <hr />

          {post.comments.map(comment => (
            <Comment key={comment.id}>
              <div className="d-flex align-items-center mb-2">
                <Image src={comment.author.avatar} roundedCircle width={30} height={30} className="mr-2" />
                <div>
                  <h6 className="mb-0">{comment.author.name}</h6>
                  <small><FontAwesomeIcon icon={faClock} /> {new Date().toLocaleString()}</small>
                </div>
              </div>
              <p className="mb-0">{comment.content}</p>
            </Comment>
          ))}

          <Form onSubmit={(e) => {
            e.preventDefault();
            handleComment(post.id, e.target.comment.value);
            e.target.comment.value = '';
          }} className="mt-3">
            <InputGroup>
              <Form.Control
                name="comment"
                placeholder="Escreva um comentário..."
              />
              <Button variant="outline-secondary" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                <FontAwesomeIcon icon={faSmile} />
              </Button>
              <Button variant="outline-secondary" type="submit">
                <FontAwesomeIcon icon={faPaperPlane} />
              </Button>
            </InputGroup>
            {showEmojiPicker && (
              <EmojiPicker>
                {/* Componente de seleção de emojis aqui */}
              </EmojiPicker>
            )}
          </Form>
        </Post>
      ))}
    </>
  );
}

export default GroupFeedComp;
