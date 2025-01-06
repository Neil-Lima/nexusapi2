'use client';
import styled from 'styled-components';

export const SecurityContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  color: white;
`;

export const ScoreSection = styled.div`
  margin-bottom: 2rem;

  .score-display {
    text-align: center;
    margin-bottom: 2rem;

    .score {
      font-size: 3.5rem;
      font-weight: bold;
      background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 1rem 0;
    }

    .score-comparison {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  .score-details {
    .detail-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;

      .category {
        min-width: 120px;
      }

      .value-bar {
        flex: 1;
        height: 8px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
        overflow: hidden;

        .fill {
          height: 100%;
          background: ${props => props.theme.primaryColor};
          transition: width 0.3s ease;
        }
      }

      .value {
        min-width: 50px;
        text-align: right;
      }
    }
  }
`;

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const MetricCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.boxShadow};
  }

  .icon {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.primaryColor};
    border-radius: 50%;
    font-size: 1.5rem;
  }

  .content {
    flex: 1;

    h4 {
      margin-bottom: 0.5rem;
    }

    .value {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 0.25rem;
    }

    .trend {
      font-size: 0.9rem;
      
      &.up { color: #4CAF50; }
      &.down { color: #F44336; }
      &.stable { color: #FFC107; }
    }
  }
`;

export const MapSection = styled.div`
  margin-bottom: 2rem;

  .map-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    .map-filters {
      display: flex;
      gap: 0.5rem;

      button {
        background: rgba(255, 255, 255, 0.1);
        border: none;
        padding: 0.5rem 1rem;
        border-radius: ${props => props.theme.borderRadius};
        color: white;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background: ${props => props.theme.primaryColor};
        }

        &.active {
          background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
        }
      }
    }
  }

  .map-container {
    height: 400px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${props => props.theme.borderRadius};
  }
`;

export const HistorySection = styled.div`
  margin-bottom: 2rem;

  .timeframe-selector {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;

    button {
      background: rgba(255, 255, 255, 0.1);
      border: none;
      padding: 0.5rem 1rem;
      border-radius: ${props => props.theme.borderRadius};
      color: white;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: ${props => props.theme.primaryColor};
      }
    }
  }

  .incidents-list {
    .incident-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: ${props => props.theme.borderRadius};
      margin-bottom: 0.5rem;

      .incident-type {
        min-width: 120px;
        font-weight: bold;
      }

      .incident-details {
        flex: 1;
        display: flex;
        flex-direction: column;

        .date {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }
      }

      .status {
        padding: 0.25rem 0.5rem;
        border-radius: ${props => props.theme.borderRadius};
        font-size: 0.9rem;

        &.resolved { background: #4CAF50; }
        &.pending { background: #FFC107; }
        &.investigating { background: #2196F3; }
      }
    }
  }
`;

export const SecurityFeaturesSection = styled.div`
  margin-bottom: 2rem;

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;

    .feature-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: rgba(255, 255, 255, 0.1);
      padding: 1rem;
      border-radius: ${props => props.theme.borderRadius};

      .icon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${props => props.theme.primaryColor};
        border-radius: 50%;
      }

      .info {
        flex: 1;

        h4 {
          margin-bottom: 0.25rem;
        }

        p {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }
      }

      .status {
        padding: 0.25rem 0.5rem;
        border-radius: ${props => props.theme.borderRadius};
        font-size: 0.9rem;

        &.active { background: #4CAF50; }
        &.inactive { background: #F44336; }
        &.maintenance { background: #FFC107; }
      }
    }
  }
`;

export const EmergencyServicesSection = styled.div`
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;

    .service-card {
      background: rgba(255, 255, 255, 0.1);
      padding: 1.5rem;
      border-radius: ${props => props.theme.borderRadius};

      .icon {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${props => props.theme.primaryColor};
        border-radius: 50%;
        margin-bottom: 1rem;
      }

      .details {
        margin-bottom: 1rem;

        h4 {
          margin-bottom: 0.5rem;
        }

        .distance, .response-time {
          display: block;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }
      }

      .contact-button {
        width: 100%;
        background: ${props => props.theme.primaryColor};
        color: white;
        border: none;
        padding: 0.75rem;
        border-radius: ${props => props.theme.borderRadius};
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-2px);
          box-shadow: ${props => props.theme.boxShadow};
        }
      }
    }
  }
`;
