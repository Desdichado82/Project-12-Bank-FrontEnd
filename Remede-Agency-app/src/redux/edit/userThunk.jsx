// authThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateUserProfile } from '../../services/api';

export const updateUser = createAsyncThunk(
  'user/updateUserProfile',
  async ({ updatedUserData, token }, { rejectWithValue }) => {
    console.log('updateUser called with:', { updatedUserData, token });
    try {
      const response = await updateUserProfile(token, updatedUserData);
      console.log('Response from updateUserProfile:', response);
      if (response.status === 200) {
        console.log('updateUserProfile succeeded with status 200');
        return response.body;
      } else {
        console.log('updateUserProfile failed with status:', response.status);
        return rejectWithValue(response.message);
      }
    } catch (error) {
      console.error('Error in updateUser:', error);
      return rejectWithValue(error.message);
    }
  }
);

