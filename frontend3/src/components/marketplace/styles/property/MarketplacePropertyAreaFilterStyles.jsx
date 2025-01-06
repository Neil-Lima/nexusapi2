"use client";
import styled from "styled-components";
import { Card } from "react-bootstrap";

export const AreaFilterCard = styled(Card)`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  border: none;
  margin-bottom: 24px;
  box-shadow: ${props => props.theme.boxShadow};

  h4 {
    color: ${props => props.theme.textColor};
    margin-bottom: 1.5rem;
    text-align: center;
  }

  h5 {
    color: ${props => props.theme.textColor};
    font-size: 1rem;
  }
`;

export const AreaInputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  .form-control {
    background: ${props => props.theme.primaryColor};
    border: none;
    color: ${props => props.theme.textColor};
    border-radius: ${props => props.theme.borderRadius};
    transition: ${props => props.theme.transition};
    
    &:focus {
      background: ${props => props.theme.secondaryColor};
      box-shadow: ${props => props.theme.boxShadow};
    }

    &::placeholder {
      color: ${props => props.theme.textColor};
      opacity: 0.7;
    }
  }
`;
