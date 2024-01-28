import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/authThunks';
import { SignInForm, InputWrapper, InputRemember, RememberCheckbox, RememberLabel, SignInButton, Label, Input, ErrorMessage } from './LoginStyles';
import {validateEmail,validatePassword} from '../../utils/validation'
const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');



  const handleEmailBlur = () => {
    setEmailError(validateEmail(email) ? '' : 'Please enter a valid email address.');
  };

  const handlePasswordBlur = () => {
    setPasswordError(validatePassword(password) ? '' : 'Password must be at least 8 characters long.');
  };

  const handleLogin = (event) => {
    event.preventDefault();

    // Validate email and password
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    // Update error state
    setEmailError(isEmailValid ? '' : 'Please enter a valid email address.');
    setPasswordError(isPasswordValid ? '' : 'Password must be at least 8 characters long.');

    // If both email and password are valid, proceed with login
    if (isEmailValid && isPasswordValid) {
      // Dispatch the loginUser action with the validated form values
      dispatch(loginUser({ email, password }));

      // Clear form values
      setEmail('');
      setPassword('');
      setRememberMe(false);
    }
  };

  return (
    <SignInForm onSubmit={handleLogin}>
      <InputWrapper>
        <Label htmlFor="email">Username</Label>
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

      <InputRemember>
        <RememberCheckbox
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        />
        <RememberLabel htmlFor="remember-me">Remember me</RememberLabel>
      </InputRemember>

      <SignInButton type="submit">Sign In</SignInButton>
    </SignInForm>
  );
};

export default LoginForm;
