'use client';
import styled from 'styled-components';

export const AnalyticsContainer = styled.div`
  padding: 20px;
`;

export const AnalyticsCard = styled.div`
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

export const FilterBar = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;

  select {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: ${props => props.theme.borderRadius};
    background: rgba(255, 255, 255, 0.1);
    color: ${props => props.theme.textColor};
    
    &:focus {
      outline: none;
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;

export const MarketOverview = styled.div`
  margin-bottom: 30px;

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
  }

  .metric-item {
    padding: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    align-items: center;
    gap: 15px;

    svg {
      color: ${props => props.theme.primaryColor};
      font-size: 24px;
    }

    .trend {
      &.positive { color: #4CAF50; }
      &.negative { color: #f44336; }
    }
  }
`;

export const IndustryTrends = styled.div`
  margin-bottom: 30px;

  .trends-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
  }

  .industry-item {
    padding: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    align-items: center;
    gap: 15px;

    svg {
      color: ${props => props.theme.primaryColor};
    }

    .job-openings {
      margin-top: 5px;
      font-size: 0.9em;
      opacity: 0.8;
    }
  }
`;

export const SalaryMap = styled.div`
  margin-bottom: 30px;

  .salary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
  }

  .salary-item {
    padding: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${props => props.theme.borderRadius};

    svg {
      color: ${props => props.theme.primaryColor};
      margin-bottom: 10px;
    }

    .range {
      display: block;
      font-size: 0.8em;
      opacity: 0.7;
      margin-top: 5px;
    }
  }
`;

export const DemandMetrics = styled.div`
  .demand-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
  }

  .demand-item {
    padding: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${props => props.theme.borderRadius};

    .demand-bar {
      height: 4px;
      background: ${props => props.theme.primaryColor};
      border-radius: 2px;
      margin: 8px 0;
    }
  }
`;
