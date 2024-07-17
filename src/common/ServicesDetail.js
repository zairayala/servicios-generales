import React, { useEffect, useState } from 'react';
import { Service } from './service.js';
import banner from '../assets/banner1.jpg';
import { Link, useLocation } from 'react-router-dom';
import './ServicesDetail.css';


export default function ServicesDetail() {
  const location = useLocation();
  const { service } = location.state || {};

  const [servicioSeleccionado, setServicioSeleccionado] = useState([]);


  useEffect(() => {
    setServicioSeleccionado(Service[service]);
  }, [service]);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <>
      <section id='MainHeader'>
        <div className=''>
          <div className='position-relative'>
            <img src={banner} alt="" className='img-fluid' />
            <div className='d-flex flex-column text-center position-absolute top-50 start-50 translate-middle'>
              <h2>Servicios</h2>
              <p className='centered'><Link class="toHome" aria-current="page" to="/">Inicio</Link><i class="bi bi-chevron-compact-right"></i>Servicios </p>
            </div>
          </div>
        </div>
      </section>

      <section id='ServicesDetail' className='container-lg spacing-2'>
        <div className='row row-cols-1 row-cols-lg-2'>
          <div className='col col-lg-3'>
            <ul className="list-group" id='list-group'>
              <li className="list-group-item">Selecciona un servicio</li>
              {Service.map((values) => (
                <li
                  className={`list-group-item ${servicioSeleccionado.id === values.id ? 'active' : ''}`}
                  key={values.id}
                  onClick={() => setServicioSeleccionado(values)}>{values.title}</li>
              ))}
            </ul>
          </div>
          <div className='col col-lg-9'>
            <div className='pb-4' id='box-service'>
              <div className='centered row'>
                <h2>{servicioSeleccionado.title}</h2>
                <hr />

                <div className='col'>
                  <p>{servicioSeleccionado.descripcion}</p>
                  <img src={servicioSeleccionado.img} alt="" className='img-fluid rounded' />
                  <img src={servicioSeleccionado.img2} alt="" className='img-fluid mt-2 rounded' />

                </div>
                <div className='col'>
                  <div className='box-description w-100'>
                      <p className='btnSrv d-flex justify-content-between'>Servicios incluidos
                        <div className='box-icon'><i className="icon-down bi bi-arrow-bar-down"></i></div>
                      </p>
                      <hr />

                      <div className='mt-3' dangerouslySetInnerHTML={{ __html: servicioSeleccionado.detalledescripcion }}>
                    </div>

                  </div>

                </div>
              </div>
            </div>
            <div>
              <h2 className='form-content-title pt-2 pb-2'>Contáctanos aquí:</h2>
              <form action="https://formsubmit.co/ximzar123@gmail.com" className='form-contact' method='post'>
                <div className='content-between'>
                  <div className="">
                    <div className='content-between w-100'>
                      <span>NOMBRE/EMPRESA</span>
                      <i className="bi bi-person-fill"></i>
                    </div>
                    <input
                      type="text"
                      className='form-control-contact'
                      name='name'
                      placeholder='Empresa123'
                      required />
                  </div>
                  <div className="">
                    <div className='content-between w-100'>
                      <span>E-MAIL</span>
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <input
                      type="email"
                      className='form-control-contact'
                      name='email'
                      placeholder='ejemplo@serviciosgenerales.com'
                      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                      required />

                  </div>

                </div>
                <div className="content-between pt-4">
                  <div className=''>
                    <div className='content-between w-100'>
                      <span>TELÉFONO CELULAR</span>
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <input
                      type="text"
                      className='form-control-contact'
                      name='phone'
                      placeholder='999999999'
                      pattern="[0-9]{9}"
                      required />
                  </div>
                  <div className=''>
                    SERVICIO<br />
                    <select name="service" id="" className='form-control-contact'>
                      <option value="" disabled selected>
                        Seleccione servicio requerido
                      </option>
                      {Service.map((values) => (

                        <option
                          value={values.title}
                          key={values.id}
                          selected={servicioSeleccionado.id === values.id}

                        >
                          {values.title}
                        </option>

                      ))}

                    </select>

                  </div>

                </div>
                <div className='text-area pt-1'>
                  <div className='content-between w-100'>
                    <span>MENSAJE (opcional)</span>
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    className='form-control-contact'>
                  </textarea>
                </div>

                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="Nueva solicitud de servicio" />
                <input type="hidden" name="_next" value="http://localhost:3000/" />
                {/* <input type="hidden" name="_cc" value="another@email.com" /> */}

                <button type='submit' className='button3 w-100'>ENVIAR DATOS</button>


              </form>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
