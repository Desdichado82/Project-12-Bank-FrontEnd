// Import necessary modules and functions
import { createAsyncThunk } from '@reduxjs/toolkit'; // Redux Toolkit function for generating async thunks
import { login, getUserProfile,getAccountData } from '../../services/api'; // API functions for logging in and getting user profile
import { loginSuccess, loginFailure } from './authSlice'; // Actions from the auth slice

// Define the loginUser async action
export const loginUser = (credentials, rememberMe) => async (dispatch) => {
  try {
    // Attempt to log in with the provided credentials
    const response = await login(credentials);

    // Dispatch the loginSuccess action with the response body
    dispatch(loginSuccess(response.body));

    // Store the token securely if "Remember Me" is checked
    storeToken(response.body.token, rememberMe);

    // Fetch the user profile using the token
    await dispatch(fetchUserProfile(response.body.token));
  } catch (error) {
    // If an error occurs, dispatch the loginFailure action with the error message
    dispatch(loginFailure(error.message));
  }
};

// Define a function to store the token securely
const storeToken = (token, rememberMe) => {
  if (rememberMe) {
    // Store the token in local storage if "Remember Me" is checked
    localStorage.setItem('token', token);
  }
};

// Define the fetchUserProfile async action
export const fetchUserProfile = createAsyncThunk(
  'auth/fetchUserProfile',
  async (token, { rejectWithValue, dispatch }) => {
    try {
      // Fetch the user profile using the token
      const userProfile = await getUserProfile(token);

      // Fetch the account data using the user's email
      const accountData =  getAccountData(userProfile.body.email);

      // Dispatch the loginSuccess action with the user profile and account data
      dispatch(loginSuccess({ userProfile, accountData }));
    } catch (error) {
      // If an error occurs, reject the promise with the error message
      return rejectWithValue(error.message);
    }
  }
);
