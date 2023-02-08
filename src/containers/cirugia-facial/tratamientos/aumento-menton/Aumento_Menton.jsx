import React from 'react';
import '../styles.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsFacial } from '../../../../components';

const Aumento_Menton = () => {
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
            <h2 className='content__title'>Aumento de Mentón</h2>
            <div className='main__content'>
              <p>
                Con la edad, los principales problemas de los párpados son su descolgamiento y su
                relajación. El primero genera redundancia en la piel y la aparición de pliegues
                que, en casos extremos, puede interferir con la vista cuando afecta al párpado
                superior. El segundo favorece la herniación del contenido de las órbitas, haciendo
                que las bolsas de grasa protuyan hacia el exterior formando bultos debajo de los
                párpados.<br /><br />

                La blefaroplastia estética es un procedimiento quirúrgico cuyo fin es, básicamente,
                mejorar el aspecto de los párpados deteriorado con el envejecimiento. Es diseñada
                individualmente para cada paciente, dependiendo de sus necesidades particulares.
                Puede realizarse de forma aislada para los párpados superiores, inferiores o ambos.
              </p>
              <a href="/cirugia-estetica/cirugia-facial/aumento-menton"><h3>Más información</h3></a>
            </div>
          </div>
        </div>
        <img className='bg__img' src={bg_img} />
      </div>
    </div>
  )
}

export default Aumento_Menton