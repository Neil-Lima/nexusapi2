'use client';
import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  transition: ${props => props.theme.transition};

  &::placeholder {
    color: ${props => props.theme.textColor};
    opacity: 0.7;
  }

  &:focus {
    outline: none;
    box-shadow: ${props => props.theme.boxShadow};
  }
`;

export const SearchButton = styled.button`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  color: ${props => props.theme.textColor};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: ${props => props.theme.transition};
  font-weight: 500;

  &:hover {
    transform: ${props => props.theme.buttonHoverTransform};
    opacity: 0.9;
  }

  svg {
    font-size: 1.2rem;
  }
`;
