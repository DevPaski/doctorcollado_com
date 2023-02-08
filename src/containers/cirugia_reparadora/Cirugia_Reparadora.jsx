import React from 'react';
import './cirugia_reparadora.css';

import video__reparadora from '../../assets/videos/background__cirugia_reparadora.mp4';
import cicatrices from '../../assets/img/drcollado_cicatriz.jpg';
import tumores from '../../assets/img/drcollado_tumores.jpg';
import rmama from '../../assets/img/drcollado_rmama.jpg';
import roreja from '../../assets/img/drcollado_roreja.jpg';

import { Overlay, LogoMain, Navbar, NavbarFull, Footer, NavDotsAlter } from '../../components';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Cirugia_Reparadora = () => {
  return (
    <div className='home'>
      <div className='home__bg'>
        <Navbar />
        <LogoMain />
        <Overlay />
        <Footer />
        <div className='cirugia_reparadora__content'>
          <NavDotsAlter />
          <h2 className='cirugia_reparadora__title'>CIRUGÍA REPARADORA</h2>
          <div className='content__cirugia_reparadora'>
              <div className='content__frame_rep q1'>
                <div className='content__frame_image'>
                  <img src={cicatrices} style={{objectFit: 'cover', width: '100%', height: '100%'}} />
                </div>
                <a style={{ textDecoration: 'none', color: 'black' }} href="./cirugia-reparadora/cicatrices">
                  <div className='content__frame_description'>
                    <div className='content__frame_description_standard cicatrices'>
                      <h6>Cicatrices</h6>
                    </div>
                    <ArrowRightAltIcon className='content__frame_description_icon' />
                  </div>
                </a>
                
              </div>
              <div className='content__frame_rep q2'>
                <div className='content__frame_image'>
                  <img src={tumores} style={{objectFit: 'cover', width: '100%', height: '100%'}} />
                </div>
                <a style={{ textDecoration: 'none', color: 'black' }} href="./cirugia-reparadora/tumores">
                  <div className='content__frame_description'>
                    <div className='content__frame_description_standard tumores'>
                      <h6>Tumores</h6>
                    </div>
                    <ArrowRightAltIcon className='content__frame_description_icon' />
                  </div>
                </a>
                
              </div>
              <div className='content__frame_rep q3'>
                <div className='content__frame_image'>
                  <img src={rmama} style={{objectFit: 'cover', width: '100%', height: '100%'}} />
                </div>
                <a style={{ textDecoration: 'none', color: 'black' }} href="./cirugia-reparadora/reconstruccion-mama">
                  <div className='content__frame_description reconstruccion_mama'>
                    <div className='content__frame_description_rec_mama'>
                      <h6>Reconstrucción de mama</h6>
                    </div>
                    <ArrowRightAltIcon className='content__frame_description_icon' />
                  </div>
                </a>
                
              </div>
              <div className='content__frame_rep q4'>
                <div className='content__frame_image'>
                  <img src={roreja} style={{objectFit: 'cover', width: '100%', height: '100%'}} />
                </div>
                <a style={{ textDecoration: 'none', color: 'black' }} href="./cirugia-reparadora/reconstruccion-oreja">
                  <div className='content__frame_description reconstruccion_ore'>
                    <div className='content__frame_description_rec_ore'>
                      <h6>Reconstrucción de oreja</h6>
                    </div>
                    <ArrowRightAltIcon className='content__frame_description_icon' />
                  </div>
                </a>
              </div>
          </div>
        </div>
        <video src={video__reparadora} autoPlay loop muted />
      </div>
    </div>
  )
}

export default Cirugia_Reparadora