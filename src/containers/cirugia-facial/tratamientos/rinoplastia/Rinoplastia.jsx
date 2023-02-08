import React from 'react';
import '../styles.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsFacial } from '../../../../components';

const Rinoplastia = () => {
  return (
    <div className='home'>
      <div className='home__bg'>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />
        <Overlay />
        <Footer />
        <div className='home__content'>
          <NavDotsFacial />
          <div className='content__section'>
            <h2 className='content__title'>Rinoplastia</h2>
            <div className='main__content'>
              <p>
                La rinoplastia es la intervención quirúrgica que se realiza sobre la nariz con
                el objetivo de cambiar su aspecto. Sus problemas pueden estar ya presentes al
                nacimiento (malformaciones congénitas), manifestarse con el crecimiento de la
                cara durante la adolescencia o ser deformidades adquiridas tras traumatismos,
                fundamentalmente.<br /><br />

                No existe un tipo universal de rinoplastia que cubra las necesidades de cada
                paciente. La cirugía de rinoplastia se diseña para cada paciente, dependiendo
                de su caso particular.
              </p>
              <a href="/cirugia-estetica/cirugia-facial/rinoplastia"><h3>Más información</h3></a>
            </div>
          </div>
        </div>
        <img className='bg__img' src={bg_img} />
      </div>
    </div>
  )
}

export default Rinoplastia