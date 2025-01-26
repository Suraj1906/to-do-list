import React from 'react'; // React import for JSX support
import ReactDOM from 'react-dom/client'; // For React 18 rendering
 // Redux provider
import { StrictMode } from 'react'; // Strict mode for highlighting issues
import App from './App.jsx'; // Main app component
 // Redux store
import './index.css'; // Global CSS including Tailwind styles

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './store/store';

// Mount the React app to the root element
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
    <StrictMode>
      <App />
      </StrictMode>
      </Provider>
    
    
  
);
