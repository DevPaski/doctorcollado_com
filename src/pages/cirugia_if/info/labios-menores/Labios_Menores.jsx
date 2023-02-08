import React from 'react';
import './styles.css';

import { Link } from 'react-scroll';

import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsFacial } from '../../../../components';

const Labios_Menores = () => {
  return (
    <div className='info__if_lmen'>
      <div>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />
        
        <div className='content__overlay__if_lmen'>
          <div className='content__container__if_lmen'>
            <div className='content__info__if_lmen'>
              <h1>Labios Menores</h1>
              <p>
                Los labios menores forman parte de los genitales externos femeninos. Reciben
                también el nombre de ninfas, aludiendo a las deidades griegas de la naturaleza
                que, entre otros sitios, moraban en cuevas. 
                <br /><br />
                En condiciones normales sólo son visibles al separar entre sí los labios mayores.
                A diferencia de los mayores, los menores son mucho más delgados, irregulares en
                la forma y, casi siempre, asimétricos. No contienen pelo y están hiperpigmentados.
                Tienen una forma parecida a una semiluna, más anchos en su porción central
                (aproximadamente 1-2 cm) y progresivamente más estrechos hacia sus extremos. 
                <br /><br />
                El problema más frecuente referido es la <b>hipertrofia de los labios menores</b>, es
                decir, un tamaño desproporcionadamente grande. En estos casos, explorando a la
                mujer de pie, los labios menores asoman y cuelgan entre los mayores. Es muy
                frecuente que este sobrecremiento sea asimétrico.
                <br /><br />
                Su etiología es diversa, existiendo casos congénitos (muchas veces relacionados
                con problemas hormonales) pero también casos adquiridos por tracción mecánica
                repetida (manipulaciones sexuales, piercings, partos múltiples) o por irritación
                crónica como en algunos deportes (equitación o el ciclismo) y en algunas
                enfermedades (problemas de incontinencia de orina que exige el uso continuo de
                pañales). También se ha relacionado con la filariasis, una infección local que
                bloquea el drenaje de la linfa.
                <br /><br />
                Las molestias habitualmente referidas son molestias por roce al caminar y
                sentarse, al hacer deporte o durante las relaciones sexuales (dispareunia por
                entrada de los labios menores en vagina durante el coito). El roce continuado
                puede provocar problemas dermatológicos por irritación local e incluso
                sobreinfecciones. También dificulta una correcta higiene local, sobre todo durante
                la menstruación. Además, hay que añadir el propio inestetismo que presenta el
                aspecto de la vulva y los problemas psicológicos que todo ello conlleva.
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info__if_lmen'>
          <div className='footer__info_site__if_lmen'>
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

export default Labios_Menores