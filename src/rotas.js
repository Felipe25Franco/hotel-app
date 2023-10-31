import React from 'react';

import Login from './views/login';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import ListagemCliente from './views/listagens/listagem-cliente';
import ListagemFuncionario from './views/listagens/listagem-funcionario';
import ListagemHoteis from './views/listagens/listagem-hoteis';
import ListagemProdutos from './views/listagens/listagem-produtos';
import ListagemServicos from './views/listagens/listagem-servicos';
import ListagemComodidades from './views/listagens/listagem-comodidades';
import ListagemQuarto from './views/listagens/listagem-quarto';
import ListagemHospedagem from './views/listagens/listagem-hospedagem';
import ListagemReserva from './views/listagens/listagem-reserva';

import CadastroProduto from './views/cadastros/cadastro-produto';
import CadastroHotel from './views/cadastros/cadastro-hotel';
import CadastroCliente from './views/cadastros/cadastro-cliente';
import CadastroFuncionario from './views/cadastros/cadastro-funcionario';
import CadastroServicos from './views/cadastros/cadastro-servicos';
import CadastroQuarto from './views/cadastros/cadastro-quarto';
import CadastroComodidades from './views/cadastros/cadastro-comodidades';
import CadastroReserva from './views/cadastros/cadastro-reserva';
import CadastroHospedagem from './views/cadastros/cadastro-hospedagem';
import CadastroHorarioServico from './views/cadastros/subCadastros/cadastro-horarioServico';
import CadastroAvaliacaoQuarto from './views/cadastros/subCadastros/cadastro-avaliacaoQuarto';
import CadastroAvaliacaoHospedagem from './views/cadastros/subCadastros/cadastro-avaliacaoHospedagem';
{/**/}


function Rotas(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/listagem-cliente' element={<ListagemCliente />} />
        <Route path='/listagem-funcionario' element={<ListagemFuncionario />} />
        <Route path='/listagem-hoteis' element={<ListagemHoteis />} />   
        <Route path='/listagem-produtos' element={<ListagemProdutos />} />
        <Route path='/listagem-servicos' element={<ListagemServicos />} />
        <Route path='/listagem-comodidades' element={<ListagemComodidades />} />
        <Route path='/listagem-quarto' element={<ListagemQuarto />} />      
        <Route path='/listagem-reserva' element={<ListagemReserva />} />
        <Route path='/listagem-hospedagem' element={<ListagemHospedagem />} />    

        <Route path='/cadastro-produto/:idParam?' element={<CadastroProduto />} /> 
        <Route path='/cadastro-hotel/:idParam?' element={<CadastroHotel />} />   
        <Route path='/cadastro-cliente/:idParam?' element={<CadastroCliente />} />    
        <Route path='/cadastro-funcionario/:idParam?' element={<CadastroFuncionario />} />   
        <Route path='/cadastro-servicos/:idParam?' element={<CadastroServicos />} />      
        <Route path='/cadastro-quarto/:idParam?' element={<CadastroQuarto />} />      
        <Route path='/cadastro-comodidades/:idParam?' element={<CadastroComodidades />} />   
        <Route path='/cadastro-reserva/:idParam?' element={<CadastroReserva />} />         
        <Route path='/cadastro-hospedagem/:idParam?' element={<CadastroHospedagem />} />   
        <Route path='/cadastro-horarioServico/:idParam?' element={<CadastroHorarioServico />} />   
        <Route path='/cadastro-avaliacaoQuarto/:idParam?' element={<CadastroAvaliacaoQuarto />} />   
        <Route path='/cadastro-avaliacaoHospedagem/:idParam?' element={<CadastroAvaliacaoHospedagem />} />   
        {/**/}
        {/*          
        <Route path='/cadastro-tipo-produto' element={<CadastroTipoProduto />} />     
        <Route path='/cadastro-tipo-servicos' element={<CadastroTipoServico/>} />  
        <Route path='/cadastro-tipo-quarto' element={<CadastroTipoQuarto />} />     
        <Route path='/cadastro-tipo-cama' element={<CadastroTipoCama />} />   
        <Route path='/cadastro-tipo-comodidade' element={<CadastroTipoComodidade />} />   
        <Route path='/cadastro-cargo' element={<CadastroCargo />} />                   
        */}    
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;