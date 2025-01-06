'use client';
import styled from 'styled-components';

export const StatsContainer = styled.div`
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: ${props => props.theme.boxShadow};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const StatsHeader = styled.div`
  margin-bottom: 20px;
`;

export const StatsTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

export const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${props => props.theme.borderRadius};
  padding: 15px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const StatIcon = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto 10px;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
`;

export const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 5px;
`;

export const StatLabel = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 10px;
`;

export const StatTrend = styled.div`
  font-size: 0.8rem;
  color: ${props => props.positive ? '#4CAF50' : '#F44336'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &::before {
    content: '${props => props.positive ? '↑' : '↓'}';
  }
`;
