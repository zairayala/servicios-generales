import React, { Component } from "react";
import './Services.css';
import { Link, useNavigate } from 'react-router-dom';
import srv1 from '../assets/services/srv1.jpg'
import srv2 from '../assets/services/srv2.jpg'
import srv3 from '../assets/services/srv3.jpg'
import srv4 from '../assets/services/srv4.jpg'
import srv5 from '../assets/services/srv5.jpg'
import srv6 from '../assets/services/srv6.jpg'
import srv7 from '../assets/services/srv7.jpg'

import { ReactComponent as Frame } from '../assets/bannerframe3.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {

		const navigate = useNavigate();

		const settings = {
			dots: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			

			infinite: true,
			autoplay: false,
			autoplaySpeed: 5000,
			pauseOnHover: true,

			responsive: [
			  {
				breakpoint: 1024,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 2,
				}
			  },
			  {
				breakpoint: 600,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				}
			  },
			  {
				breakpoint: 480,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
				}
			  }
			]
				  
		};

		return (
			<section id='Services' className="spacing-2 position-relative">
				<div className="container d-flex flex-column">
					<div className='text-center align-self-center mt-4'>
						<p className='title-header'><i className="bi bi-wrench-adjustable mr-auto"></i>NUESTROS SERVICIOS</p>
						<h1 className='title-content'>Ofrecemos diversos servicios</h1>
						<p className='text-content'>Brindamos distintos servicios generales diseñados para simplificar y optimizar tu negocio ofreciendo resultados de calidad.</p>
					</div>
					<Slider {...settings} className='mt-4 mb-4'>
						<div className="card">
							<div className='centered flex-column align-items-center'>
								<img src={srv1} className="card-img-top" alt="" />
								<div className='icon-box centered position-relative'>
									<div className='icon-box-border '>
										<i class="bi bi-1-circle position-absolute top-50 end-0 translate-middle-y centered align-items-center"></i>
									</div>
								</div>
							</div>
							<div className="card-body">
								<h5 className="card-title">Instalación sanitaria</h5>
								<p className="card-text">Contamos con personal técnico mas calificado y
									los equipos de ultima generación en detección de
									fugas de agua y desagüe, alcantarillado, instalación de tubería de polipropileno, detección de fugas en inodoros y urinarios, detección de fugas en tanques y cisternas, detección de fugas en red de agua y desagüe, detección de filtraciones en superficies, reparación de filtración de red de agua, reparación de filtración de red de desagüe</p>
								<div onClick={() => navigate('/servicesDetail', { state: { service: 0 } })} className='btnService'> <i class="bi bi-arrow-right mr-auto"></i>Leer más</div>
							</div>
						</div>
						<div className="card">
							<div className='centered flex-column align-items-center'>
								<img src={srv2} className="card-img-top" alt="" />
								<div className='icon-box centered position-relative'>
									<div className='icon-box-border '>
										<i class="bi bi-2-circle position-absolute top-50 end-0 translate-middle-y centered align-items-center"></i>
									</div>
								</div>
							</div>

							<div className="card-body">
								<h5 className="card-title">Trabajos eléctricos</h5>
								<p className="card-text">Mantenimientos, preventivos y correctivos de instalaciones eléctricas en viviendas e
									industrias, asi como de equipos eléctricos. Todo bajo las normas del CNE y seguro SCTR y respectivas EPPs.</p>
								<div onClick={() => navigate('/servicesDetail', { state: { service: 1 } })} className='btnService'> <i class="bi bi-arrow-right mr-auto"></i>Leer más</div>
							</div>
						</div>
						<div className="card">
							<div className='centered flex-column align-items-center'>
								<img src={srv3} className="card-img-top" alt="" />
								<div className='icon-box centered position-relative'>
									<div className='icon-box-border '>
										<i class="bi bi-3-circle position-absolute top-50 end-0 translate-middle-y centered align-items-center"></i>
									</div>
								</div>
							</div>

							<div className="card-body">
								<h5 className="card-title">Aire acondicionado</h5>
								<p className="card-text">Reparación, mantenimiento e
									instalación de equipos de aire acondicionado y frío en
									todas las marcas de centros comerciales, empresas
									privadas, públicas y domésticas</p>
								<div onClick={() => navigate('/servicesDetail', { state: { service: 2 } })} className='btnService'> <i class="bi bi-arrow-right mr-auto"></i>Leer más</div>
							</div>
						</div>
						<div className="card">
							<div className='centered flex-column align-items-center'>
								<img src={srv4} className="card-img-top" alt="" />
								<div className='icon-box centered position-relative'>
									<div className='icon-box-border '>
										<i class="bi bi-4-circle position-absolute top-50 end-0 translate-middle-y centered align-items-center"></i>
									</div>
								</div>
							</div>

							<div className="card-body">
								<h5 className="card-title">Trabajos en pintura</h5>
								<p className="card-text">Contamos con el personal técnico mas calificado y
									equipos para trabajo en altura tipo andamios
									colgantes certificados y andamios convencionales. Trabajos en impermealizaciones, empastados, texturas, barnizado de puertas, </p>
								<div onClick={() => navigate('/servicesDetail', { state: { service: 3 } })} className='btnService'> <i class="bi bi-arrow-right mr-auto"></i>Leer más</div>
							</div>
						</div>
						<div className="card">
							<div className='centered flex-column align-items-center'>
								<img src={srv5} className="card-img-top" alt="" />
								<div className='icon-box centered position-relative'>
									<div className='icon-box-border '>
										<i class="bi bi-5-circle position-absolute top-50 end-0 translate-middle-y centered align-items-center"></i>
									</div>
								</div>
							</div>

							<div className="card-body">
								<h5 className="card-title">Trabajos en Drywall</h5>
								<p className="card-text">-Instalaciones en drywall, cielo raso, tabiqueria en drywall, cielo raso en baldosas, diseños arquitectonicos, tableros eléctricos, grupos electrógenos, sistema de puesta a tierra, entre otros, bombas de agua ( Sumergibles, hidroneumático y de presón constante)
									, aterramientos eléctricos
									, instalación y suministro de luminarias y accesorios
									, electrificación
									, instalación sanitaria
									-Mantenimiento de drywall y cielo raso
									-Servicios generales, construcción civil y otros
									-Diseños arquitectonicos</p>
								<div onClick={() => navigate('/servicesDetail', { state: { service: 4 } })} className='btnService'> <i class="bi bi-arrow-right mr-auto"></i>Leer más</div>
							</div>
						</div>
						<div className="card">
							<div className='centered flex-column align-items-center'>
								<img src={srv6} className="card-img-top" alt="" />
								<div className='icon-box centered position-relative'>
									<div className='icon-box-border '>
										<i class="bi bi-6-circle position-absolute top-50 end-0 translate-middle-y centered align-items-center"></i>
									</div>
								</div>
							</div>

							<div className="card-body">
								<h5 className="card-title">Estructuras metálicas</h5>
								<p className="card-text">Fabricación y montaje de estructuras metálicas a
									detalle, soldadura Tig-Mig para centros comerciales,
									empresas privadas, públicas y domésticas. Tales como: plataformas, coberturas y estructuras, puertas enrollables galvanizadas, mantenimiento y reparación de puertas enrollables, puerta Corrediza, levadiza y batiente, ventanas.
									- Rejillas
									- Canaletas fluviales
									- Suministro e instalación de ruedas fenólicas y garruchas para coches de
									centros comerciales</p>
								<div onClick={() => navigate('/servicesDetail', { state: { service: 5 } })} className='btnService'> <i class="bi bi-arrow-right mr-auto"></i>Leer más</div>
							</div>
						</div>
						<div className="card">
							<div className='centered flex-column align-items-center'>
								<img src={srv7} className="card-img-top" alt="" />
								<div className='icon-box centered position-relative'>
									<div className='icon-box-border '>
										<i class="bi bi-7-circle position-absolute top-50 end-0 translate-middle-y centered align-items-center"></i>
									</div>
								</div>
							</div>

							<div className="card-body">
								<h5 className="card-title">Otros servicios generales</h5>
								<p className="card-text">Además de los servicios presentados tambien realizamos enchape de vinilico, mayólica y porcelanatos, carpintería en general, mantenimiento de áreas verdes, manto asfáltico, entre otros trabajos servicios generales.</p>
								<div onClick={() => navigate('/servicesDetail', { state: { service: 6 } })} className='btnService'> <i class="bi bi-arrow-right mr-auto"></i>Leer más</div>
							</div>
						</div>

					</Slider>

				</div>
				<div className='position-absolute content-frame w-100'><Frame></Frame></div>

			</section>
		)
	}
	export default Services;
