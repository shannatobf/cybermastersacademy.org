import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from "@auth0/auth0-react";
import App from './App.jsx'
import './style.css'

const domain = "dev-uqbkcw80kyqc88jz.us.auth0.com";
const clientId = "jodozCrja2uStkOWkWS1MIC4NKjzOSWU";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
