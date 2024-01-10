// userService.js
import axios from 'axios';

const profileService = {
  fetchUserProfile: async (token) => {
    try {

      const profileEndPoint =  'http://localhost:3001/api/v1/user/profile';
      const response = await axios.post(
        profileEndPoint,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;

      if (data && data.body) {
        return data.body;
      } else {
        throw new Error('Failed to fetch user profile. No valid data received.');
      }
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
      throw error;
    }
  },
};

export default profileService;

export const fetchUserProfile = ({ jwtToken }) => {
  return axios.get('/user/profile', { headers: { Authorization: `Bearer ${jwtToken}` } });
};
