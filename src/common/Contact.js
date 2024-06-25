import React from 'react'
import { Service } from './service.js';
import './Contact.css'
import electrician from '../assets/electrician.png'

export default function Contact() {
  return (
    <section id='Contact' className='container'>
      <div className='d-flex'>
        <div className=' d-flex img-electrician'>
          <img src={electrician} alt="" className='' />
        </div>
        <div className=' d-flex justify-content-start spacing-2'>
          <div className=''>
            <div className='text-start'>
              <p className='title-header'><i className="bi bi-wrench-adjustable mr-auto"></i>INFORMACIÓN DE CONTACTO</p>
              <h1 className='title-content'>Nosotros te contactamos</h1>
              <p className='text-content'>Ingresa tus datos en el formulario y nuestro equipo se pondrá en contacto.</p>
            </div>
            <div>
              dsdf
            </div>
            <div className="">
              <div className="">
                <form action="https://formsubmit.co/ximzar123@gmail.com" className='form-contact' method='post'>
                  <div className='d-flex'>
                    <div className="">
                      <div className='content-between w-100'>
                        <span>NOMBRE/EMPRESA</span>
                        <i class="bi bi-person-fill"></i>
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
                        <i class="bi bi-envelope-fill"></i>
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
                  <div className="d-flex">
                    <div className=''>
                      <div className='content-between w-100'>
                        <span>TELÉFONO CELULAR</span>
                        <i class="bi bi-telephone-fill"></i>
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
                      <i class="bi bi-envelope-fill"></i>
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
    </section>
  )
}
