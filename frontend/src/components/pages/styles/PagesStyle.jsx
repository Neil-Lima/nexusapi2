'use client';
import styled from 'styled-components';
import { Card, Button, Image, Tab, Nav, ListGroup, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const GradientBackground = styled.div`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  min-height: 100vh;
  padding: 20px 0;
  
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${props => props.theme.scrollbarTrack};
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.scrollbarThumb};
    border-radius: 4px;
  }
`;

export const StyledCard = styled(Card)`
  border-radius: ${props => props.theme.borderRadius};
  border: none;
  box-shadow: ${props => props.theme.boxShadow};
  background: ${props => props.theme.cardBackground};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: ${props => props.theme.inputBorder};
  color: ${props => props.theme.textColor};
  overflow: hidden;
  margin-bottom: 20px;
  transition: ${props => props.theme.transition};
  
  &:hover {
    transform: ${props => props.theme.cardHoverTransform};
    box-shadow: ${props => props.theme.boxShadow};
  }
`;

export const StyledButton = styled(Button)`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-weight: bold;
  transition: ${props => props.theme.transition};
  color: ${props => props.theme.textColor};
  
  &:hover {
    transform: ${props => props.theme.buttonHoverTransform};
    box-shadow: ${props => props.theme.boxShadow};
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.secondaryColor}, ${props.theme.primaryColor})`};
  }
`;

export const CoverPhoto = styled.div`
  height: 300px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-radius: ${props => `${props.theme.borderRadius} ${props.theme.borderRadius} 0 0`};
  position: relative;
`;

export const ProfilePhoto = styled(Image)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid ${props => props.theme.textColor};
  position: absolute;
  bottom: -75px;
  left: 20px;
`;

export const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.textColor};
  margin-top: 80px;
`;

export const PageCategory = styled.span`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.textColor};
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-left: 10px;
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const Stat = styled.div`
  text-align: center;
`;

export const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.textColor};
`;

export const StatLabel = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

export const StyledNav = styled(Nav)`
  .nav-link {
    color: ${props => props.theme.textColor};
    &:hover, &.active {
      color: ${props => props.theme.navLinkHover};
    }
  }
`;

export const PostCard = styled(StyledCard)`
  margin-bottom: 20px;
`;

export const PostImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const PostActions = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
`;

export const ActionButton = styled(Button)`
  background: transparent;
  border: none;
  color: ${props => props.theme.textColor};
  &:hover {
    color: ${props => props.theme.navLinkHover};
  }
`;

export const CommentSection = styled.div`
  margin-top: 20px;
`;

export const Comment = styled.div`
  background: ${props => props.theme.inputBackground};
  border-radius: ${props => props.theme.borderRadius};
  padding: 10px;
  margin-bottom: 10px;
`;

export const CommentAuthor = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const FollowerItem = styled(ListGroup.Item)`
  background: transparent;
  border: none;
  color: ${props => props.theme.textColor};
  display: flex;
  align-items: center;
  padding: 15px;
  transition: ${props => props.theme.transition};

  &:hover {
    background: ${props => props.theme.inputBackground};
    transform: ${props => props.theme.cardHoverTransform};
  }
`;

export const FollowerAvatar = styled(Image)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
`;

export const ChatWindow = styled(Modal)`
  .modal-content {
    background: ${props => props.theme.modalBackground};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: ${props => props.theme.inputBorder};
    color: ${props => props.theme.textColor};
  }

  .modal-header {
    border-bottom: ${props => props.theme.inputBorder};
  }

  .modal-footer {
    border-top: ${props => props.theme.inputBorder};
  }

  input, textarea {
    background: ${props => props.theme.inputBackground};
    border: ${props => props.theme.inputBorder};
    color: ${props => props.theme.textColor};
  }
`;

export const GridView = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

export const ListView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ViewToggleButton = styled(Button)`
  background: ${props => props.active ? props.theme.primaryColor : 'transparent'};
  border: 1px solid ${props => props.theme.primaryColor};
  color: ${props => props.active ? props.theme.textColor : props.theme.primaryColor};
  margin-left: 10px;
  
  &:hover {
    background: ${props => props.theme.primaryColor};
    color: ${props => props.theme.textColor};
  }
`;

export const ListCard = styled(StyledCard)`
  flex-direction: row;
  align-items: center;

  .card-img-top {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: ${props => `${props.theme.borderRadius} 0 0 ${props.theme.borderRadius}`};
  }

  .card-body {
    flex: 1;
  }
`;
export const PageImage = styled(Image)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: ${props => `${props.theme.borderRadius} ${props.theme.borderRadius} 0 0`};
`;
export const InfoIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  margin-right: 15px;
  color: ${props => props.theme.primaryColor};
`;
export const StyledListGroup = styled(ListGroup)`
  background: transparent;
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;

  .list-group-item {
    background: ${props => props.theme.inputBackground};
    border: none;
    color: ${props => props.theme.textColor};
    transition: ${props => props.theme.transition};
    padding: 20px;
    margin-bottom: 10px;
    border-radius: ${props => props.theme.borderRadius};

    &:hover {
      background: ${props => props.theme.inputBackground};
      transform: ${props => props.theme.cardHoverTransform};
    }
  }
`;

export const ProfileSection = styled.div`
  position: absolute;
  bottom: -60px;
  left: 40px;
  padding: 5px;
  background: ${props => props.theme.cardBackground};
  border-radius: 50%;
  box-shadow: ${props => props.theme.boxShadow};
  
  .profile-photo {
    border-radius: 50%;
    border: 4px solid ${props => props.theme.primaryColor};
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const HeaderInfo = styled.div`
  padding-left: 20px;
  margin-top: 60px;
`;

export const PageDescription = styled.p`
  color: ${props => props.theme.textColor};
  font-size: 1.1rem;
  margin: 15px 0;
  opacity: 0.9;
`;

export const HeaderStats = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .number {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${props => props.theme.primaryColor};
  }
  
  .label {
    font-size: 0.9rem;
    color: ${props => props.theme.textColor};
    opacity: 0.8;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;
  margin-top: 80px;
  
  .main-action {
    padding: 10px 30px;
  }
  
  button {
    &[variant="secondary"] {
      width: 40px;
      height: 40px;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      
      &:hover {
        background: ${props => props.theme.primaryColor};
      }
    }
  }
`;

export const CategoryBadge = styled.span`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-left: 15px;
  box-shadow: ${props => props.theme.boxShadow};
`;
