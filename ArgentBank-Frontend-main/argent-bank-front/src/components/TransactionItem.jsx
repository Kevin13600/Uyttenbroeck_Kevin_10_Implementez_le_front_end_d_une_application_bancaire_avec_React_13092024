import React, { useState } from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr auto;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
`;

const ExpandButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
`;

const DetailsContainer = styled.div`
  grid-column: 1 / -1;
  background-color: #f9f9f9;
  padding: 10px;
  margin-top: 10px;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const EditableField = styled.div`
  display: flex;
  align-items: center;
`;

const TransactionItem = ({ transaction }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [category, setCategory] = useState('Food');
  const [note, setNote] = useState('');

  return (
    <>
      <ItemContainer>
        <span>{transaction.date}</span>
        <span>{transaction.description}</span>
        <span>{transaction.amount}</span>
        <span>{transaction.balance}</span>
        <ExpandButton onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? '▲' : '▼'}
        </ExpandButton>
      </ItemContainer>
      {isExpanded && (
        <DetailsContainer>
          <DetailRow>
            <span>Transaction Type:</span>
            <span>Electronic</span>
          </DetailRow>
          <DetailRow>
            <span>Category:</span>
            <EditableField>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Entertainment">Entertainment</option>
              </select>
              ✏️
            </EditableField>
          </DetailRow>
          <DetailRow>
            <span>Note:</span>
            <EditableField>
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Add a note"
              />
              ✏️
            </EditableField>
          </DetailRow>
        </DetailsContainer>
      )}
    </>
  );
};

export default TransactionItem;