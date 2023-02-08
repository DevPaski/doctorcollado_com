import React from 'react';
import '../styles.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsIF } from '../../../../components';

const Labios_Menores = () => {
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
            <h2 className='content__title'>Labios Menores</h2>
            <div className='main__content'>
              <p>
              La cirugía del remodelado de los labios menores se llama <b>labioplastia o ninfoplastia
              de reducción</b>. En general se practica bajo anestesia local con o sin sedación y de
              forma ambulatoria.
              <br /><br />
              Hay muchas técnicas descritas pero todas ellas tienen en común
              la extirpación de un segmento del labio para reducir su tamaño. La sutura se hace
              con hilos reabsorbibles a corto plazo para evitar la molestia de tener que retirarlos.
              <br /><br />
              Se aconseja reposo relativo durante 48 horas, unas mínimas medidas antinflamatorias y
              de higiene local así como evitar las relaciones sexuales durante el primer mes
              postoperatorio.
              </p>
              <a href="/cirugia-estetica/cirugia-if/labios-menores"><h3>Más información</h3></a>
            </div>
          </div>
        </div>
        <img className='bg__img' src={bg_img} />
      </div>
    </div>
  )
}

export default Labios_Menores