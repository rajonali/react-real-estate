import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ListingProvider } from "./context";
import { BrowserRouter } from "react-router-dom";

import config from './aws-exports';
import Amplify from 'aws-amplify';

import 'semantic-ui-css/semantic.min.css'

Amplify.configure(config);



ReactDOM.render(
  <ListingProvider>
  <BrowserRouter>
      <App />
    </BrowserRouter>
  </ListingProvider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
