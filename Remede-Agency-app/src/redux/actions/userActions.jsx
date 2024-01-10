// userActions.js
import { fetchProfileSuccess, fetchProfileFailure } from '../slices/userSlice';
import userService from '../../services/userService'; // Import the userService

export const fetchUserProfile = () => async (dispatch, getState) => {
  try {
    const { auth } = getState();

    if (!auth.token) {
      console.error('User not authenticated. Unable to fetch profile.');
      return;
    }

    const userProfile = await userService.fetchUserProfile(auth.token);

    dispatch(fetchProfileSuccess(userProfile));
  } catch (error) {
    console.error('Failed to fetch user profile:', error);
    dispatch(fetchProfileFailure({ error: 'Failed to fetch user profile.', completeError: error }));
  }
};

