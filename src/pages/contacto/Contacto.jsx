import React from 'react';
import './contacto.css';

import Iframe from 'react-iframe';

import logoTopDoctors from "../../assets/img/topdoctors.svg";
import logoDoctoralia from "../../assets/img/doctoralia.svg";

import logoGencat from "../../assets/img/departament_salut.png";

import icorreo from '../../assets/icons/correo.svg';
import telf from '../../assets/icons/telef_fijo.svg';
import telm from '../../assets/icons/telef_movil.svg';

import insta from '../../assets/icons/instagram.svg';
import face from '../../assets/icons/facebook.svg';

import Footer from './footer/Footer';

import { Logo, Navbar } from '../../components';

const Contacto = () => {
    return (
        <div className='contact__wrapper'>
            <Logo />
            <Navbar />

            <div className='contact__overlay'>
                <div className='contact__content'>
                    <h1>Contáctanos</h1>
                    <hr />

                    <h2>¿Dónde estamos?</h2>
                    <div className='contact__map'>
                        <Iframe className='contact__map__iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1058.405823121371!2d2.148524670779232!3d41.3822588229579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a280b8b6ca55%3A0xeacf493b676049f3!2sDr%20Jos%C3%A9%20Manuel%20Collado%20Delfa!5e0!3m2!1ses!2ses!4v1664956029013!5m2!1ses!2ses" style="border:0px #ffffff none;" name="contact__map__iframe" scrolling="no" frameborder="0" marginheight="0px" marginwidth="0px" allowfullscreen loading="lazy" />
                        <div className='contact__map__data'>
                            <p>
                                <b>Dirección:</b><br/>
                                    <p className='contact__map__direction'>
                                        C/ Rocafort, 167  Esc C  Entlo 2ª<br/>
                                        08015 Barcelona
                                    </p>
                                <br/><br/>
                                <b>Horarios:</b><br/>
                                <p className='contact__map__direction'>
                                    Tardes de 17:00h a 20:00h (horas convenidas) 
                                </p>

                                <ul>
                                    <a href="tel:+34932264668"><li><img src={telf} />932 264 668</li></a>
                                    <a href="tel:+34609530769"><li><img src={telm} />609 530 769</li></a>
                                    <a href="mailto:info@doctorcollado.com"><li><img src={icorreo} />info@doctorcollado.com</li></a>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div className='contact__alternatives'>
                        <h2>Reserva cita en línea desde...</h2>
                        <div className='contact__alter__types'>
                            <div className='contact__doctoralia'>
                                <a href="https://www.doctoralia.es/jose-manuel-collado-delfa">
                                    <img src={logoDoctoralia} width={350} height={100} />
                                </a>
                            </div>
                            <div className='contact__topdoctors'>
                                <a href="https://www.topdoctors.es/doctor/jose-manuel-collado-delfa">
                                    <img src={logoTopDoctors} width={100} />
                                    <p>TopDoctors</p>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='lastSection'>

                        <div className='contact__socials'>
                            <h2>Nuestras redes sociales</h2>
                            <div className='contact__socials__icons'>
                                <div className='contact__socials__facebook'>
                                    <a href="https://www.facebook.com/doctorcollado/">
                                        <img src={face} alt="" />
                                    </a>
                                </div>
                                <div className='contact__socials__insta'>
                                    <a href="https://www.instagram.com/doctorcolladocirugiaplastica/">
                                        <img src={insta} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='acreditacion'>
                            <h2>Acreditación de la consulta</h2>
                            <a>
                                <img src={logoGencat} alt="" />
                            </a>
                            <p>
                                Consulta acreditada por el Departament de Salut,<br/>
                                Generalitat de Catalunya<br/>
                                Nº de registro: <b>E 08893604</b>
                            </p>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Contacto