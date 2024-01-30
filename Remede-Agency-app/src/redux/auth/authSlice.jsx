// authSlice.js

// Import necessary modules and functions
import { createSlice } from '@reduxjs/toolkit'; // Redux Toolkit function for generating a slice of the Redux store
import { storeToken, clearToken } from '../../utils/authUtils'; // Utility functions for storing and clearing the auth token

// Define the auth slice of the Redux store
const authSlice = createSlice({
  name: 'auth', // The name of the slice
  initialState: { // The initial state of the slice
    user: null,
    token: null,
    userProfile: null,
    accountData:[],
    error: null,
    isAuth: false, // Assuming you have an isAuth property to track authentication status
  },
  reducers: { // The reducers for this slice
    loginSuccess: (state, action) => { // Reducer for successful login
      state.user = action.payload.user || state.user;
      state.token = action.payload.token || state.token;
      state.userProfile = action.payload.userProfile;
      state.accountData = action.payload.accountData; // new field
      state.error = null;
      state.isAuth = true; // Set isAuth to true on successful login
      // Store the token securely
      storeToken(action.payload.token, action.payload.rememberMe);
    },
    loginFailure: (state, action) => { // Reducer for failed login
      state.user = null;
      state.token = null;
      state.userProfile = null;
      state.accountData = [];
      state.error = action.payload;
      state.isAuth = false; // Set isAuth to false on login failure
    },
    logout: (state) => { // Reducer for logout
      state.user = null;
      state.token = null;
      state.userProfile = null;
      state.accountData = [];
      state.error = null;
      state.isAuth = false; // Set isAuth to false on logout
       // Clear the stored token on logout
       clearToken();
    },
    setAuthenticatedUser: (state) => { // Reducer for setting the authenticated user
      // Set the user as authenticated, e.g., update isAuth property
      state.isAuth = true;
    },
  },
});

// Export the actions for this slice
export const { loginSuccess, loginFailure, logout } = authSlice.actions;

// Export the reducer for this slice
export default authSlice.reducer;
