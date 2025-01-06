'use client';
import styled from 'styled-components';

export const SimulatorContainer = styled.div`
  padding: 20px;
`;

export const SimulatorCard = styled.div`
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  padding: 20px;
  color: ${props => props.theme.textColor};
`;

export const VideoPreview = styled.div`
  width: 100%;
  height: 400px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  margin-bottom: 20px;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .placeholder {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.textColor};
    opacity: 0.7;

    svg {
      font-size: 48px;
      margin-bottom: 15px;
    }
  }
`;

export const ControlsPanel = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;

export const ControlButton = styled.button`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  padding: 10px 20px;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.boxShadow};
  }
`;

export const FeedbackPanel = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
  margin-bottom: 20px;

  h3 {
    margin: 0 0 10px 0;
    color: ${props => props.theme.textColor};
  }
`;

export const ProgressIndicator = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${props => props.progress}%;
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    border-radius: 2px;
    transition: width 0.3s ease;
  }
`;

export const ScoreCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
  margin-bottom: 20px;

  h4 {
    margin: 0 0 15px 0;
    color: ${props => props.theme.textColor};
  }

  .scores {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  .score-item {
    text-align: center;

    span {
      display: block;
      margin-bottom: 5px;
      opacity: 0.8;
    }

    .score-value {
      font-size: 24px;
      font-weight: bold;
      color: ${props => props.theme.primaryColor};
    }
  }
`;

export const ActionButton = styled.button`
  width: 100%;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  padding: 15px;
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.boxShadow};
  }
`;
