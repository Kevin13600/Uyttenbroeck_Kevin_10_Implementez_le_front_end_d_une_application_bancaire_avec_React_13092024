import React from 'react';
import styled from 'styled-components';

const WelcomeContainer = styled.div`
  color: #fff;
  margin-bottom: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
`;

const WelcomeText = styled.span`
  display: block;
`;

const UserName = styled.span`
  display: block;
  margin-top: 0.5rem;
`;

const Button = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  margin-top: 1rem;
  width: 100px;
  margin-right: 5px;
  margin-left: 5px;
`;

const WelcomeSection = ({ user, isEditing, handleEditClick }) => {
  return (
    <WelcomeContainer>
      <Title>
        {isEditing ? (
          "Edit User Info"
        ) : (
          <>
            <WelcomeText>Welcome back</WelcomeText>
            <UserName>{user.firstName} {user.lastName}!</UserName>
          </>
        )}
      </Title>
      {!isEditing && <Button onClick={handleEditClick}>Edit Name</Button>}
    </WelcomeContainer>
  );
};

export default WelcomeSection;
