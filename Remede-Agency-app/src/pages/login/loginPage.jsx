// LoginPage.js
import { useEffect } from 'react';
import {Main, SignInContent,StyledFontAwesomeIcon  } from './LoginStyles';
import LoginForm from './LoginForm';
import { useSelector } from 'react-redux';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom';

const LoginPage = () => {

  const userProfile = useSelector((state) => state.auth.userProfile);
  const navigate = useNavigate();

  useEffect(() => {
    if (userProfile) {
      navigate('/profile'); // Redirect to the profile page
    }
  }, [userProfile, navigate]);

  return (
    <Main className="main bg-dark">
      <SignInContent>
        <StyledFontAwesomeIcon className="fa fa-user-circle" icon={faUserCircle} />
        <h1>Sign In</h1>
        <LoginForm />
      </SignInContent>
    </Main>
  );
};

export default LoginPage;
