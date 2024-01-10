import GlobalStyles from '../../components/styles/globalStyles';
import {
  ProfileContainer,
  Header,
  WelcomeText,
  EditButton,
  AccountSection,
  AccountContentWrapper,
  AccountTitle,
  AccountAmount,
  AccountAmountDescription,
  TransactionButton,
} from '../../components/styles/profileStyles';





const ProfilePage = ({ firstName }) => {
  return (
    <ProfileContainer>
      <GlobalStyles/>
      <Header>
        <WelcomeText>Welcome back<br />{firstName}!</WelcomeText>
        <EditButton>Edit Name</EditButton>
      </Header>
      <h2 className="sr-only">Accounts</h2>
      <AccountSection>
        <AccountContentWrapper>
          <AccountTitle>Argent Bank Checking (x8349)</AccountTitle>
          <AccountAmount>$2,082.79</AccountAmount>
          <AccountAmountDescription>Available Balance</AccountAmountDescription>
        </AccountContentWrapper>
        <AccountContentWrapper className="cta">
          <TransactionButton>View transactions</TransactionButton>
        </AccountContentWrapper>
      </AccountSection>
      {/* Repeat similar sections for Savings and Credit Card accounts */}
    </ProfileContainer>
  );
};

export default ProfilePage;
