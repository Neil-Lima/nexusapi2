'use client';
import styled from 'styled-components';

export const PreferencesContainer = styled.div`
 border-radius: ${props => props.theme.borderRadius};
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  box-shadow: ${props => props.theme.boxShadow};
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 20px;
  color: white;
`;

export const PreferencesHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  svg {
    color: ${props => props.theme.primaryColor};
    font-size: 1.5rem;
  }
`;

export const PreferencesForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  label {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    color: rgba(255, 255, 255, 0.9);

    svg {
      color: ${props => props.theme.primaryColor};
    }
  }

  select, input {
    width: 100%;
    padding: 10px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 10px;
    color: white;
    
    &:focus {
      outline: none;
      background: rgba(255, 255, 255, 0.15);
    }

    option {
      background: #1a1a1a;
    }
  }
`;

export const RangeGroup = styled(FormGroup)`
  input[type="range"] {
    width: 100%;
    margin: 10px 0;
  }
`;

export const RangeValue = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
`;

export const InterestTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const InterestTag = styled.div`
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  background: ${props => props.selected ? 
    `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})` : 
    'rgba(255, 255, 255, 0.1)'
  };

  &:hover {
    transform: translateY(-2px);
    background: ${props => props.selected ?
      `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})` :
      'rgba(255, 255, 255, 0.2)'
    };
  }
`;

export const ApplyButton = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;
