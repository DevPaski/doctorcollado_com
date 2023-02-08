import React from 'react';
import './dermolipectomia_braquial.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsFacial } from '../../../../components';

const Dermolipectomia_Braquial = () => {
  return (
    <div className='info__dbraquial'>
      <div>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />
        
        <div className='content__overlay__dbraquial'>
          <div className='content__container__dbraquial'>
            <div className='content__info__dbraquial'>
              <h1>Dermolipectomía Braquial</h1>
              <p>
                En anatomía humana, los brazos constituyen la parte proximal de la extremidad superior, extendiéndose entre el hombro y el codo.
                <br /><br />
                Su esqueleto está formado por el hueso del húmero, rodeado por los músculos que permiten flexionar y extender la articulación del codo. La grasa subcutánea y la piel conforman su revestimiento externo. Por su cara interna discurren los principales vasos sanguíneos y nervios en su camino hacia la mano.
                <br /><br />
                Los problemas más habituales de la silueta de los brazos son:
                <br /><br />
                <ul>
                  <li>
                    Los acúmulos grasos excesivos, sobre todo en su perímetro externo. Su tratamiento es una liposucción. 
                  </li>
                  <li>
                    La flaccidez. La cara interna de los brazos es una de las zonas corporales donde la piel es más delgada y que más se resiente con los cambios de peso corporal y con la edad. Su consecuencia es la aparición de estrías, flaccidez y, en casos extremos, descolgamientos cutáneos, que se aprecian mejor colocando los brazos en cruz. Su tratamiento es una dermolipectomía braquial.
                  </li>
                </ul>
              </p>

              <h2>¿En qué consiste la dermolipectomia braquial?</h2>
              <p>
                La práctica de esta cirugía se realiza habitualmente bajo anestesia general. Requiere ingreso en clínica y se recomienda una estancia de 24 horas.
                <br /><br />
                La valoración preoperatoria del grado de flaccidez tisular es fundamental para poder diseñar el patrón de extirpación y, por lo tanto, decidir la ubicación de la cicatriz resultante, que siempre quedará oculta en la cara interna del brazo.
                <br /><br />
                En casos muy leves, la flaccidez puede corregirse tensando los tejidos de la cara interna del brazo longitudinalmente hacia la axila, de forma que el excedente tisular se recorta en forma horizontal. La cicatriz final se ubica muy próxima a la axila, paralela a un pliegue cutáneo natural de la misma, fácilmente camuflable.
                <br /><br />
                En casos más severos, los mejores resultados sólo se consiguen si tensamos los tejidos transversalmente. Ahora, la cicatriz sigue el eje longitudinal del brazo, extendiéndose desde la axila y llegando hasta el codo, prolongándose por toda su cara interna. 
                <br /><br />
                No infrecuentemente debemos asociar ambos patrones de resección, quedando una cicatriz en forma de letra T, donde la pata corta se ubica en la axila y la larga discurre a lo largo del brazo.
                <br /><br />
                Una faja elástica durante el postoperatorio inmediato ayudará a disminuir la inflamación de la zona tratada y favorecerá la readaptación de la piel a su nuevo contorno. Habitualmente se aconseja un uso continuado de este tipo de prendas durante el primer mes tras la cirugía.
              </p>

              <h2>Limitaciones de la dermolipectomia braquial</h2>
              <p>
                No todos los factores de los que depende el aspecto y forma de los brazos pueden ser corregidos con esta cirugía.
                <br /><br />
                En esta intervención no cambia la calidad de la piel, por lo que si ha perdido su elasticidad original siempre estará más predispuesta a descolgamientos secundarios tras esta cirugía. Tampoco borra las estrías, pero elimina aquellas comprendidas en la piel extirpada.  
                <br /><br />
                Aunque sí extirpa la grasa ubicada en su cara interna, no cambia la grasa del perímetro externo braquial. En caso necesario, puede ser necesario asociar una liposucción de estas zonas para mejorar el contorno del brazo.
                <br /><br />
                La dermolipectomía braquial no debe considerarse como un tratamiento quirúrgico de la obesidad. Los individuos obesos que tengan intención de perder peso deben posponer cualquier clase de cirugía del contorno corporal hasta que sean capaces de mantener un peso adecuado y estable.
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info__dbraquial'>
          <div className='footer__info_site__dbraquial'>
              <ul>
                  <li>
                      <a href="/aviso-legal" className='underline'>Aviso Legal</a>
                  </li>
                  <li>-</li>
                  <li>
                      <a href="/politica-privacidad" className='underline'>Política de Privacidad</a>
                  </li>
                  <li>-</li>
                  <li>
                      <a href="/creditos" className='underline'>Créditos</a>
                  </li>
              </ul>
          </div>
        </div>

        <img className='bg__content_info' src={bg_img} />
      </div>
    </div>
  )
}

export default Dermolipectomia_Braquial