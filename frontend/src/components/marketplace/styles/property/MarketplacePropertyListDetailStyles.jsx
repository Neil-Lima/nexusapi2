"use client";
import styled from "styled-components";

export const DetailContainer = styled.div`
  padding: 2rem;
  color: ${props => props.theme.textColor};
`;

export const PropertyHeader = styled.div`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 2rem;
  box-shadow: ${props => props.theme.boxShadow};

  h1 {
    color: ${props => props.theme.textColor};
    margin-bottom: 1rem;
  }

  .address {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  .price {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  button {
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    border: none;
    padding: 1rem 2rem;
    border-radius: ${props => props.theme.borderRadius};
    color: ${props => props.theme.textColor};
    cursor: pointer;
    transition: ${props => props.theme.transition};
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      transform: translateY(-3px);
      box-shadow: ${props => props.theme.boxShadow};
    }
  }
`;

export const TabContainer = styled.div`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: ${props => props.theme.boxShadow};

  .tab-buttons {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;

    button {
      background: ${props => props.theme.primaryColor};
      border: none;
      padding: 1rem 2rem;
      border-radius: ${props => props.theme.borderRadius};
      color: ${props => props.theme.textColor};
      cursor: pointer;
      transition: ${props => props.theme.transition};

      &:hover {
        transform: translateY(-3px);
      }

      &.active {
        background: ${props => props.theme.highlightColor};
        box-shadow: ${props => props.theme.boxShadow};
      }
    }
  }
`;

export const PropertyFeatures = styled.div`
  display: flex;
  gap: 2rem;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 2rem;
  box-shadow: ${props => props.theme.boxShadow};

  .feature-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${props => props.theme.highlightColor};
    }
  }
`;

export const PropertyDescription = styled.div`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 2rem;
  box-shadow: ${props => props.theme.boxShadow};

  h3 {
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
  }
`;

export const AmenitiesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};

  .amenity-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${props => props.theme.highlightColor};
    }
  }
`;
