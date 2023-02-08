import React from 'react';
import '../styles.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsMamaria } from '../../../../components';

const Ginecomastia = () => {
    return (
        <div className='home'>
      <div className='home__bg'>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />
        <Overlay />
        <Footer />

        <div className='home__content'>
          <NavDotsMamaria />
          <div className='content__section'>
            <h2 className='content__title'>Ginecomastia</h2>
            <div className='main__content'>
              <p>
                En condiciones normales, las mamas en el varón son sólo un vestigio rudimentario
                que nunca se desarrolla. Pero existen situaciones en las que esto no ocurre, y se
                asiste a un crecimiento anómalo de las mismas que puede llegar a asemejar incluso
                a las mamas de una mujer. Cuando sucede esto hablamos de ginecomastia. Suele ser
                un problema bilateral.
              </p>
              <a href="/cirugia-estetica/cirugia-mamaria/ginecomastia"><h3>Más información</h3></a>
            </div>
          </div>
        </div>
        <img className='bg__img' src={bg_img} />
      </div>
    </div>
    );
}

export default Ginecomastia