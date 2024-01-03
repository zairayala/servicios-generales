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
              <p className='text-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fuga quis, expedita ipsa vitae beatae doloribus voluptatum consectetur sapiente temporibus, nostrum quam quaerat dolore saepe minima, fugiat ab fugit quod!</p>
            </div>
            <div className='centered mt-5'>
              <div className='spacing-3'>
                <div className='position-relative'>
                  <img src={idea} alt="" className='icono' />
                  <div className='icono-bg '></div>
                </div>
                <h4>Lorem ipsum</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, accusamus!</p>
              </div>
              <div className='spacing-3'>
                <div className='position-relative'>
                  <img src={solution} alt="" className='icono' />
                  <div className='icono-bg '></div>
                </div>
                <h4>Lorem ipsum</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, accusamus!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='position-absolute content-frame2 w-100'><Frame></Frame></div>
    </>
  )
}
