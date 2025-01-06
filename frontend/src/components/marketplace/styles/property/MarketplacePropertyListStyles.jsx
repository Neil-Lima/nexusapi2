"use client";
import styled from "styled-components";

export const ListContainer = styled.div`
  h5 {
    color: ${props => props.theme.textColor};
    margin-bottom: 1.5rem;

    strong {
      color: ${props => props.theme.highlightColor};
    }
  }
`;

export const PropertyCard = styled.div`
  display: flex;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 1rem;
  overflow: hidden;
  transition: ${props => props.theme.transition};
  box-shadow: ${props => props.theme.boxShadow};

  &:hover {
    transform: translateY(-3px);
  }
`;

export const PropertyImage = styled.div`
  width: 300px;
  height: 200px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .price {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    color: ${props => props.theme.textColor};
    padding: 5px 10px;
    border-radius: ${props => props.theme.borderRadius};
  }
`;

export const PropertyInfo = styled.div`
  flex: 1;
  padding: 1.5rem;
  color: ${props => props.theme.textColor};

  h4 {
    color: ${props => props.theme.textColor};
    margin-bottom: 0.5rem;
  }

  h6 {
    color: ${props => props.theme.textColor};
    margin-bottom: 1rem;
  }

  .actions {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;

    button {
      background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      color: ${props => props.theme.textColor};
      transition: ${props => props.theme.transition};

      &:hover {
        transform: scale(1.1);
        box-shadow: ${props => props.theme.boxShadow};
      }
    }
  }
`;

export const PropertyFeatures = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  .feature-badge {
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    color: ${props => props.theme.textColor};

    svg {
      color: ${props => props.theme.highlightColor};
      margin-right: 0.5rem;
    }
  }
`;
