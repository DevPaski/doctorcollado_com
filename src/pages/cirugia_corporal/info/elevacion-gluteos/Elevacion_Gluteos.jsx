import React from 'react';
import './elevacion_gluteos.css';

import { Link } from 'react-scroll';

import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsFacial } from '../../../../components';

const Elevacion_Gluteos = () => {
  return (
    <div className='info__egluteos'>
      <div>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />

        <div className='content__overlay__egluteos'>
          <div className='content__container__egluteos'>
            <div className='content__info__egluteos'>
              <h1>Elevación de glúteos</h1>
              <p>
                También llamados <b>nalgas</b>, sus proporciones tienen importantes implicaciones en la silueta corporal y existen acusadas diferencias entre ambos sexos.
                <br /><br />
                Los glúteos constituyen la región anatómica más caudal del tronco posterior. Entre ambos glúteos se forma el pliegue interglúteo y con el muslo se delimita el llamado pliegue subglúteo. En cambio, los límites con la espalda y la cadera son mucho más sutiles.
                <br /><br />
                Su esqueleto está formado por la pelvis, más ancha en la mujer que en el varón. En la línea media se encuentran los huesos del sacro y del cóccix, que constituyen la porción más caudal de la columna vertebral. Una adecuada lordosis lumbar (incurvación hacia delante de la columna en la zona de la cintura) favorece que la transición entre la espalda y las nalgas sea atractiva en la silueta de perfil.
                <br /><br />
                La musculatura glútea se concentra sobre todo en su porcion superior y permite extender la cadera, llevando la extremidad inferior hacia atrás.
                <br /><br />
                La grasa subcutánea es la principal responsable del volumen de las nalgas. Su patrón de distribución es típico y propio de cada sexo. En la mujer suele ser abundante y homogéneo, dando a la nalga una proyección y redondez característica. En el varón predominan líneas más rectas y la grasa suele ser deficitaria en su porción más lateral.
                <br /><br />
                La piel reviste por fuera a la nalga y puede resentirse por los cambios del peso corporal y por el envejecimiento. Sus consecuencias son la aparición de estrías y la existencia de flaccidez.
              </p>

              <h2>La caída del glúteo</h2>
              <p>
                Se considera que el glúteo ideal nunca debe tocar la piel del muslo. El pliegue que forma con él, pliegue subglúteo, debe ser corto y restringido a la porción más interna de la nalga, sin extenderse más allá del punto central del muslo en la visión posterior de la persona.
                <br /><br />
                Aunque las características del glúteo son definidas constitucionalmente y están marcadas por el sexo de la persona, las fluctuaciones en el peso pueden debilitar las estructuras de sostén del mismo y causar su descenso. Por otro lado, un glúteo grande siempre estará más predispuesto a su futura caída.
                <br /><br />
                Técnicamente, un glúteo caído también recibe el nombre de ptósico (<b>ptosis glútea</b>). Lo más significativo es que el pliegue subglúteo se prolonga, extendiéndose hacia la cadera y, en los casos más importantes, la piel de la nalga acaba tocando la del muslo, profundizando el pliegue subglúteo.
              </p>

              <h2>¿En qué consiste la elevación de glúteos?</h2>
              <p>
                La práctica de esta cirugía puede realizarse bajo anestesia general o con anestesia regional. Requiere ingreso en clínica y se recomienda una estancia de 24 horas.
                <br /><br />
                La piel y grasa subcutáneas en exceso son extirpados en la parte superior de la nalga. El cierre de la herida tensa los tejidos en sentido superior, elevando los glúteos. Se puede modificar la técnica de manera que se preserva parte del tejido graso que, en lugar de extirparse, queda retenido en la zona a modo de prótesis de relleno, por lo que también conseguimos un aumento de su volumen en forma moderada.
                <br /><br />
                En cada lado, la cicatriz residual tiene forma de arco, extendiéndose desde la parte superior del pliegue interglúteo hacia la cadera, en mayor o menor longitud según el grado de flaccidez. En visión posterior, la forma de la cicatriz de ambos glúteos recuerda a la de un ave con las alas extendidas. Siempre quedará oculta debajo de la ropa interior.
                <br /><br />
                Una faja elástica ayudará a disminuir la inflamación de la zona tratada y favorecerá la readaptación de la piel a su nuevo contorno. Habitualmente se aconseja un uso continuado de este tipo de prendas durante un mínimo de un mes tras la cirugía.
              </p>

              <h2>Limitaciones de la elevación de glúteos</h2>
              <p>
                La forma y el tamaño de las nalgas previas a la cirugía pueden influir en el resultado final. Si no son iguales antes de la cirugía es poco probable que sean completamente simétricas después.
                <br /><br />
                La elevación de nalgas no cambia su constitución ni detiene el proceso natural de envejecimiento de ellas. Por ello, glúteos formados por tejidos laxos y pieles estriadas están más predispuestos a descolgamientos secundarios tras esta cirugía.
                <br /><br />
                Con el lifting de glúteos, aunque se consigue cierto grado de remodelado de las mismas, no es una técnica que cambie su volumen en gran medida. Si se desea este tipo de resultado debe considerarse la posibilidad de añadir un implante.
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info__egluteos'>
          <div className='footer__info_site__egluteos'>
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

export default Elevacion_Gluteos