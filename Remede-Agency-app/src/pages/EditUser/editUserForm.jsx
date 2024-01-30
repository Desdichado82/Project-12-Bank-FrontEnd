// EditUserPage.jsx
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../../redux/auth/authThunks';
import {useNavigate} from 'react-router-dom';
//import { Redirect } from 'react-router-dom';
import{updateUser} from '../../redux/edit/userThunk';

import {  SaveButton, CancelButton } from '../Profile/ProfileStyles';
import { SignInForm, InputWrapper,  EditLabel ,Input,FormRow, ErrorMessage} from '../Login/LoginStyles';
const EditUserForm = () => {
  // Add logic for handling form submissions and cancellations
  const userProfile = useSelector((state) => state.auth.userProfile.body);
  const errorMessage = useSelector((state) => state.user.error); // Get error message from Redux store
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  // Access the JWT token from the state
  const token = useSelector((state) => state.auth.token);
   // Separate the token from the updated user data
   const updatedUserData = { firstName, lastName };


  const handleSubmit = (e) => {
    e.preventDefault();

  dispatch(updateUser({updatedUserData, token}));

   // After updating the user, fetch the updated user profile
  dispatch(fetchUserProfile(token));

   // Redirect to the user profile page
   navigate('/profile');

  };
  return (
    <SignInForm onSubmit={handleSubmit}>
         {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>} {/* Display error message */}
      <FormRow>
      <InputWrapper>
      <EditLabel>First Name :</EditLabel>
      <Input type="text" 
              value={firstName}
              placeholder={userProfile.firstName}
              onChange={(e) => {
                console.log('First name changed:', e.target.value);
                setFirstName(e.target.value);
              }}  />
      </InputWrapper>
      <InputWrapper>
      <EditLabel>Last Name: </EditLabel>
      <Input type="text" placeholder={userProfile.lastName}value={lastName} onChange={(e) => {
                console.log('Last name changed:', e.target.value);
                setLastName(e.target.value);
              }} />
      </InputWrapper>
      </FormRow>
      <FormRow>
      <SaveButton type="submt">Save</SaveButton>
      <CancelButton type="reset">Cancel</CancelButton>
      </FormRow>
      
    </SignInForm>
  );
};

export default EditUserForm;

