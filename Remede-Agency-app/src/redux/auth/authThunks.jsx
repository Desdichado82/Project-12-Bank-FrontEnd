import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, getUserProfile,getAccountData } from '../../services/api';
import { loginSuccess, loginFailure } from './authSlice';



export const loginUser = (credentials, rememberMe) => async (dispatch) => {
  try {
    console.log('Attempting to log in with credentials:', credentials);
    const response = await login(credentials);
    console.log('Received response from login API:', response);

    // Dispatch login success action
    dispatch(loginSuccess(response.body));
    // Store the token securely if "Remember Me" is checked
    storeToken(response.body.token, rememberMe);
    // Fetch user profile and handle redirection
    await dispatch(fetchUserProfile(response.body.token));
    

  } catch (error) {
    console.error('Login failed with error:', error);
    dispatch(loginFailure(error.message));
  }
};

// Function to store the token securely
const storeToken = (token, rememberMe) => {
  if (rememberMe) {
    // Use a secure method to store the token (e.g., secure cookies)
    // Example: document.cookie = `token=${token}; secure; SameSite=Strict;`;
    localStorage.setItem('token', token); // or sessionStorage
  }
};

export const fetchUserProfile = createAsyncThunk(
  'auth/fetchUserProfile',
  async (token, { rejectWithValue, dispatch }) => {
    try {
      console.log('Fetching user profile with token:', token);

      const userProfile = await getUserProfile(token);
      console.log('Received user profile:', userProfile);
      const accountData =  getAccountData(userProfile.body.email);
      console.log('accountData',accountData);

    

      dispatch(loginSuccess({ userProfile, accountData })); // Dispatch the user profile to the reducer
      console.log('Dispatched loginSuccess action with user profile:', userProfile);

      
    } catch (error) {
      console.error('Error fetching user profile:', error.message);

      // Use rejectWithValue to provide error details to the reducer
      return rejectWithValue(error.message);
    }
  }
);