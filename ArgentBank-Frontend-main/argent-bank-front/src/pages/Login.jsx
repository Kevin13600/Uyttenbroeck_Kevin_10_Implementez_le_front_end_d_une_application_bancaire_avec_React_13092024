import React from 'react';
import styled from 'styled-components';
import SignInForm from '../components/SignInForm';

const LoginContainer = styled.div`
  background-color: #12002b;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignInContent = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  padding: 2rem;
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Login() {
  return (
    <LoginContainer>
      <SignInContent>
        <SignInForm />
      </SignInContent>
    </LoginContainer>
  );
}

export default Login;