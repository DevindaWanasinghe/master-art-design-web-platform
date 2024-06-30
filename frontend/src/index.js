import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="297432764501-dt8ik6e51lqbrgm9rt5o5ldcjptub5p2.apps.googleusercontent.com"> <App /></GoogleOAuthProvider>;
  </React.StrictMode>
);


