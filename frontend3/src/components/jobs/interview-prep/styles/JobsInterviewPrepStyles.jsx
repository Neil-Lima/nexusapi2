'use client';
import styled from 'styled-components';

export const PrepContainer = styled.div`
  padding: 20px;
`;

export const PrepCard = styled.div`
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

export const QuestionBank = styled.div`
  margin-bottom: 30px;

  h3 {
    margin-bottom: 20px;
  }

  .questions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
`;

export const QuestionCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  padding: 15px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
  }

  .question-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    .category {
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 0.8em;

      &.technical { background: rgba(33, 150, 243, 0.2); color: #2196f3; }
      &.behavioral { background: rgba(76, 175, 80, 0.2); color: #4caf50; }
      &.system-design { background: rgba(156, 39, 176, 0.2); color: #9c27b0; }
    }

    .difficulty {
      color: #ffc107;
      font-size: 0.8em;
    }
  }

  h4 {
    margin: 0 0 10px 0;
  }

  p {
    margin: 0;
    opacity: 0.8;
    font-size: 0.9em;
  }

  .question-footer {
    margin-top: 15px;
    text-align: right;

    button {
      background: none;
      border: none;
      color: ${props => props.theme.primaryColor};
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      border-radius: ${props => props.theme.borderRadius};
      transition: background 0.3s ease;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }
`;

export const SimulatorSection = styled.div`
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;

  h3 {
    margin-bottom: 20px;
  }

  .simulation-active {
    .video-feed {
      background: rgba(0, 0, 0, 0.3);
      height: 300px;
      border-radius: ${props => props.theme.borderRadius};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-bottom: 20px;

      svg {
        font-size: 48px;
        opacity: 0.5;
      }
    }

    .current-question {
      text-align: center;
      margin-bottom: 20px;

      .timer {
        font-size: 1.5em;
        font-weight: bold;
        color: ${props => props.theme.primaryColor};
      }
    }

    .controls {
      display: flex;
      gap: 15px;
      justify-content: center;

      button {
        padding: 10px 20px;
        border: none;
        border-radius: ${props => props.theme.borderRadius};
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;

        &.record {
          background: ${props => props.theme.primaryColor};
          color: white;
        }

        &.skip {
          background: rgba(255, 255, 255, 0.1);
          color: ${props => props.theme.textColor};
        }
      }
    }
  }

  .simulation-start {
    text-align: center;

    button {
      padding: 15px 30px;
      border: none;
      border-radius: ${props => props.theme.borderRadius};
      background: ${props => props.theme.primaryColor};
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 0 auto;

      &:hover {
        transform: translateY(-2px);
      }
    }
  }
`;

export const FeedbackPanel = styled.div`
  margin-bottom: 30px;

  .feedback-item {
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${props => props.theme.borderRadius};
    padding: 15px;
    margin-bottom: 15px;

    .feedback-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;

      svg {
        color: ${props => props.theme.primaryColor};
      }
    }

    .metrics {
      margin-top: 15px;

      .metric {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;

        span {
          min-width: 100px;
          font-size: 0.9em;
        }

        .progress-bar {
          flex: 1;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;

          div {
            height: 100%;
            background: ${props => props.theme.primaryColor};
            transition: width 0.3s ease;
          }
        }
      }
    }
  }
`;

export const ResourcesGrid = styled.div`
  margin-bottom: 30px;

  .resources {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
`;

export const ResourceCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
        background: rgba(255, 255, 255, 0.15);
  }

  svg {
    font-size: 24px;
    color: ${props => props.theme.primaryColor};
    margin-bottom: 15px;
  }

  h4 {
    margin: 0 0 10px 0;
  }

  p {
    margin: 0;
    opacity: 0.8;
    font-size: 0.9em;
  }

  .type {
    display: inline-block;
    margin-top: 10px;
    padding: 4px 8px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.1);
    font-size: 0.8em;
  }
`;

export const ActionButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;

  button {
    padding: 15px;
    border: none;
    border-radius: ${props => props.theme.borderRadius};
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s ease;

    &.schedule {
      background: ${props => props.theme.primaryColor};
    }

    &.feedback {
      background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    }

    &.practice {
      background: ${props => props.theme.secondaryColor};
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.boxShadow};
    }
  }
`;

