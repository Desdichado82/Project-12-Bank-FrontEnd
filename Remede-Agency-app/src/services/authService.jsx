// authService.jsx
import axios from 'axios';

const authService = {
  login: async (credentials) => {
    try {
      console.log('Making login API request with credentials:', credentials);

      const response = await axios.post('http://localhost:3001/api/v1/user/login', credentials);
      const data = response.data;

      console.log('Login API response:', response);

      if (response.status === 200) {
        return data;
      } else {
        throw new Error(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login API request failed:', error);
      throw error;
    }
  },
};

export default authService;



