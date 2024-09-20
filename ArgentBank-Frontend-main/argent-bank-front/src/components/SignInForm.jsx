import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const SignInIcon = styled(FontAwesomeIcon)`
  font-size: 1rem;
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
  width: 105%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  cursor: pointer;
  text-decoration: underline;
  border: none;
`;

function SignInForm({ onSubmit }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, password, rememberMe });
  };

  return (
    <>
      <SignInIcon icon={faUserCircle} className="fa fa-user-circle sign-in-icon" />
      <Title>Sign In</Title>
      <form onSubmit={handleSubmit}>
        <InputWrapper className="input-wrapper">
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper className="input-wrapper">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWrapper>
        <InputRemember className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <RememberLabel htmlFor="remember-me">Remember me</RememberLabel>
        </InputRemember>
        <SignInButton type="submit" className="sign-in-button">Sign In</SignInButton>
      </form>
    </>
  );
}

export default SignInForm;