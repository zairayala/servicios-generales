import React, { Component } from "react";
import './Services.css';
import { Link } from 'react-router-dom';
import banner1 from '../assets/srv1.jpg'
import { ReactComponent as Frame } from '../assets/bannerframe3.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Services extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 100000,
			pauseOnHover: true
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
								<img src={banner1} className="card-img-top" alt="" />
								<div className='icon-box centered position-relative'>
									<div className='icon-box-border '>
										<i class="bi bi-check-lg position-absolute top-50 end-0 translate-middle-y centered align-items-center"></i>
									</div>
								</div>
							</div>
							<div className="card-body">
								<h5 className="card-title">Servicio 1</h5>
								<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quisquam laudantium rem vel!</p>
								<Link to="/servicesdetail" className='btnService'> <i class="bi bi-arrow-right mr-auto"></i>Leer más</Link>
							</div>
						</div>
						<div className="card">
							<div className='centered flex-column align-items-center'>
								<img src={banner1} className="card-img-top" alt="" />
								<div className='icon-box centered position-relative'>
									<div className='icon-box-border '>
										<i class="bi bi-check-lg position-absolute top-50 end-0 translate-middle-y centered align-items-center"></i>
									</div>
								</div>
							</div>

							<div className="card-body">
								<h5 className="card-title">Servicio 2</h5>
								<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quisquam laudantium rem vel!</p>
								<Link to="#" className='btnService'> <i class="bi bi-arrow-right mr-auto"></i>Leer más</Link>
							</div>
						</div>
						<div className="card">
							<div className='centered flex-column align-items-center'>
								<img src={banner1} className="card-img-top" alt="" />
								<div className='icon-box centered position-relative'>
									<div className='icon-box-border '>
										<i class="bi bi-check-lg position-absolute top-50 end-0 translate-middle-y centered align-items-center"></i>
									</div>
								</div>
							</div>

							<div className="card-body">
								<h5 className="card-title">Servicio 3</h5>
								<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quisquam laudantium rem vel!</p>
								<Link to="#" className='btnService'> <i class="bi bi-arrow-right mr-auto"></i>Leer más</Link>
							</div>
						</div>
						<div className="card">
							<div className='centered flex-column align-items-center'>
								<img src={banner1} className="card-img-top" alt="" />
								<div className='icon-box centered position-relative'>
									<div className='icon-box-border '>
										<i class="bi bi-check-lg position-absolute top-50 end-0 translate-middle-y centered align-items-center"></i>
									</div>
								</div>
							</div>

							<div className="card-body">
								<h5 className="card-title">Servicio 4</h5>
								<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quisquam laudantium rem vel!</p>
								<Link to="#" className='btnService'> <i class="bi bi-arrow-right mr-auto"></i>Leer más</Link>
							</div>
						</div>
						<div className="card">
							<div className='centered flex-column align-items-center'>
								<img src={banner1} className="card-img-top" alt="" />
								<div className='icon-box centered position-relative'>
									<div className='icon-box-border '>
										<i class="bi bi-check-lg position-absolute top-50 end-0 translate-middle-y centered align-items-center"></i>
									</div>
								</div>
							</div>

							<div className="card-body">
								<h5 className="card-title">Servicio 5</h5>
								<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quisquam laudantium rem vel!</p>
								<Link to="#" className='btnService'> <i class="bi bi-arrow-right mr-auto"></i>Leer más</Link>
							</div>
						</div>
						<div className="card">
							<div className='centered flex-column align-items-center'>
								<img src={banner1} className="card-img-top" alt="" />
								<div className='icon-box centered position-relative'>
									<div className='icon-box-border '>
										<i class="bi bi-check-lg position-absolute top-50 end-0 translate-middle-y centered align-items-center"></i>
									</div>
								</div>
							</div>

							<div className="card-body">
								<h5 className="card-title">Servicio 6</h5>
								<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quisquam laudantium rem vel!</p>
								<Link to="#" className='btnService'> <i class="bi bi-arrow-right mr-auto"></i>Leer más</Link>
							</div>
						</div>
						<div className="card">
							<div className='centered flex-column align-items-center'>
								<img src={banner1} className="card-img-top" alt="" />
								<div className='icon-box centered position-relative'>
									<div className='icon-box-border '>
										<i class="bi bi-check-lg position-absolute top-50 end-0 translate-middle-y centered align-items-center"></i>
									</div>
								</div>
							</div>

							<div className="card-body">
								<h5 className="card-title">Servicio 7</h5>
								<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quisquam laudantium rem vel!</p>
								<Link to="#" className='btnService'> <i class="bi bi-arrow-right mr-auto"></i>Leer más</Link>
							</div>
						</div>

					</Slider>

				</div>
				<div className='position-absolute content-frame w-100'><Frame></Frame></div>

			</section>
		)
	}
}