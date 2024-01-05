// services/authService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

const authService = {
  login: async ({ email, password }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/user/login`, { email, password });
      console.log('Login API Response:', response);
      return response.data;
    } catch (error) {
      console.error('Error in login:', error);
      throw error;
    }
  },
};

export default authService;
