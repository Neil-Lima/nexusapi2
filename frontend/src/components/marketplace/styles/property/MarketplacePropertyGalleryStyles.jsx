'use client';
import styled from 'styled-components';

export const GalleryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 2rem;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};

  h2 {
    color: ${props => props.theme.textColor};
  }

  .view-options {
    display: flex;
    gap: 1rem;

    button {
      padding: 0.75rem 1.5rem;
      background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
      border: none;
      border-radius: ${props => props.theme.borderRadius};
      color: ${props => props.theme.textColor};
      cursor: pointer;
      transition: ${props => props.theme.transition};

      &:hover {
        background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.secondaryColor}, ${props.theme.primaryColor})`};
        transform: ${props => props.theme.buttonHoverTransform};
      }

      &.active {
        background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.highlightColor}, ${props.theme.secondaryHighlightColor})`};
      }
    }
  }
`;

export const FilterSection = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};

  .filter-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    label {
      color: ${props => props.theme.textColor};
      cursor: pointer;
    }
  }
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 2rem;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
`;

export const ImageCard = styled.div`
  position: relative;
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  cursor: pointer;
  transition: ${props => props.theme.transition};
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};

  &:hover {
    transform: ${props => props.theme.buttonHoverTransform};
    box-shadow: ${props => props.theme.boxShadow};

    .image-info {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .image-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    display: flex;
    justify-content: space-between;
    opacity: 0;
    transition: ${props => props.theme.transition};

    span {
      color: ${props => props.theme.textColor};
    }
  }
`;

export const FullscreenView = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  .main-image {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-height: 70vh;
      max-width: 100%;
      object-fit: contain;
    }
  }

  .image-details {
    text-align: center;
    margin: 1rem 0;
    color: ${props => props.theme.textColor};

    button {
      background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
      border: none;
      padding: 0.5rem 1rem;
      border-radius: ${props => props.theme.borderRadius};
      color: ${props => props.theme.textColor};
      margin-top: 1rem;
      cursor: pointer;
      transition: ${props => props.theme.transition};

      &:hover {
        transform: ${props => props.theme.buttonHoverTransform};
        box-shadow: ${props => props.theme.boxShadow};
      }
    }
  }
`;

export const ThumbnailStrip = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem 0;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};

  .thumbnail {
    width: 100px;
    height: 60px;
    border-radius: ${props => props.theme.borderRadius};
    overflow: hidden;
    cursor: pointer;
    opacity: 0.5;
    transition: ${props => props.theme.transition};

    &:hover {
      opacity: 0.8;
    }

    &.active {
      opacity: 1;
      border: 2px solid ${props => props.theme.highlightColor};
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const Controls = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  button {
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: ${props => props.theme.borderRadius};
    color: ${props => props.theme.textColor};
    cursor: pointer;
    transition: ${props => props.theme.transition};

    &:hover {
      transform: ${props => props.theme.buttonHoverTransform};
      box-shadow: ${props => props.theme.boxShadow};
    }
  }
`;
