import { configureStore } from '@reduxjs/toolkit'; // Use configureStore from @reduxjs/toolkit
import rootReducer from './rootReducer'; // Import rootReducer

const store = configureStore({
  reducer: rootReducer, // Set the reducer to rootReducer
});

export default store;
