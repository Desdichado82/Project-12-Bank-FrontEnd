
import {
    Main,
    SignInContent,
    SignInIcon,
    
  } from '../../components/styles/loginStyles';

  import GlobalStyles from '../../components/styles/globalStyles';

  import SignIn from '../login/signInForm'
  
  const LoginPage = () => {
    return (
        
      <Main >
         <GlobalStyles />
        <SignInContent>
          <SignInIcon className="fa fa-user-circle"></SignInIcon>
          <h1>Sign In</h1>
          <SignIn/>
            
          
        </SignInContent>
      </Main>
    );
  };
  
  export default LoginPage;
  