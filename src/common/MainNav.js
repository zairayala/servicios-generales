import React, { useEffect, useState } from 'react'
import './MainNav.css';
import logo from '../assets/logo2.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function MainNav() {

  const navigate = useNavigate();

  return (
    <section id='MainNav' className='sticky-top'>
      <div className='container'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <img src={logo} alt="" className='logo mt-1 mb-1' />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#Nosotros">Nosotros</a>
                </li>


                <li className="nav-item nav-services">
                  <a className='nav-link nav-services-title' href="/#Services">Servicios<i class="bi bi-chevron-down"></i></a>
                  <ul className='dropdown-services'>
                    <li className='nav-link' onClick={() => navigate('/servicesDetail', { state: { service:0 } })}>Instalaciones sanitarias</li>
                    <li className='nav-link' onClick={() => navigate('/servicesDetail', { state: { service:1 } })}>Electricidad</li>
                    <li className='nav-link' onClick={() => navigate('/servicesDetail', { state: { service:2 } })}>Aire acondicionado</li>
                    <li className='nav-link' onClick={() => navigate('/servicesDetail', { state: { service:3 } })}>Pintura</li>
                    <li className='nav-link' onClick={() => navigate('/servicesDetail', { state: { service:4 } })}>Drywall</li>
                    <li className='nav-link' onClick={() => navigate('/servicesDetail', { state: { service:5 } })}>Estructuras metálicas</li>
                    <li className='nav-link' onClick={() => navigate('/servicesDetail', { state: { service:6 } })}>Otros servicios</li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/#Clients">Clientes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#Contact">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>

    </section>

  )
}
