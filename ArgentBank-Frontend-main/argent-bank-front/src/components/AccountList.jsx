import React from 'react';
import AccountSection from './AccountSection';

const accounts = [
  { title: "Argent Bank Checking (x8349)", amount: "$2,082.79", description: "Available Balance" },
  { title: "Argent Bank Savings (x6712)", amount: "$10,928.42", description: "Available Balance" },
  { title: "Argent Bank Credit Card (x8349)", amount: "$184.30", description: "Current Balance" }
];

function AccountList() {
  return (
    <>
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account, index) => (
        <AccountSection
          key={index}
          title={account.title}
          amount={account.amount}
          description={account.description}
        />
      ))}
    </>
  );
}

export default AccountList;