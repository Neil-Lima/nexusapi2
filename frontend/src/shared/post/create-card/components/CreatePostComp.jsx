'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faVideo, faSmile, faPoll, faMicrophone, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import EmojiPicker from 'emoji-picker-react';
import {
  CreatePostContainer,
  CreatePostHeader,
  CreatePostBody,
  CreatePostFooter,
  UserAvatar,
  PostInput,
  MediaButton,
  PostButton,
  MediaPreview,
  CloseButton,
  EmojiPickerContainer,
  PollCreator,
  PollOption,
  AddOptionButton
} from '../styles/CreatePostCardStyles';
import { useCreatePost } from '../utils/CreatePostCardUtils';

function CreatePostComp() {
  const { theme } = useTheme();
  const {
    postText,
    setPostText,
    showEmojiPicker,
    setShowEmojiPicker,
    selectedMedia,
    mediaPreview,
    showPollCreator,
    pollOptions,
    handleMediaUpload,
    handleCreatePost,
    handleEmojiSelect,
    handleRemoveMedia,
    handleAddPollOption,
    handleRemovePollOption,
    handlePollOptionChange,
    togglePollCreator,
    isSubmitting,
    userAvatar
  } = useCreatePost();

  return (
    <CreatePostContainer theme={theme}>
      <CreatePostHeader>
        <UserAvatar src={userAvatar} alt="Your avatar" theme={theme} />
        <PostInput
          placeholder="O que você está pensando?"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          theme={theme}
        />
      </CreatePostHeader>

      <CreatePostBody theme={theme}>
        {mediaPreview && (
          <MediaPreview theme={theme}>
            {selectedMedia.type.startsWith('image') ? (
              <img src={mediaPreview} alt="Preview" />
            ) : selectedMedia.type.startsWith('video') ? (
              <video src={mediaPreview} controls />
            ) : (
              <audio src={mediaPreview} controls />
            )}
            <CloseButton onClick={handleRemoveMedia} theme={theme}>
              <FontAwesomeIcon icon={faTimes} />
            </CloseButton>
          </MediaPreview>
        )}

        {showPollCreator && (
          <PollCreator theme={theme}>
            {pollOptions.map((option, index) => (
              <PollOption key={index} theme={theme}>
                <input
                  type="text"
                  placeholder={`Opção ${index + 1}`}
                  value={option}
                  onChange={(e) => handlePollOptionChange(index, e.target.value)}
                />
                {pollOptions.length > 2 && (
                  <FontAwesomeIcon
                    icon={faTimes}
                    onClick={() => handleRemovePollOption(index)}
                  />
                )}
              </PollOption>
            ))}
            {pollOptions.length < 4 && (
              <AddOptionButton onClick={handleAddPollOption} theme={theme}>
                + Adicionar opção
              </AddOptionButton>
            )}
          </PollCreator>
        )}

        {showEmojiPicker && (
          <EmojiPickerContainer theme={theme}>
            <EmojiPicker onEmojiClick={handleEmojiSelect} theme="dark" />
          </EmojiPickerContainer>
        )}
      </CreatePostBody>

      <CreatePostFooter>
        <div>
          <MediaButton onClick={() => document.getElementById('imageUpload').click()} theme={theme}>
            <FontAwesomeIcon icon={faImage} />
            <span>Foto</span>
          </MediaButton>
          <MediaButton onClick={() => document.getElementById('videoUpload').click()} theme={theme}>
            <FontAwesomeIcon icon={faVideo} />
            <span>Vídeo</span>
          </MediaButton>
          <MediaButton onClick={() => document.getElementById('audioUpload').click()} theme={theme}>
            <FontAwesomeIcon icon={faMicrophone} />
            <span>Áudio</span>
          </MediaButton>
          <MediaButton onClick={() => setShowEmojiPicker(!showEmojiPicker)} theme={theme}>
            <FontAwesomeIcon icon={faSmile} />
            <span>Emoji</span>
          </MediaButton>
          <MediaButton onClick={togglePollCreator} theme={theme}>
            <FontAwesomeIcon icon={faPoll} />
            <span>Enquete</span>
          </MediaButton>
        </div>
        <PostButton 
          onClick={handleCreatePost} 
          disabled={(!postText && !selectedMedia && !showPollCreator) || isSubmitting}
          theme={theme}
        >
          {isSubmitting ? 'Publicando...' : 'Publicar'}
        </PostButton>
      </CreatePostFooter>

      <input
        type="file"
        id="imageUpload"
        accept="image/*"
        onChange={handleMediaUpload}
        hidden
      />
      <input
        type="file"
        id="videoUpload"
        accept="video/*"
        onChange={handleMediaUpload}
        hidden
      />
      <input
        type="file"
        id="audioUpload"
        accept="audio/*"
        onChange={handleMediaUpload}
        hidden
      />
    </CreatePostContainer>
  );
}

export default CreatePostComp;
