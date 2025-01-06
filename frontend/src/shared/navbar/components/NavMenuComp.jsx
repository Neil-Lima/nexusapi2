'use client';
import React from 'react';
import { Navbar, Nav, Container, Form, InputGroup, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSunRain, faSearch, faBell, faCog, faPalette, faFile, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import ColorPickerComp from '@/styles/ColorPickerComp';
import { StyledNavbar, StyledNavLink, StyledNavDropdown, NavItemWrapper, StyledButton, SearchInput } from '../styles/NavMenuStyles';
import { useNavMenu, menuItems, iconMapping, handleColorPickerToggle } from '../utils/NavMenuUtils';

function NavMenuComp() {
  const { theme } = useTheme();
  const { showColorPickerComp, setShowColorPickerComp, handleLogout } = useNavMenu();

  return (
    <StyledNavbar expand="lg" className="shadow-sm" theme={theme}>
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
            <NavItemWrapper>
              {menuItems.mainNav.map((item, index) => (
                <StyledNavLink 
                  key={index} 
                  href={item.path} 
                  active
                  style={item.title === 'Perfil' ? {borderColor: '#FF0080', color: '#FF0080'} : {}}
                >
                  <FontAwesomeIcon icon={iconMapping[item.icon]} style={{marginRight: '5px'}} />
                  {item.title}
                </StyledNavLink>
              ))}
              <StyledNavDropdown 
                title={
                  <>
                    <FontAwesomeIcon icon={faFile} style={{marginRight: '5px'}} />
                    Páginas
                  </>
                } 
                id="basic-nav-dropdown" 
                theme={theme}
              >
                {menuItems.pages.map((item, index) => (
                  <NavDropdown.Item key={index} href={item.path}>
                    {item.title}
                  </NavDropdown.Item>
                ))}
              </StyledNavDropdown>
              <StyledNavDropdown 
                title={
                  <>
                    <FontAwesomeIcon icon={faUserCircle} style={{marginRight: '5px'}} />
                    Conta
                  </>
                } 
                id="basic-nav-dropdown" 
                theme={theme}
              >
                {menuItems.account.map((item, index) => (
                  <NavDropdown.Item 
                    key={index} 
                    onClick={item.title === 'Sair' ? handleLogout : undefined}
                    href={item.title !== 'Sair' ? item.path : undefined}
                  >
                    {item.icon && <FontAwesomeIcon icon={iconMapping[item.icon]} style={{marginRight: '5px'}} />}
                    {item.title}
                  </NavDropdown.Item>
                ))}
              </StyledNavDropdown>
            </NavItemWrapper>
          </Nav>
          <Nav>
            <NavItemWrapper>
              <StyledButton href="/notificacoes" variant="primary" className="me-2" theme={theme}>
                <FontAwesomeIcon icon={faBell} />
              </StyledButton>
              <StyledButton href="/configuracoes" variant="primary" className="me-2" theme={theme}>
                <FontAwesomeIcon icon={faCog} />
              </StyledButton>
              <StyledButton 
                variant="primary" 
                onClick={() => handleColorPickerToggle(setShowColorPickerComp)} 
                theme={theme}
              >
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
