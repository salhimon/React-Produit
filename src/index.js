import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'; // Ajoute cette ligne


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

);

