import { Routes, Route } from "react-router-dom";
import LandingPage from '../pages/home/landingPage';
import Login from '../pages/login/loginPage';

const AppRoutes = () => {
    return (
     
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      
    );
};

export default AppRoutes;