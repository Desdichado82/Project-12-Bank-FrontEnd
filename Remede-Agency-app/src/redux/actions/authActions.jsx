// authActions.jsx
import axios from 'axios';
import { loginSuccess } from '../slices/authSlice';

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3001/api/v1/user/login', { email, password });
    const data = response.data;

    if (response.status === 200) {
      console.log('Login success:', data);
      dispatch(loginSuccess(data.user, data.token));
    } else {
      console.error('Login failed:', data);
      dispatch(loginFailure('Login failed: ' + data.message));
    }
  } catch (error) {
    console.error('Login failed:', error);
    dispatch(loginFailure('An error occurred during login: ' + error.message));
  }
};





