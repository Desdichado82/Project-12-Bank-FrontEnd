// SignupForm.js

import { InputWrapper, InputRemember, SignInButton } from '../Login/LoginStyles';

const SignupForm = () => {
  // Add logic for handling form submission

  return (
    <form>
      <InputWrapper>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" />
      </InputWrapper>
      <InputRemember>
        <input type="checkbox" id="agree-terms" />
        <label htmlFor="agree-terms">I agree to the terms and conditions</label>
      </InputRemember>
      {/* Placeholder link due to static site */}
      <SignInButton href="./user.html">Sign Up</SignInButton>
      {/* Use the button below once you have form submission logic */}
      {/* <button className="sign-in-button">Sign Up</button> */}
    </form>
  );
};

export default SignupForm;
