import React from 'react';
import '../styles.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsCorporal } from '../../../../components';

const Aumento_Pomulos = () => {
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
            <h2 className='content__title'>Dermolipectomía en cinturón</h2>
            <div className='main__content'>
              <p>
                La dermolipectomía en cinturón es un procedimiento quirúrgico que elimina el exceso de
                piel y de tejido graso subcutáneo de la mitad inferior del tronco, tanto por delante como
                por detrás, es decir, de aquella área ubicada a nivel del cinturón de la ropa. También
                puede ayudar a tensar los músculos de la pared abdominal.
                <br /><br />
                Normalmente está indicada en casos de descolgamientos muy importantes, tales como los que
                se ven tras adelgazamientos severos como los ocurridos tras las técnicas de by-pass gástrico
                para el tratamiento de grandes obesidades.
                <br /><br />
                No existe un tipo universal de dermolipectomía en cinturón que cubra las necesidades de
                todos los pacientes. La técnica quirúrgica se diseña para cada paciente, dependiendo de
                su caso particular.
              </p>
              <a href="/cirugia-estetica/cirugia-corporal/dermolipectomia-cinturon"><h3>Más información</h3></a>
            </div>
          </div>
        </div>
        <img className='bg__img' src={bg_img} />
      </div>
    </div>
  )
}

export default Aumento_Pomulos