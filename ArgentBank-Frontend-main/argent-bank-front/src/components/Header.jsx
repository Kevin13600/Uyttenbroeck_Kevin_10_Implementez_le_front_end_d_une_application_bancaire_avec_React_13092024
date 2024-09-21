import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/argentBankLogo.webp';

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  max-width: 100%;
  width: 200px;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
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

const SignOutButton = styled.button`
  background: none;
  border: none;
  color: #2c3e50;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.25rem;
`;

function Header() {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <HeaderContainer className="main-nav">
      <Logo to="/" className="main-nav-logo">
        <LogoImage src={logo} alt="Argent Bank Logo" className="main-nav-logo-image" />
        <h1 className="sr-only">Argent Bank</h1>
      </Logo>
      <NavItems>
        {token ? (
          <>
            <NavItem to="/profile" className="main-nav-item">
              <Icon icon={faUserCircle} />
              {user?.firstName}
            </NavItem>
            <SignOutButton onClick={handleLogout} className="main-nav-item">
              <Icon icon={faSignOut} />
              Sign Out
            </SignOutButton>
          </>
        ) : (
          <NavItem to="/login" className="main-nav-item">
            <Icon icon={faUserCircle} />
            Sign In
          </NavItem>
        )}
      </NavItems>
    </HeaderContainer>
  );
}

export default Header;