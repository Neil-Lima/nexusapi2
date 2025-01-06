'use client';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const FilterContainer = styled.div`
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: ${props => props.theme.boxShadow};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;

  svg {
    color: ${props => props.theme.primaryColor};
  }
`;

export const FilterInput = styled.input`
  width: 100%;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.textColor};

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const FilterSelect = styled.select`
  width: 100%;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.textColor};
  cursor: pointer;

  option {
    background: ${props => props.theme.cardBackground};
    color: ${props => props.theme.textColor};
  }
`;

export const FilterDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.textColor};
  cursor: pointer;

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const FilterTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 16px 0;
`;

export const FilterTag = styled.button`
  background: ${props => props.selected ? 
    `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})` :
    'rgba(255, 255, 255, 0.1)'
  };
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  color: white;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${props => props.selected ?
      `linear-gradient(${props.theme.gradientDirection}, ${props.theme.secondaryColor}, ${props.theme.primaryColor})` :
      'rgba(255, 255, 255, 0.2)'
    };
  }

  svg {
    font-size: 0.8rem;
  }
`;

export const FilterActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`;

export const ApplyButton = styled.button`
  flex: 1;
  padding: 12px;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border: none;
  border-radius: 25px;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.boxShadow};
  }
`;

export const ResetButton = styled.button`
  flex: 1;
  padding: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 25px;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;
