
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/routes'; // Import the Routes component
import Header from './components/header/header';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <Router>
     <Header />
     <AppRoutes/>
      <Footer />
      </Router>
  );
};

export default App;