import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './components/CascadeDropdown/countrySlice';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = configureStore({
  reducer: {
    country: countryReducer,
  },
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();