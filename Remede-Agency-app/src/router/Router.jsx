// Router.js

import { Routes, Route } from "react-router-dom";
import LandingPage from '../pages/Home/LandingPage'; // Replace with actual import path
import LoginPage from '../pages/Login/LoginPage'; // Replace with actual import path
import SignUpPage from '../pages/Signup/SignupPage'; // Replace with actual import path
import ProfilePage from '../pages/Profile/ProfilePage'; // Replace with actual import path
import EditUserPage from '../pages/EditUser/editUserPage'; // Replace with actual import path

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/edituser" element={<EditUserPage />} />
    </Routes>
  );
};

export default AppRoutes;
