import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import './Css/UserComponents/featured/App.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <GoogleOAuthProvider clientId="709254715979-8nr98v1o2b1fpou5eh96hv61qglcvnjr.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>;
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


