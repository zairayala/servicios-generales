import React, { Component } from "react";
import './Clients.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tottus from '../assets/clients/tottus.png'
import falabella from '../assets/clients/falabella.png'
import maestro from '../assets/clients/maestro.png'
import open from '../assets/clients/open-plaza.png'
import ripley from '../assets/clients/ripley.png'
import sodimac from '../assets/clients/sodimac.png'
import tractos from '../assets/clients/tractos.png'
import empanadas from '../assets/clients/empanadas.png'

export default class Clients extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            pauseOnHover: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                }
              ]
          
        };

        return (
            <section id='Clients' className="spacing-3">
                <div className='container-lg centered flex-column'>
                    <div className='text-center align-self-center'>
                        <p className='title-header'><i className="bi bi-wrench-adjustable mr-auto"></i>NUESTROS CLIENTES</p>
                        <h1 className='title-content'>Realizamos servicios en distintas empresas</h1>
                        <p className='text-content'>Brindamos distintos servicios generales en Lima Metropolitana diseñados para simplificar y optimizar tu negocio ofreciendo resultados de calidad.</p>
                    </div>
                    <Slider {...settings} className="mt-4 w-100 align-self-center">
                        <div>
                            <img src={open} alt="" className="logo-style img-fluid" />
                        </div>
                        <div>
                            <img src={falabella} alt="" className="logo-style img-fluid" />
                        </div>
                        <div>
                            <img src={ripley} alt="" className="logo-style img-fluid" />
                        </div>
                        <div>
                            <img src={tottus} alt="" className="logo-style img-fluid" />
                        </div>
                        <div>
                            <img src={sodimac} alt="" className="logo-style img-fluid" />
                        </div>
                        <div>
                            <img src={maestro} alt="" className="logo-style img-fluid" />
                        </div>

                    </Slider>

                </div>

            </section>
        )
    }
}
