import React from 'react';
import './styles.css';

import { Link } from 'react-scroll';

import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsFacial } from '../../../../components';

const Pubis = () => {
  return (
    <div className='info__if_pubis'>
      <div>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />
        
        <div className='content__overlay__if_pubis'>
          <div className='content__container__if_pubis'>
            <div className='content__info__if_pubis'>
              <h1>Pubis</h1>
              <p>
                Aparte del patrón de distribución del vello (solucionables con técnicas de
                depilación), los problemas más frecuentes del monte de Venus desde un punto
                de vista estético son:
                <br /><br />

                <ul>
                  <li>
                    <b>Lipodistrofia del pubis:</b> consiste en un acúmulo excesivo de grasa en la región
                    del Monte de Venus. Puede ser aislada o formar parte de una obesidad generalizada.
                    Ocasiona un inestetismo de la zona genital, en ocasiones difícil de camuflar
                    debajo de la ropa interior y de los trajes de baño. Su tratamiento consiste en la
                    realización de una liposucción, bajo anestesia local y sedación. 
                  </li>
                  <li>
                    <b>Descolgamiento del pubis (ptosis):</b> normalmente causado por un problema de flaccidez
                    de los tejidos de la zona, muy frecuentemente asociado a un descolgamiento general
                    del abdomen. El descenso del monte de Venus lleva también a un desplazamiento
                    posterior de la vulva, todo ello causando un aspecto anómalo de la región genital.
                    El tratamiento consiste en una cirugía de elevación del Monte de Venus (lifting),
                    ya sea de forma aislada (cicatriz en pubis) o, cuando el caso lo requiera, de
                    forma combinada con una dermolipectomía abdominal.
                  </li>
                </ul>
                <br /><br />
                También es frecuente que ambos problemas coexistan, precisando para su corrección
                técnicas quirúrgicas combinadas.
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info__if_pubis'>
          <div className='footer__info_site__if_pubis'>
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

        <img className='bg__content_info__if_pubis' src={bg_img} />
      </div>
    </div>
  )
}

export default Pubis