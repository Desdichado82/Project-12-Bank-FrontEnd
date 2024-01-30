// Import necessary modules
import axios from 'axios'; // Axios for making HTTP requests
import accounts from '../data/mockAccounts'; // Mock account data

// Define the base URL for the API
const API_URL = 'http://localhost:3001/api/v1/user';

// Define the login function
export const login = async (credentials) => {
  try {
    // Attempt to log in with the provided credentials
    const response = await axios.post(`${API_URL}/login`, credentials);
    // Return the response data
    return response.data;
  } catch (error) {
    // If an error occurs, throw the error data
    throw error.response.data;
  }
};

// Define the getUserProfile function
export const getUserProfile = async (token) => {
  try {
    // Make an API call to get the user profile
    const response = await axios.post(`${API_URL}/profile`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // Return the response data
    return response.data;
  } catch (error) {
    // If an error occurs, throw the error data or message
    throw error.response ? error.response.data : error;
  }
};

// Define the getAccountData function
export const getAccountData = (email) => {
  // Find the user accounts for the provided email
  const userAccounts = accounts.find((user) => user.email === email);
  // Get the account data or an empty array if no accounts were found
  const accountData = userAccounts ? userAccounts.accounts : [];
  // Return the account data
  return accountData;
};

// Define the updateUserProfile function
export const updateUserProfile = async (token, updatedUserData) => {
  try {
    // Make an API call to update the user profile
    const response = await axios.put(
      `${API_URL}/profile`,
      updatedUserData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // Return the response data
    return response.data;
  } catch (error) {
    // If an error occurs, throw the error data or message
    throw error.response ? error.response.data : error;
  }
}
