// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { storeToken, clearToken } from '../../utils/authUtils'; // Adjust the path based on your actual file structure





const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    userProfile: null,
    accountData:[],
    error: null,
    isAuth: false, // Assuming you have an isAuth property to track authentication status
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user || state.user;
      state.token = action.payload.token || state.token;
      state.userProfile = action.payload.userProfile;
      state.accountData = action.payload.accountData; // new field
      state.error = null;
      state.isAuth = true; // Set isAuth to true on successful login
      // Store the token securely
      storeToken(action.payload.token, action.payload.rememberMe);
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.token = null;
      state.userProfile = null;
      state.accountData = [];
      state.error = action.payload;
      state.isAuth = false; // Set isAuth to false on login failure
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.userProfile = null;
      state.accountData = [];
      state.error = null;
      state.isAuth = false; // Set isAuth to false on logout
       // Clear the stored token on logout
       clearToken();
    },
    setAuthenticatedUser: (state) => {
      // Set the user as authenticated, e.g., update isAuth property
      state.isAuth = true;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;







export default authSlice.reducer;

