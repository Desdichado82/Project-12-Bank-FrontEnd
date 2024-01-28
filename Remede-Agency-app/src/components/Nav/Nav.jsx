import { NavLink } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { NavContainer, NavItem, LogoContainer, LogoImage } from './NavStyles';
import GlobalStyle from '../../components/styles/globalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { logout} from '../../redux/auth/authSlice';


// Import images
import argentBankLogo from '../../assets/img/argentBankLogo.png';

const Nav = () => {
  const dispatch = useDispatch();
  const user =  useSelector((state) => state.auth.userProfile);
  const navigate = useNavigate();

  

  const handleLogout = () => {
    
    // Dispatch logout action when logging out
    dispatch(logout());
     // Redirect to the landing page
     navigate('/');
  };



  return (
    <NavContainer>
    <GlobalStyle /> {/* Apply global styles */}
    <LogoContainer>
      <NavLink to="/">
        <LogoImage src={argentBankLogo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
    </LogoContainer>
    <div>
      {user ? (
        <>
          <NavItem as="span">
            <FontAwesomeIcon className="fa fa-user-circle" icon={faUserCircle} /> {user ? user.body.firstName : 'Loading...'}
          </NavItem>
          <NavItem as="a" onClick={handleLogout}>
            <FontAwesomeIcon className="fa fa-sign-out" icon={faSignOut} /> Sign Out
          </NavItem>
        </>
      ) : (
        <NavItem as={NavLink} to="/login">
          <FontAwesomeIcon className="fa fa-user-circle" icon={faUserCircle} /> Sign In
        </NavItem>
      )}
    </div>
  </NavContainer>
  );
};

export default Nav;


