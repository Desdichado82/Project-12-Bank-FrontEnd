// Import necessary modules and components
import { BrowserRouter as Router } from 'react-router-dom'; // React Router for routing
import AppRoutes from './router/Router'; // The routes for the app
import { Provider } from 'react-redux'; // Redux Provider for providing the Redux store to the app
import { store } from './redux/store'; // The Redux store

import Nav from './components/Nav/Nav'; // The navigation component
import Footer from './components/Footer/Footer'; // The footer component

// Define the App component
const App = () => {
  // Render the app
  // The app is wrapped in a Router and a Provider
  // The Router enables routing, and the Provider provides the Redux store
  // The app consists of a Nav, the AppRoutes, and a Footer
  return (
    <Router>
      <Provider store={store}>
        <Nav />
        <AppRoutes />
        <Footer />
      </Provider>
    </Router>
  );
};

// Export the App component
export default App;
