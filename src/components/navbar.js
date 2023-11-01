import React, { useState } from 'react';
import 'bootswatch/dist/lumen/bootstrap.css';

import '../custom.css';

import NavbarItem from './navbaritem';



function Navbar(props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className='navbar navbar-expand-lg fixed-top navbar-dark bg-primary'>
      <div className='container-fluid'>
        <a href='/' className='navbar-brand'> REDE DE HOTEIS X </a>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/login' label='Entrar' />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/listagem-hoteis' label='Hotéis' />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/listagem-cliente' label='Clientes' />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/listagem-funcionario' label='Funcionarios' />
          </ul>         
          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/listagem-produtos' label='Produtos' />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/listagem-servicos' label='Serviços' />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/listagem-comodidades' label='Comodidades' />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/listagem-quarto' label='Quartos' />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/listagem-reserva' label='Reservas' />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/listagem-hospedagem' label='Hospedagens' />
          </ul>
          <ul class="nav-item-dropdown">
            <a className={`nav-link dropdown-toggle ${isDropdownOpen ? 'show' : ''}`} onClick={toggleDropdown}>
              Dropdown
            </a>
            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Separated link</a>
            </div>
          </ul>
           
        </div>
      </div>
    </div>
  );
}

export default Navbar;
