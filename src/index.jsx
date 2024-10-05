import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './pages/home';
import Add_Usuario from './pages/add-usuario';
import Add_Programa_Favorito from './pages/add-programafavorito';
import Add_Programa from './pages/add-programa';
import Add_Canal from './pages/add-canal';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/add-usuario' element={<Add_Usuario />} />
        <Route path='/add-programafavorito' element={<Add_Programa_Favorito />} />
        <Route path='/add-programa' element={<Add_Programa />} />
        <Route path='/add-canal' element={<Add_Canal />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
