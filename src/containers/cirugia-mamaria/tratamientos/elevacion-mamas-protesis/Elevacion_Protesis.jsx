import React from 'react';
import '../styles.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsMamaria } from '../../../../components';

const Elevacion_Protesis = () => {
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
            <h2 className='content__title titulo__especial'>Elevación de mamas con prótesis de relleno</h2>
            <div className='main__content'>
              <p className='content__especial'>
                La elevación de mamas con prótesis de relleno es la técnica quirúrgica indicada para
                corregir, en una sola intervención, una mama caída y de pequeño tamaño. Recibe también
                el nombre de mastopexia con prótesis de relleno.
                <br /><br />
                Ofrece la posibilidad de elevar la mama al tiempo que conseguimos un aumento de su
                volumen mediante la inserción de una prótesis de relleno.
                <br /><br />
                En general, esta cirugía se practicará cuando se haya completado el desarrollo mamario,
                hacia los 18 años de edad.
              </p>
              <a href="/cirugia-estetica/cirugia-mamaria/elevacion-mamas-protesis"><h3>Más información</h3></a>
            </div>
          </div>
        </div>
        <img className='bg__img' src={bg_img} />
      </div>
    </div>
    );
}

export default Elevacion_Protesis