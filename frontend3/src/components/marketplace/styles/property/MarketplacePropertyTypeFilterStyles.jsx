"use client";
import styled from "styled-components";
import { Card } from "react-bootstrap";

export const TypeFilterCard = styled(Card)`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  border: none;
  margin-bottom: 24px;
  box-shadow: ${props => props.theme.boxShadow};

  .form-select {
    background: ${props => props.theme.primaryColor};
    border: none;
    color: ${props => props.theme.textColor};
    border-radius: ${props => props.theme.borderRadius};
    margin-top: 1rem;
    transition: ${props => props.theme.transition};

    &:focus {
      background: ${props => props.theme.secondaryColor};
      box-shadow: ${props => props.theme.boxShadow};
    }

    option {
      background: ${props => props.theme.primaryColor};
      color: ${props => props.theme.textColor};
    }
  }
`;

export const TypeOption = styled.div`
  background: ${props => props.active ? 
    `linear-gradient(${props.theme.gradientDirection}, ${props.theme.highlightColor}, ${props.theme.secondaryHighlightColor})` : 
    `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  color: ${props => props.theme.textColor};
  padding: 1rem;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  transition: ${props => props.theme.transition};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.boxShadow};
  }

  h5 {
    margin: 0;
    color: ${props => props.theme.textColor};
  }
`;
