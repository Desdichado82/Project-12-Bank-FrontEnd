import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redux/reducers/rootReducer'; // Combine all your reducers

const store = configureStore({ reducer: rootReducer });

export default store;
