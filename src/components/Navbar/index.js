import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">I'm Catiana</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About me</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Skills</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Works</NavLinks>
            </NavItem>
            {/*  <NavItem>
              <NavLinks to="signup">Contact</NavLinks>
            </NavItem> */}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/">Contact</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
