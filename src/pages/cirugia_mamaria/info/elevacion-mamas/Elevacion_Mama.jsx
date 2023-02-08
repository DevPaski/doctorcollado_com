import React from 'react';
import './elevacion_mamas.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsMamaria } from '../../../../components';

const Elevacion_Mama = () => {
  return (
    <div className='info__emamas'>
      <div>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />

        <div className='content__overlay__emamas'>
          <div className='content__container__emamas'>
            <div className='content__info__emamas'>
              <h1>Elevación de mamas</h1>
              <p>
                Se considera que una mama se encuentra ubicada en una posición ideal cuando
                su polo inferior no toca la piel del abdomen y cuando el pezón se localiza
                por encima del surco de la mama.
                <br /><br />
                En conservar su posición colaboran la propia consistencia de la glándula, unos
                ligamentos de sujeción que anclan la glándula a la piel y al plano muscular
                (ligamentos de Cooper) y, sobre todo, la propia piel de la mama.
                <br /><br />
                Los cambios hormonales, embarazos y fluctuaciones en el peso de la mujer pueden
                debilitar estas estructuras y causar el descenso de la mama. Por otro lado,
                una mama grande prácticamente siempre será una mama caída, pues sus elementos
                de sostén difícilmente podrán aguantar su peso.
                <br /><br />
                Técnicamente, una mama caída recibe también el nombre de mama ptósica (ptosis
                mamaria). Se caracteriza porque su piel está dilatada y ha perdido su elasticidad,
                coexistiendo con mucha frecuencia con estrías cutáneas. El polo superior está
                vacío y toda la glándula se concentra en el polo inferior, que contacta con la
                piel del abdomen. Además, el pezón está ubicado por debajo del surco e, incluso,
                mirando hacia abajo.
                <br /><br />
                La ptosis mamaria ha recibido diferentes clasificaciones en función del grado
                de descenso del pezón. 
              </p>

              <h2>¿Cómo se elevan las mamas?</h2>
              <p>
                En general se realiza bajo anestesia general y se recomienda un ingreso en clínica de 24 horas.
                <br /><br />
                No existe una única técnica de mastopexia que cubra las necesidades de todos los pacientes. Todas ellas tienen en común dos objetivos: 
                <br /><br />
                <ul>
                  <li>
                    Sobre la glándula: elevar y modificar su forma. Esto se consigue, básicamente, dividiendo la glándula en varios segmentos (colgajos glandulares) y cambiando la relación espacial entre ellos hasta conseguir la forma deseada. Uno de ellos llevará necesariamente incorporado el complejo areola-pezón, para ubicarlo en la parte más proyectada de la nueva mama.
                  </li>
                  <li>
                    Sobre la piel de la mama: ajustar el envoltorio cutáneo a la glándula remodelada, dando al resultado un aspecto de turgencia más atractivo estéticamente. Su consencuencia inevitable es una cicatriz.
                  </li>
                </ul>
                <br /><br />
                Precisamente, según el patrón de corte del excedente cutáneo, las técnicas de mastopexia se clasifican en: 
                <br /><br />
                <ul>
                  <li>
                    <b>Mastopexia con cicatriz periareolar:</b> el excedente cutáneo se recorta alrededor de la areola, donde queda ubicada la cicatriz.
                  </li>
                  <li>
                    <b>Mastopexia con cicatriz vertical:</b> a la cicatriz periareolar se añade una cicatriz vertical que discurre entre la porción inferior de la nueva areola hasta llegar al pliegue submamario.
                  </li>
                  <li>
                    <b>Mastopexia con cicatriz en forma de letra T invertida:</b> en estos casos añadimos también una cicatriz horizontal que sigue a todo lo largo el pliegue submamario. Recuerda la forma de la letra T colocada boca abajo.
                  </li>
                </ul>
                <br /><br />
                El utilizar una técnica u otra va a depender fundamentalmente del exceso de piel presente. Excedentes pequeños podrán corregirse con una cicatriz periareolar pero los excedentes mayores exigirán usar una cicatriz en forma de letra T invertida. 
              </p>

              <h2>Limitaciones de la elevación de las mamas</h2>
              <p>
                La forma y el tamaño de las mamas previas a la cirugía pueden influir en el resultado final. Si las mamas no tienen el mismo tamaño o forma antes de la cirugía es poco probable que sean completamente simétricas después.
                <br /><br />
                La mastopexia no cambia la naturaleza de la mama ni detiene el proceso natural de envejecimiento de la misma. Por ello, glándulas formadas por tejidos laxos y pieles estriadas están más predispuestas a descolgamientos secundarios tras esta cirugía.
                <br /><br />
                Los mejores resultados se consiguen con volúmenes mamarios moderados. Intentar elevar mamas grandes es una mala estrategia y lo aconsejado en estos casos es proceder también de forma concomitante a la reducción de su volumen.
                <br /><br />
                Es difícil conseguir una mama bien llena en su polo superior sólo con una mastopexia. Si se desea este tipo de resultado debe considerarse la posibilidad de añadir una prótesis de mama.
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info__emamas'>
          <div className='footer__info_site__emamas'>
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
  );
}

export default Elevacion_Mama