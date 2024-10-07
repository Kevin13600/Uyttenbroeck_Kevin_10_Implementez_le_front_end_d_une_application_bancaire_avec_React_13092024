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

const HeaderItem = styled.span`
  text-align: ${props => props.$align || 'left'};
`;

const mockTransactions = [
  { id: 1, date: '27/02/20', description: 'Golden Sun Bakery', amount: '$8.00', balance: '$298.00' },
  { id: 2, date: '27/02/20', description: 'Golden Sun Bakery', amount: '$8.00', balance: '$298.00' },
  { id: 3, date: '27/02/20', description: 'Golden Sun Bakery', amount: '$8.00', balance: '$298.00' },
  { id: 4, date: '27/02/20', description: 'Golden Sun Bakery', amount: '$8.00', balance: '$298.00' },
  { id: 5, date: '27/02/20', description: 'Golden Sun Bakery', amount: '$8.00', balance: '$298.00' },
];

const TransactionList = () => {
  const [transactions] = useState(mockTransactions);

  return (
    <ListContainer>
      <ListHeader>
        <HeaderItem>Date</HeaderItem>
        <HeaderItem>Description</HeaderItem>
        <HeaderItem $align="center">Amount</HeaderItem>
        <HeaderItem $align="center">Balance</HeaderItem>
        <HeaderItem></HeaderItem>
      </ListHeader>
      {transactions.map(transaction => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </ListContainer>
  );
};

export default TransactionList;