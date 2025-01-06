'use client';
import styled from 'styled-components';

export const TrackerContainer = styled.div`
  padding: 20px;
`;

export const TrackerCard = styled.div`
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

export const StatsPanel = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;

  .stat-item {
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

    h4 {
      margin: 0;
      font-size: 0.9em;
      opacity: 0.8;
    }

    span {
      font-size: 1.5em;
      font-weight: bold;
    }
  }
`;

export const FilterSection = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;

  .search-bar {
    flex: 1;
    position: relative;

    svg {
      position: absolute;
      left: 15px;
      top: 50%;
      transform: translateY(-50%);
      color: ${props => props.theme.primaryColor};
    }

    input {
      width: 100%;
      padding: 12px 12px 12px 40px;
      border: none;
      border-radius: ${props => props.theme.borderRadius};
      background: rgba(255, 255, 255, 0.1);
      color: ${props => props.theme.textColor};

      &:focus {
        outline: none;
        background: rgba(255, 255, 255, 0.15);
      }
    }
  }

  .filters {
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
      color: ${props => props.theme.primaryColor};
    }

    select {
      padding: 12px;
      border: none;
      border-radius: ${props => props.theme.borderRadius};
      background: rgba(255, 255, 255, 0.1);
      color: ${props => props.theme.textColor};

      &:focus {
        outline: none;
        background: rgba(255, 255, 255, 0.15);
      }
    }
  }
`;

export const ApplicationsBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  min-height: 500px;
`;

export const ApplicationColumn = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${props => props.theme.borderRadius};
  padding: 15px;

  h3 {
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 2px solid ${props => props.theme.primaryColor};
  }
`;

export const ApplicationCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  padding: 15px;
  margin-bottom: 15px;
  cursor: move;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.15);
  }

  h4 {
    margin: 0 0 10px 0;
  }

  p {
    margin: 0;
    opacity: 0.8;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;

    .date {
      font-size: 0.8em;
      opacity: 0.7;
    }
  }
`;

export const StatusBadge = styled.span`
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 0.8em;
  background: ${props => {
    switch (props.status) {
      case 'pending': return 'rgba(255, 193, 7, 0.2)';
      case 'interview': return 'rgba(33, 150, 243, 0.2)';
      case 'offer': return 'rgba(76, 175, 80, 0.2)';
      case 'rejected': return 'rgba(244, 67, 54, 0.2)';
      default: return 'rgba(255, 255, 255, 0.1)';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'pending': return '#ffc107';
      case 'interview': return '#2196f3';
      case 'offer': return '#4caf50';
      case 'rejected': return '#f44336';
      default: return props.theme.textColor;
    }
  }};
`;
