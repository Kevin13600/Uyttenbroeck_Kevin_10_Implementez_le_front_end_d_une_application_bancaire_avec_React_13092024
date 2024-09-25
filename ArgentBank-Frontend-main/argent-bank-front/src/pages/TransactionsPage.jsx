import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TransactionList from '../components/TransactionList';

const PageContainer = styled.div`
  background-color: #12002b;
  min-height: 100vh;
  padding: 20px;
`;

const AccountSummary = styled.div`
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  position: relative;
`;

const AccountTitle = styled.h2`
  margin: 0;
`;

const AccountBalance = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 10px 0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  font-size: 5.5rem;
  cursor: pointer;
`;

function TransactionsPage() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/profile');
  };

  return (
    <PageContainer>
      <AccountSummary>
        <CloseButton onClick={handleClose}>x</CloseButton>
        <AccountTitle>Argent Bank Checking (x3448)</AccountTitle>
        <AccountBalance>$48,098.43</AccountBalance>
        <p>Available balance</p>
      </AccountSummary>
      <TransactionList />
    </PageContainer>
  );
}

export default TransactionsPage;