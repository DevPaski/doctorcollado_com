import React from 'react';
import './aumento_menton.css';

import { Link } from 'react-scroll';

import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsFacial } from '../../../../components';

const Aumento_Menton = () => {
  return (
    <div className='info__menton'>
      <div>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />
        
        <div className='content__overlay__menton'>
          <div className='content__container__menton'>
            <div className='content__info__menton'>
              <h1>Mentón</h1>
              <p>
                La barbilla constituye la parte inferior más prominente del perfil facial. Su
                forma depende fundamentalmente del mentón, esto es, de aquella parte del hueso
                de la mandíbula comprendida entre los dos dientes caninos. Pero también influyen
                todas las partes blandas que lo recubren (músculo, grasa y piel).
                <br /><br />
                Un mentón bien desarrollado es importante para mostrar un perfil facial
                proporcionado, manteniendo unas relaciones adecuadas con la nariz y con el cuello.
                <br /><br />
                La falta de desarrollo del mentón se llama, técnicamente, microgenia y es el
                problema que nos interesa aquí. Además de causar un perfil no favorable, es una
                causa predisponente al descolgamiento de los tejidos del cuello con el paso de los
                años, generando un cuello obtuso.
                <br /><br />
                No debemos confundir la microgenia con la retrognatia, problema más complejo que
                afecta a toda la mandíbula y no sólo al mentón. Aunque externamente pueden parecerse,
                la diferencia fundamental es que en la retrognatia existe también una alteración en
                el contacto de los dientes entre sí (malaoclusión dental), pues la arcada dentaria
                inferior es proporcionalmente más pequeña que la superior. Su solución es compleja y
                exige elongación del hueso de la mandíbula mediante técnicas de cirugía ortognática
                y ortodoncia.
              </p>

              <h2>¿Cómo se aumenta el mentón?</h2>
              <p>
                No hay una sola técnica para conseguir nuestro objetivo. 
                <br /><br />
                Las posiblidades son:
                <br /><br />                
                <ul>
                  <Link to='implante-grasa'><li>Aumento de mentón con implante de grasa del propio paciente</li></Link>
                  <Link to='implante-relleno'><li>Aumento de mentón con implantes de relleno inyectables</li></Link>
                  <Link to='implante-solido'><li>Aumento de mentón con implante sólido (prótesis)</li></Link>
                  <Link to='osteotomia-mandibular'><li>Aumento de mentón por osteotomía mandibular</li></Link>
                </ul>
                <br /><br />
                En las tres primeras introducimos un implante para realzar su proyección.
                En la última se provoca una fractura controlada del mentón para cambiar su posición.
                <br /><br />
                Se indicará un tipo de tratamiento u otro dependiendo de su caso particular.
              </p>

              <h2 id='implante-grasa'>Aumento del mentón con implante de grasa del propio paciente</h2>
              <p>
                Es una técnica laboriosa que utiliza como implante la grasa del propio paciente.
                Ésta es su principal ventaja, pues el implante siempre es bien tolerado por el
                individuo y los resultados son muy naturales.
                <br /><br />
                Puede hacerse con anestesia local y sedación y no requiere ingreso en clínica.
                <br /><br />
                En la primera parte de la cirugía obtenemos el implante de grasa mediante
                liposucción de otra zona corporal. Tras procesarla y concentrarla mediante
                diferentes técnicas, se inyecta en la zona elegida mediante cánula fina a través
                de mínimas incisiones cutáneas. 
                <br /><br />
                La grasa infiltrada se comporta como un injerto vivo de tejido, es decir, que para
                que el implante tenga éxito debe vascularizarse. En caso contrario la grasa se
                reabsorberá, perdiendo el efecto conseguido.
                <br /><br />
                Éste es el principal problema de esta técnica. Se estima que aproximadamente el
                30-50% de la grasa implantada podría reabsorberse por lo que, para llegar a un
                resultado satisfactorio, pueden ser necesarias nuevas sesiones de relleno.
              </p>

              <h2 id='implante-relleno'>Aumento del mentón con implantes de relleno inyectables</h2>
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
                Esta técnica es la más sencilla de las descritas. Se practica con anestesia local en
                la consulta y su aplicación no dura más de 30 minutos. 
                <br /><br />
                Existe todo un capítulo que desarrolla este tema que puede consultar en el apartado
                de Medicina Estética.
              </p>

              <h2 id='implante-solido'>Aumento del mentón con implantes sólidos (prótesis)</h2>
              <p>
                En esta técnica se recurre al uso de una prótesis, esto es, un implante sólido de
                un material artificial, colocado justo encima del hueso del pómulo, para aumentar
                su relieve.
                <br /><br />
                Por su composición, exiten mucho tipos de implantes. Quizás el más clásico sea la
                silicona sólida (polímero inorgánico a base de sílice). Otros ejemplos son el
                politetrafluoroetileno expandido (Gore-tex®) y el polietileno (Medpor®).
                <br /><br />
                También existen una multitud de modelos que varían entre sí según su consistencia,
                su forma, su tamaño y la proyección que generan.
                <br /><br />
                Su cirujano plástico le asesorará sobre cuál es el implante más adecuado para su
                caso.
                <br /><br />
                La colocación de este tipo de prótesis supone una pequeña intervención quirúrgica.
                Habitualmente se practica bajo anestesia general y el paciente permanecerá ingresado
                en la clínica la primera noche. En casos seleccionados puede realizarse con anestesia
                local y sedación.
                <br /><br />
                Normalmente colocamos el implante por vía externa, a través de la piel, colocando la
                incisión justo detrás de la barbilla, quedando siempre en un lugar poco visible.
                Basta con una incisión de pocos centímetros de longitud para poder introducir una
                prótesis de tamaño mediano.
                <br /><br />
                Está descrita también la vía interna, intraoral, colocando la incisión en la unión
                del labio inferior con la encía, pero tiene mayor riesgo de infección y de
                dehiscencia de la herida.
              </p>

              <h2 id='osteotomia-mandibular'>Aumento del mentón por osteotomía mandibular</h2>
              <p>
                Es la única técnica en la que se consigue aumentar el mentón sin introducir
                implante alguno.
                <br /><br />
                Es la más compleja de todas. Requiere anestesia general y una noche de ingreso
                en clínica.
                <br /><br />
                Mediante un abordaje intraoral amplio, colocando la incisión entre el labio
                inferior y la encía, se expone la parte anterior de la mandíbula entre ambos
                dientes caninos. Con una sierra oscilante se hace un corte transversal del mentón
                para separar esta porción de hueso del resto de la mandíbula y poder así cambiar
                su posición. Se debe fijar mediante miniplacas irreabsorbibles de titanio para que
                suelde correctamente en su nueva ubicación, como cualquier fractura de un hueso.
                <br /><br />
                El riesgo principal de esta técnica es la lesión de los nervios mentonianos, que
                dan la sensibilidad de la piel del labio inferior y mentón.
              </p>

              <h2>Limitaciones del aumento del mentón</h2>
              <p>
                El aumento de mentón no puede corregir todos los problemas de esta región de la
                mandíbula. 
                <br /><br />
                Aunque tensa la barbilla, este tratamiento no cambia la calidad o textura de la
                piel, por lo que este factor puede influir en el resultado final de la técnica
                usada.
                <br /><br />
                Tampoco tiene influencia alguna sobre la forma en la que contactan entre sí los
                dientes (oclusión dental) ni sobre el tamaño general de la mandíbula.
                <br /><br />
                Los implantes pueden llegar a ser visibles o palpables como postizos debajo de
                la piel. Pueden no quedar perfectamente fijados en su localización y sufrir
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

        <div className='footer__info__menton'>
          <div className='footer__info_site__menton'>
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

export default Aumento_Menton