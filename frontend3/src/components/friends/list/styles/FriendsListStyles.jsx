import styled from 'styled-components';
import { Pagination } from 'react-bootstrap';

export const FriendCard = styled.div`
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  padding: 1.5rem;
  text-align: center;
  transition: ${props => props.theme.transition};
  backdrop-filter: blur(20px);
  box-shadow: ${props => props.theme.boxShadow};
  height: 100%;
  min-height: 280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  }
`;

export const FriendImage = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto 1rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid ${props => props.theme.primaryColor};
  }
`;

export const StatusBadge = styled.div`
  position: absolute;
  bottom: 3px;
  right: 3px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props['data-online'] ? '#44b700' : '#bdbdbd'};
  border: 2px solid #fff;
`;

export const FriendInfo = styled.div`
  margin-bottom: 1rem;
  flex-grow: 1;
  
  h5 {
    margin: 0 0 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: #ffffff;
  }
  
  span {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const FriendActions = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  margin-top: auto;
`;

export const ActionButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${props => props.theme.transition};
  background: ${props => {
    if (props.danger) return 'rgba(255, 59, 48, 0.2)';
    if (props.primary) return `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`;
    return 'rgba(255, 255, 255, 0.1)';
  }};
  color: ${props => props.danger ? '#ff3b30' : '#ffffff'};
  font-size: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.boxShadow};
    background: ${props => props.danger ? 
      'rgba(255, 59, 48, 0.3)' : 
      props.primary ? 
        `linear-gradient(${props.theme.gradientDirection}, ${props.theme.secondaryColor}, ${props.theme.primaryColor})` :
        'rgba(255, 255, 255, 0.15)'
    };
  }
`;

export const ViewProfileButton = styled(ActionButton)`
  background: rgba(255, 255, 255, 0.1);
  
  &:hover {
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const StyledPagination = styled(Pagination)`
  .page-item {
    margin: 0 0.25rem;
    
    .page-link {
      background: rgba(255, 255, 255, 0.1);
      border: none;
      color: #ffffff;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      transition: ${props => props.theme.transition};
      
      &:hover {
        background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
      }
    }
    
    &.active .page-link {
      background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    }
  }
`;

export const ModalContent = styled.div`
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  backdrop-filter: blur(20px);
  box-shadow: ${props => props.theme.boxShadow};
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
`;

export const ModalHeader = styled.div`
  margin-bottom: 1.5rem;
  
  h4 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ModalBody = styled.div`
  margin-bottom: 2rem;
  color: #ffffff;
  
  p {
    margin: 0 0 1rem;
    font-size: 1rem;
    line-height: 1.5;
    
    &:last-child {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.9rem;
    }
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const ConfirmButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 20px;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  transition: ${props => props.theme.transition};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.boxShadow};
  }
`;

export const CancelButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  transition: ${props => props.theme.transition};
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;
