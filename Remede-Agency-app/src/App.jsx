
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/routes'; // Import the Routes component
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <Router>
   <Provider store={store}>
        <Header />
        <AppRoutes />
        <Footer />
      </Provider>
  </Router>
  );
};

export default App;