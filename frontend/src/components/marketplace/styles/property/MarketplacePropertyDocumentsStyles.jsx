"use client";
import styled from "styled-components";

export const DocumentsContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.textColor};
`;

export const DocumentHeader = styled.div`
  margin-bottom: 2rem;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};

  .status-overview {
    display: flex;
    gap: 2rem;
    margin-top: 1rem;

    .status-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;

        &.validated { background: #4CAF50; }
        &.pending { background: #FFC107; }
        &.rejected { background: #F44336; }
      }
    }
  }
`;

export const DocumentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const DocumentCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${props => props.theme.primaryColor};
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  transition: ${props => props.theme.transition};
  border: 2px solid ${props => props.selected ? props.theme.highlightColor : 'transparent'};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.boxShadow};
  }

  .icon {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.highlightColor};
    border-radius: 50%;
    font-size: 1.5rem;
  }

  .info {
    flex: 1;

    h4 {
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.9rem;
      opacity: 0.7;
      margin-bottom: 0.5rem;
    }
  }

  .actions button {
    background: ${props => props.theme.highlightColor};
    border: none;
    padding: 0.5rem 1rem;
    border-radius: ${props => props.theme.borderRadius};
    color: ${props => props.theme.textColor};
    cursor: pointer;
    transition: ${props => props.theme.transition};

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.boxShadow};
    }
  }
`;

export const StatusBadge = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
  background: ${props => {
    switch (props.status) {
      case 'validated': return '#4CAF50';
      case 'pending': return '#FFC107';
      case 'rejected': return '#F44336';
      default: return props.theme.primaryColor;
    }
  }};
`;

export const UploadSection = styled.div`
  margin-bottom: 2rem;
  background: ${props => props.theme.primaryColor};
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};

  .upload-area {
    margin-top: 1rem;
    padding: 2rem;
    border: 2px dashed rgba(255, 255, 255, 0.2);
    border-radius: ${props => props.theme.borderRadius};
    text-align: center;
    cursor: pointer;
    transition: ${props => props.theme.transition};

    &:hover {
      border-color: ${props => props.theme.highlightColor};
    }

    input[type="file"] {
      display: none;
    }

    .progress-bar {
      margin-top: 1rem;
      height: 4px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 2px;
      overflow: hidden;

      .progress {
        height: 100%;
        background: ${props => props.theme.highlightColor};
        transition: width 0.3s ease;
      }
    }
  }
`;

export const DocumentPreview = styled.div`
  margin-bottom: 2rem;
  background: ${props => props.theme.primaryColor};
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};

  .preview-content {
    margin-top: 1rem;
    height: 400px;
    border-radius: ${props => props.theme.borderRadius};
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .no-preview {
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.primaryColor};
    border-radius: ${props => props.theme.borderRadius};
    opacity: 0.5;
  }
`;

export const ValidationSection = styled.div`
  background: ${props => props.theme.primaryColor};
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};

  .validation-status {
    margin-top: 1rem;

    .status-info {
      margin-bottom: 1rem;
    }

    .feedback {
      margin-bottom: 1rem;
      p {
        opacity: 0.7;
      }
    }

    .validate-btn {
      width: 100%;
      padding: 1rem;
      background: ${props => props.theme.highlightColor};
      border: none;
      border-radius: ${props => props.theme.borderRadius};
      color: ${props => props.theme.textColor};
      font-weight: bold;
      cursor: pointer;
      transition: ${props => props.theme.transition};

      &:hover {
        transform: translateY(-2px);
        box-shadow: ${props => props.theme.boxShadow};
      }
    }
  }
`;
