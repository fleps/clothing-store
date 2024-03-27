import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import { store } from './store/store.js';
import App from './App.jsx'

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter basename='/clothing-store'>
          <App />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
