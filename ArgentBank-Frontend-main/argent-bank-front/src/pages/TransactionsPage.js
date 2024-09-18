import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import AccountCard from '../components/AccountCard';
import TransactionList from '../components/TransactionList';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const TransactionsPage = () => {
  const [accountData, setAccountData] = useState({
    accountName: "Argent Bank Checking",
    accountNumber: "x3448",
    balance: "48,098.43",
    availableBalance: "Available balance",
  });

  return (
    <>
      <Header userName="Ben_hg" />
      <PageContainer>
        <AccountCard
          accountName={accountData.accountName}
          accountNumber={accountData.accountNumber}
          balance={accountData.balance}
          description={accountData.availableBalance}
        />
        <TransactionList />
      </PageContainer>
    </>
  );
};

export default TransactionsPage;