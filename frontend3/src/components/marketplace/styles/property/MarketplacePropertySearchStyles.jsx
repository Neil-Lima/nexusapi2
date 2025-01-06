"use client";
import styled from "styled-components";

export const SearchContainer = styled.div`
  margin-bottom: 2rem;

  .input-group {
    .form-control {
      background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
      border: none;
      color: ${props => props.theme.textColor};
      border-radius: ${props => props.theme.borderRadius} 0 0 ${props => props.theme.borderRadius};

      &:focus {
        box-shadow: ${props => props.theme.boxShadow};
      }

      &::placeholder {
        color: ${props => props.theme.textColor};
        opacity: 0.7;
      }
    }

    .btn {
      background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
      border: none;
      color: ${props => props.theme.textColor};
      transition: ${props => props.theme.transition};

      &:hover {
        transform: translateY(-3px);
        box-shadow: ${props => props.theme.boxShadow};
      }
    }
  }
`;

export const BadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
`;

export const LocationBadge = styled.span`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  color: ${props => props.theme.textColor};
  font-size: 16px;
  padding: 12px 20px;
  border-radius: 50px;
  cursor: pointer;
  transition: ${props => props.theme.transition};
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.boxShadow};
  }

  svg {
    color: ${props => props.theme.highlightColor};
  }
`;
