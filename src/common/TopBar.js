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
                    </div>
                    <div className="text-end d-flex align-items-center">
                        <div>
                            <i className="bi bi-whatsapp"></i>+51 966 968 211 // +51 942 025 618
                        </div>
                        <div>
                            <i className="bi bi-envelope"></i>correo@gmail.com
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
