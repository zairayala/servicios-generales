import React from 'react'
import './Nosotros.css';
import idea from '../assets/idea.png'
import solution from '../assets/solution.png'
import { ReactComponent as Frame } from '../assets/bannerframe.svg';

export default function Nosotros() {
  return (
    <>
      <section id='Nosotros' className='spacing-2 container'>
        <div className='centered'>
          <div className='w-50 position-relative'>
            <img src="https://images.pexels.com/photos/442160/pexels-photo-442160.jpeg" alt="" className='img-fluid' />
            <img src="https://images.pexels.com/photos/4254160/pexels-photo-4254160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='img-fluid img-2 position-absolute bottom-0 start-0' />
            <img src="https://images.pexels.com/photos/7359568/pexels-photo-7359568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='img-fluid img-3 position-absolute top-50 end-0'
            />
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
                  clientes brindando servicios de calidad, eficiencia y seguridad con preservacion del medio ambiente
                  a precios competitivos, promover un
                  excelente clima laboral. Además contribuir al desarrollo e investigación
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
