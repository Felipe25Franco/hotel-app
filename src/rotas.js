import React from 'react';

import ListagemClientes from './views/listagens/listagem-cliente';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

{/**/}

function Rotas(props) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/listagem-cliente' element={<ListagemClientes />} />
          
          <Route            path='/cadastro-professores/:idParam?'            element={<CadastroProfessor />}          />
          
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default Rotas;