import React, { useEffect, useState } from 'react'
import './MainNav.css';
import logo from '../assets/logo2.png'
import { Link } from 'react-router-dom';

export default function MainNav() {


  return (
    <section id='MainNav' className='sticky-top'>
      <div className='container'>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <img src={logo} alt="" className='logo mt-1 mb-1' />
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">Inicio</Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Nosotros">Nosotros</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Servicios<i class="bi bi-chevron-down"></i>
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/servicesdetail">Servicios<i class="bi bi-chevron-down"></i></Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Clientes">Clientes</a>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/contacto">Contacto<i class="bi bi-chevron-down"></i></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>

    </section>

  )
}
