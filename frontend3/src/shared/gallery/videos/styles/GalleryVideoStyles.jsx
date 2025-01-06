'use client';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

export const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export const VideoItem = styled.div`
  background: ${props => props.theme.cardBackground};
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  .video-thumbnail {
    position: relative;
    aspect-ratio: 16/9;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${VideoItem}:hover & {
    opacity: 1;
  }

  .duration {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.7);
    padding: 3px 8px;
    border-radius: 4px;
    font-size: 0.8rem;
  }
`;

export const VideoInfo = styled.div`
  padding: 15px;

  h3 {
    margin: 0 0 10px 0;
    font-size: 1.1rem;
  }
`;

export const VideoStats = styled.div`
  display: flex;
  gap: 15px;
  font-size: 0.9rem;
  color: ${props => props.theme.textColor};
  opacity: 0.8;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  span {
    font-size: 0.9rem;
  }
`;

export const StudioButton = styled.button`
  background: ${props => props.theme.primaryColor};
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 20px;
  margin-top: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${props => props.theme.secondaryColor};
  }
`;

export const VideoModal = styled(Modal)`
  .modal-content {
    background: ${props => props.theme.cardBackground};
    color: ${props => props.theme.textColor};
  }
`;

export const VideoPlayer = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  margin-bottom: 20px;

  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const VideoDetails = styled.div`
  padding: 20px;
  
  h2 {
    margin-bottom: 10px;
  }

  p {
    color: ${props => props.theme.textColor};
    opacity: 0.8;
  }
`;

export const VideoActions = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;

  button {
    background: ${props => props.theme.cardBackground};
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    color: ${props => props.theme.textColor};
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      background: ${props => props.theme.primaryColor};
    }
  }
`;

export const StudioContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  height: 100%;
`;

export const StudioPreview = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background: #000;
  border-radius: 15px;
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const StudioControls = styled.div`
  background: ${props => props.theme.cardBackground};
  padding: 20px;
  border-radius: 15px;
`;

export const EditControls = styled.div`
  padding: 20px;
`;

export const TimelineControl = styled.div`
  .timeline {
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    position: relative;
    margin-bottom: 10px;
  }

  .progress {
    height: 100%;
    background: ${props => props.theme.primaryColor};
    border-radius: 4px;
  }

  .markers {
    display: flex;
    justify-content: space-between;
  }
`;

export const ClipControl = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  button {
    background: ${props => props.theme.cardBackground};
    color: ${props => props.theme.textColor};
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    transition: all 0.3s ease;

    &:hover {
      background: ${props => props.theme.primaryColor};
    }
  }
`;

export const FilterControls = styled.div`
  .presets {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
    margin-bottom: 30px;
  }

  .sliders {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

export const FilterPreset = styled.div`
  background: ${props => props.theme.cardBackground};
  padding: 15px;
  border-radius: 10px;
  text-align: center;

  button {
    background: ${props => props.theme.primaryColor};
    color: white;
    border: none;
    padding: 5px 15px;
    border-radius: 15px;
    margin-top: 10px;
  }
`;

export const FilterSlider = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input[type="range"] {
    flex: 1;
    height: 4px;
    background: ${props => props.theme.primaryColor};
    border-radius: 2px;
  }
`;

export const SubtitleControls = styled.div`
  padding: 20px;
`;


export const SubtitleTimeline = styled.div`
  height: 30px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  position: relative;
  margin-top: 20px;

  .subtitle-marker {
    position: absolute;
    height: 100%;
    background: ${props => props.theme.primaryColor};
    opacity: 0.5;
    border-radius: 3px;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  padding: 10px;
  background: ${props => props.theme.cardBackground};
  border-radius: 15px;
`;

export const TabButton = styled.button`
  background: ${props => props.active ? props.theme.primaryColor : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.textColor};
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.primaryColor};
    color: white;
  }
`;

export const StudioModal = styled(Modal)`
  .modal-content {
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    min-height: 100vh;
  }

  .modal-header {
    background: ${props => props.theme.cardBackground};
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .modal-body {
    padding: 20px;
  }
`;

export const StudioTabs = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
`;

export const StudioTabButton = styled.button`
  background: ${props => props.$active ? props.theme.primaryColor : 'transparent'};
  color: ${props => props.$active ? 'white' : props.theme.textColor};
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.$active ? props.theme.primaryColor : 'rgba(255, 255, 255, 0.1)'};
  }

  svg {
    font-size: 1.1rem;
  }
`;


export const TimelineWrapper = styled.div`
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
`;

export const TimeMarker = styled.span`
  font-family: monospace;
  font-size: 0.9rem;
  color: ${props => props.theme.textColor};
  opacity: 0.8;
`;

export const EditButton = styled.button`
  background: ${props => props.danger ? 'rgba(255, 59, 48, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.danger ? '#ff3b30' : props.theme.textColor};
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.danger ? 'rgba(255, 59, 48, 0.3)' : 'rgba(255, 255, 255, 0.2)'};
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.1rem;
  }
`;

export const FilterSection = styled.div`
  margin-bottom: 30px;

  h3 {
    margin-bottom: 15px;
    font-size: 1.2rem;
    color: ${props => props.theme.textColor};
  }
`;

export const PresetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 15px;
`;

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 12px;
`;

export const SubtitleButton = styled.button`
  background: ${props => props.theme.primaryColor};
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.secondaryColor};
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.1rem;
  }
`;

export const SubtitleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.primaryColor};
    border-radius: 4px;
  }
`;

export const TimeInput = styled.input`
  width: 70px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  color: ${props => props.theme.textColor};
  font-family: monospace;

  &:focus {
    outline: none;
     border-color: ${props => props.theme.primaryColor};
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    opacity: 1;
  }
`;

export const SubtitleEntry = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  input[type="text"] {
    width: 100%;
    padding: 10px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    color: ${props => props.theme.textColor};

    &:focus {
      outline: none;
      border-color: ${props => props.theme.primaryColor};
    }
  }

  .time-controls {
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      color: ${props => props.theme.textColor};
      opacity: 0.8;
    }

    .remove-btn {
      background: rgba(255, 59, 48, 0.2);
      color: #ff3b30;
      border: none;
      width: 32px;
      height: 32px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(255, 59, 48, 0.3);
        transform: scale(1.1);
      }
    }
  }
`;

// Adicione estes exports junto com os outros

export const UploadModal = styled(Modal)`
  .modal-content {
    background: ${props => props.theme.cardBackground};
    color: ${props => props.theme.textColor};
    border-radius: 15px;
  }

  .modal-header {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const AddVideoButton = styled.button`
  background: ${props => props.theme.primaryColor};
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${props => props.theme.secondaryColor};
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
  }

  input, textarea {
    width: 100%;
    padding: 12px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    color: ${props => props.theme.textColor};
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: ${props => props.theme.primaryColor};
    }
  }
`;

export const PreviewSection = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  margin-bottom: 20px;
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const UploadButton = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px dashed rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: ${props => props.theme.textColor};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: ${props => props.theme.primaryColor};
  }

  span {
    font-size: 1.1rem;
    margin-top: 10px;
  }
`;
export const CommentItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 15px;
  margin-left: ${props => props.isReply ? '30px' : '0'};
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .username {
    font-weight: bold;
  }
`;

export const CommentActions = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  button {
    background: none;
    border: none;
    color: ${props => props.theme.textColor};
    opacity: 0.8;
    transition: all 0.3s ease;

    &:hover {
      opacity: 1;
      color: ${props => props.theme.primaryColor};
    }
  }
`;

export const ReplySection = styled.div`
  margin-top: 15px;
  padding-left: 15px;
  border-left: 2px solid rgba(255, 255, 255, 0.1);

  form {
    margin-bottom: 15px;
    display: flex;
    gap: 10px;

    input {
      flex: 1;
      padding: 8px;
      border: none;
      border-radius: 15px;
      background: rgba(255, 255, 255, 0.1);
      color: ${props => props.theme.textColor};
    }

    button {
      background: ${props => props.theme.primaryColor};
      color: white;
      border: none;
      padding: 8px 15px;
      border-radius: 15px;
    }
  }
`;
export const PrivacyOptions = styled.div`
  display: flex;
  gap: 10px;

  button {
    flex: 1;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    padding: 10px;
    border-radius: 10px;
    color: ${props => props.theme.textColor};
    transition: all 0.3s ease;

    &.active {
      background: ${props => props.theme.primaryColor};
      color: white;
    }

    &:hover {
      background: ${props => props.theme.primaryColor};
      color: white;
    }
  }
`;
export const RelatedVideosContainer = styled.div`
  margin-top: 30px;
  
  h3 {
    margin-bottom: 20px;
  }

  .carousel {
    padding: 20px;
    background: ${props => props.theme.cardBackground};
    border-radius: 15px;
  }
`;

export const RelatedVideoItem = styled.div`
  display: flex;
  gap: 15px;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  img {
    width: 180px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
  }

  .video-info {
    h4 {
      margin: 0;
      font-size: 1rem;
    }

    p {
      color: ${props => props.theme.textColor};
      opacity: 0.7;
      margin-top: 5px;
    }
  }
`;
export const UploadForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  input, textarea {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    padding: 10px;
    border-radius: 10px;
    color: ${props => props.theme.textColor};
  }

  button {
    background: ${props => props.theme.primaryColor};
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;
