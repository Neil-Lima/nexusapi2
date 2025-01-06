"use client";
import styled from "styled-components";
import { Card } from "react-bootstrap";

export const FilterCard = styled(Card)`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  border: none;
  margin-bottom: 24px;
  box-shadow: ${props => props.theme.boxShadow};
`;

export const FilterTitle = styled.h4`
  color: ${props => props.theme.textColor};
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const PriceInputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  .form-group {
    label {
      color: ${props => props.theme.textColor};
      margin-bottom: 0.5rem;
    }

    .form-control {
      background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
      border: none;
      color: ${props => props.theme.textColor};
      border-radius: ${props => props.theme.borderRadius};

      &:focus {
        box-shadow: ${props => props.theme.boxShadow};
        border: none;
      }

      &::placeholder {
        color: ${props => props.theme.textColor};
        opacity: 0.7;
      }
    }
  }
`;
