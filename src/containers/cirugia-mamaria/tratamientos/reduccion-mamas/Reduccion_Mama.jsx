import React from 'react';
import '../styles.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsMamaria } from '../../../../components';

const Reduccion_Mama = () => {
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
            <h2 className='content__title'>Reducción de Mamas</h2>
            <div className='main__content'>
              <p>
                La reducción de mamas es una técnica quirúrgica que se indica cuando la paciente
                presenta una hipertrofia de sus mamas. También recibe el nombre de mamoplastia
                de reducción. 
                <br /><br />
                Aunque el objetivo inicial es reducir el tamaño, también permite remodelar su
                forma y reducir el diámetro de la areola para hacerlo proporcional al nuevo tamaño.
                Como en la mayoría de ocasiones de hipertrofia la mama también está caída, la cirugía
                de reducción mamaria debe elevarla a su posición ideal para obtener un resultado
                satisfactorio.
                <br /><br />
                En general, esta cirugía se practicará cuando se haya completado el desarrollo
                mamario, hacia los 18 años de edad.
              </p>
              <a href="/cirugia-estetica/cirugia-mamaria/reduccion-mamas"><h3>Más información</h3></a>
            </div>
          </div>
        </div>
        <img className='bg__img' src={bg_img} />
      </div>
    </div>
    );
}

export default Reduccion_Mama