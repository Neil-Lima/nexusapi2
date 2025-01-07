'use client';
import styled from 'styled-components';

export const PostContainer = styled.div`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: ${props => props.theme.boxShadow};
  width: 100%;
  max-width: 100%;
  
  @media (max-width: 768px) {
    border-radius: 8px;
    margin-bottom: 15px;
  }
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 576px) {
    padding: 12px;
  }
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  object-fit: cover;
  
  @media (max-width: 576px) {
    width: 35px;
    height: 35px;
  }
`;

export const UserInfo = styled.div`
  flex: 1;
  h6 {
    margin: 0;
    color: ${props => props.theme.textColor};
    font-weight: 600;
    
    @media (max-width: 576px) {
      font-size: 14px;
    }
  }
  small {
    color: rgba(255, 255, 255, 0.7);
    @media (max-width: 576px) {
      font-size: 12px;
    }
  }
`;

export const PostDropdown = styled.div`
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  padding: 5px;
  transition: ${props => props.theme.transition};
  
  &:hover {
    color: ${props => props.theme.textColor};
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }
`;

export const PostBody = styled.div`
  padding: 15px;
  
  @media (max-width: 576px) {
    padding: 12px;
  }
`;

export const PostText = styled.p`
  color: ${props => props.theme.textColor};
  margin-bottom: 15px;
  line-height: 1.5;
  
  @media (max-width: 576px) {
    font-size: 14px;
    margin-bottom: 12px;
  }
`;

export const MediaContainer = styled.div`
  width: 100%;
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  margin-bottom: 15px;
  
  video {
    width: 100%;
    max-height: 70vh;
    object-fit: contain;
    
    @media (max-width: 768px) {
      max-height: 50vh;
    }
  }
`;

export const PostImage = styled.img`
  width: 100%;
  max-height: 70vh;
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 15px;
  object-fit: contain;
  
  @media (max-width: 768px) {
    max-height: 50vh;
    margin-bottom: 12px;
  }
`;

export const AudioPlayer = styled.div`
  width: 100%;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 15px;
  
  audio {
    width: 100%;
  }
  
  @media (max-width: 576px) {
    padding: 8px;
    margin-bottom: 12px;
  }
`;

export const PollContainer = styled.div`
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
  position: relative;
  padding: 10px 15px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  overflow: hidden;
  transition: ${props => props.theme.transition};
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
  
  ${props => props.$hasVoted && `
    background: rgba(255, 255, 255, 0.2);
    font-weight: bold;
  `}
  
  @media (max-width: 576px) {
    padding: 8px 12px;
    font-size: 14px;
  }
`;

export const PostFooter = styled.div`
  padding: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 576px) {
    padding: 12px;
  }
`;

export const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  
  @media (max-width: 576px) {
    margin-bottom: 12px;
  }
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.$isActive ? props.theme.primaryColor : props.theme.textColor};
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: ${props => props.theme.transition};
  padding: 8px 12px;
  border-radius: 20px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${props => props.theme.primaryColor};
  }
  
  @media (max-width: 576px) {
    padding: 6px 10px;
    font-size: 13px;
    
    svg {
      font-size: 16px;
    }
  }
`;

export const CommentSection = styled.div`
  .comment {
    display: flex;
    margin-bottom: 15px;
    
    @media (max-width: 576px) {
      margin-bottom: 12px;
    }
    
    .comment-content {
      background: rgba(255, 255, 255, 0.1);
      padding: 10px 15px;
      border-radius: ${props => props.theme.borderRadius};
      flex: 1;
      margin-left: 10px;
      
      @media (max-width: 576px) {
        padding: 8px 12px;
        font-size: 13px;
      }
      
      h6 {
        margin: 0;
        color: ${props => props.theme.textColor};
        font-weight: 600;
        
        @media (max-width: 576px) {
          font-size: 14px;
        }
      }
      
      p {
        margin: 5px 0;
        color: ${props => props.theme.textColor};
      }
      
      small {
        color: rgba(255, 255, 255, 0.7);
        
        @media (max-width: 576px) {
          font-size: 12px;
        }
      }
    }
  }
`;

export const CommentInput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
  
  @media (max-width: 576px) {
    margin-top: 12px;
    gap: 8px;
  }
  
  input {
    flex: 1;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    padding: 10px 15px;
    border-radius: 20px;
    color: ${props => props.theme.textColor};
    
    @media (max-width: 576px) {
      padding: 8px 12px;
      font-size: 14px;
    }
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
    
    &:focus {
      outline: none;
      background: rgba(255, 255, 255, 0.15);
    }
  }
`;
