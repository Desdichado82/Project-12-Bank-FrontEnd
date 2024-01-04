
import {
    Main,
    SignInContent,
    SignInIcon,
    
  } from '../styles/loginStyles';

  import GlobalStyles from '../styles/globalStyles';

  import SignIn from '../common/signIn/signInForm'
  
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
  