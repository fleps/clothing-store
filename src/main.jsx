import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import { store } from './store/store.js';
import { MinicartProvider } from './contexts/minicart.context.jsx';

import App from './App.jsx'

import './index.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='/clothing-store'>
        <MinicartProvider>
          <App />
        </MinicartProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
