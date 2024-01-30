// ProfilePage.js
import { useSelector } from 'react-redux';
import { Header, EditButton, Main } from '../Profile/ProfileStyles';
import Accounts from '../Profile/ProfileAccounts';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {

  const navigate = useNavigate();
  const userProfile = useSelector((state) => state.auth.userProfile.body);


  const redirectToEditUser = () => {
    // Assuming your edit user page route is '/edit-user'
    navigate('/editUser');
  };
 


  return (
    <Main className="main bg-dark">
      <Header>
        <h1>Welcome back<br />{userProfile.firstName} {userProfile.lastName}!</h1>
        <EditButton onClick={redirectToEditUser}>Edit Name</EditButton>
      </Header>
      <h2 className="sr-only">Accounts</h2>
      <Accounts />
    </Main>
  );
};

export default ProfilePage;


