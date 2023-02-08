import React from 'react';
import '../styles.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsMamaria } from '../../../../components';

const Aumento_Mama = () => {
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
            <h2 className='content__title'>Aumento de Mamas</h2>
            <div className='main__content'>
              <p>
                El aumento de mamas es una operación quirúrgica que se indica fundamentalmente cuando
                la paciente presenta una hipoplasia o una atrofia de sus mamas. También recibe el nombre
                de mamoplastia de aumento.
                <br /><br />
                Aunque el objetivo inicial es el cambio del volumen, también permite modificar la forma,
                siendo una demanda frecuente conseguir una mayor proyección en el polo superior de la
                mama, por ejemplo. 
                <br /><br />La técnica quirúrgica del aumento de mamas se diseña para cada paciente,
                dependiendo de su caso particular.
                <br /><br />
                En general, esta cirugía se practicará cuando se haya completado el desarrollo mamario,
                hacia los 18 años de edad.
              </p>
              <a href="/cirugia-estetica/cirugia-mamaria/aumento-mamas"><h3>Más información</h3></a>
            </div>
          </div>
        </div>
        <img className='bg__img' src={bg_img} />
      </div>
    </div>
    );
}

export default Aumento_Mama