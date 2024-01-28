// EditUserPage.js
import { Header, Main,EditH1 } from '../../pages/Profile/ProfileStyles'; // Assuming these are shared styles
import Accounts from '../Profile/ProfileAccounts';
import EditUserForm from './editUserForm';

const EditUserPage = () => {


  return (
    <Main className="main bg-grey">
      <Header>
        <EditH1>Welcome back</EditH1>
        <EditUserForm/>
      </Header>
      {/* Display Account Information */}
      <Accounts />
    </Main>
  );
};

export default EditUserPage;