import React from 'react';

import Login from './views/login';
import ListagemClientes from './views/listagens/listagem-cliente';
import ListagemComodidades from './views/listagens/listagem-comodidades';


import { Route, Routes, BrowserRouter } from 'react-router-dom';



function Rotas(props) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/listagem-cliente' element={<ListagemClientes />} />
          <Route path='/listagem-comodidades' element={<ListagemComodidades />} />
          
         
          
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default Rotas;