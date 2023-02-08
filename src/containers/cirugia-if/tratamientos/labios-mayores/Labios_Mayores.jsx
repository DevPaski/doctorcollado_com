import React from 'react';
import '../styles.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsIF } from '../../../../components';

const Labios_Mayores = () => {
  return (
    <div className='home'>
      <div className='home__bg'>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />
        <Overlay />
        <Footer />
        <div className='home__content'>
          <NavDotsIF />
          <div className='content__section'>
            <h2 className='content__title'>Labios Mayores</h2>
            <div className='main__content'>
              <p>
                Los labios mayores forman parte de los genitales externos femeninos.
                <br /><br />
                Están constituidos por dos gruesos repliegues cutáneos colocados a cada
                lado de la línea media y que, en condiciones normales, están en contacto
                entre sí, delimitando la llamada hendidura pudenda ("rajita"). Están
                densamente poblados por vello, como también ocurre en el monte de Venus.
                <br /><br />
                El problema más frecuente referido por las mujeres en relación a sus labios
                mayores es su falta de turgencia o plenitud. Puede ser constitucional o
                manifestarse tras el declive hormonal de la menopausia.
              </p>
              <a href="/cirugia-estetica/cirugia-if/labios-mayores"><h3>Más información</h3></a>
            </div>
          </div>
        </div>
        <img className='bg__img' src={bg_img} />
      </div>
    </div>
  )
}

export default Labios_Mayores