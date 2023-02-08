import React from 'react';
import './styles.css';

import { Link } from 'react-scroll';

import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsFacial } from '../../../../components';

const Clitoris = () => {
  return (
    <div className='info__if_cli'>
      <div>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />
        
        <div className='content__overlay__if_cli'>
          <div className='content__container__if_cli'>
            <div className='content__info__if_cli'>
              <h1>Clítoris</h1>
              <p>
                Los problemas más habituales referidos en relación al clítoris son: 
                <br /><br />
                <ul>
                  <li>
                    <b>La hipertrofia del capuchón.</b> La piel del capuchón es excesiva, no permitiendo
                    exponer el glande. Sería el equivalente a la fimosis del varón. Puede disminuir
                    la sensibilidad por dificultar la recepción de estímulos erógenos. El
                    tratamiento consiste en recortar el exceso cutáneo.
                  </li>
                  <li>
                    <b>El descolgamiento del clítoris (ptosis).</b> Relacionado con la laxitud de
                    los tejidos tras múltiples partos o en relación con la edad. La posición
                    del clítoris es más baja de lo deseado, causando inestetismos en la vulva.
                    El tratamiento consiste en dar unos puntos en la base del clítoris para
                    reanclarlo en una posición más elevada, mejorando su aspecto y también
                    facilitando su exposición durante las relaciones sexuales. A esta técnica
                    se le llama clitoropexia.
                  </li>
                  <li>
                    <b>La hipertrofia del clítoris.</b> El excesivo tamaño del clítoris incomoda a
                    la mujer pues puede incluso recordar a un micropene. Suele estar casi
                    siempre en relación a algún trastorno hormonal. La clitoroplastia es la
                    técnica cuyo objetivo fundamental es reducir el tamaño del clítoris intentando
                    preservar su sensibilidad. 
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info__if_cli'>
          <div className='footer__info_site__if_cli'>
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

export default Clitoris