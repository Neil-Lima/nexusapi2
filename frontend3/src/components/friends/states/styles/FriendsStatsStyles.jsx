import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const StatsCard = styled(Card)`
  border-radius: ${props => props.theme.borderRadius};
  border: none;
  background: ${props => props.theme.cardBackground};
  backdrop-filter: blur(20px);
  color: #ffffff;
  box-shadow: ${props => props.theme.boxShadow};
  transition: ${props => props.theme.transition};
  margin-bottom: 1rem;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  }
`;

export const StatsContainer = styled.div`
  padding: 1.5rem;
`;

export const StatsHeader = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    border-radius: 3px;
  }
`;

export const StatsTitle = styled.h5`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StatBox = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
  }
`;

export const StatIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 1.2rem;
  color: #ffffff;
  box-shadow: ${props => props.theme.boxShadow};
`;

export const StatInfo = styled.div`
  flex: 1;
`;

export const StatLabel = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.25rem;
`;

export const StatValue = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
