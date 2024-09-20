import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AccountInfo = styled.div``;

const AccountName = styled.h3`
  margin: 0;
`;

const Balance = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 10px 0;
`;

const Description = styled.p`
  margin: 0;
`;

const ViewButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

function AccountCard({ accountName, accountNumber, balance, description }) {
  return (
    <Card>
      <AccountInfo>
        <AccountName>{accountName} ({accountNumber})</AccountName>
        <Balance>${balance}</Balance>
        <Description>{description}</Description>
      </AccountInfo>
      <ViewButton>›</ViewButton>
    </Card>
  );
}

export default AccountCard;