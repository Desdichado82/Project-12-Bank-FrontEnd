// LoginPage.js

// Import necessary modules and components
import { useEffect } from 'react'; // React hook for side effects
import {Main, SignInContent,StyledFontAwesomeIcon  } from '../Login/LoginStyles'; // Styled components for the login page
import LoginForm from '../Login/LoginForm'; // The login form component
import { useSelector } from 'react-redux'; // Redux hook for accessing the state
import { faUserCircle } from '@fortawesome/free-solid-svg-icons' // Font Awesome icon for the user circle
import {useNavigate} from 'react-router-dom'; // React Router hook for navigation

// Define the LoginPage component
const LoginPage = () => {

  // Use the useSelector hook to access the user profile from the state
  const userProfile = useSelector((state) => state.auth.userProfile);

  // Use the useNavigate hook to get the navigate function for navigation
  const navigate = useNavigate();

  // Use the useEffect hook to redirect to the profile page if the user profile exists
  useEffect(() => {
    if (userProfile) {
      navigate('/profile'); // Redirect to the profile page
    }
  }, [userProfile, navigate]); // Depend on userProfile and navigate

  // Render the login page
  return (
    <Main className="main bg-dark">
      <SignInContent>
        <StyledFontAwesomeIcon className="fa fa-user-circle" icon={faUserCircle} /> {/* User icon */}
        <h1>Sign In</h1> {/* Heading */}
        <LoginForm /> {/* Login form */}
      </SignInContent>
    </Main>
  );
};

// Export the LoginPage component
export default LoginPage;
