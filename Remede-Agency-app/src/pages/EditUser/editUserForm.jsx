// EditUserPage.jsx
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../../redux/auth/authThunks';
import {useNavigate} from 'react-router-dom';
//import { Redirect } from 'react-router-dom';
import{updateUser} from '../../redux/edit/userThunk';

import {  SaveButton, CancelButton } from '../Profile/ProfileStyles';
import { SignInForm, InputWrapper,  EditLabel ,Input,FormRow} from '../Login/LoginStyles';
const EditUserForm = () => {
  // Add logic for handling form submissions and cancellations
  const userProfile = useSelector((state) => state.auth.userProfile.body);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  console.log('Initial state:', { firstName, lastName });

  // Access the JWT token from the state
  const token = useSelector((state) => state.auth.token);
   // Separate the token from the updated user data
   const updatedUserData = { firstName, lastName };
  console.log("token value retrieved:", token);

  const handleSubmit = (e) => {
    e.preventDefault();
  console.log('Form submitted with:', updatedUserData, token);
  dispatch(updateUser({updatedUserData, token}));

   // After updating the user, fetch the updated user profile
  dispatch(fetchUserProfile(token));

   // Redirect to the user profile page
   navigate('/profile');

  };
  return (
    <SignInForm onSubmit={handleSubmit}>
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

