import React from 'react';
import './aumento_pomulos.css';

import { Link } from 'react-scroll';

import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsFacial } from '../../../../components';

const Aumento_Pomulos = () => {
  return (
    <div className='info__pomulos'>
      <div>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />
        
        <div className='content__overlay__pomulos'>
          <div className='content__container__pomulos'>
            <div className='content__info__pomulos'>
              <h1>Pómulos</h1>
              <p>
                Los pómulos ocupan un lugar clave en el tercio medio facial. Su relieve está
                constituido fundamentalmente por el hueso malar pero también influyen todas las
                partes blandas que lo recubren (músculo, grasa y piel).
                <br /><br />
                Su forma es muy variable según las razas pero en todas ellas juega un papel muy
                importante para dar volumen al óvalo facial. 
                <br /><br />
                Un pómulo bien definido mejora el sostén de los tejidos faciales y, en general,
                rejuvenece a la persona.
                <br /><br />
                Un pómulo poco desarrollado favorece el descolgamiento facial a nivel de las
                mejillas y empeora el aspecto del párpado inferior, haciendo más notables las
                bolsas de grasas y el reborde óseo de la órbita.
              </p>

              <h2>¿Cómo se aumentan los pómulos?</h2>
              <p>
                No existe una única técnica de aumento de pómulos que cubra las necesidades de
                todos los pacientes. Todas ellas tienen en común que se precisa de la introducción
                de un implante para lograr nuestro objetivo.
                <br /><br />
                Las posiblidades son:
                <br /><br />
                <ul>
                  <Link to='implante-grasa'><li>Aumento de pómulos con implante de grasa del propio paciente</li></Link>
                  <Link to='implante-relleno'><li>Aumento de pómulos con implantes de relleno inyectables</li></Link>
                  <Link to='implante-solido'><li>Aumento de pómulos con implante sólido (prótesis)</li></Link>
                </ul>
                <br /><br />
                Se indicará un tipo de tratamiento u otro dependiendo de su caso particular.
              </p>

              <h2 id='implante-grasa'>Aumento de pómulos con implante de grasa del propio paciente</h2>
              <p>
                Es una técnica laboriosa que utiliza como implante la grasa del propio paciente.
                Ésta es su principal ventaja, pues el implante siempre es bien tolerado por el
                individuo y los resultados son muy naturales.
                <br /><br />
                Puede hacerse con anestesia local y sedación y no requiere ingreso en clínica.
                <br /><br />
                En la primera parte de la cirugía obtenemos el implante de grasa mediante
                liposucción de otra zona corporal. Tras procesarla y concentrarla mediante diferentes
                técnicas, se inyecta en la zona elegida mediante cánula fina a través de mínimas
                incisiones cutáneas. 
                <br /><br />
                La grasa infiltrada se comporta como un injerto vivo de tejido, es decir, que para
                que el implante tenga éxito debe vascularizarse. En caso contrario la grasa se
                reabsorberá, perdiendo el efecto conseguido.
                <br /><br />
                Éste es el principal problema de esta técnica. Se estima que aproximadamente el
                30-50% de la grasa implantada podría reabsorberse por lo que, para llegar a un
                resultado satisfactorio, pueden ser necesarias nuevas sesiones de relleno.
              </p>

              <h2 id='implante-relleno'>Aumento de pómulos con implantes de relleno inyectables</h2>
              <p>
                En este caso, se usa como material de relleno implantes sintéticos inyectables. 
                <br /><br />
                Son formulados y fabricados en un laboratorio y dispensados en forma de jeringuillas
                para su aplicación por punción con aguja fina. Existen muchas marcas comerciales.
                Se diferencian entre sí por su composición química y su duración más o menos
                prolongada en el tiempo (reabsorbibles o permanentes).  
                <br /><br />
                Su cirujano plástico le asesorará sobre cuál es el implante más adecuado para su caso.
                <br /><br />
                Esta técnica es la más sencilla de las descritas. Se practica con anestesia local
                en la consulta y su aplicación no dura más de 30 minutos. 
                <br /><br />
                Existe todo un capítulo que desarrolla este tema que puede consultar en el apartado
                de Medicina Estética.
              </p>

              <h2 id='implante-solido'>Aumento de pómulos con implantes sólidos (prótesis)</h2>
              <p>
                En esta técnica se recurre al uso de una prótesis, esto es, un implante sólido de un
                material artificial, colocado justo encima del hueso del pómulo, para aumentar su
                relieve. Por su composición, exiten mucho tipos de implantes. Quizás el más clásico
                sea la silicona sólida (polímero inorgánico a base de sílice). Otros ejemplos son el
                politetrafluoroetileno expandido (Gore-tex®) y el polietileno (Medpor®).
                <br /><br />
                También existen una multitud de modelos que varían entre sí según su consistencia,
                su forma, su tamaño y la proyección que generan.
                <br /><br />
                Su cirujano plástico le asesorará sobre cuál es el implante más adecuado para su caso.
                <br /><br />
                La colocación de este tipo de prótesis supone una pequeña intervención quirúrgica.
                Habitualmente se practica bajo anestesia general y el paciente permanecerá ingresado
                en la clínica la primera noche. En casos seleccionados puede realizarse con anestesia
                local y sedación.
                <br /><br />
                Normalmente el implante se introduce por vía interna, intraoral, colocando la
                incisión en el surco que se forma entre el labio superior y la encía, evitando
                así cicatrices externas. 
                <br /><br />
                Sus principales problemas potenciales son la infección y la intolerancia del
                implante (que podrían precisar de su retirada) y el desplazamiento secundario
                del mismo (que puede crear asimetría en el resultado).
                <br /><br />
                A largo plazo, las prótesis causan un cierto componente de reabsorción del hueso
                del pómulo por la presión constante al que lo someten, pudiendo perder parte de la
                proyección original alcanzada.
              </p>

              <h2>Limitaciones del aumento de pómulos</h2>
              <p>
                El aumento de pómulos no puede corregir todos los problemas de la región malar. 
                <br /><br />
                Aunque tensa la región de la mejilla, el implante no cambia la calidad o textura
                de la piel, por lo que este factor puede influir en el resultado final de la técnica
                empleada.
                <br /><br />
                Los implantes pueden llegar a ser visibles o palpables como postizos debajo de la
                piel. Pueden no quedar perfectamente fijados en su localización y sufrir
                desplazamientos secundarios, causando cambios en el resultado inicialmente obtenido.
                <br /><br />
                Algunos tipos de implantes se van a ir reabsorbiendo poco a poco, pudiendo perder
                parte de la proyección original alcanzada y precisando de nuevas sesiones de
                tratamiento para mantener los resultados originales. Esto ocurre con algunos
                implantes de relleno inyectables y también con parte de la grasa.
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info__pomulos'>
          <div className='footer__info_site__pomulos'>
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

export default Aumento_Pomulos