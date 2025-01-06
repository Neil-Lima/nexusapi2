'use client';
import styled from 'styled-components';

export const AssessmentContainer = styled.div`
  padding: 20px;
`;

export const AssessmentCard = styled.div`
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

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

export const SkillCard = styled.div`
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
    margin: 0 0 15px 0;
  }

  .skill-level {
    position: relative;
    height: 4px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
    margin-bottom: 15px;

    .progress {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      background: ${props => props.theme.primaryColor};
      border-radius: 2px;
      transition: width 0.3s ease;
    }

    span {
      position: absolute;
      right: 0;
      top: -20px;
      font-size: 0.8em;
    }
  }

  .skill-stats {
    display: flex;
    justify-content: space-between;
    font-size: 0.9em;
    opacity: 0.8;

    span {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
`;

export const TestSection = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
  margin-bottom: 30px;

  .test-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .timer {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 1.2em;
      color: ${props => props.theme.primaryColor};
    }
  }

  .question {
    h4 {
      margin-bottom: 15px;
    }

    p {
      margin-bottom: 20px;
      opacity: 0.8;
    }

    .options {
      display: grid;
      gap: 10px;

      button {
        padding: 15px;
        border: none;
        border-radius: ${props => props.theme.borderRadius};
        background: rgba(255, 255, 255, 0.1);
        color: ${props => props.theme.textColor};
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateX(5px);
        }
      }
    }
  }
`;

export const ResultsPanel = styled.div`
  margin-bottom: 30px;

  .results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }

  .result-card {
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${props => props.theme.borderRadius};
    padding: 20px;

    .result-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 15px;

      svg {
        color: ${props => props.theme.primaryColor};
      }
    }

    .metrics {
      margin-bottom: 15px;

      .metric {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;

        .progress-bar {
          flex: 1;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;

          div {
            height: 100%;
            background: ${props => props.theme.primaryColor};
          }
        }
      }
    }

    .recommendation {
      font-size: 0.9em;
      opacity: 0.8;
    }
  }
`;

export const CertificateCard = styled.div`
  margin-bottom: 30px;

  .certificates-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }

  .certificate {
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${props => props.theme.borderRadius};
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 15px;

    svg {
      font-size: 24px;
      color: ${props => props.theme.primaryColor};
    }

    .cert-info {
      flex: 1;

      h4 {
        margin: 0 0 5px 0;
      }

      p {
        margin: 0;
        font-size: 0.9em;
        opacity: 0.8;
      }

      .date {
        font-size: 0.8em;
        opacity: 0.7;
      }
    }

    button {
      padding: 8px 15px;
      border: none;
      border-radius: ${props => props.theme.borderRadius};
      background: ${props => props.theme.primaryColor};
      color: white;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
      }
    }
  }
`;

export const ProgressTracker = styled.div`
  .progress-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;

    .stat {
      background: rgba(255, 255, 255, 0.1);
      border-radius: ${props => props.theme.borderRadius};
      padding: 15px;
      display: flex;
      align-items: center;
      gap: 15px;

      svg {
        font-size: 24px;
        color: ${props => props.theme.primaryColor};
      }

      h4 {
        margin: 0;
        font-size: 0.9em;
      }

      span {
        font-size: 0.8em;
        opacity: 0.8;
      }
    }
  }
`;
