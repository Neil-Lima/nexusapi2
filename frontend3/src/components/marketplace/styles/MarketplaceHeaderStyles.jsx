import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 1rem;
  backdrop-filter: blur(10px);
`;

export const SearchContainer = styled.div`
  flex: 1;
  max-width: 600px;
  margin-right: 2rem;
`;

export const ActionButton = styled.button`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border: none;
  border-radius: 25px;
  padding: 0.75rem 1.5rem;
  color: white;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.boxShadow};
  }
`;

export const NotificationBadge = styled.span`
  background: #ff4757;
  color: white;
  border-radius: 50%;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  position: absolute;
  top: -5px;
  right: -5px;
`;
