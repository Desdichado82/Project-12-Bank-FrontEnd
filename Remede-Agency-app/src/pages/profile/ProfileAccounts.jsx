// Accounts.js

import {
  Account,
  AccountContentWrapper,
  AccountTitle,
  AccountAmount,
  AccountAmountDescription,
  TransactionButton,
} from './ProfileStyles';

import { useSelector } from 'react-redux';

const Accounts = () => {
  // Use useSelector to access the accountData from the Redux store
  const accountData = useSelector((state) => state.auth.accountData);

  // Check if accountData is available before rendering
  if (!accountData) {
    return null;
  }

  return (
    <>
      {accountData.map((account) => (
         <Account key={`${account.accountNumber}-${account.type}`}>
          <AccountContentWrapper>
            <AccountTitle>{`Argent Bank ${account.type} (${account.accountNumber})`}</AccountTitle>
            <AccountAmount>{`$${account.balance.toFixed(2)}`}</AccountAmount>
            <AccountAmountDescription>
              {account.type === 'Credit Card' ? 'Current Balance' : 'Available Balance'}
            </AccountAmountDescription>
          </AccountContentWrapper>
          <AccountContentWrapper className="cta">
            <TransactionButton>View transactions</TransactionButton>
          </AccountContentWrapper>
        </Account>
      ))}
    </>
  );
};

export default Accounts;