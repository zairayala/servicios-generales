import React from 'react'
import './TopBar.css';
import { Link } from 'react-router-dom';

export default function TopBar() {
    return (
        <section id='TopBar'>
            <div className='top-bar'>
                <div className="container d-flex justify-content-between align-items-center">
                    <div className='d-flex'>
                        <Link to="#" className='button1 align-self-center mr-5'>Contáctanos</Link>
                        <p>Los servicios que requiere en un solo lugar</p>
                    </div>
                    <div className="text-end d-flex align-items-center">
                        <div>
                            <i className="bi bi-telephone"></i>+989999999
                        </div>
                        <div>
                            <i className="bi bi-envelope"></i>correo@gmail.com
                        </div>
                        <div>
                            <i className="bi bi-geo-alt"></i>San Juan de Miraflores
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
