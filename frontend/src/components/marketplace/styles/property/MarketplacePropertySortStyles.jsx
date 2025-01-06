"use client";
import styled from "styled-components";

export const SortContainer = styled.div`
  margin-bottom: 2rem;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};

  h5 {
    color: ${props => props.theme.textColor};
    text-align: right;
    margin-bottom: 1rem;
  }

  .form-select {
    background: ${props => props.theme.primaryColor};  // Cor sólida base
    border: none;
    color: ${props => props.theme.textColor};
    border-radius: ${props => props.theme.borderRadius};
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

export const ViewToggle = styled.div`
  display: inline-flex;
  gap: 1rem;
  margin-left: 1rem;

  svg {
    color: ${props => props.theme.textColor};
    cursor: pointer;
    transition: ${props => props.theme.transition};
    font-size: 1.2rem;

    &:hover {
      transform: translateY(-3px);
      color: ${props => props.theme.highlightColor};
    }

    &.active {
      color: ${props => props.theme.highlightColor};
    }
  }
`;
