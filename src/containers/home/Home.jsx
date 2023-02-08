import React from 'react';
import './home.css';

import video__home from '../../assets/videos/drcollado_fondo.mp4';
// import video__home from '../../assets/img/drcollado_operacion.jpg';
import { Overlay, LogoMain, Navbar, NavbarFull, Footer, NavDotsGeneral } from '../../components';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__bg'>
        <Navbar />
        {/* <NavbarFull /> */}
        <LogoMain />
        <Overlay />
        <Footer />
        <NavDotsGeneral />
        <div className='home__content'>
            <h2>La confianza de estar en buenas manos</h2>
            <p>La primera visita es gratuita*</p>
            <a href="./contacto"><h5>PIDE CITA</h5></a>

            <p className='aviso__footer'>
              (*) Es gratuita si no ha habido intervención quirúgica previamente.
            </p>
        </div>
        <video src={video__home} autoPlay loop muted />
      </div>
    </div>
  )
}

export default Home