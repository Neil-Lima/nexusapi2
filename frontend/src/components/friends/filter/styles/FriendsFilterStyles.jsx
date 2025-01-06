import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const FilterCard = styled(Card)`
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

export const FilterContainer = styled.div`
  padding: 1.5rem;
`;

export const FilterHeader = styled.div`
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

export const FilterTitle = styled.h5`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const CategoryTag = styled.span`
  background: ${props => props.selected ?
    `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})` :
    'rgba(255, 255, 255, 0.1)'
  };
  padding: 0.5rem 1rem;
  border-radius: 25px;
  color: white;
  cursor: pointer;
  transition: ${props => props.theme.transition};
  font-size: 0.9rem;
  font-weight: 500;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.selected ? 
      props.theme.boxShadow : 
      '0 5px 15px rgba(0, 0, 0, 0.2)'
    };
    background: ${props => props.selected ?
      `linear-gradient(${props.theme.gradientDirection}, ${props.theme.secondaryColor}, ${props.theme.primaryColor})` :
      'rgba(255, 255, 255, 0.15)'
    };
  }
`;
