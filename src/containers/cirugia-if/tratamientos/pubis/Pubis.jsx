import React from 'react';
import '../styles.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsIF } from '../../../../components';

const Pubis = () => {
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
            <h2 className='content__title'>Pubis (Monte de Venus)</h2>
            <div className='main__content'>
              <p>
                El Monte de Venus es la región anatómica ubicada delante del pubis y está en relación con los genitales externos.
                <br /><br />
                Sus dos características fundamentales son su pilosidad (vello púbico) y que presenta un acúmulo graso subyacente más o menos importante, por lo que adopta un perfil discretamente abultado.
              </p>
              <a href="/cirugia-estetica/cirugia-if/pubis"><h3>Más información</h3></a>
            </div>
          </div>
        </div>
        <img className='bg__img' src={bg_img} />
      </div>
    </div>
  )
}

export default Pubis