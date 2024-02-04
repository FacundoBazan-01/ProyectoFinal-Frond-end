import React from 'react'
import '../css/FooterC.css';
import { GiOppositeHearts } from "react-icons/gi";

const FooterC = () => {
  return (
    <>
    <div className="Footer py-2 ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 col-12 text-center ">
                        <GiOppositeHearts className="logoCorazones" />
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 d-none d-md-block">
                            <h5 className='text-estilo text-black '>Quick Links</h5>
                            <ul className='text-estilo'>
                                <li className="nav-item">
                                    <a className="text-estilo" href="/">Productos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="text-estilo" href="/">Como comprar</a>
                                </li>
                                <li className="nav-item">
                                    <a className="text-estilo" href="/">Seguimiento de tu producto!</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 d-none d-md-block">
                            <h5 className='text-estilo text-black'>Quick Links</h5>
                            <ul className='text-estilo'>
                                <li className="nav-item">
                                    <a className="text-estilo" href="/">Politica de cambio y devolucion</a>
                                </li>
                                <li className="nav-item">
                                    <a className="text-estilo" href="/">Preguntas frecuentes</a>
                                </li>
                                <li className="nav-item">
                                    <a className="text-estilo" href="/">Sobre nosotros</a>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="col-md-6 col-lg-3 col-12 ">
                            <h5 className='text-estilo text-black d-none d-md-block'>Informacion de Contacto</h5>
                           <ul className='text-estilo d-none d-md-block'>
                            <li className="nav-item">
                            <a className="text-estilo" href="https://wa.me/qr/QXDFXYWBCHV4A1"><i class="fa-solid fa-phone-volume"></i>3813303541</a>
                            </li>
                            <li className="nav-item">
                            <a className="text-estilo" href="https://outlook.live.com/mail/0/?nlp=1"><i class="fa-solid fa-envelope"></i>g4@gmail.com</a>
                            </li>
                            <li className="nav-item">
                            <a className="text-estilo" href="https://www.bing.com/maps?osid=b3938dfd-54f5-4665-895b-5480a8b32259&cp=-26.836154~-65.207737&lvl=20&v=2&sV=2&form=S00027"><i class="fa-solid fa-paper-plane"></i>Tucuman, Argentina</a>
                            </li>
                           </ul>
                            <div className=" footer-icons row">
                                <div className=' col-md-6 col-lg-3 col-12 text-center'>
                                <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook text-white" ></i></a>

                                </div>
                                <div className=' col-md-6 col-lg-3 col-12 text-center'>
                                <a href="https://twitter.com"><i className="fa-brands fa-twitter text-white"></i></a>

                                </div>
                                <div className=' col-md-6 col-lg-3 col-12 text-center'>
                                <a href="https://www.instagram.com"><i className="fa-brands fa-instagram text-white "></i></a>

                                </div>
                                <div className=' col-md-6 col-lg-3 col-12 text-center'>
                                    
                                <a href="https://ar.linkedin.com"><i className="fa-brands fa-linkedin-in text-white "></i></a>

                                </div>
                          
                            </div>
                            <div className='mt-3 text-center d-none d-md-block' >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer text-black-50 mt-3 d-flex justify-content-center'>
                <p>©Copyright 2024 G4. Todos los derechos reservados.</p>
            </div>
    </>
  )
}

export default FooterC
