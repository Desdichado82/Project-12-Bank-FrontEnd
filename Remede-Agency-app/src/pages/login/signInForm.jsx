// SignIn.jsx
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/authActions';
import authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
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
    setPasswordError(validatePassword(password) ? '' : 'Password must be at least 8 characters long.');
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setEmailError('');
    setPasswordError('');

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters long.');
      return;
    }
    try {
      console.log('Attempting to log in with:', email, password);
  
      const data = await authService.login({ email, password });
  
      console.log('Login API response data:', data);
  
      if (data && data.body && data.body.token) {
        console.log('Login successful. User data:', data.body);
        dispatch(login(data.body.user, data.body.token));
        localStorage.setItem('token', data.body.token);
        navigate('/profile');
      } else {
        console.error('Login failed. No token received.');
      }
    } catch (error) {
      console.error('Login failed due to an error:', error);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setRememberMe(true);
    }
  }, []);

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

      <SignInButton type="submit">Sign In</SignInButton>

      <InputRemember>
        <RememberCheckbox
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        />
        <RememberLabel htmlFor="remember-me">Remember me</RememberLabel>
      </InputRemember>
    </SignInForm>
  );
};

export default SignIn;




