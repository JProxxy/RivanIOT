import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Correct path to index.css
import App from './components/App'; // Correct path to App component
import reportWebVitals from './components/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();