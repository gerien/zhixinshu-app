import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import { HashRouter } from "react-router-dom"

/** 
 * use HashRouter here, it will make the all the pages load in onetime, and 
 * the router will directed to a (pseudo) location with a '#' before it's name,
 * the normal Link need to add a '#'.
 * */ 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

