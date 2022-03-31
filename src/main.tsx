import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'App';
import axios from 'axios';
import config from 'utils/config';

axios.defaults.baseURL = config.BASE_URL;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
