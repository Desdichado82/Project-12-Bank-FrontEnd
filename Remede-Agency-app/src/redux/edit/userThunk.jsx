// Import necessary modules and functions
import { createAsyncThunk } from '@reduxjs/toolkit'; // Redux Toolkit function for generating async thunks
import { updateUserProfile } from '../../services/api'; // API function for updating the user profile

// Define the updateUser async action
export const updateUser = createAsyncThunk(
  'user/updateUserProfile', // The action type
  // The payload creator function
  async ({ updatedUserData, token }, { rejectWithValue }) => {
    // Attempt to update the user profile with the provided data and token
    try {
      const response = await updateUserProfile(token, updatedUserData);
      // If the response status is 200, return the response body
      if (response.status === 200) {
        return response.body;
      } else {
        // If the response status is not 200, reject the promise with the response message
        return rejectWithValue(response.message);
      }
    } catch (error) {
      // If an error occurs, reject the promise with the error message
      return rejectWithValue(error.message);
    }
  }
);
