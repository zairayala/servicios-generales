import React from 'react'
import './MainFooter.css';
import logo from '../assets/logo1.png'
import { Link } from 'react-router-dom';

export default function MainFooter() {

  return (
    <section id='MainFooter'>
      <div className='footer-img centered'>
        <div className='row container'>
          <div className='col'>
            <img src={logo} alt="" className='w-50 mb-4' />
              <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente impedit dignissimos autem, voluptatum vero ullam mollitia accusamus dolor adipisci quidem libero cum ipsa vitae quae nam rerum fuga itaque reiciendis.</p>
              <Link to="#" className='button2'>Leer más</Link>
          </div>
          <div className='col'>
            <h2>Información</h2>
            <div className='bottom-border'></div>
            <ul className='info-list mt-4'>
              <li>
                <Link to="#">
                  <span className='bi bi-chevron-right'></span>
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span className='bi bi-chevron-right'></span>
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span className='bi bi-chevron-right'></span>
                  Clientes
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span className='bi bi-chevron-right'></span>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className='col'>
            <h2>Contacto</h2>
            <div className='bottom-border'></div>
            <div className='contact mt-4'>
              <div>
                <h2><i class="bi bi-geo-alt-fill"></i>Dirección</h2>
                <p>San Juan de Miraflores 15806</p>
              </div>
              <div>
                <h2><i class="bi bi-telephone-fill"></i>Teléfono</h2>
                <p>+989999999</p>
              </div>
              <div>
                <h2><i class="bi bi-envelope-fill"></i>E-mail</h2>
                <p>correo@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-copyright d-flex justify-content-center align-items-center'>
        <div><p>© 2023 <text>Servicios Generales.</text> Todos los derechos reservados</p></div>
        <div className='d-flex justify-content-end social-media w-50'>
          <div><Link to="#"><i class="bi bi-facebook"></i></Link></div>
          <div><Link to="#"><i class="bi bi-instagram"></i></Link></div>
          <div><Link to="#"><i class="bi bi-tiktok"></i></Link></div>
        </div>
      </div>
    </section>


  )
}
