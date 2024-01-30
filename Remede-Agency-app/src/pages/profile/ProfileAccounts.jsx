// Import necessary modules and components
import {
  Account,
  AccountContentWrapper,
  AccountTitle,
  AccountAmount,
  AccountAmountDescription,
  TransactionButton,
} from '../Profile/ProfileStyles'; // Styled components for the accounts

import { useSelector } from 'react-redux'; // Redux hook for accessing the state

// Define the Accounts component
const Accounts = () => {
  // Use useSelector to access the accountData from the Redux store
  const accountData = useSelector((state) => state.auth.accountData);

  // Check if accountData is available before rendering
  // If not, return null to not render anything
  if (!accountData) {
    return null;
  }

  // Render the accounts
  // For each account in accountData, render an Account component
  // The Account component displays the account type, account number, balance, and a button to view transactions
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

// Export the Accounts component
export default Accounts;
