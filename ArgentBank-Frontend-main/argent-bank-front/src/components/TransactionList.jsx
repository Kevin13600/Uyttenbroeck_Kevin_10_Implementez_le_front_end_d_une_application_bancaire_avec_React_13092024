import React, { useState } from 'react';
import styled from 'styled-components';
import TransactionItem from './TransactionItem';

const ListContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr auto;
  font-weight: bold;
  padding: 10px 0;
  border-bottom: 2px solid #ccc;
`;

// Les données des transactions sont simulées avec un tableau mockTransactions. Dans une application réelle, vous feriez un appel API pour récupérer ces données.

const mockTransactions = [
  { id: 1, date: '27/02/20', description: 'Golden Sun Bakery', amount: '$8.00', balance: '$298.00' },
  { id: 2, date: '27/02/20', description: 'Golden Sun Bakery', amount: '$8.00', balance: '$298.00' },
  { id: 3, date: '27/02/20', description: 'Golden Sun Bakery', amount: '$8.00', balance: '$298.00' },
];

const TransactionList = () => {
  const [transactions] = useState(mockTransactions);

  return (
    <ListContainer>
      <ListHeader>
        <span>Date</span>
        <span>Description</span>
        <span>Amount</span>
        <span>Balance</span>
        <span></span>
      </ListHeader>
      {transactions.map(transaction => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </ListContainer>
  );
};

export default TransactionList;