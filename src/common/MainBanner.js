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
                        <img src={banner1} className="d-block w-100 h-banner" alt="..." />
                        <div class="carousel-title d-none d-md-block top-50 start-50 translate-middle">
                            <h2>Versatilidad y confiabilidad</h2>
                            <h1 className='banner-title'>Expertos en servicios múltiples</h1>
                            <p>Amplia gama de servicios de acuerdo a tus necesidades</p>
                            <div className='d-flex justify-content-center'>
                                <Link to="#" className='button3'>Servicios</Link>
                                <Link to="#" className='button2'>Contacto</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner2} className="d-block w-100 h-banner" alt="..." />
                        <div class="carousel-title d-none d-md-block top-50 start-50 translate-middle">
                            <h2>Soluciones para tu empresa</h2>
                            <h1 className='banner-title'>Soluciones para distintos sectores</h1>
                            <p>Máxima eficiencia en servicios personalizados para diversas industrias</p>
                            <div className='d-flex justify-content-center'>
                                <Link to="#" className='button3'>Servicios</Link>
                                <Link to="#" className='button2'>Contacto</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner3} className="d-block w-100 h-banner" alt="..." />
                        <div class="carousel-title d-none d-md-block top-50 start-50 translate-middle">
                            <h2>Soluciones para tu empresa</h2>
                            <h1 className='banner-title'>Excelencia de servicios para tu empresa</h1>
                            <p>Brindamos resultados precisos, confiables y de calidad</p>
                            <div className='d-flex justify-content-center'>
                                <Link to="#" className='button3'>Servicios</Link>
                                <Link to="#" className='button2'>Contacto</Link>
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
