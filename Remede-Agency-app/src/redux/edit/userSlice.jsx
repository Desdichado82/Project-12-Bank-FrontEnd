// editUserSlice.js
import { createSlice } from '@reduxjs/toolkit';
import{updateUser} from '../edit/userThunk'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userProfile: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userProfile = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;

