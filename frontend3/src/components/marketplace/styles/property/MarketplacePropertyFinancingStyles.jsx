"use client";
import styled from "styled-components";

export const FinancingContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.textColor};
`;

export const CalculatorSection = styled.div`
  margin-bottom: 2rem;
  background: ${props => props.theme.primaryColor};
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};

  h2 {
    margin-bottom: 1.5rem;
  }
`;

export const SimulationForm = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;

  .form-group {
    label {
      display: block;
      margin-bottom: 0.5rem;
    }
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 0.75rem;
  background: ${props => props.theme.primaryColor};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.textColor};
  transition: ${props => props.theme.transition};

  &:focus {
    outline: none;
    box-shadow: ${props => props.theme.boxShadow};
  }
`;

export const SelectField = styled.select`
  width: 100%;
  padding: 0.75rem;
  background: ${props => props.theme.primaryColor};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.textColor};
  transition: ${props => props.theme.transition};

  &:focus {
    outline: none;
    box-shadow: ${props => props.theme.boxShadow};
  }

  option {
    background: ${props => props.theme.primaryColor};
  }
`;

export const SimulateButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: ${props => props.theme.highlightColor};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.textColor};
  font-weight: bold;
  cursor: pointer;
  transition: ${props => props.theme.transition};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.boxShadow};
  }
`;

export const ResultsSection = styled.div`
  margin-bottom: 2rem;

  .summary {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }
`;

export const ResultCard = styled.div`
  background: ${props => props.theme.primaryColor};
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  text-align: center;
  box-shadow: ${props => props.theme.boxShadow};

  span {
    display: block;
    margin-bottom: 0.5rem;
    opacity: 0.7;
  }

  h3 {
    font-size: 1.8rem;
    color: ${props => props.theme.highlightColor};
  }
`;

export const BankOptions = styled.div`
  margin-bottom: 2rem;
  background: ${props => props.theme.primaryColor};
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};

  h3 {
    margin-bottom: 1.5rem;
  }
`;

export const BankGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

export const BankCard = styled.div`
  background: ${props => props.theme.primaryColor};
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  transition: ${props => props.theme.transition};
  border: 2px solid ${props => props.selected ? props.theme.highlightColor : 'transparent'};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.boxShadow};
  }

  img {
    width: 120px;
    height: 40px;
    object-fit: contain;
    margin-bottom: 1rem;
  }

  .bank-info {
    margin-bottom: 1rem;

    h4 {
      margin-bottom: 0.5rem;
    }

    .rate {
      display: block;
      color: ${props => props.theme.highlightColor};
      font-weight: bold;
      margin-bottom: 0.25rem;
    }
  }

  .features {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    .feature-tag {
      padding: 0.25rem 0.5rem;
      background: ${props => props.theme.primaryColor};
      border-radius: ${props => props.theme.borderRadius};
      font-size: 0.8rem;
    }
  }
`;

export const ComparisonTable = styled.div`
  margin-bottom: 2rem;
  background: ${props => props.theme.primaryColor};
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  overflow-x: auto;

  h3 {
    margin-bottom: 1.5rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    th, td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    th {
      font-weight: bold;
      background: ${props => props.theme.primaryColor};
    }

    tr:hover td {
      background: ${props => props.theme.primaryColor};
    }
  }
`;

export const DocumentsList = styled.div`
  background: ${props => props.theme.primaryColor};
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};

  h3 {
    margin-bottom: 1.5rem;
  }

  .documents-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
`;

export const DocumentCard = styled.div`
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
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.highlightColor};
  border-radius: 50%;
`;

export const ActionButton = styled.button`
  background: ${props => props.theme.highlightColor};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.textColor};
  cursor: pointer;
  transition: ${props => props.theme.transition};

  &:hover {
    transform: translateY(-2px);
        box-shadow: ${props => props.theme.boxShadow};
  }
`;

