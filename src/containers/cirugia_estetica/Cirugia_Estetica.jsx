import React from 'react';
import './cirugia_estetica.css';

import video__estetica from '../../assets/videos/background__cirugia_estetica.mp4';
import cirugia__facial from '../../assets/img/drcollado_cirugia_facial.jpg';
import cirugia__mamaria from '../../assets/img/drcollado_cirugia_mamaria.jpg';
import cirugia__corporal from '../../assets/img/drcollado_cirugia_corporal.jpg';
import cirugia__if from '../../assets/img/drcollado_if.jpg';

import { Overlay, Navbar, NavbarFull, LogoMain, Footer, NavDotsAlter } from '../../components';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Cirugia_Estetica = () => {
  return (
    <div className='home'>
      <div className='home__bg'>
        <Navbar />
        <LogoMain />
        <Overlay />
        <Footer />
        <div className='cirugia_estetica__content'>
          <NavDotsAlter />
          <h2 className='cirugia_estetica__title'>CIRUGÍA ESTÉTICA</h2>
          <div className='content__cirugia_estetica'>
            <div className='content__frame__estetica q1'>
              <div className='content__frame_image'>
                <img src={cirugia__facial} />
              </div>
              <a style={{ textDecoration: 'none', color: 'black' }} href="/cirugia-estetica/cirugia-facial">
                <div className='content__frame_description'>
                  <h6>Facial</h6>
                  <ArrowRightAltIcon className='content__frame_description_icon' />
                </div>
              </a>
            </div>
            <div className='content__frame__estetica q2'>
              <div className='content__frame_image'>
                <img src={cirugia__mamaria} />
              </div>
              <a style={{ textDecoration: 'none', color: 'black' }} href="/cirugia-estetica/cirugia-mamaria">
                <div className='content__frame_description'>
                  <h6>Mamaria</h6>
                  <ArrowRightAltIcon className='content__frame_description_icon' />
                </div>
              </a>
            </div>
            <div className='content__frame__estetica q3'>
              <div className='content__frame_image'>
                <img src={cirugia__corporal} />
              </div>
              <a style={{ textDecoration: 'none', color: 'black' }} href="/cirugia-estetica/cirugia-corporal">
                <div className='content__frame_description'>
                  <h6>Corporal</h6>
                  <ArrowRightAltIcon className='content__frame_description_icon' />
                </div>
              </a>
            </div>
            <div className='content__frame__estetica q4'>
              <div className='content__frame_image'>
                <img src={cirugia__if}/>
              </div>
              <a style={{ textDecoration: 'none', color: 'black' }} href="/cirugia-estetica/cirugia-if">
                <div className='content__frame_description_if'>
                  <h6>Íntima Femenina</h6>
                  <ArrowRightAltIcon className='content__frame_description_icon' />
                </div>
              </a>
            </div>
          </div>
        </div>
        <video src={video__estetica} autoPlay loop muted />
      </div>
    </div>
  )
}

export default Cirugia_Estetica