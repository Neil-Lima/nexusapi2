'use client';
import styled from 'styled-components';

export const VideoCallContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 15px;
  overflow: hidden;
`;

export const VideoGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 15px;
  padding: 15px;
`;

export const VideoFrame = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);

  video, img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  span {
    position: absolute;
    bottom: 15px;
    left: 15px;
    color: white;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  }
`;

export const CallControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
`;

export const ControlButton = styled.button`
  background: ${props => props.$danger ? '#ff4444' : 'rgba(255, 255, 255, 0.1)'};
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: ${props => props.$danger ? 
      'rgba(255, 59, 48, 1)' : 
      'rgba(255, 255, 255, 0.2)'
    };
  }
`;
