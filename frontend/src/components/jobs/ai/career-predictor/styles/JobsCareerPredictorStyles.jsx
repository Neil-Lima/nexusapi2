'use client';
import styled from 'styled-components';

export const PredictorContainer = styled.div`
  padding: 20px;
`;

export const PredictorCard = styled.div`
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
`;

export const CareerPath = styled.div`
  margin-bottom: 30px;

  h3 {
    margin-bottom: 20px;
  }
`;

export const PathTimeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
    background: rgba(255, 255, 255, 0.2);
  }

  svg {
    color: ${props => props.theme.primaryColor};
    font-size: 24px;
  }

  .path-info {
    flex: 1;

    h4 {
      margin: 0 0 5px 0;
    }

    p {
      margin: 0;
      opacity: 0.8;
    }

    .probability {
      display: inline-block;
      margin-top: 10px;
      padding: 3px 8px;
      background: ${props => props.theme.primaryColor};
      border-radius: 12px;
      font-size: 0.8em;
    }
  }
`;

export const SalaryTrends = styled.div`
  margin-bottom: 30px;

  h3 {
    margin-bottom: 20px;
  }

  .trends-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
  }

  .trend-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${props => props.theme.borderRadius};

    svg {
      color: ${props => props.theme.primaryColor};
    }

    .trend-info {
      h4 {
        margin: 0 0 5px 0;
      }

      p {
        margin: 0;
        font-size: 1.2em;
        font-weight: bold;
      }

      .growth {
        color: #4CAF50;
        font-size: 0.9em;
      }
    }
  }
`;

export const SkillsRequired = styled.div`
  margin-bottom: 30px;

  h3 {
    margin-bottom: 20px;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
  }

  .skill-item {
    padding: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${props => props.theme.borderRadius};
    position: relative;
    overflow: hidden;

    svg {
      color: ${props => props.theme.primaryColor};
      margin-right: 10px;
    }

    .progress-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      background: ${props => props.theme.primaryColor};
      transition: width 0.3s ease;
    }
  }
`;

export const ActionPanel = styled.div`
  button {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: ${props => props.theme.borderRadius};
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.boxShadow};
    }
  }
`;
