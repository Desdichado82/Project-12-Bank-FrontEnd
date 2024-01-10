import { Routes, Route } from "react-router-dom";
import LandingPage from '../pages/home/landingPage';
import Login from '../pages/login/loginPage';
import ProfilePage from '../pages/profile/profilePage'

const AppRoutes = () => {
    return (
     
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      
    );
};

export default AppRoutes;