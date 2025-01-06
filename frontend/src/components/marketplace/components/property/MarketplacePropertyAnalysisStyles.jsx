'use client';
import styled from 'styled-components';

export const AnalysisContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  color: white;
`;

export const ValueSection = styled.div`
  margin-bottom: 2rem;

  .value-metrics {
    background: rgba(255, 255, 255, 0.1);
    padding: 1.5rem;
    border-radius: ${props => props.theme.borderRadius};

    .current-value {
      text-align: center;
      margin-bottom: 1rem;

      .price {
        font-size: 2.5rem;
        font-weight: bold;
        background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .value-range {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    .confidence-score {
      text-align: center;
      color: ${props => props.theme.primaryColor};
    }
  }
`;

export const LocationSection = styled.div`
  margin-bottom: 2rem;
`;

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

export const MetricCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.boxShadow};
  }

  h4 {
    margin-bottom: 1rem;
  }

  .value {
    font-size: 1.5rem;
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  .trend {
    color: ${props => props.theme.primaryColor};
  }
`;

export const MarketTrendsSection = styled.div`
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

      &.active {
        background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
      }
    }
  }
`;

export const ChartContainer = styled.div`
  height: 300px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  padding: 1rem;
`;

export const ComparisonSection = styled.div`
  margin-bottom: 2rem;

  .comparable-properties {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;

    .property-card {
      background: rgba(255, 255, 255, 0.1);
      border-radius: ${props => props.theme.borderRadius};
      overflow: hidden;

      img {
        width: 100%;
        height: 150px;
        object-fit: cover;
      }

      .property-info {
        padding: 1rem;

        .price {
          display: block;
          font-size: 1.2rem;
          font-weight: bold;
          margin: 0.5rem 0;
        }

        .difference {
          color: ${props => props.theme.primaryColor};
        }
      }
    }
  }
`;

export const NeighborhoodStats = styled.div`
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;

    .stat-item {
      background: rgba(255, 255, 255, 0.1);
      padding: 1rem;
      border-radius: ${props => props.theme.borderRadius};

      .value {
        font-size: 1.2rem;
        font-weight: bold;
        display: block;
        margin: 0.5rem 0;
      }

      .trend-indicator {
        .trend {
          &.up { color: #4CAF50; }
          &.down { color: #F44336; }
          &.stable { color: #FFC107; }
        }
      }
    }
  }
`;
