// App.jsx
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './router/Router';
import { Provider} from 'react-redux'; // Correct import statements
import { store } from './redux/store';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

const App = () => {
  //const dispatch = useDispatch();

  /*useEffect(() => {
    const retrieveToken = () => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        const tokenData = parseToken(storedToken);
        if (tokenData && tokenData.exp && tokenData.exp > Date.now() / 1000) {
          // No need to dispatch loginSuccess here, it's handled by the action
        } else {
          dispatch(logout());
        }
      }
    };

    retrieveToken();
  }, [dispatch]); */

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

export default App;
