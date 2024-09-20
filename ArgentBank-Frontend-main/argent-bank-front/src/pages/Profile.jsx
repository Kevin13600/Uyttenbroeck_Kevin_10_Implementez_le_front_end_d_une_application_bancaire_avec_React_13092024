import React from 'react';
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

function Profile({ userName }) {
  const handleEditName = () => {
    console.log("Edit name clicked");
    // Implémentation future de l'édition du nom
  };

  return (
    <MainContainer className="main bg-dark">
      <WelcomeSection>
        <Title>Welcome back<br />{userName}!</Title>
        <EditButton onClick={handleEditName}>Edit Name</EditButton>
      </WelcomeSection>
      <AccountList />
    </MainContainer>
  );
}

export default Profile;