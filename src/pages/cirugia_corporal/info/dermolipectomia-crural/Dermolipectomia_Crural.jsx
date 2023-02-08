import React from 'react';
import './dermolipectomia_crural.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsFacial } from '../../../../components';

const Dermolipectomia_Crural = () => {
  return (
    <div className='info__dcrural'>
      <div>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />
        
        <div className='content__overlay__dcrural'>
          <div className='content__container__dcrural'>
            <div className='content__info__dcrural'>
              <h1>Dermolipectomía crural</h1>
              <p>
                En anatomía humana, los muslos constituyen la parte proximal de la extremidad inferior, extendiéndose entre la cadera y la rodilla.
                <br /><br />
                Su esqueleto está formado por el hueso del fémur, que es el mayor del cuerpo, y rodeado por los músculos que permiten flexionar y extender la articulación de la rodilla. La grasa subcutánea y la piel conforman su revestimiento externo. Desde la ingle y siguiendo su cara interna discurren los principales vasos sanguíneos y nervios en su camino hacia el pie.
                <br /><br />
                Los problemas más habituales de la silueta de los muslos son:
                <br /><br />
                <ul>
                  <li>
                    Los acúmulos grasos excesivos, sobre todo en su porción interna (relacionado muchas veces con problemas de roce al caminar) y en su porción externa (constituyendo las famosas cartucheras). Su tratamiento es una liposucción.
                  </li>
                  <li>
                    La flaccidez. La cara interna de los muslos, como su homóloga en los brazos, es una de las zonas corporales donde la piel es más delgada y que más se resiente con los cambios de peso corporal y con la edad. Su consecuencia es la aparición de estrías, flaccidez y, en casos extremos, descolgamientos cutáneos. Su tratamiento es una dermolipectomía crural.
                  </li>
                </ul>
              </p>

              <h2>¿En qué consiste la dermolipectomía crural?</h2>
              <p>
                La práctica de esta cirugía se realiza habitualmente bajo anestesia general. Requiere ingreso en clínica y se recomienda una estancia de 24 horas.
                <br /><br />
                La valoración preoperatoria del grado de flaccidez tisular es fundamental para poder diseñar el patrón de extirpación y, por lo tanto, decidir la ubicación de la cicatriz resultante, que siempre quedará oculta en la cara interna del muslo.
                <br /><br />
                En casos muy leves, la flaccidez puede corregirse tensando los tejidos de la cara interna del muslo longitudinalmente hacia la ingle, de forma que el excedente tisular se recorta en forma horizontal. La cicatriz final se ubica paralela al pliegue cutáneo natural de la ingle y el que forma la nalga con el muslo, fácilmente camuflable.
                <br /><br />
                En casos más severos, los mejores resultados sólo se consiguen si tensamos los tejidos transversalmente. Ahora, la cicatriz sigue el eje longitudinal del muslo, extendiéndose desde la ingle y llegando hasta la rodilla, prolongándose por toda su cara interna.
                <br /><br />
                No infrecuentemente debemos asociar ambos patrones de resección, quedando una cicatriz en forma de letra T, donde la pata corta se ubica en la ingle y la larga discurre a lo largo del muslo.
                <br /><br />
                Una faja elástica durante el postoperatorio inmediato ayudará a disminuir la inflamación de la zona tratada y favorecerá la readaptación de la piel a su nuevo contorno. Habitualmente se aconseja un uso continuado de este tipo de prendas durante el primer mes tras la cirugía.
              </p>

              <h2>Limitaciones de la dermolipectomía crural</h2>
              <p>
                No todos los factores de los que depende el aspecto y forma de los muslos pueden ser corregidos con esta cirugía.
                <br /><br />
                En esta intervención no cambia la calidad de la piel, por lo que si ha perdido su elasticidad original siempre estará más predispuesta a descolgamientos secundarios tras esta cirugía. Tampoco borra las estrías, pero elimina aquellas comprendidas en la piel extirpada.  
                <br /><br />
                Aunque sí extirpa la grasa ubicada en su cara interna, no cambia la grasa de la región de las caderas. En caso necesario, puede ser necesario asociar una liposucción de esta zona para mejorar el contorno del muslo.
                <br /><br />
                La dermolipectomía crural no debe considerarse como un tratamiento quirúrgico de la obesidad. Los individuos obesos que tengan intención de perder peso deben posponer cualquier clase de cirugía del contorno corporal hasta que sean capaces de mantener un peso adecuado y estable.
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info__dcrural'>
          <div className='footer__info_site__dcrural'>
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

export default Dermolipectomia_Crural