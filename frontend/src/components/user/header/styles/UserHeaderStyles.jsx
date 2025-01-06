'use client';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  color: ${props => props.theme.textColor};
  overflow: hidden;
  margin-bottom: 24px;
`;

export const CoverSection = styled.div`
  position: relative;
  height: 350px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    transition: filter 0.3s ease;
  }
`;

export const ProfileSection = styled.div`
  position: relative;
  padding: 20px 30px;
  min-height: 200px;
`;

export const ProfileImageContainer = styled.div`
  position: absolute;
  left: 30px;
  top: -80px;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 5px solid ${props => props.theme.textColor};
  background: ${props => props.theme.primaryColor};
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;

export const UserInfoSection = styled.div`
  margin-left: 190px;
  color: ${props => props.theme.textColor};
  padding-top: 10px;
`;

export const UserName = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const UserDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 20px 0;
  padding: 15px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  
  svg {
    opacity: 0.8;
  }
`;

export const UserBio = styled.div`
  margin: 20px 0;
  line-height: 1.6;
  font-size: 1.1rem;
`;

export const ActionSection = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const PrimaryButton = styled(Button)`
  background: ${props => props.theme.highlightColor};
  color: white;

  &:hover:not(:disabled) {
    background: ${props => props.theme.secondaryHighlightColor};
  }
`;

export const SecondaryButton = styled(Button)`
  background: rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.textColor};

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const ImageUploadOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

export const ImageUploadButton = styled.label`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const EditableField = styled.div`
  width: 100%;

  input, textarea {
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    padding: 10px;
    color: ${props => props.theme.textColor};
    font-size: inherit;
    font-family: inherit;

    &:focus {
      outline: none;
      border-color: ${props => props.theme.highlightColor};
    }
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }
`;

export const StatusBadge = styled.span`
  background: ${props => props.online ? '#4CAF50' : '#757575'};
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.9rem;
  color: white;
  margin-left: 15px;
  display: flex;
  align-items: center;
  gap: 5px;

  &::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${props => props.online ? '#fff' : '#ccc'};
  }
`;
