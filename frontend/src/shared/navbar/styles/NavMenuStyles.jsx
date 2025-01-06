'use client';
import styled from 'styled-components';
import { Navbar, Nav, NavDropdown, Button, Form } from 'react-bootstrap';

export const StyledNavbar = styled(Navbar)`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const StyledNavLink = styled(Nav.Link)`
  color: #ffffff !important;
  margin-right: 15px;
  font-weight: bold;
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;

  &:hover {
    color: #FF0080 !important;
    border-bottom-color: #FF0080;
  }
`;

export const StyledNavDropdown = styled(NavDropdown)`
  .dropdown-toggle {
    color: #ffffff !important;
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  .dropdown-menu {
    background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.18);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  }

  .dropdown-item {
    color: #ffffff;
    &:hover {
      background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
      color: #ffffff;
    }
  }
`;

export const NavItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border: none;
  color: ${props => props.theme.buttonColor || '#ffffff'};
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const SearchInput = styled(Form.Control)`
  background-color: rgba(255,255,255,0.1);
  color: #ffffff;
  border: none;
  
  &:focus {
    background-color: rgba(255,255,255,0.2);
    color: #ffffff;
    box-shadow: none;
  }

  &::placeholder {
    color: rgba(255,255,255,0.7);
  }
`;
