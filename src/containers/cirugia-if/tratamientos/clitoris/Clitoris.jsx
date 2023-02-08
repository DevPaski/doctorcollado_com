import React from 'react';
import '../styles.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsIF } from '../../../../components';

const Clitoris = () => {
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
            <h2 className='content__title'>Clítoris</h2>
            <div className='main__content'>
              <p>
                En la confluencia superior de ambos labios menores está el <b>clítoris</b>, el
                equivalente del pene en la mujer.
                <br /><br />
                Su estructura está formada por un tejido esponjoso y eréctil que se dispone
                formando dos cilindros (cuerpos cavernosos) que se reúnen entre sí para
                conformar el llamado cuerpo del clítoris. La punta del clítoris aparece
                discretamente dilatada y recibe el nombre de glande. Como en el varón,
                el glande está parcialmente recubierto por un pliegue cutáneo equivalente
                al prepucio masculino, llamado en la mujer capuchón. 
                <br /><br />
                Constituye un órgano muy importante durante las relaciones sexuales, pues
                en él radica buena parte de la sensibilidad erógena. Durante la excitación
                se llena de sangre, aumentando de tamaño y exponiéndose más el glande para
                facilitar la recepción de estímulos. 
              </p>
              <a href="/cirugia-estetica/cirugia-if/clitoris"><h3>Más información</h3></a>
              
            </div>
          </div>
        </div>
        <img className='bg__img' src={bg_img} />
      </div>
    </div>
  )
}

export default Clitoris