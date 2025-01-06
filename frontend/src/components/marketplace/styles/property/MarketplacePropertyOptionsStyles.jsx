"use client";
import styled from "styled-components";

export const OptionsContainer = styled.div`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 30px;
  box-shadow: ${props => props.theme.boxShadow};

  .list-group-item {
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    border: none;
    color: ${props => props.theme.textColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    h5 {
      margin: 0;
      color: ${props => props.theme.textColor};
    }
  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .slider {
      background: ${props => props.theme.highlightColor};
    }

    &:checked + .slider:before {
      transform: translateX(26px);
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.theme.primaryColor};
    transition: ${props => props.theme.transition};

    &.round {
      border-radius: 34px;

      &:before {
        border-radius: 50%;
      }
    }

    &:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: ${props => props.theme.textColor};
      transition: ${props => props.theme.transition};
    }
  }
`;
