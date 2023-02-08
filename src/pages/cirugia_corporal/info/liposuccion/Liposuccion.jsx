import React from 'react';
import './liposuccion.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsFacial } from '../../../../components';

const Liposuccion = () => {
  return (
    <div className='info__lipo'>
      <div>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />

        <div className='content__overlay__lipo'>
          <div className='content__container__lipo'>
            <div className='content__info__lipo'>
              <h1>Liposucción</h1>
              <p>
                El tejido graso o adiposo es un tipo particular de tejido conectivo que se encarga de almacenar la grasa en el organismo. En el adulto constituye una forma de reserva energética. Representa hasta un 15% del peso en el varón y hasta un 25% del peso en la mujer.
                <br /><br />
                Se localiza en múltiples áreas corporales tales como debajo de la piel, alrededor de las vísceras, en los músculos y en la médula de los huesos.
                <br /><br />
                En el ámbito de la Cirugía Plástica nos interesa especialmente la grasa subcutánea. Ella es responsable, en parte, de definir la silueta corporal y es la única localización que puede tratarse quirúrgicamente para modificarla.
                <br /><br />
                La liposucción y el injerto de grasa son técnicas habituales del cirujano plástico que inciden sobre la grasa subcutánea y que permiten modelar la figura.
              </p>

              <h2>La distribución de la grasa subcutánea</h2>
              <p>
                La grasa subcutánea sigue un patrón de distribución característico que depende del sexo de la persona:
                <br /><br />
                En la mujer predomina la grasa subcutánea en las mamas y en la mitad inferior del cuerpo, acumulándose en torno a la pelvis (abdomen inferior, caderas, glúteos) y en los muslos.
                En el varón, la grasa subcutánea predomina en la mitad superior del cuerpo.
                <br /><br />
                Su cantidad depende del peso de la persona y puede valorarse, de forma aproximada, con el test del pellizco, pinzando entre dos dedos su grosor.
              </p>

              <h2>¿Cómo se hace una liposucción?</h2>
              <p>
                La práctica de esta cirugía puede realizarse bajo anestesia local, regional o general según el número de zonas a tratar y su volumen respectivo. Por lo tanto, y según el caso, puede tratarse de una cirugía ambulatoria o con ingreso en clínica de 24 horas.
                <br /><br />
                Toda la intervención se practica a través de pequeñas incisiones cutáneas de apenas 0,5 cm cada una. Por ellas se introducen las llamadas cánulas, tubitos finos y largos de punta roma que nos permiten hacer el tratamiento.
                <br /><br />
                Inicialmente, la zona a tratar se prepara infiltrando una solución de suero fisiológico y medicamentos. Su objetivo es facilitar la extracción de la grasa, anestesiar la zona y disminuir el sangrado.
                <br /><br />
                Después, con la ayuda de un sistema de aspiración, vamos extrayendo los acúmulos grasos existentes debajo de la piel de forma progresiva y homogénea. La grasa extraída se desecha.
                <br /><br />
                Existen muchos sistemas de aspiración validados en el mercado. Desde una simple jeringa hasta una potente bomba de vacío, pasando por diversos aparatos más o menos sofisticados asistidos, por ejemplo, por ultrasonidos, vibración o láser.
                <br /><br />
                Una faja elástica durante el postoperatorio inmediato ayudará a disminuir la inflamación de la zona tratada y favorecerá la readaptación de la piel a su nuevo contorno. Habitualmente se aconseja un uso continuado de este tipo de prendas durante el primer mes tras la cirugía.
              </p>

              <h2>Limitaciones de la liposucción</h2>
              <p>
                No todos los factores de los que depende el aspecto y forma de la silueta pueden ser corregidos con esta cirugía.
                <br /><br />
                La liposucción no puede modificar la estructura ósea ni muscular de base ni tampoco la grasa interna visceral. Por lo tanto, existen limitaciones en cuanto a su capacidad de reducir el volumen total inicial.
                <br /><br />
                En esta intervención no cambia la calidad de la piel. Así, no elimina las estrías cutáneas ni tampoco la celulitis superficial (también llamada piel de naranja).
                <br /><br />
                Sus resultados están condicionados, en gran medida, por la elasticidad cutánea. Unos tejidos fláccidos pueden tener un resultado no óptimo tras la liposucción pues no podrán adaptarse adecuadamente al nuevo contorno.
                <br /><br />
                El mantenimiento de los resultados obtenidos sólo puede asegurarse si la persona mantiene el peso después de la cirugía.
              </p>

              <h2>La lipoescultura</h2>
              <p>
                La lipoescultura es una técnica de tratamiento integral de la silueta que no sólo permite eliminar los depósitos grasos subcutáneos no deseados sino que también puede mejorar zonas deficitarias en grasa o que presenten secuelas de cirugías previas del contorno corporal.
                <br /><br />
                De esta manera, la grasa extraída no se desecha. Por el contrario, tras recibir un tratamiento adecuado, se va a reinyectar en otras zonas de la anatomía.
                <br /><br />
                En definitiva, es un tratamiento que combina en una sola intervención quirúrgica una liposucción con un
                <br /><br />
                Son ejemplos de lipoescultura la reducción de los acúmulos grasos del abdomen y caderas al tiempo que se procede a aumentar el volumen de las nalgas o las mamas, o se utiliza la grasa extraída para mejorar irregularidades o asimetrías ocasionadas por traumatismos o tratamientos quirúrgicos previos.
                <br /><br />
                Su cirujano le asesorará sobre qué técnica es la más adecuada en su caso concreto.
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info__lipo'>
          <div className='footer__info_site__lipo'>
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

export default Liposuccion