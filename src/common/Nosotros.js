import React, { useEffect } from 'react'
import './Nosotros.css';
import idea from '../assets/idea.png'
import solution from '../assets/solution.png'
import { ReactComponent as Frame } from '../assets/bannerframe.svg';
import collage_service from '../assets/collage-service.png'

export default function Nosotros() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const downlandArchive = (downland_number) => {
    const button1 = document.querySelector('.dw-1');
    const button2 = document.querySelector('.dw-2');

    if(downland_number==1){
      button1.classList.add('load');

      setTimeout(function () {
        button1.classList.add('done');
      }, 1000);
  
      setTimeout(function () {
        button1.classList.remove('load', 'done');
      }, 5000)
       
    }else{
      button2.classList.add('load');

      setTimeout(function () {
        button2.classList.add('done');
      }, 1000);
  
      setTimeout(function () {
        button2.classList.remove('load', 'done');
      }, 5000);
       
    }

  };


  return (
    <>
      <section id='Nosotros' className='spacing-3 container-lg'>
        <div className='row row-cols-1 row-cols-lg-2'>
          <div className='col aboutus-content'>
            <div className='text-start'>
              <p className='title-header'><i className="bi bi-wrench-adjustable mr-auto"></i>SOBRE NOSOTROS</p>
              <h1 className='title-content'>Ofrecemos diversos servicios</h1>
              <p className='text-content'>Somos una empresa dedicada a servicios
                generales, que le brinda seguridad y calidad en cada servicio. Esto incluye un equipo
                con gran experiencia en el rubro retail y empresarial el cual le permitirá tener un servicio eficaz.
                Brindamos trabajos lo más
                prolijo posible con los estándares de calidad exigidos en el
                mercado actual. Contamos con la capacidad de atender en <span className='fw-bolder'>Lima Metropolitana</span> con personal técnico,
                equipos y herramientas disponibles las 24 horas.</p>
            </div>
            <div className='row justify-content-center mt-5'>
              <div className='spacing-4 col'>
                <div className='position-relative'>
                  <img src={solution} alt="" className='icono' />
                  <div className='icono-bg '></div>
                </div>
                <h4>Misión</h4>
                <p>Satisfacer las necesidades de nuestros
                  clientes a precios competitivos con servicios de calidad, seguridad con preservacion del medio ambiente.
                  Además contribuir al desarrollo e investigación
                  de nuevas tecnologías</p>
              </div>
              <div className='spacing-4 col'>
                <div className='position-relative'>
                  <img src={idea} alt="" className='icono' />
                  <div className='icono-bg '></div>
                </div>
                <h4>Visión</h4>
                <p>Afianzarnos como una empresa
                  líder en Servicios Generales en el
                  Perú. Nos basamos en el trabajo
                  responsable, dedicado e innovador
                  de sus directivos y colaboradores.</p>
              </div>
            </div>
          </div>
          <div className='col '>
            <img src={collage_service} alt="" className='img-fluid' />
            <div className='archives-content d-flex flex-column align-items-center'>
              <a onClick={() => downlandArchive(1)} href="/archives/CARTA DE PRESENTACIÓN  SERGEMC.pdf" download className='d-flex align-items-center mb-4'>
                <div class="btn-circle-download dw-1" >
                  <svg id="arrow" width="14px" height="20px" viewBox="17 14 14 20">
                    <path d="M24,15 L24,32"></path>
                    <polyline points="30 27 24 33 18 27"></polyline>
                  </svg>
                  <svg id="check" width="21px" height="15px" viewBox="13 17 21 15">
                    <polyline points="32.5 18.5 20 31 14.5 25.5"></polyline>
                  </svg>
                  <svg id="border" width="48px" height="48px" viewBox="0 0 48 48">
                    <path d="M24,1 L24,1 L24,1 C36.7025492,1 47,11.2974508 47,24 L47,24 L47,24 C47,36.7025492 36.7025492,47 24,47 L24,47 L24,47 C11.2974508,47 1,36.7025492 1,24 L1,24 L1,24 C1,11.2974508 11.2974508,1 24,1 L24,1 Z"></path>
                  </svg>
                </div>
                <span>CARTA DE PRESENTACIÓN</span>
              </a>
              <a onClick={() => downlandArchive(2)} href="/archives/BROCHURE-SERGEMC.pdf" download className='d-flex align-items-center'>
                <div class="btn-circle-download dw-2" >
                  <svg id="arrow" width="14px" height="20px" viewBox="17 14 14 20">
                    <path d="M24,15 L24,32"></path>
                    <polyline points="30 27 24 33 18 27"></polyline>
                  </svg>
                  <svg id="check" width="21px" height="15px" viewBox="13 17 21 15">
                    <polyline points="32.5 18.5 20 31 14.5 25.5"></polyline>
                  </svg>
                  <svg id="border" width="48px" height="48px" viewBox="0 0 48 48">
                    <path d="M24,1 L24,1 L24,1 C36.7025492,1 47,11.2974508 47,24 L47,24 L47,24 C47,36.7025492 36.7025492,47 24,47 L24,47 L24,47 C11.2974508,47 1,36.7025492 1,24 L1,24 L1,24 C1,11.2974508 11.2974508,1 24,1 L24,1 Z"></path>
                  </svg>
                </div>
                <span>DESCARGAR BROCHURE</span>
              </a>


            </div>

          </div>

        </div>
      </section>
      <div className='position-absolute content-frame2 w-100'><Frame></Frame></div>
    </>
  )
}
