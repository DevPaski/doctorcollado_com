import React from 'react';
import '../styles.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsMamaria } from '../../../../components';

const Elevacion_Mama = () => {
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
            <h2 className='content__title'>Elevación de Mamas</h2>
            <div className='main__content'>
              <p>
                La elevación de mamas es una operación quirúrgica que se indica fundamentalmente
                cuando la paciente presenta una ptosis mamaria. También recibe el nombre de
                (mastopexia).
                <br /><br />
                El objetivo principal es elevar la mama a su posición ideal. El volumen total no
                cambia pero sí podemos remodelar su forma. Son demandas frecuentes compactar más
                la glándula, dar mayor proyección a la mama y rellenar mejor su polo superior.
                También podemos modificar el tamaño de la areola, que muchas veces está dilatado.
                <br /><br />
                En general, esta cirugía se practicará cuando se haya completado el desarrollo
                mamario, hacia los 18 años de edad.
              </p>
              <a href="/cirugia-estetica/cirugia-mamaria/elevacion-mamas"><h3>Más información</h3></a>
            </div>
          </div>
        </div>
        <img className='bg__img' src={bg_img} />
      </div>
    </div>
    );
}

export default Elevacion_Mama