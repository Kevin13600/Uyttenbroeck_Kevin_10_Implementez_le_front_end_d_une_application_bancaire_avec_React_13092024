import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from '../features/auth/authSlice';
import styled from 'styled-components';
import AccountList from '../components/AccountList';

const MainContainer = styled.main`
  flex: 1;
  background-color: #12002b;
  padding: 2rem;
  line-height: 1.2;
`;

const WelcomeSection = styled.div`
  color: #fff;
  margin-bottom: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
`;

const EditButton = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  margin-top: 1rem;
`;

function Profile() {
  const dispatch = useDispatch();
  const { user, isLoading, error, token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token && !user) {
      dispatch(getUserProfile());
    }
  }, [dispatch, user, token]);

  console.log("Profile component - Auth state:", { user, isLoading, error, token });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user data available. Please log in.</div>;

  return (
    <MainContainer className="main bg-dark">
      <WelcomeSection>
        <Title>Welcome back<br />{user.firstName} {user.lastName}!</Title>
        <EditButton>Edit Name</EditButton>
      </WelcomeSection>
      <AccountList />
    </MainContainer>
  );
}

export default Profile;