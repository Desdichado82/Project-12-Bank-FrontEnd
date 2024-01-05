// SignIn.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LoginAction } from '../../redux/actions/authActions'; // Define your login action
import authService from '../../services/authService';
import {
  SignInForm,
  InputWrapper,
  Label,
  Input,
  InputRemember,
  RememberCheckbox,
  RememberLabel,
  SignInButton,
  ErrorMessage,
} from '../../components/styles/loginStyles';

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const validatePassword = (value) => {
    return value.length >= 8;
  };

  const handleEmailBlur = () => {
    setEmailError(validateEmail(email) ? '' : 'Please enter a valid email address.');
  };

  const handlePasswordBlur = () => {
    setPasswordError(validatePassword(password) ? '' : 'Password must be at least 6 characters long.');
  };

  const handleLogin = async (e) => {
  e.preventDefault();
  console.log('Form submitted!');
  // Reset validation errors
  setEmailError('');
  setPasswordError('');

  // Validate email
  if (!validateEmail(email)) {
    setEmailError('Please enter a valid email address.');
    return;
  }

  // Validate password
  if (!validatePassword(password)) {
    setPasswordError('Password must be at least 6 characters long.');
    return;
  }

  // Log email and password before making the API call
  console.log('Logging in with email:', email, 'and password:', password);
  
  try {
    const data = await authService.login({ email, password });
    dispatch(LoginAction(data.user, data.token));
    console.log('Login Success:', data);
    // Redirect to profile page or any other route upon successful login
  } catch (error) {
    console.error('Login failed', error);
    if (error.response) {
      setEmailError('Invalid credentials. Please check your email and password.');
    } else {
      setEmailError('An error occurred while trying to log in. Please try again.');
    }
  }
};

  return (
    <SignInForm onSubmit={handleLogin}>
      <InputWrapper>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleEmailBlur}
        />
        {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={handlePasswordBlur}
        />
        {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
      </InputWrapper>

      {/* Move the error messages to below the inputs */}
      <SignInButton type="submit">Sign In</SignInButton>

      <InputRemember>
        <RememberCheckbox type="checkbox" id="remember-me" />
        <RememberLabel htmlFor="remember-me">Remember me</RememberLabel>
      </InputRemember>
    </SignInForm>
  );
};

export default SignIn;


