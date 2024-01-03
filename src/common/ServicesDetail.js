import React, { useEffect, useState } from 'react'
import { Service } from './service.js';
import './ServicesDetail.css';
import banner from '../assets/banner1.jpg';
import { Link } from 'react-router-dom';
import srv1 from '../assets/srv1.jpg';

export default function ServicesDetail() {

  const [servicioSeleccionado, setServicioSeleccionado] = useState([]);

  const selectService = (e, values) => {

    setServicioSeleccionado(values);
    var itemList = document.querySelectorAll("#list-group li");
    itemList.forEach(item => {
      item.classList.remove("active");
    })

    e.currentTarget.classList.add("active");

  }
   
  useEffect(() => {
    if(servicioSeleccionado.length===0){
      document.getElementById("box-service").style.display="none";
      const myStr = "FirstLine\n\t\SecondLine\n\ThirdLine"; 
      console.log(myStr);
    }else{
      document.getElementById("box-service").style.display="block";
    }
    

  }, [servicioSeleccionado])



  return (
    <>
      <section id='MainHeader'>
        <div className=''>
          <div className='position-relative'>
            <img src={banner} alt="" className='img-fluid' />
            <div className='d-flex flex-column text-center position-absolute top-50 start-50 translate-middle'>
              <h2>Servicios</h2>
              <p className='centered'><Link class="nav-link active" aria-current="page" to="/">Inicio</Link><i class="bi bi-chevron-compact-right"></i>Servicios </p>
            </div>
          </div>
        </div>
      </section>

      <section id='ServicesDetail' className='container spacing-2'>
        <div className='row'>
          <div className='col-3'>
            <ul className="list-group" id='list-group'>
              <li className="list-group-item active">Selecciona un servicio</li>
              {Service.map((values) => (
                <li className="list-group-item" key={values.id} onClick={(e) => selectService(e, values)}>{values.title}</li>
              ))}
            </ul>
          </div>
          <div className='col-9'>
            <div className='pb-4' id='box-service'>
              <div className='centered row'>
                <div className='col'>
                  <h2>{servicioSeleccionado.title}</h2>
                  <hr />
                  <p>{servicioSeleccionado.descripcion}</p>
                  <button className='box-description w-100' data-bs-toggle="button">
                    <div data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" aria-pressed="true">
                      <p className='btnSrv d-flex justify-content-between'>Servicios incluidos
                        <div className='box-icon'><i className="icon-down bi bi-arrow-bar-down"></i></div>
                      </p>
                    </div>
                  </button>
                </div>
                <div className='col'>
                  <img src={servicioSeleccionado.img} alt="" className='img-fluid' />

                </div>
                <div >
                  <div className="collapse" id="collapseExample" dangerouslySetInnerHTML={{ __html: servicioSeleccionado.detalledescripcion }}>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form action="send.php" className='form-contact' method='post'>
                <div className='d-flex'>
                  <div className=''>
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
                  <div className=''>
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
                <div className='d-flex'>
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
                      <option value="" defaultValue>
                        Seleccione servicio requerido
                      </option>
                      <option value="Servicio 1">Servicio 1</option>
                      <option value="Servicio 2">Servicio 2</option>
                      <option value="Servicio 3">Servicio 3</option>
                      <option value="Servicio 4">Servicio 4</option>
                      <option value="Servicio 5">Servicio 5</option>
                    </select>
                  </div>
                </div>
                <div className='text-area'>
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
                <button type='submit' className='button3 w-100'>ENVIAR DATOS</button>
              </form>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}
