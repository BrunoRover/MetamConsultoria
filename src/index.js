import React from 'react';
import ReactDOM from 'react-dom/client';
import AosInit from '../src/components/aos-init';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AosInit /> 
    <App />
  </React.StrictMode>
);

