'use client';
import styled from 'styled-components';

export const CreatePostContainer = styled.div`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: ${props => props.theme.boxShadow};

  @media (max-width: 576px) {
    padding: 15px;
  }
`;

export const CreatePostHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  @media (max-width: 576px) {
    margin-bottom: 10px;
  }
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  border: 2px solid ${props => props.theme.textColor};
  object-fit: cover;

  @media (max-width: 576px) {
    width: 35px;
    height: 35px;
  }
`;

export const PostInput = styled.textarea`
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 10px;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.textColor};
  resize: none;
  min-height: 60px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
  }

  @media (max-width: 576px) {
    min-height: 40px;
    font-size: 14px;
    padding: 8px;
  }
`;

export const CreatePostBody = styled.div`
  margin-bottom: 15px;

  @media (max-width: 576px) {
    margin-bottom: 10px;
  }
`;

export const MediaPreview = styled.div`
  position: relative;
  margin-bottom: 15px;
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  
  img, video {
    width: 100%;
    max-height: 300px;
    object-fit: contain;
  }

  audio {
    width: 100%;
  }

  @media (max-width: 576px) {
    margin-bottom: 10px;
    
    img, video {
      max-height: 200px;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: ${props => props.theme.transition};

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 576px) {
    width: 25px;
    height: 25px;
  }
`;

export const EmojiPickerContainer = styled.div`
  position: absolute;
  bottom: 100%;
  right: 0;
  z-index: 1000;

  @media (max-width: 576px) {
    right: -10px;
  }
`;

export const PollCreator = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;

  @media (max-width: 576px) {
    gap: 8px;
    margin-bottom: 10px;
  }
`;

export const PollOption = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    flex: 1;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    padding: 10px;
    border-radius: ${props => props.theme.borderRadius};
    color: ${props => props.theme.textColor};

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }

    &:focus {
      outline: none;
      background: rgba(255, 255, 255, 0.15);
    }
  }

  svg {
    cursor: pointer;
    color: ${props => props.theme.textColor};
    opacity: 0.7;
    transition: ${props => props.theme.transition};

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 576px) {
    input {
      padding: 8px;
      font-size: 14px;
    }
  }
`;

export const AddOptionButton = styled.button`
  background: none;
  border: 1px dashed rgba(255, 255, 255, 0.3);
  padding: 10px;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.textColor};
  cursor: pointer;
  transition: ${props => props.theme.transition};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 576px) {
    padding: 8px;
    font-size: 14px;
  }
`;

export const CreatePostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  
  > div {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    > div {
      width: 100%;
      justify-content: center;
    }
  }

  @media (max-width: 576px) {
    gap: 8px;
    
    > div {
      gap: 5px;
    }
  }
`;

export const MediaButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.textColor};
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 12px;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  transition: ${props => props.theme.transition};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 576px) {
    padding: 6px 8px;
    
    span {
      display: none;
    }
  }
`;

export const PostButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 8px 20px;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.textColor};
  cursor: pointer;
  transition: ${props => props.theme.transition};

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }

  @media (max-width: 576px) {
    padding: 6px 15px;
    font-size: 14px;
  }
`;
