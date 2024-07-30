import React, { useEffect } from 'react'
import './Nosotros.css';
import idea from '../assets/idea.png'
import solution from '../assets/solution.png'
import { ReactComponent as Frame } from '../assets/bannerframe.svg';
import collage_service from '../assets/collage-service.png'
import brochure_link from '../assets/archives/BROCHURE-SERGEMC.pdf'
import { Link } from 'react-router-dom';
export default function Nosotros() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <div className='col position-relative'>
            <img src={collage_service} alt="" className='img-fluid' />
            <li><Link to={brochure_link} download>Descargar Archivo 1</Link></li>

          </div>

        </div>
      </section>
      <div className='position-absolute content-frame2 w-100'><Frame></Frame></div>
    </>
  )
}
