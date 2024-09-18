import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/argentBankLogo.png';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;

const Logo = styled(Link)`
  font-weight: bold;
  color: #2c3e50;
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  max-width: 100%;
  width: 200px;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  margin-right: 0.5rem;
  font-weight: bold;
  color: #2c3e50;

  &:hover {
    text-decoration: underline;
  }
`;

const IconWrapper = styled.span`
  margin-right: 0.5rem;
`;

function Header() {
  return (
    <Nav>
      <Logo to="/">
        <LogoImage src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Logo>
      <div>
        <NavItem to="/sign-in">
          <IconWrapper>
            <FontAwesomeIcon icon={faUserCircle} />
          </IconWrapper>
          Sign In
        </NavItem>
      </div>
    </Nav>
  );
}

export default Header;