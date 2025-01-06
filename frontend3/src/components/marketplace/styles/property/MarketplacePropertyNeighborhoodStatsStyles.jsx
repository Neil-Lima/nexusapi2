"use client";
import styled from "styled-components";

export const StatsContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.textColor};
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  background: ${props => props.theme.primaryColor};
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};

  .filters {
    display: flex;
    gap: 1rem;

    button {
      background: ${props => props.theme.primaryColor};
      border: none;
      padding: 0.5rem 1rem;
      border-radius: ${props => props.theme.borderRadius};
      color: ${props => props.theme.textColor};
      cursor: pointer;
      transition: ${props => props.theme.transition};

      &:hover {
        transform: translateY(-3px);
        box-shadow: ${props => props.theme.boxShadow};
      }

      &.active {
        background: ${props => props.theme.highlightColor};
      }
    }
  }
`;

export const ScoreSection = styled.div`
  margin-bottom: 2rem;

  .score-display {
    background: ${props => props.theme.primaryColor};
    padding: 2rem;
    border-radius: ${props => props.theme.borderRadius};
    text-align: center;
    box-shadow: ${props => props.theme.boxShadow};

    .score {
      font-size: 3rem;
      font-weight: bold;
      color: ${props => props.theme.highlightColor};
      margin: 1rem 0;
    }

    .score-breakdown {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
      margin-top: 1rem;

      .category {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;
        background: ${props => props.theme.primaryColor};
        border-radius: ${props => props.theme.borderRadius};
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
  background: ${props => props.theme.primaryColor};
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  transition: ${props => props.theme.transition};
  box-shadow: ${props => props.theme.boxShadow};

  &:hover {
    transform: translateY(-5px);
  }

  h4 {
    margin-bottom: 1rem;
  }

  .value {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .trend {
    margin-bottom: 1rem;
    
    &.up { color: #4CAF50; }
    &.down { color: #F44336; }
    &.stable { color: #FFC107; }
  }

  .chart {
    height: 60px;
    background: ${props => props.theme.primaryColor};
    border-radius: ${props => props.theme.borderRadius};
  }
`;

export const ChartSection = styled.div`
  margin-bottom: 2rem;
  background: ${props => props.theme.primaryColor};
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};

  .chart-container {
    height: 300px;
    margin-top: 1rem;
    background: ${props => props.theme.primaryColor};
    border-radius: ${props => props.theme.borderRadius};
  }
`;

export const AmenitiesSection = styled.div`
  margin-bottom: 2rem;
  background: ${props => props.theme.primaryColor};
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};

  .amenities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1rem;

    .amenity-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: ${props => props.theme.primaryColor};
      padding: 1rem;
      border-radius: ${props => props.theme.borderRadius};
      transition: ${props => props.theme.transition};

      &:hover {
        transform: translateY(-3px);
        box-shadow: ${props => props.theme.boxShadow};
      }

      .icon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${props => props.theme.highlightColor};
        border-radius: 50%;
      }
    }
  }
`;

export const TransportSection = styled.div`
  margin-bottom: 2rem;
  background: ${props => props.theme.primaryColor};
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};

  .transport-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1rem;

    .transport-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: ${props => props.theme.primaryColor};
      padding: 1rem;
      border-radius: ${props => props.theme.borderRadius};
      transition: ${props => props.theme.transition};

      &:hover {
        transform: translateY(-3px);
        box-shadow: ${props => props.theme.boxShadow};
      }

      .icon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${props => props.theme.highlightColor};
        border-radius: 50%;
      }
    }
  }
`;

export const SafetySection = styled.div`
  background: ${props => props.theme.primaryColor};
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};

  .safety-metrics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 1rem;

    .safety-card {
      background: ${props => props.theme.primaryColor};
      padding: 1rem;
      border-radius: ${props => props.theme.borderRadius};
      transition: ${props => props.theme.transition};

      &:hover {
        transform: translateY(-3px);
        box-shadow: ${props => props.theme.boxShadow};
      }

      h4 {
        margin-bottom: 0.5rem;
      }

      .value {
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }

      .trend {
        font-size: 0.9rem;
        
        &.better { color: #4CAF50; }
        &.worse { color: #F44336; }
                &.similar { color: #FFC107; }
      }
    }
  }

  .safety-map {
    height: 300px;
    background: ${props => props.theme.primaryColor};
    border-radius: ${props => props.theme.borderRadius};
    margin-top: 1rem;
  }
`;

