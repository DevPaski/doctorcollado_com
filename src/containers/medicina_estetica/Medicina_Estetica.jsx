import React from 'react';
import './medicina_estetica.css';

import video__estetica from '../../assets/videos/background__medicina_estetica.mp4';
import cara_cuello from '../../assets/img/drcollado_cara_cuello.jpg';
import mesoterapia from '../../assets/img/drcollado_mesoterapia_facial.jpg';
import peeling from '../../assets/img/drcollado_peeling.jpg';
import implantes from '../../assets/img/drcollado_implantes.jpg';
import arrugas from '../../assets/img/drcollado_arrugas.jpg';
import hilos from '../../assets/img/drcollado_hilos_tensores.jpg';

import { Overlay, LogoMain, Navbar, NavbarFull, Footer, NavDotsAlter } from '../../components';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Medicina_Estetica = () => {
  return (
    <div className='home'>
      <div className='home__bg'>
        <Navbar />
        <LogoMain />
        <Overlay />
        <Footer />
        <div className='content__medicina_estetica'>
          <NavDotsAlter />
          <h2 className='medicina_estetica_title'>MEDICINA ESTÉTICA</h2>
          <div className='content__medicina_estetica_main'>
            
            <div className='content__frame_me_standard q1'>
              <div className='content__frame_image'>
                <img src={cara_cuello} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
              </div>
              <a style={{ textDecoration: 'none', color: 'black' }} href="./medicina-estetica/rejuvenecimiento-cara-cuello">
                <div className='content__frame_description cara_cuello'>
                  <div className='content__frame_description_standard'>
                    <h6>Rejuvenecimiento de cara y cuello</h6>
                  </div>
                  <ArrowRightAltIcon className='content__frame_description_icon' />
                </div>
              </a>
            </div>
            
            <div className='content__frame_me_small_left'>
              
              <div className='content__frame_me_small_container q2 mobile_q_style'>
                <div className='content__frame_image'>
                  <img src={mesoterapia} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
                </div>
                <a style={{ textDecoration: 'none', color: 'black' }} href="./medicina-estetica/mesoterapia-facial">
                  <div className='content__frame_description small_container_icon'>
                    <div className='content__frame_description_standard'>
                      <h6>Mesoterapia facial</h6>
                    </div>
                    <ArrowRightAltIcon className='content__frame_description_icon' />
                  </div>
                </a>
              </div>
              
              <div className='content__frame_me_small_container q3 mobile_q_style'>
                <div className='content__frame_image'>
                  <img src={peeling} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
                </div>
                <a style={{ textDecoration: 'none', color: 'black' }} href="./medicina-estetica/peeling-quimico">
                  <div className='content__frame_description small_container_icon'>
                    <div className='content__frame_description_standard'>
                      <h6>Peeling <br/>químico</h6>
                    </div>
                    <ArrowRightAltIcon className='content__frame_description_icon' />
                  </div>
                </a>
              </div>
            </div>
            
            <div className='content__frame_me_small_right'>
              
              <div className='content__frame_me_small_container q4 mobile_q_style'>
                <div className='content__frame_image'>
                  <img src={implantes} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
                </div>
                <a style={{ textDecoration: 'none', color: 'black' }} href="./medicina-estetica/implantes-inyectables">
                  <div className='content__frame_description small_container_icon'>
                    <div className='content__frame_description_standard'>
                      <h6>Implantes inyectables</h6>
                    </div>
                    <ArrowRightAltIcon className='content__frame_description_icon' />
                  </div>
                </a>
              </div>
              
              <div className='content__frame_me_small_container q5 mobile_q_style'>
                <div className='content__frame_image'>
                  <img src={arrugas} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
                </div>
                <a style={{ textDecoration: 'none', color: 'black' }} href="./medicina-estetica/arrugas-expresion">
                  <div className='content__frame_description small_container_icon'>
                    <div className='content__frame_description_standard'>
                      <h6>Arrugas de expresión</h6>
                    </div>
                    <ArrowRightAltIcon className='content__frame_description_icon' />
                  </div>
                </a>
              </div>
            </div>
            
            <div className='content__frame_me_standard q6 mobile_q_style'>
              <div className='content__frame_image'>
                <img src={hilos} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
              </div>
              <a style={{ textDecoration: 'none', color: 'black' }} href="./medicina-estetica/hilos-tensores">
                <div className='content__frame_description hilos_tensores'>
                  <div className='content__frame_description_standard'>
                    <h6>Hilos tensores</h6>
                  </div>
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

export default Medicina_Estetica