'use client';
import styled from 'styled-components';

export const BuilderContainer = styled.div`
  padding: 20px;
`;

export const BuilderCard = styled.div`
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  padding: 20px;
  color: ${props => props.theme.textColor};

  h2 {
    margin-bottom: 20px;
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .builder-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 20px 0;
  }
`;

export const TemplateSelector = styled.div`
  margin-bottom: 30px;

  h3 {
    margin-bottom: 15px;
  }

  .templates {
    display: flex;
    gap: 15px;
    overflow-x: auto;
    padding-bottom: 10px;

    .template-item {
      flex: 0 0 150px;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }

      &.active {
        border: 2px solid ${props => props.theme.primaryColor};
        border-radius: ${props => props.theme.borderRadius};
      }

      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: ${props => props.theme.borderRadius};
        margin-bottom: 10px;
      }

      span {
        display: block;
        font-size: 0.9em;
      }
    }
  }
`;

export const EditorSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SectionCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  padding: 15px;

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    h4 {
      margin: 0;
    }

    button {
      background: none;
      border: none;
      color: ${props => props.theme.primaryColor};
      cursor: pointer;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .section-item {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;

    input {
      flex: 1;
      padding: 8px;
      border: none;
      border-radius: ${props => props.theme.borderRadius};
      background: rgba(255, 255, 255, 0.1);
      color: ${props => props.theme.textColor};

      &:focus {
        outline: none;
        background: rgba(255, 255, 255, 0.15);
      }
    }

    button {
      background: none;
      border: none;
      color: #f44336;
      cursor: pointer;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export const ResumePreview = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;

  .preview-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h3 {
      margin: 0;
    }

    button {
      background: none;
      border: none;
      color: ${props => props.theme.primaryColor};
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
    }
  }

  .preview-content {
    min-height: 500px;
    background: white;
    border-radius: ${props => props.theme.borderRadius};
    padding: 20px;
  }
`;

export const ExportOptions = styled.div`
  margin: 30px 0;

  h3 {
    margin-bottom: 15px;
  }

  .export-buttons {
    display: flex;
    gap: 15px;

    button {
      flex: 1;
      padding: 12px;
      border: none;
      border-radius: ${props => props.theme.borderRadius};
      background: rgba(255, 255, 255, 0.1);
      color: ${props => props.theme.textColor};
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
      }
    }
  }
`;

export const ActionBar = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  button {
    flex: 1;
    padding: 12px;
    border: none;
    border-radius: ${props => props.theme.borderRadius};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.3s ease;

    &.save-draft {
      background: rgba(255, 255, 255, 0.1);
      color: ${props => props.theme.textColor};
    }

    &.preview {
      background: ${props => props.theme.primaryColor};
    }

    &.edit {
      background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.boxShadow};
    }
  }
`;
