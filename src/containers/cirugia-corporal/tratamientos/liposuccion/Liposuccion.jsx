import React from 'react';
import '../styles.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsCorporal } from '../../../../components';

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
          <NavDotsCorporal />
          <div className='content__section'>
            <h2 className='content__title'>Liposucción</h2>
            <div className='main__content'>
              <p>
                El tejido graso o adiposo es un tipo particular de tejido conectivo que se encarga de
                almacenar la grasa en el organismo. En el adulto constituye una forma de reserva energética.
                Representa hasta un 15% del peso en el varón y hasta un 25% del peso en la mujer.
                <br /><br />
                Se localiza en múltiples áreas corporales tales como debajo de la piel, alrededor de las
                vísceras, en los músculos y en la médula de los huesos.
                <br /><br />
                En el ámbito de la Cirugía Plástica nos interesa especialmente la grasa subcutánea. Ella es
                responsable, en parte, de definir la silueta corporal y es la única localización que puede
                tratarse quirúrgicamente para modificarla.
              </p>
              <a href="/cirugia-estetica/cirugia-corporal/liposuccion"><h3>Más información</h3></a>
            </div>
          </div>
        </div>
        <img className='bg__img' src={bg_img} />
      </div>
    </div>
  )
}

export default Rinoplastia