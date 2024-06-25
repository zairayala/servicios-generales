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
            <p className='mb-5'>Empresa independiente que brinda una gama de servicios
              con mucha seriedad y responsabilidad.
              Nos evocamos principalmente al rubro de retail y empresarial
              satisfaciendo la
              necesidad de nuestros clientes con trabajos prolijos y los estándares de calidad exigidos en el
              mercado actual.</p>
            <a href="/#Nosotros" className='button2'>Leer más</a>
          </div>
          <div className='col'>
            <h2>Información</h2>
            <div className='bottom-border'></div>
            <ul className='info-list mt-4'>
              <li>
                <a href="/#Nosotros">
                  <span className='bi bi-chevron-right'></span>
                  Nosotros
                </a>
              </li>
              <li>
                <a href="/#Services">
                  <span className='bi bi-chevron-right'></span>
                  Servicios
                </a>
              </li>
              <li>
                <a href="/#Clients">
                  <span className='bi bi-chevron-right'></span>
                  Clientes
                </a>
              </li>
              <li>
                <a href="/#Contact">
                  <span className='bi bi-chevron-right'></span>
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className='col'>
            <h2>Contacto</h2>
            <div className='bottom-border'></div>
            <div className='contact mt-4'>
              <div>
                <h2><i class="bi bi-geo-alt-fill"></i>Dirección</h2>
                <p>Jr. Junín Mz. Ñ10 Lote 4 Sector
                  Leoncio Prado, Pamplona Alta - S.J.M</p>
              </div>
              <div>
                <h2><i class="bi bi-telephone-fill"></i>Teléfono</h2>
                <p>942 025 618 - 966 968 211</p>
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
