import React from 'react';
import '../styles.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsCorporal } from '../../../../components';

const Blefaroplastia = () => {
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
            <h2 className='content__title'>Dermolipectomía Abdominal</h2>
            <div className='main__content'>
              <p>
                La dermolipectomía abdominal es aquél procedimiento quirúrgico que elimina el exceso de piel
                y de tejido graso subcutáneo presentes en la parte inferior del abdomen, entre el ombligo y
                el pubis. También puede ayudar a tensar los músculos de la pared abdominal.
                <br /><br />
                No existe un tipo universal de dermolipectomía abdominal que cubra las necesidades de todos
                los pacientes. La técnica quirúrgica se diseña para cada paciente, dependiendo de su caso
                particular.
                <br /><br />
                Su cirujano le asesorará sobre qué técnica es la más adecuada en su caso concreto.  
              </p>
              <a href="/cirugia-estetica/cirugia-corporal/dermolipectomia-abdominal"><h3>Más información</h3></a>
              
            </div>
          </div>
        </div>
        <img className='bg__img' src={bg_img} />
      </div>
    </div>
  )
}

export default Blefaroplastia