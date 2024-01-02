import {
    Main,
    SignInContent,
    SignInIcon,
    SignInForm,
    InputWrapper,
    Label,
    Input,
    InputRemember,
    RememberCheckbox,
    RememberLabel,
    SignInButton,
  } from '../styles/loginStyles';
  
  const LoginPage = () => {
    return (
      <Main>
        <SignInContent>
          <SignInIcon className="fa fa-user-circle"></SignInIcon>
          <h1>Sign In</h1>
          <SignInForm>
            <InputWrapper>
              <Label htmlFor="username">Username</Label>
              <Input type="text" id="username" />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" />
            </InputWrapper>
            <InputRemember>
              <RememberCheckbox type="checkbox" id="remember-me" />
              <RememberLabel htmlFor="remember-me">Remember me</RememberLabel>
            </InputRemember>
            <SignInButton href="./user.html">Sign In</SignInButton>
          </SignInForm>
        </SignInContent>
      </Main>
    );
  };
  
  export default LoginPage;
  