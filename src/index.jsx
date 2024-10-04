import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './pages/home/index';
import { BrowserRouter, Router, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router>
        <Route path='/' element={<App/>}/>
      </Router>
    </BrowserRouter>
  </React.StrictMode>
);
