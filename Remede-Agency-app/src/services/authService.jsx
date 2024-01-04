// services/authService.js
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { LoginAction } from '../redux/actions/authActions';

const API_BASE_URL = 'http://localhost:3001'; // Replace with the actual base URL

const authService = {
  Login: async ({ email, password }) => {
    const response = await axios.post(`${API_BASE_URL}/user/login`, { email, password });
    console.log('Login API Response:', response);
    // Dispatch login action
    const dispatch = useDispatch();
    dispatch(LoginAction(response.data.user, response.data.token)); // Fix here
    return response.data;
  },
};

export default authService;