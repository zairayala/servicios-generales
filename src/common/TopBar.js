import React from 'react'
import './TopBar.css';
import { Link } from 'react-router-dom';

export default function TopBar() {
    return (
        <section id='TopBar'>
            <div className='top-bar'>
                <div className="container-lg d-flex flex-row-reverse flex-lg-row justify-content-around justify-content-lg-between ">
                    <div className='d-flex'>
                        <Link to="https://wa.me/51966368211?text=Hola!%20Estoy%20interesado%20en%20requerir%20sus%20servicios..." target='blank' className='button1 align-self-center mr-5'>Contáctanos</Link>
                    </div>
                    <div className="contact-info d-flex flex-column flex-lg-row align-items-center align-items-stretch align-items-lg-center">
                        <div>
                            <Link to="https://wa.me/51966368211?text=Hola!%20Estoy%20interesado%20en%20requerir%20sus%20servicios..." target='blank'><i className="bi bi-whatsapp"></i>+51 966 368 211 y +51 942 025 618</Link>
                        </div>
                        <div>
                            <Link to="mailto:sergemc.sac@gmail.com?subject=CONSULTA DEL SERVICIO DE <servicio>"><i className="bi bi-envelope"></i>sergemc.sac@gmail.com</Link>
                        </div>
                        <div>
                            <i className="bi bi-geo-alt"></i>Jr. Junín Mz. Ñ10 Lote 4, Pamplona Alta - S.J.M
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
