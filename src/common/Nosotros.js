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

  return (
    <>
      <section id='Nosotros' className='spacing-2 container'>
        <div className='centered'>
          <div className='w-50 position-relative'>
            <img src={collage_service} alt="" className='img-fluid' />
          </div>
          <div className='w-50 aboutus-content'>
            <div className='text-start'>
              <p className='title-header'><i className="bi bi-wrench-adjustable mr-auto"></i>SOBRE NOSOTROS</p>
              <h1 className='title-content'>Ofrecemos diversos servicios</h1>
              <p className='text-content'>Somos una empresa dedicada a servicios
                generales, que le brinda seguridad y calidad en cada servicio. Esto incluye un equipo
                con gran experiencia en el rubro retail y empresarial el cual le permitirá tener un servicio eficaz.
                Brindamos trabajos lo más
                prolijo posible con los estándares de calidad exigidos en el
                mercado actual.</p>
            </div>
            <div className='centered mt-5'>
              <div className='spacing-3 w-50'>
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
              <div className='spacing-3 w-50'>
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
        </div>
      </section>
      <div className='position-absolute content-frame2 w-100'><Frame></Frame></div>
    </>
  )
}
