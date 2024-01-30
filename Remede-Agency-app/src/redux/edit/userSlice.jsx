// Import necessary modules and functions
import { createSlice } from '@reduxjs/toolkit'; // Redux Toolkit function for generating a slice of the Redux store
import{updateUser} from '../edit/userThunk' // Thunk function for updating the user

// Define the user slice of the Redux store
const userSlice = createSlice({
  name: 'user', // The name of the slice
  initialState: { // The initial state of the slice
    userProfile: null,
    status: 'idle',
    error: null,
  },
  reducers: {}, // No reducers are defined for this slice
  extraReducers: (builder) => { // Extra reducers for handling actions defined outside of this slice
    builder
      .addCase(updateUser.pending, (state) => { // Handle the pending state of the updateUser action
        state.status = 'loading'; // Set the status to 'loading'
      })
      .addCase(updateUser.fulfilled, (state, action) => { // Handle the fulfilled state of the updateUser action
        state.status = 'succeeded'; // Set the status to 'succeeded'
        state.userProfile = action.payload; // Update the user profile with the payload of the action
      })
      .addCase(updateUser.rejected, (state, action) => { // Handle the rejected state of the updateUser action
        state.status = 'failed'; // Set the status to 'failed'
        state.error = action.error.message; // Set the error message
      });
  },
});

// Export the reducer for this slice
export default userSlice.reducer;
