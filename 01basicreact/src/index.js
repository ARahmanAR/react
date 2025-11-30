import React from 'react'; // * Core foundation library of React
import ReactDOM from 'react-dom/client'; // *  Implementation on web platform
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
