import React from 'react'
import { Service } from './service.js';
import './Contact.css'
import electrician from '../assets/electrician.png'

export default function Contact() {
  return (
    <section id='Contact' className='container-lg'>
      <div className='row justify-content-center'>
        <div className='col img-electrician'>
          <img src={electrician} alt="" className='img-fluid h-100' />
        </div>
        <div className='col spacing-3'>
          <div className='text-start'>
            <p className='title-header'><i className="bi bi-wrench-adjustable mr-auto"></i>INFORMACIÓN DE CONTACTO</p>
            <h1 className='title-content'>CONTÁCTANOS AHORA</h1>
            <p className='text-content'>Puedes contactarnos mediante cualquier canal que se brinda o enviarnos un mensaje directo rellenando el formulario.</p>
          </div>


          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  CONTACTO DIRECTO
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className='contact-info'>
                    <div className='d-flex'>
                      <i className="bi bi-geo-alt-fill"></i>
                      <p>
                        <span>DIRECCIÓN</span>
                        <span>Jr. Junín Mz. Ñ10 Lote 4 Sector
                          Leoncio Prado, Pamplona Alta - S.J.M</span>
                      </p>
                    </div>

                    <div className='d-flex'>
                      <i className="bi bi-geo-alt-fill"></i>
                      <p>
                        <span>TELÉFONO</span>
                        <span>942 025 618 - 966 968 211</span>
                      </p>
                    </div>
                    <div className='d-flex'>
                      <i className="bi bi-geo-alt-fill"></i>
                      <p>
                        <span>E-MAIL</span>
                        <span>correo@gmail.com</span>
                      </p>
                    </div>

                    <div className='d-flex'>
                      <i className="bi bi-geo-alt-fill"></i>
                      <p>
                        <span>HORARIO ATENCIÓN</span>
                        <span>De Lunes a Sábado</span>
                      </p>
                    </div>


                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  ENVIAR MENSAJE
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className="form-contact">
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
            </div>
          </div>



        </div>
      </div>

    </section>
  )
}
