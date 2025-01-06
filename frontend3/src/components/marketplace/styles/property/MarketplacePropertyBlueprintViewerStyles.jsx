"use client";
import styled from "styled-components";

export const BlueprintContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-gap: 2rem;
  padding: 2rem;
`;

export const ViewerPanel = styled.div`
  position: relative;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  overflow: hidden;

  .blueprint-canvas {
    width: 100%;
    height: 100%;
  }
`;

export const InfoCard = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  color: ${props => props.theme.textColor};

  h3 {
    margin-bottom: 1rem;
    color: ${props => props.theme.highlightColor};
  }

  .info-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    
    span {
      color: ${props => props.theme.textColor};
      opacity: 0.8;
    }

    strong {
      color: ${props => props.theme.textColor};
    }
  }
`;

export const ToolsPanel = styled.div`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  padding: 1.5rem;
  box-shadow: ${props => props.theme.boxShadow};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: ${props => props.theme.textColor};

  h4 {
    margin-bottom: 1rem;
  }

  button {
    background: ${props => props.theme.primaryColor};
    color: ${props => props.theme.textColor};
    border: none;
    padding: 0.75rem;
    border-radius: ${props => props.theme.borderRadius};
    margin-bottom: 0.5rem;
    cursor: pointer;
    transition: ${props => props.theme.transition};

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.boxShadow};
    }
  }
`;

export const ZoomControls = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${props => props.theme.primaryColor};
  padding: 0.5rem;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};

  button {
    background: ${props => props.theme.highlightColor};
    color: ${props => props.theme.textColor};
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    transition: ${props => props.theme.transition};

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.boxShadow};
    }
  }

  span {
    color: ${props => props.theme.textColor};
    font-weight: bold;
  }
`;

export const LayerSelector = styled.div`
  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
    color: ${props => props.theme.textColor};
  }
`;

export const MeasurementTools = styled.div`
  .measurements-list {
    margin-top: 1rem;
    
    .measurement-item {
      background: ${props => props.theme.primaryColor};
      padding: 0.5rem;
      border-radius: ${props => props.theme.borderRadius};
      margin-bottom: 0.5rem;
    }
  }
`;

export const AnnotationTools = styled.div`
  .annotations-list {
    margin-top: 1rem;

    .annotation-item {
      background: ${props => props.theme.primaryColor};
      padding: 0.5rem;
      border-radius: ${props => props.theme.borderRadius};
      margin-bottom: 0.5rem;
    }
  }
`;
