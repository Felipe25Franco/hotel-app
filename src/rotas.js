import React from 'react';

import Login from './views/login';
import ListagemClientes from './views/listagens/listagem-cliente';
import ListagemComodidades from './views/listagens/listagem-comodidades';
import ListagemFuncionarios from './views/listagens/listagem-funcionario.js';
import ListagemHospedagem from './views/listagens/listagem-hospedagem';
import ListagemHoteis from './views/listagens/listagem-hoteis';
import ListagemProdutos from './views/listagens/listagem-produtos';
import ListagemQuarto from './views/listagens/listagem-quarto';
import ListagemReserva from './views/listagens/listagem-reserva';
import ListagemServicos from './views/listagens/listagem-servicos';


import { Route, Routes, BrowserRouter } from 'react-router-dom';



function Rotas(props) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/listagem-cliente' element={<ListagemClientes />} />
          <Route path='/listagem-comodidades' element={<ListagemComodidades />} />
          <Route path='/listagem-funcionarios' element={<ListagemFuncionarios />} />
          <Route path='/listagem-hospedagem' element={<ListagemHospedagem />} />
          <Route path='/listagem-hoteis' element={<ListagemHoteis />} />
          <Route path='/listagem-produtos' element={<ListagemProdutos />} />
          <Route path='/listagem-quarto' element={<ListagemQuarto />} />
          <Route path='/listagem-reserva' element={<ListagemReserva />} />
          <Route path='/listagem-servicos' element={<ListagemServicos />} />
                   
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default Rotas;