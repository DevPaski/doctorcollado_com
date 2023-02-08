import React from 'react';
import './implantes.css'

import { Link } from 'react-scroll';

import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsFacial } from '../../../../components';

const Implantes = () => {
  return (
    <div className='info__implantes'>
      <div>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />
        
        <div className='content__overlay__implantes'>
          <div className='content__container__implantes'>
            <div className='content__info__implantes'>
              <h1>Implantes inyectables de relleno</h1>
              <p>
                Un implante inyectable de relleno es un producto diseñado para proporcionar
                volumen a los tejidos blandos.
                <br /><br />
                Aunque hay múltiples tipos en el mercado, hasta hoy no ha aparecido el
                implante inyectable ideal.
                <br /><br />
                Son datos a valorar su biocompatiblidad (tolerancia), facilidad de inyección,
                duración del efecto conseguido, naturalidad del resultado y su coste económico.
                <br /><br />
                Esto quiere decir que cada producto tiene sus ventajas e inconvenientes. Es
                muy importante que el paciente sea conocedor de estos factores para que se
                pueda elegir el implante más adecuado para su caso.
              </p>

              <h2>¿Qué tipos existen de implantes de relleno inyectables</h2>
              <p>
                Es muy útil clasificarlos según dos parámetros: su origen y la duración del
                efecto conseguido.
                <br /><br />
                Según su origen existen:
                <br /><br />
                <ul>
                  <li>Implantes biológicos: derivan de animales.</li>
                  <li>Implantes sintéticos: obtenidos por síntesis química en laboratorio.</li>
                </ul>
                <br /><br />
                Según su duración hablamos de:
                <br /><br />
                <ul>
                  <li>Implantes reabsorbibles (no permanentes).</li>
                  <li>Implantes irreabsorbibles (permanentes).</li>
                </ul>
                <br /><br />
                Los implantes biológicos se componen de moléculas extraídas de tejidos de
                diferentes animales. Se procesan en el laboratorio para eliminar toda
                posibilidad de transmitir enfermedades y evitar la sensibilización de la
                persona a proteínas animales. Algunos, sin embargo, precisan de un test de
                alergia previo a su aplicación en clínica. Todos ellos son reabsorbibles pues
                el cuerpo humano es capaz de eliminarlos en más o menos tiempo.
                <br /><br />
                Son ejemplos de implantes biológicos los formados por el colágeno bovino
                (ZyDerm® y ZyPlast®) y el ácido hialurónico aviar (Hylaform ®).
                <br /><br />
                Los implantes sintéticos se fabrican en laboratorio. Puesto que son de
                síntesis química no hay reacciones cruzadas con proteínas animales y no
                tienen que hacerse nunca pruebas previas de alergia. Algunos son reabsorbibles
                y otros irreabsorbibles. Por su naturaleza sintética pueden generar reacciones
                inflamatorias a cuerpo extraño que se manifiestan por nódulos inflamatorios en
                las zonas de aplicación.
                <br /><br />
                Son ejemplos de implantes sintéticos reabsorbibles los constituidos por ácido
                hialurónico (Restylane®, Juvederm®), ácido poliláctico (Sculptra®) y gel de
                polisacárido con hidroxiapatita cálcica (Radiesse®).
                <br /><br />
                Son ejemplos de implantes sintéticos irreabsorbibles los formados por
                poliacrilamidas (Formacryl®, Evolution®, Aquamid®) y polialquilimidas
                (Bioalcamid®). La silicona líquida es un implante sintético irreabsorbible
                totalmente prohibido en la actualidad por los graves efectos secundarios que
                puede provocar.
                <br /><br />
                También hay productos mixtos, que combinan varios componentes de distinta
                naturaleza. Son ejemplos Artecoll® (colágeno bovino con microesferas de
                polimetilmetacrilato) y Dermalive® (ácido hialurónico asociado a
                metilmetacrilato).
              </p>

              <h2>Indicaciones de los implantes de relleno inyectables</h2>
              <p>
                Son muchas las aplicaciones encontradas para este tipo de productos. Las
                más importantes serían:
                <br /><br />
                <ul>
                  <li>Relleno de arrugas y pliegues cutáneos.</li>
                  <li>Aumento y perfilado de los labios.</li>
                  <li>
                    Modelado de los contornos faciales (pómulos, mentón, reborde
                    mandibular) y corporales.
                  </li>
                  <li>
                    Restitución del volumen facial en casos de atrofia de los tejidos
                    blandos, como ocurre en la hemiatrofia facial (Enfermedad de Romberg)
                    o en las secuelas de tratamientos antirretrovirales en los pacientes
                    con HIV +.
                  </li>
                  <li>Corrección de depresiones cicatriciales.</li>
                </ul>
              </p>

              <h2>¿En qué consiste el tratamiento con implantes de relleno inyectables?</h2>
              <p>
                El tratamiento se hace siempre de forma ambulatoria, en consultorio.
                <br /><br />
                En general vienen dispensados en forma de jeringuilla y, como su nombre
                indica, se aplican por inyección percutánea. Para minimizar las molestias
                puede aplicarse una pomada tópica anestésica o precisar de anestesia local.
                Algunos productos vienen ya asociados a anestésicos.
                <br /><br />
                Según los problemas a tratar, el implante podrá ser inyectado a diferentes
                niveles de profundidad, pudiéndo quedar alojado en el espesor de la misma piel,
                en el tejido graso subcutáneo, en el músculo o incluso justo sobre el hueso.
                Los niveles más superficiales sirven para la corrección de arrugas o pliegues
                cutáneos más finos y los niveles más profundos para dar volumen a zonas como
                el mentón y los pómulos.
                <br /><br />
                El mantenimiento de los resultados exige su aplicación periódica. Cuando el
                implante es reabsorbible, depende de la duración del  mismo (cada 6, 12 ó 18
                meses, según el producto). Pero cuando el implante es permanente también suele
                ser necesario nuevas aplicaciones en un futuro, pues muchas veces el problema
                a tratar puede seguir evolucionando, como son las arrugas por envejecimiento.
              </p>

              <h2>Contraindicaciones de los implantes de relleno inyectables</h2>
              <p>
                El tratamiento con implantes de relleno está contraindicado en los siguientes
                casos:
                <br /><br />
                <ul>
                  <li>
                    Intolerancia o alergia conocida a algunos de los componentes del implante.
                  </li>
                  <li>
                    Si existen enfermedades de la coagulación sanguínea como la hemofilia o
                    toma medicamentos que la alteran (ácido acetilsalicílico -Aspirina ®- ,
                    heparina, Sintrom®, Plavix ® y otros).
                  </li>
                  <li>
                    Procesos infecciosos activos en la zona a tratar.
                  </li>
                  <li>
                    Estados de inmunodepresión.
                  </li>
                  <li>
                    Embarazo o lactancia.
                  </li>
                </ul>
                <br /><br />
                Si tiene predisposición al herpes labial se debe hacer una profilaxis
                antibiótica antes de tratar con implantes los labios.
                <br /><br />
                En general se desconocen las posibles interacciones entre sí de productos
                diferentes. Si usted tiene un implante inyectable previo debe notificarlo
                para evitar problemas potenciales si se aplicara otro implante diferente.
              </p>

              <h2>Complicaciones de los implantes de relleno inyectables</h2>
              <p>
                Después de inyectar un implante de relleno son de esperar pequeños hematomas
                en los puntos de punción y una leve reacción inflamatoria local en forma de
                hinchazón y rojez. Hasta que remita no se aconseja aplicar calor en la zona
                ni tomar el sol.
                <br /><br />
                Pueden notarse nódulos debajo de la piel por un depósito irregular del producto
                que normalmente remiten con masajes.
                <br /><br />
                En transtornos bilaterales pueden notarse asimetrías que podrían precisar
                nuevas aplicaciones del producto en sesiones sucesivas.
                <br /><br />
                Una aplicación inadecuada del implante puede hacer que éste sea visible a
                través de la piel.
                <br /><br />
                En ocasiones, sobre todo en implantes permanentes, pueden existir reacciones
                cicatriciales e inflamatorias no deseadas. Éstas pueden manifestarse como
                nodulaciones frías debajo de la piel que ya no desaparecen con los masajes
                manuales (granulomas a cuerpo extraño) o como episodios recidivantes de
                hinchazón y rojez. La resolución de estos problemas no es fácil. Pueden
                necesitar de la infiltración local con corticoides e incluso un tratamiento
                antinflamatorio sistémico. Si el problema persiste pudiera tener que
                plantearse la extirpación del implante mediante cirugía, quedando una
                cicatriz en la zona a tratar.
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info__implantes'>
          <div className='footer__info_site__implantes'>
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

export default Implantes