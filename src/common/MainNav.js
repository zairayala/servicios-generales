import React, { useEffect, useState } from 'react'
import './MainNav.css';
import logo from '../assets/logo2.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRef } from "react";

export default function MainNav() {

  const navigate = useNavigate();
  const navButton = useRef(null);
  const linksContainerRef = useRef(null);

  const navToService = (index) => {
    navigate('/servicesDetail', { state: { service: index } });
    collapseNav();
  }

  function collapseNav() {
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");
  }

  return (
    <section id='MainNav' className='sticky-top'>
      <div className='container'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link to="/"><img src={logo} alt="" className='logo img-fluid mt-1 mb-1' /></Link>
            <button ref={navButton}
              className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown" ref={linksContainerRef}
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/" onClick={collapseNav}>Inicio</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#Nosotros" onClick={collapseNav}>Nosotros</a>
                </li>


                <li className="nav-item nav-services">
                  <div className='nav-link nav-services-title' href="">Servicios<i class="bi bi-chevron-down"></i></div>
                  <ul className='dropdown-services'>
                    <li className='nav-service' onClick={() => navToService(0)}>Instalaciones sanitarias</li>
                    <li className='nav-service' onClick={() => navToService(1)}>Electricidad</li>
                    <li className='nav-service' onClick={() => navToService(2)}>Aire acondicionado</li>
                    <li className='nav-service' onClick={() => navToService(3)}>Pintura</li>
                    <li className='nav-service' onClick={() => navToService(4)}>Drywall</li>
                    <li className='nav-service' onClick={() => navToService(5)}>Estructuras metálicas</li>
                    <li className='nav-service' onClick={() => navToService(6)}>Otros servicios</li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/#Clients" onClick={collapseNav}>Clientes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#Contact" onClick={collapseNav}>Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>

    </section>

  )
}
