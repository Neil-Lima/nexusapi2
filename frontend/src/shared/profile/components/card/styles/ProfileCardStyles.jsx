'use client';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const StyledProfileCard = styled(Card)`
  text-align: center;
  border-style: none;
  margin-bottom: 24px;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.textColor};
  box-shadow: ${props => props.theme.boxShadow};
  overflow: hidden;
  max-width: 336px;

  img.cover-image {
    width: 100%;
    height: 120px;
    object-fit: cover;
  }
`;

export const ProfileImage = styled.img`
  margin-top: -80px;
  width: 55%;
  border: 6px solid ${props => props.theme.textColor};
  border-radius: 50%;
`;

export const ProfileDescription = styled.p`
  color: ${props => props.theme.textColor};
  opacity: 0.9;
`;

export const ProfileLink = styled.a`
  color: ${props => props.theme.highlightColor};
  text-decoration: none;
  transition: ${props => props.theme.transition};
  
  &:hover {
    color: ${props => props.theme.secondaryHighlightColor};
  }
`;
