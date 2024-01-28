// authApi.js
import axios from 'axios';
import accounts from '../data/mockAccounts'; // Update the path as needed

const API_URL = 'http://localhost:3001/api/v1/user';

export const login = async (credentials) => {
  try {
    console.log('Attempting to log in with credentials:', credentials);
    const response = await axios.post(`${API_URL}/login`, credentials);
    console.log('Received response from login API:', response.data);
    return response.data;
  } catch (error) {
    console.error('Login failed with error:', error.response.data);
    throw error.response.data;
  }
};

export const getUserProfile = async (token) => {
  try {
    console.log('Making API call to get user profile...');
    const response = await axios.post(`${API_URL}/profile`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('API call succeeded. Data:', response.data);
    return response.data;
  } catch (error) {
    console.error('API call failed. Reason:', error.response ? error.response.data : error.message);
    throw error.response ? error.response.data : error;
  }
};


// New function to get account data based on the user's email
export const getAccountData = (email) => {
  console.log('Attempting to get account data for email:', email);
  const userAccounts = accounts.find((user) => user.email === email);
  console.log('Found user accounts:', userAccounts);
  const accountData = userAccounts ? userAccounts.accounts : [];
  console.log('Returning account data:', accountData);
  return accountData;
};



export const updateUserProfile = async (token, updatedUserData) => {
  try {
    console.log( 'token & userData', token, updatedUserData);
    
    const response = await axios.put(
      `${API_URL}/profile`,
      updatedUserData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error updating user profile:', error.response ? error.response.data : error.message);
    throw error.response ? error.response.data : error;
  }
}


