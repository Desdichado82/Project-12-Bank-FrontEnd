// ProfileStyles.js

import styled from 'styled-components';

export const Main = styled.main`
  // Add styles for the main container if needed
  flex: 1;
  padding: 2rem;
  color: #fff;
`;

export const Header = styled.div`
  color: #fff;
  margin-bottom: 2rem;
`;

export const EditH1 = styled.h1`
  color: #2c3e50;
  
`;

export const EditButton = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`;

export const Account = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  color: #2c3e50;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;

  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

export const AccountContentWrapper = styled.div`
  width: 100%;
  flex: 1;

  &.cta {
    flex: 0;
  }
`;

export const AccountAmount = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

export const AccountAmountDescription = styled.p`
  margin: 0;
`;

export const AccountTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;

export const TransactionButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;

  @media (min-width: 720px) {
    width: 200px;
  }
`;
// Edit user styles 

export const EditUserInput = styled.input`
  // Add styles for the input fields used in the EditUserForm
`;

export const SaveButton = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  margin-right: 10px;
`;

export const CancelButton = styled.button`
  border-color: #fff;
  background-color: transparent;
  color: #ffff;
  font-weight: bold;
  padding: 10px;
`;