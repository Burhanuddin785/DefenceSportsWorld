import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import './Css/UserComponents/featured/App.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="709254715979-8nr98v1o2b1fpou5eh96hv61qglcvnjr.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>;
    </BrowserRouter>
  </React.StrictMode>
);


