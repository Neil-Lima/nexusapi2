"use client";
import styled from "styled-components";

export const ModelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

export const ModelViewport = styled.div`
  width: 100%;
  height: 600px;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  position: relative;
`;

export const ControlPanel = styled.div`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  padding: 1.5rem;
  box-shadow: ${props => props.theme.boxShadow};
`;

export const ViewModeButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const ViewModeButton = styled.button`
  background: ${props => props.active ? props.theme.highlightColor : props.theme.primaryColor};
  color: ${props => props.theme.textColor};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  transition: ${props => props.theme.transition};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.boxShadow};
  }
`;

export const MaterialSelector = styled.div`
  margin-bottom: 1.5rem;

  h4 {
    color: ${props => props.theme.textColor};
    margin-bottom: 1rem;
  }

  select {
    width: 100%;
    padding: 0.75rem;
    background: ${props => props.theme.primaryColor};
    color: ${props => props.theme.textColor};
    border: none;
    border-radius: ${props => props.theme.borderRadius};
    cursor: pointer;

    &:focus {
      outline: none;
      box-shadow: ${props => props.theme.boxShadow};
    }
  }
`;

export const MeasurementTools = styled.div`
  h4 {
    color: ${props => props.theme.textColor};
    margin-bottom: 1rem;
  }

  .measurement-buttons {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .measurements-display {
    .measurement-item {
      background: ${props => props.theme.primaryColor};
      padding: 0.5rem 1rem;
      border-radius: ${props => props.theme.borderRadius};
      margin-bottom: 0.5rem;
      color: ${props => props.theme.textColor};
    }
  }
`;

export const MeasurementButton = styled.button`
  background: ${props => props.theme.primaryColor};
  color: ${props => props.theme.textColor};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  transition: ${props => props.theme.transition};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.boxShadow};
  }
`;

export const ViewOptions = styled.div`
  display: flex;
  gap: 1rem;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
`;

export const ControlButton = styled.button`
  background: ${props => props.theme.primaryColor};
  color: ${props => props.theme.textColor};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  transition: ${props => props.theme.transition};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.boxShadow};
  }
`;

export const InfoOverlay = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  max-width: 300px;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
`;

export const InfoContent = styled.div`
  padding: 1.5rem;
  color: ${props => props.theme.textColor};

  h3 {
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      padding: 0.5rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      &:last-child {
        border-bottom: none;
      }
    }
  }
`;
