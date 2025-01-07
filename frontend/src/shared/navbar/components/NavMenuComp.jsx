'use client';
import React from 'react';
import { Navbar, Nav, Container, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSunRain, faSearch, faBell, faCog, faPalette } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import ColorPickerComp from '@/styles/ColorPickerComp';
import { 
  StyledNavbar, 
  StyledNavLink, 
  StyledNavDropdown, 
  NavItemWrapper, 
  StyledButton, 
  SearchInput 
} from '../styles/NavMenuStyles';
import { useNavMenu, menuItems, iconMapping } from '../utils/NavMenuUtils';

function NavMenuComp() {
  const { theme } = useTheme();
  const { showColorPickerComp, setShowColorPickerComp, handleLogout } = useNavMenu();

  return (
    <StyledNavbar expand="lg" theme={theme}>
      <Container fluid>
        <Navbar.Brand href="/">
          <FontAwesomeIcon icon={faCloudSunRain} style={{marginRight: '10px', color: '#FF0080', fontSize: '34px'}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <InputGroup className="mb-2 mb-lg-0 mt-2 mt-lg-0" style={{maxWidth: '300px'}}>
            <SearchInput type="text" placeholder="Pesquisar..." />
            <StyledButton variant="primary" theme={theme}>
              <FontAwesomeIcon icon={faSearch} />
            </StyledButton>
          </InputGroup>
          <Nav className="mx-auto">
            {menuItems.mainNav.map((item, index) => (
              <StyledNavLink key={index} href={item.path}>
                <FontAwesomeIcon icon={iconMapping[item.icon]} />
                {item.title}
              </StyledNavLink>
            ))}
            {menuItems.pages.length > 0 && (
              <StyledNavDropdown title="Páginas" theme={theme}>
                {menuItems.pages.map((item, index) => (
                  <StyledNavDropdown.Item key={index} href={item.path}>
                    {item.title}
                  </StyledNavDropdown.Item>
                ))}
              </StyledNavDropdown>
            )}
            <StyledNavDropdown title="Conta" theme={theme}>
              {menuItems.account.map((item, index) => (
                <StyledNavDropdown.Item 
                  key={index} 
                  onClick={item.path === '/logout' ? handleLogout : null}
                  href={item.path !== '/logout' ? item.path : '#'}
                >
                  {item.icon && <FontAwesomeIcon icon={iconMapping[item.icon]} className="me-2" />}
                  {item.title}
                </StyledNavDropdown.Item>
              ))}
            </StyledNavDropdown>
          </Nav>
          <Nav>
            <NavItemWrapper>
              <StyledButton href="/notifications" theme={theme}>
                <FontAwesomeIcon icon={faBell} />
              </StyledButton>
              <StyledButton href="/settings" theme={theme}>
                <FontAwesomeIcon icon={faCog} />
              </StyledButton>
              <StyledButton onClick={() => setShowColorPickerComp(!showColorPickerComp)} theme={theme}>
                <FontAwesomeIcon icon={faPalette} />
              </StyledButton>
              {showColorPickerComp && <ColorPickerComp />}
            </NavItemWrapper>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}

export default NavMenuComp;
