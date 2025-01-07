'use client';
import styled from 'styled-components';

export const CreatePostContainer = styled.div`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: ${props => props.theme.boxShadow};
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 15px;
    margin-bottom: 15px;
  }
`;

export const CreatePostHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  
  @media (max-width: 576px) {
    margin-bottom: 12px;
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
  font-size: 16px;

  @media (max-width: 576px) {
    font-size: 14px;
    min-height: 50px;
    padding: 8px;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const CreatePostBody = styled.div`
  margin-bottom: 15px;
  
  @media (max-width: 576px) {
    margin-bottom: 12px;
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
    
    @media (max-width: 768px) {
      max-height: 200px;
    }
  }

  audio {
    width: 100%;
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
    margin-bottom: 12px;
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
    
    @media (max-width: 576px) {
      padding: 8px;
      font-size: 14px;
    }

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
`;

export const CreatePostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
    
    > div {
      width: 100%;
      display: flex;
      justify-content: space-between;
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
    padding: 6px 10px;
    
    span {
      display: none;
    }
    
    svg {
      font-size: 18px;
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
  
  @media (max-width: 576px) {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
  }

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
