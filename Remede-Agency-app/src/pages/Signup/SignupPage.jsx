// SignupPage.js

import { SignInContent, SignInIcon } from '../Login/LoginStyles';
import SignupForm from './SignupForm';

const SignupPage = () => {
  return (
    <main className="main bg-dark">
      <SignInContent>
        <SignInIcon className="fa fa-user-circle"></SignInIcon>
        <h1>Sign Up</h1>
        <SignupForm />
      </SignInContent>
    </main>
  );
};

export default SignupPage;