import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { lazy } from 'react';

export const Salespersons = lazy(() => import('./pages/Salespersons/Salespersons'));
export const Products = lazy(() => import('./pages/Products/Products'));
// export const Customers = lazy(() => import('./Customers'));
// export const Sales = lazy(() => import('./Sales'));
// export const CreateSale = lazy(() => import('./CreateSale'));
// export const CommissionReport = lazy(() => import('./CommissionReport'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
