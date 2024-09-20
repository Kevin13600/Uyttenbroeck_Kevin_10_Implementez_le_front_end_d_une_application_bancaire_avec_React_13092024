import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SignInForm from '../components/SignInForm';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authSlice';

const MainContainer = styled.main`
  background-color: #12002b;
  flex: 1; 
  display: flex;
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(login({ email, password }));
    if (login.fulfilled.match(result)) {
      navigate('/profile');
    }
  };

  return (
    <MainContainer className="main bg-dark">
      <SignInContent className="sign-in-content">
        <SignInForm 
          onSubmit={handleSubmit}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isLoading={isLoading}
          error={error}
        />
      </SignInContent>
    </MainContainer>
  );
}

export default Login;