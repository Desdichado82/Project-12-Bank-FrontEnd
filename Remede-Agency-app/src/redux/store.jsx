// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import { loginSuccess } from './auth/authSlice'; // Adjust import to loginSuccess
import userReducer from './edit/userSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    // Add other reducers as needed
  },
});

// Check for the token on page load and dispatch action if present
const initializeApp = () => {
  const storedToken = localStorage.getItem('token'); // or sessionStorage
  if (storedToken) {
    store.dispatch(loginSuccess()); // Adjust dispatch to loginSuccess
  }
};

// Call the initialization function
initializeApp();

export default store;
