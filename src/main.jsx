import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from "@stripe/react-stripe-js";

import { store } from './store/store.js';
import App from './App.jsx'
import { stripePromise } from './utils/stripe/stripe.utils.js';

import './index.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter basename='/clothing-store'>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
        </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
)
