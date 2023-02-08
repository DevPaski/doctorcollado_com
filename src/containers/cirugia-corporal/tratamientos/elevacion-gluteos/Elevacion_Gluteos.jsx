import React from 'react';
import '../styles.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsCorporal } from '../../../../components';

const Otoplastia = () => {
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
            <h2 className='content__title'>Elevación de glúteos</h2>
            <div className='main__content'>
              <p>
                La elevación de los glúteos es aquél procedimiento quirúrgico que tiene por objetivo
                fundamental elevar y, en un grado moderado, modelar la forma y el volumen de las nalgas.
                También recibe el nombre de lifting de nalgas.
                <br /><br />
                No existe un tipo universal de elevación de glúteos que cubra las necesidades de todos
                los pacientes. La técnica quirúrgica se diseña para cada paciente, dependiendo de su caso
                particular.
                <br /><br />
                Su cirujano le asesorará sobre qué técnica es la más adecuada en su caso concreto.
              </p>
              <a href="/cirugia-estetica/cirugia-corporal/elevacion-gluteos"><h3>Más información</h3></a>
            </div>
          </div>
        </div>
        <img className='bg__img' src={bg_img} />
      </div>
    </div>
  )
}

export default Otoplastia