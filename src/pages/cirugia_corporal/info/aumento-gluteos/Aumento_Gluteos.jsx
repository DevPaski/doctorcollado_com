import React from 'react';
import './aumento_gluteos.css';

import { Link } from 'react-scroll';

import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsFacial } from '../../../../components';

const Aumento_Gluteos = () => {
  return (
    <div className='info__agluteos'>
      <div>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />

        <div className='content__overlay__agluteos'>
          <div className='content__container__agluteos'>
            <div className='content__info__agluteos'>
              <h1>Aumento de glúteos</h1>
              <h2>¿Cómo se aumentan los glúteos?</h2>
              <p>
                Aunque ejercitar la musculatura glútea puede ayudar, cuando queremos aumentar de
                forma notable el volumen de las nalgas sólo es posible mediante la inserción de
                un implante.
                <br /><br />
                No existe una única técnica de aumento de glúteos que cubra las necesidades de
                todos los pacientes. Todas ellas tienen en común que se precisa de la introducción
                de un implante para lograr nuestro objetivo.
                <br /><br />
                Las posiblidades son:
                <br /><br />
                <ul>
                  <li>
                    Aumento de glúteos con implante de grasa del propio paciente.
                  </li>
                  <li>
                    Aumento de glúteos con implantes de relleno inyectables.
                  </li>
                  <li>
                    Aumento de glúteos con implante sólido (prótesis).
                  </li>
                </ul>
                <br /><br />
                Se indicará un tipo de tratamiento u otro dependiendo de su caso particular.
              </p>

              <h2>Aumento de glúteos con implante de grasa del propio paciente</h2>
              <p>
                Es una técnica laboriosa que utiliza como implante la grasa del propio paciente (injerto de grasa). Ésta es su principal ventaja, pues el implante siempre es bien tolerado por el individuo y los resultados son muy naturales.
                <br /><br />
                La práctica de esta cirugía se realiza habitualmente bajo anestesia general. Requiere ingreso en clínica y se recomienda una estancia de 24 horas.
                <br /><br />
                En la primera parte de la cirugía obtenemos el implante de grasa mediante liposucción de otra zona corporal. Tras procesarla y concentrarla mediante diferentes técnicas, se inyecta en la zona elegida mediante cánula fina a través de mínimas incisiones cutáneas.
                <br /><br />
                La grasa infiltrada se comporta como un injerto vivo de tejido, es decir, que para que el implante tenga éxito debe vascularizarse. En caso contrario la grasa se reabsorberá, perdiendo el efecto conseguido.
                <br /><br />
                Éste es el principal problema de esta técnica. Se estima que aproximadamente el 30-50% de la grasa implantada podría reabsorberse por lo que, para llegar a un resultado satisfactorio, pueden ser necesarias nuevas sesiones de relleno.
              </p>

              <h2>Aumento de glúteos con implantes de relleno inyectables</h2>
              <p>
                En este caso, se usa como material de relleno implantes sintéticos inyectables
                <br /><br />
                Son formulados y fabricados en un laboratorio y dispensados en forma de jeringuillas para su aplicación por punción con aguja fina. Existen muchas marcas comerciales. Se diferencian entre sí por su composición química y su duración más o menos prolongada en el tiempo (reabsorbibles o permanentes).
                <br /><br />
                Aunque aparentemente es una técnica sencilla, no está exenta de potenciales problemas. El volumen exigido es elevado, encareciendo mucho el producto, particularmente si el implante es reabsorbible, por lo que se debería repetir el proceso periódicamente. Por otro lado, pueden verse reacciones inflamatorias crónicas por intolerancia al producto y desplazamientos secundarios desde el lugar original de implantación, ambos de difícil solución.
                <br /><br />
                En general, raramente indicamos implantes de relleno inyectables para el aumento de los glúteos.
              </p>

              <h2>Aumento de glúteos con implantes sólidos (prótesis)</h2>
              <p>
                En esta técnica se recurre al uso de una prótesis, esto es, un implante sólido de un material artificial, para aumentar su relieve.
                <br /><br />
                La mayoría de implantes utilizados actualmente son de silicona, polímero inorgánico a base de sílice. Existen una multitud de modelos que varían entre sí según su consistencia, su forma, su tamaño y la proyección que generan.
                <br /><br />
                Su cirujano plástico le asesorará sobre cuál es el implante más adecuado para su caso.
                <br /><br />
                La colocación de este tipo de prótesis supone una intervención quirúrgica. Habitualmente se practica bajo anestesia general o regional y el paciente permanecerá ingresado en la clínica la primera noche.
                <br /><br />
                Normalmente el implante se introduce tras hacer una incisión en la parte superior del pliegue interglúteo. Desde allí se accede a cada nalga, colocando la prótesis justo debajo de la grasa subcutánea o también cubierta por parte de la musculatura de la zona.
                <br /><br />
                Sus principales problemas potenciales son la infección, la intolerancia del implante (que podrían precisar de su retirada) y el desplazamiento secundario del mismo (que puede crear asimetría en el resultado). Igual que las prótesis de mama, también puede aparecer una contractura de la cápsula cicatricial, endureciendo la nalga, distorsionando su forma y causando molestias locales.
                <br /><br />
                En general, preferimos el implante de grasa a las prótesis para aumentar los glúteos.
              </p>

              <h2>Limitaciones del aumento de glúteos</h2>
              <p>
                El aumento de glúteos no puede corregir todos los problemas de la región.
                <br /><br />
                Aunque tensa la región de la nalga, el implante no cambia la calidad o textura de la piel, por lo que este factor puede influir en el resultado final de la técnica empleada.
                <br /><br />
                Los implantes pueden llegar a ser visibles o palpables como postizos debajo de la piel. Pueden no quedar perfectamente fijados en su localización y sufrir desplazamientos secundarios, causando cambios en el resultado inicialmente obtenido.
                <br /><br />
                Algunos tipos de implantes se van a ir reabsorbiendo poco a poco, pudiendo perder parte de la proyección original alcanzada y precisando de nuevas sesiones de tratamiento para mantener los resultados originales. Esto ocurre con algunos implantes de relleno inyectables y también con parte de la grasa.
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info__agluteos'>
          <div className='footer__info_site__agluteos'>
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

export default Aumento_Gluteos