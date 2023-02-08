import React from 'react';
import '../styles.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsCorporal } from '../../../../components';

const Lifting = () => {
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
            <h2 className='content__title'>Dermolipectomía crural</h2>
            <div className='main__content'>
              <p>
                La dermolipectomía crural es el procedimiento quirúrgico que tensa los tejidos en la cara
                interna de los muslos, extirpando su excedente. 
                <br /><br />
                No existe un tipo universal de dermolipectomía crural que cubra las necesidades de todos
                los pacientes. La técnica quirúrgica se diseña para cada paciente, dependiendo de su caso
                particular.
                <br /><br />
                Su cirujano le asesorará sobre qué técnica es la más adecuada en su caso concreto.
              </p>
              <a href="/cirugia-estetica/cirugia-corporal/dermolipectomia-crural"><h3>Más información</h3></a>
            </div>
          </div>
        </div>
        <img className='bg__img' src={bg_img} />
      </div>
    </div>
  )
}

export default Lifting