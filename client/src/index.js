import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import globalReducer from "state";
import {Provider} from "react-redux";

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </ Provider>
  </React.StrictMode>
);
