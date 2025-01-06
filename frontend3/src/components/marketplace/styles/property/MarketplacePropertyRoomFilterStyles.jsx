"use client";
import styled from "styled-components";
import { ListGroup } from "react-bootstrap";

export const FilterContainer = styled(ListGroup)`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  padding: 14px;
  margin-bottom: 30px;
  box-shadow: ${props => props.theme.boxShadow};

  .list-group-item {
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    border: none;
    color: ${props => props.theme.textColor};
  }
`;

export const FilterTitle = styled.h5`
  color: ${props => props.theme.textColor};
  margin-bottom: 1rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;

  .btn {
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    border: none;
    color: ${props => props.theme.textColor};
    transition: ${props => props.theme.transition};

    &:hover {
      transform: translateY(-3px);
      box-shadow: ${props => props.theme.boxShadow};
    }

    &.btn-primary {
      background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.highlightColor}, ${props.theme.secondaryHighlightColor})`};
    }
  }
`;
