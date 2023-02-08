import React from 'react';
import '../styles.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsCorporal } from '../../../../components';

const Remodelado_Labios = () => {
  return (
    <div className='home'>
      <div className='home__bg'>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />
        <Overlay />
        <Footer />
        <div className='home__content'>
          <NavDotsCorporal />
          <div className='content__section'>
            <h2 className='content__title'>Aumento de glúteos</h2>
            <div className='main__content'>
              <p>
                Unos glúteos pueden ser pequeños por dos motivos básicos:
                <br />
                <ul>
                  <li>
                    Por falta de desarrollo. En estos casos, el problema es constitucional y recibe el
                    nombre de hipoplasia glútea. 
                  </li>
                  <li>
                    Por involución a lo largo de la vida del paciente, condicionada básicamente por los
                    cambios de peso, por pérdida del volumen muscular y por envejecimiento de la persona.
                    En estos casos hablamos de atrofia glútea. 
                  </li>
                </ul>
                <br />
                En cuanto a la forma, se considera que el punto más proyectado de la silueta de la nalga
                debe corresponder a la altura del pubis, cuando el paciente es observado de perfil.
              </p>
              <a href="/cirugia-estetica/cirugia-corporal/aumento-gluteos"><h3>Más información</h3></a>
            </div>
          </div>
        </div>
        <img className='bg__img' src={bg_img} />
      </div>
    </div>
  )
}

export default Remodelado_Labios