import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const MainContainer = styled.main`
  flex: 1;
  background-color: #12002b;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px); // Ajustez selon la hauteur de votre header et footer
`;

const SignInContent = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  padding: 2rem;
`;

const SignInIcon = styled(FontAwesomeIcon)`
  font-size: 5rem;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 1.2rem;
`;

const InputRemember = styled.div`
  display: flex;
  align-items: center;
`;

const RememberLabel = styled.label`
  margin-left: 0.25rem;
`;

const SignInButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  cursor: pointer;
`;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { username, password, rememberMe });
    // Ici, vous implémenterez la logique de connexion
  };

  return (
    <MainContainer>
      <SignInContent>
        <SignInIcon icon={faUserCircle} />
        <Title>Sign In</Title>
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputWrapper>
          <InputRemember>
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <RememberLabel htmlFor="remember-me">Remember me</RememberLabel>
          </InputRemember>
          <SignInButton type="submit">Sign In</SignInButton>
        </form>
      </SignInContent>
    </MainContainer>
  );
}

export default Login;