'use client';
import styled from 'styled-components';

export const Tour360Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ViewerContainer = styled.div`
  flex: 1;
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  position: relative;

  .viewer-content {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
`;

export const NavigationButtons = styled.div`
  display: flex;
  gap: 1rem;

  button {
    background: ${props => props.theme.primaryColor};
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.boxShadow};
    }
  }
`;

export const ZoomControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  button {
    background: ${props => props.theme.primaryColor};
    color: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.boxShadow};
    }
  }

  span {
    color: white;
    font-weight: bold;
  }
`;

export const RoomSelector = styled.div`
  select {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: ${props => props.theme.borderRadius};
    cursor: pointer;

    option {
      background: ${props => props.theme.cardBackground};
    }
  }
`;

export const ViewModeToggle = styled.button`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.boxShadow};
  }
`;

export const InformationPanel = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  color: white;

  h3 {
    margin-bottom: 1rem;
    color: ${props => props.theme.primaryColor};
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      &:before {
        content: "•";
        color: ${props => props.theme.primaryColor};
      }
    }
  }
`;
