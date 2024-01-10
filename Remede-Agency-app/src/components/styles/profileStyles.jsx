import styled from 'styled-components';


// Profile Container
export const ProfileContainer = styled.main`
  background-color: var(--background-dark);
  padding: 2rem;
  color: #fff;
`;

// Header Section
export const Header = styled.div`
  margin-bottom: 2rem;
`;

export const WelcomeText = styled.h1`
  margin: 0;
`;

export const EditButton = styled.button`
  border-color: var(--accent-color);
  background-color: var(--accent-color);
  color: #fff;
  font-weight: bold;
  padding: 10px;
`;

// Account Section
export const AccountSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: var(--background-light);
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;
  color: #2c3e50;
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

export const AccountTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;

export const AccountAmount = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

export const AccountAmountDescription = styled.p`
  margin: 0;
`;

// Transaction Button
export const TransactionButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: var(--accent-color);
  background-color: var(--accent-color);
  color: #fff;

  @media (min-width: 720px) {
    width: 200px;
  }
`;
