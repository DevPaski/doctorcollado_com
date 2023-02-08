import React from 'react';
import './styles.css';

import { Link } from 'react-scroll';

import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsFacial } from '../../../../components';

const Labios_Mayores = () => {
  return (
    <div className='info__if_lmay'>
      <div>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />
        
        <div className='content__overlay__if_lmay'>
          <div className='content__container__if_lmay'>
            <div className='content__info__if_lmay'>
              <h1>Labios Mayores</h1>
              <p>
                El remodelado de los labios mayores puede realizarse mediante dos técnicas: 
                <br /><br />
                <ul>
                  <li>
                    <b>Remodelado con grasa del propio paciente (injerto de grasa).</b> Esta técnica se
                    hace con anestesia local y sedación. Exige disponer de una zona donante de
                    grasa de donde, por medio de una liposucción modificada, obtener células
                    adiposas íntegras que, tras concentrarlas mediante diferentes técnicas,
                    serán infiltradas en la zona deseada con la ayuda de unas cánulas de pequeño
                    calibre (lipofilling). Estas células se comportan como un injerto, es decir,
                    deben vascularizarse para sobrevivir. El injerto de grasa consigue los
                    resultados más naturales.
                  </li>
                  <li>
                    <b>Remodelado con implantes de relleno inyectables.</b> En este caso, se usa como
                    material de relleno implantes sintéticos inyectables. Son formulados y
                    fabricados en un laboratorio y dispensados en forma de jeringuillas para su
                    aplicación por punción con aguja fina. Existen muchas marcas comerciales. Se
                    diferencian entre sí por su composición química y su duración más o menos
                    prolongada en el tiempo. En general, en los labios se prefieren usar los
                    implantes reabsorbibles formulados a base de ácido hialurónico. Su aplicación
                    se hace en la consulta, bajo anestesia local y exige sesiones periódicas para
                    mantener los resultados.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info__if_lmay'>
          <div className='footer__info_site__if_lmay'>
              <ul>
                  <li>
                      <a href="/aviso-legal" className='underline'>Aviso Legal</a>
                  </li>
                  <li>-</li>
                  <li>
                      <a href="/politica-privacidad" className='underline'>Política de Privacidad</a>
                  </li>
                  <li>-</li>
                  <li>
                      <a href="/creditos" className='underline'>Créditos</a>
                  </li>
              </ul>
          </div>
        </div>

        <img className='bg__content_info__if' src={bg_img} />
      </div>
    </div>
  )
}

export default Labios_Mayores