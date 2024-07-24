import React from 'react'
import './MainBanner.css';
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import { ReactComponent as Frame } from '../assets/bannerframe.svg';
import { Link } from 'react-router-dom';

export default function MainBanner() {
    return (
        <section id='MainBanner'>
            <div id="carouselExampleControls" className="carousel slide position-relative" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner1} className="w-100 h-banner" alt="..." />
                        <div class="carousel-title top-50 start-50 translate-middle">
                            <h2>Soluciones para tu empresa</h2>
                            <h1 className='banner-title'>Soluciones en cualquier sector</h1>
                            <p>Máxima eficiencia en servicios personalizados para diversas industrias</p>
                            <div className='d-flex justify-content-center'>
                                <a href="#Services" className='button3'>Servicios</a>
                                <a href="#Contact" className='button2 button2-sm'>Contacto</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner2} className="w-100 h-banner" alt="..." />
                        <div class="carousel-title top-50 start-50 translate-middle">
                            <h2>Seguridad y calidad</h2>
                            <h1 className='banner-title'>Excelencia de servicios</h1>
                            <p>Brindamos resultados prolijos, confiables y con los estándares de calidad exigidos en el mercado actual.</p>

                            <div className='d-flex justify-content-center'>
                                <a href="#Services" className='button3'>Servicios</a>
                                <a href="#Contact" className='button2 button2-sm'>Contacto</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner3} className="w-100 h-banner" alt="..." />
                        <div class="carousel-title top-50 start-50 translate-middle">
                            <h2>Garantía y confiabilidad</h2>
                            <h1 className='banner-title'>Amplia experiencia</h1>
                            <p>Trabajamos con un equipo eficaz con más de 5 años de experiencia en el rubro retail.</p>

                            <div className='d-flex justify-content-center'>
                                <a href="#Services" className='button3'>Servicios</a>
                                <a href="#Contact" className='button2 button2-sm'>Contacto</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <div className='position-absolute content-frame w-100'><Frame></Frame></div>
            </div>
        </section>
    )
}
