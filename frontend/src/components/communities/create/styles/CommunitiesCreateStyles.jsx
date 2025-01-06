// CommunitiesCreateStyles.jsx
'use client';
import styled from 'styled-components';

export const CreateContainer = styled.div`
 color: ${props => props.theme.primaryColor};
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
     border-radius: ${props => props.theme.borderRadius};
  padding: 30px;
  
  h2 {
    color: white;
    margin-bottom: 30px;
  }
`;

export const CreateForm = styled.form`
 color: ${props => props.theme.primaryColor};
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
   
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  label {
    display: block;
    color: white;
    margin-bottom: 8px;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 12px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: ${props => props.theme.borderRadius};
    color: white;
    
    &:focus {
      outline: none;
      background: rgba(255, 255, 255, 0.15);
    }
  }

  select {
    appearance: none;
    background-image: linear-gradient(45deg, transparent 50%, ${props => props.theme.primaryColor} 50%),
                      linear-gradient(135deg, ${props => props.theme.primaryColor} 50%, transparent 50%);
    background-position: calc(100% - 20px) calc(1em + 2px),
                         calc(100% - 15px) calc(1em + 2px);
    background-size: 5px 5px,
                    5px 5px;
    background-repeat: no-repeat;
    cursor: pointer;

    option {
      background: ${props => props.theme.cardBackground};
      color: ${props => props.theme.primaryColor};
      padding: 12px;
      cursor: pointer;
      
      &:hover, &:focus, &:active, &:checked {
        background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
        color: white;
      }
    }

    &::-ms-expand {
      display: none;
    }
  }
  
  textarea {
    min-height: 120px;
    resize: vertical;
  }
`;


export const StyledOption = styled.option`
      background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};

  color: ${props => props.theme.primaryColor};
  padding: 12px;
  cursor: pointer;
  
  &:hover, &:focus, &:active, &:checked {
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    color: white;
  }
`;

export const ImageUpload = styled.div`
  .upload-area {
    border: 2px dashed rgba(255, 255, 255, 0.2);
    border-radius: ${props => props.theme.borderRadius};
    padding: 30px;
    text-align: center;
    cursor: pointer;
    color: white;
    
    &:hover {
      border-color: ${props => props.theme.primaryColor};
    }
    
    svg {
      font-size: 2rem;
      margin-bottom: 10px;
      color: ${props => props.theme.primaryColor};
    }
    
    input {
      display: none;
    }
  }
`;

export const PrivacyOptions = styled.div`
 color: ${props => props.theme.primaryColor};
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
   
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const PrivacyOption = styled.div`
  padding: 20px;
  background: ${props => props.selected ? 
    `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})` :
    'rgba(255, 255, 255, 0.1)'
  };
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  svg {
    font-size: 1.5rem;
    color: white;
  }
  
  h4 {
    margin: 0;
    color: white;
  }
  
  p {
    margin: 5px 0 0;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const SubmitButton = styled.button`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  color: white;
  border: none;
  padding: 15px;
  border-radius: ${props => props.theme.borderRadius};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.boxShadow};
  }
`;
