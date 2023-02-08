import React from 'react';
import './nosotros.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from './footer/Footer';

import logocomb from '../../assets/img/logo-comb.png';
import logosecpre from '../../assets/img/logo-secpre.jpg';
import logoaeque from '../../assets/img/logo-aeque.jpg';
import drcollado from '../../assets/img/foto_doctor_collado.jpg';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import { Overlay, Logo, Navbar, NavbarFull, NavDotsGeneral } from '../../components';

const Nosotros = () => {
  return (
    <div className='nosotros__bg'>
      <div className='nosotros__overlay'>
        <Logo />
        <Navbar />

        <div className='nosotros__content__bg'>
          <div className='nosotros__content'>
            <h1>Nosotros</h1>

            <div className='nosotros__member'>
              <div className='nosotros__member__photo'>
                <div className='nosotros__member__photo__bg'>
                  
                </div>
              </div>
              <div className='nosotros__member__description'>
                <h3>DR. JOSÉ MANUEL COLLADO DELFA</h3>
                <p>
                  Licenciado en Medicina y Cirugía.<br />
                  Médico especialista en Cirugía Plástica, Estética y Reparadora.<br />
                  Máster en Microcirugía Vascular y Nerviosa.<br />
                  <br />
                  Miembro del "Col·<special_character />legi de Metges de Barcelona", de la Sociedad Española 
                  de Cirugía Plástica, Estética y Reparadora (SECPRE) y de la Asociación 
                  Española de Quemaduras (AEQUE).<br />
                </p>
              </div>
            </div>

            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              slidesPerGroup={1}
              loop={true}
              autoPlay={true}
              delay={300}
              pagination={
                {
                  type: 'bullets',
                }
              }
              navigation={true}
              modules={[Navigation]}
              className='nosotros__swiper'
            >
              <SwiperSlide className='nosotros__slider first__slider'>
                <a href="https://www.comb.cat/">
                  <img src={logocomb} width={250}/>
                </a>
              </SwiperSlide>
              <SwiperSlide className='nosotros__slider second__slider'>
                <a href="https://secpre.org/">
                  <img src={logosecpre} width={250}/>
                </a>
              </SwiperSlide>
              <SwiperSlide className='nosotros__slider third__slider'>
                <a href="http://www.aeque.es/">
                  <img src={logoaeque} height={120}/>
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Nosotros