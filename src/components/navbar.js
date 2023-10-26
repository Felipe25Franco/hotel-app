import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css';

import NavbarItem from './navbaritem';

function Navbar(props) {
    return (
        <div className='navbar navbar-expand-lg fixed-top navbar-dark bg-primary'>
            <div className='container'>
                <a href='/' className='navbar-brand'>
                    REDE HOTEIS X
                </a>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarResponsive'
                    aria-controls='navbarResponsive'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarResponsive'>
                    <ul className='navbar-nav'>
                        <NavbarItem render='true' href='/login' label='Login' />
                    </ul>
                    <ul className='navbar-nav'>
                        <NavbarItem render='true' href='/listagem-cliente' label='Clientes' />
                    </ul>
                    <ul className='navbar-nav'>
                        <NavbarItem render='true' href='/listagem-comodidades' label='Comodidades' />
                    </ul>
                    <ul className='navbar-nav'>
                        <NavbarItem render='true' href='/listagem-funcionarios' label='Funcionarios' />
                    </ul>
                    <ul className='navbar-nav'>
                        <NavbarItem render='true' href='/listagem-hospedagem' label='Hospedagem' />
                    </ul>
                    <ul className='navbar-nav'>
                        <NavbarItem render='true' href='/listagem-hoteis' label='Hoteis' />
                    </ul>
                    <ul className='navbar-nav'>
                        <NavbarItem render='true' href='/listagem-produtos' label='Produtos' />
                    </ul>
                    <ul className='navbar-nav'>
                        <NavbarItem render='true' href='/listagem-quarto' label='Quartos' />
                    </ul>
                    <ul className='navbar-nav'>
                        <NavbarItem render='true' href='/listagem-reserva' label='Reservas' />
                    </ul>
                    <ul className='navbar-nav'>
                        <NavbarItem render='true' href='/listagem-servicos' label='Servicos' />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;