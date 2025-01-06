'use client';
import styled from 'styled-components';

export const CommentsContainer = styled.div`
  padding: 1rem;
`;

export const CommentList = styled.div`
  max-height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${props => props.theme.backgroundColor};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.highlightColor};
    border-radius: 10px;
  }

  .comment {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }

    .comment-content {
      flex: 1;

      h5 {
        margin: 0;
        font-weight: 600;
        color: ${props => props.theme.textColor};
      }

      p {
        margin: 0.5rem 0;
        color: ${props => props.theme.textColor};
      }

      .comment-actions {
        display: flex;
        align-items: center;
        gap: 1rem;

        button {
          background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
          color: ${props => props.theme.textColor};
          border: none;
          padding: 0.25rem 0.5rem;
          border-radius: ${props => props.theme.borderRadius};
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: ${props => props.theme.transition};

          &.liked {
            opacity: 0.8;
          }

          &:hover {
            transform: ${props => props.theme.buttonHoverTransform};
          }
        }

        .comment-date {
          font-size: 0.8rem;
          color: ${props => props.theme.textColor};
          opacity: 0.7;
        }
      }
    }
  }
`;

export const CommentInput = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  input {
    flex: 1;
    padding: 0.75rem;
    border: none;
    border-radius: ${props => props.theme.borderRadius};
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    transition: ${props => props.theme.transition};

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px ${props => props.theme.highlightColor};
    }
  }

  button {
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    color: ${props => props.theme.textColor};
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: ${props => props.theme.borderRadius};
    cursor: pointer;
    transition: ${props => props.theme.transition};
    font-weight: 500;

    &:hover {
      transform: ${props => props.theme.buttonHoverTransform};
      opacity: 0.9;
    }
  }
`;
