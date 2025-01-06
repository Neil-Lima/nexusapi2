'use client';
import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
`;

export const FilterButton = styled.button`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  color: ${props => props.theme.textColor};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: ${props => props.theme.transition};
  opacity: ${props => props.$active ? 1 : 0.7};

  &:hover {
    transform: ${props => props.theme.buttonHoverTransform};
    opacity: 0.9;
  }
`;

export const CategoryBadge = styled.span`
  background: ${props => props.color || props.theme.primaryColor};
  color: ${props => props.theme.textColor};
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  min-width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
