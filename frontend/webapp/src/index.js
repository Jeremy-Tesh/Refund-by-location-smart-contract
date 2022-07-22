import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TransactionProvider } from './context/TransactionContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TransactionProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </TransactionProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
