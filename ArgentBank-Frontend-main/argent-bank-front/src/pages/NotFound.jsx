import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
`;

const NotFoundTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const NotFoundText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const HomeLink = styled(Link)`
  padding: 10px 20px;
  background-color: #00bc77;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
`;

function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404 - Page Not Found</NotFoundTitle>
      <NotFoundText>Oops ! The page you are looking for doesn't exist.</NotFoundText>
      <HomeLink to="/">Return to Home</HomeLink>
    </NotFoundContainer>
  );
}

export default NotFound;