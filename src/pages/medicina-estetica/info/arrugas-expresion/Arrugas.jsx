import React from 'react';
import './arrugas.css'

import { Link } from 'react-scroll';

import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsFacial } from '../../../../components';

const Arrugas = () => {
  return (
    <div className='info__arrugas'>
      <div>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />
        
        <div className='content__overlay__arrugas'>
          <div className='content__container__arrugas'>
            <div className='content__info__arrugas'>
              <h1>Arrugas de expresión</h1>
              <p>
                Las arrugas de expresión son aquellas que aparecen con la mímica facial
                (gesticulación) y se relacionan con la expresividad de la persona. Se
                originan por la contracción de los músculos voluntarios de la cara a partir
                de los impulsos nerviosos que desde el cerebro se conducen a través del
                llamado nervio facial. 
                <br /><br />
                La contracción de cada músculo genera una arruga que le es propia. Así:
                <br /><br />
                <ul>
                  <li>
                    La contracción del músculo frontal provoca la elevación de las cejas y
                    aparecen arrugas que recorren horizontalmente la frente
                  </li>
                  <li>
                    La contracción del músculo corrugador de la zona glabelar provoca el
                    fruncimiento del entrecejo (aproxima entre sí las cejas) y provocan la
                    aparición de arrugas verticales en esta zona
                  </li>
                  <li>
                    La contracción del músculo orbicular de los párpados causa el cierre
                    forzado de los ojos y genera la aparición de unas arrugas que irradian
                    desde el canto lateral de los mismos. Son las conocidas popularmente como
                    "patas de gallo"
                  </li>
                  <li>
                    La contracción del músculo orbicular de los labios causa el fruncimiento
                    de la boca y provoca la aparición del famoso "código de barras"
                  </li>
                  <li>
                    La contracción del músculo platisma provoca la aparición de unas bandas
                    verticales en la parte anterior del cuello que discurren desde el reborde
                    inferior de la mandíbula hacia el esternón y las clavículas
                  </li>
                </ul>
              </p>

              <h2>¿Cuándo se indica el tratamiento de las arrugas de expresión?</h2>
              <p>
                Aunque todas las personas expresan arrugas de expresión con la gesticulación,
                sólo debe indicarse su tratamiento por motivos estéticos cuando la intensidad
                de las arrugas supone un importante impacto psicológico en el paciente. 
                <br /><br />
                Solamente está autorizado el tratamiento de aquellas arrugas localizadas en el
                tercio superior de la cara, concretamente las localizadas en la frente, el
                entrecejo y las "patas de gallo".
              </p>

              <h2>¿En qué consiste el tratamiento de las arrugas de expresión?</h2>
              <p>
                El tratamiento se hace en la consulta y de forma ambulatoria.
                <br /><br />
                Se identifica el músculo responsable de generar la arruga y se bloquea por
                infiltración con aguja fina. Habitualmente practicamos esta intervención
                sin necesidad de anestesia local. En pacientes más sensibles puede aplicarse
                previamente analgesia tópica mediante la aplicación de frío en la zona a tratar.
                <br /><br />
                La infiltración debilita el normal funcionamiento del músculo, que pierde
                fuerza para contraerse. Este efecto no es apreciable de forma inmediata sino
                que empieza a manifestarse a partir del tercer día y son máximos al mes y
                medio del tratamiento.
              </p>

              <h2>Contraindicaciones</h2>
              <p>
                En la primera consulta el cirujano realizará una historia clínica completa,
                descartando enfermedades generales o medicaciones que esté tomando que pudieran
                interferir o incluso contraindicar el tratamiento.
                <br /><br />
                El tratamiento está contraindicado en:
                <br /><br />
                <ul>
                  <li>
                    Pacientes menores de 18 años.
                  </li>
                  <li>
                    Sensibilidad conocida a algunos de sus componentes.
                  </li>
                  <li>
                    Si existen enfermedades de la coagulación sanguínea como la hemofilia o
                    se están tomando medicamentos que la alteran (ácido acetilsalicílico
                    -Aspirina ®- , heparina, Sintrom®, Plavix ® y otros).
                  </li>
                  <li>
                    Antecedentes de enfermedades del sistema neuromuscular que impliquen
                    debilidad en la contracción de los músculos tales como la Miastenia
                    gravis, el Síndrome de Eaton-Lambert, esclerosis lateral amioatrófica
                    (ELA) y otras.
                  </li>
                  <li>
                    Infecciones activas de la piel en el lugar a tratar.
                  </li>
                  <li>
                    Antecedentes de enfermedades conocidas del sistema inmunitario en fase
                    activa o pacientes con tratamiento farmacológico inmunosupresor.
                  </li>
                </ul>
                <br /><br />
                Se desconocen las posibles interacciones de este producto con:
                <br /><br />
                <ul>
                  <li>
                    El embarazo y lactancia materna. Por ello, se desaconseja su
                    administración a mujeres gestantes y durante la lactancia materna.
                  </li>
                  <li>
                    Otros implantes cutáneos que el paciente pudiera tener previamente
                    aplicados en el área a tratar. No se aconseja, por tanto, mezclar
                    productos en la misma zona.
                  </li>
                </ul>
              </p>

              <h2>Limitaciones del tratamiento</h2>
              <p>
                Con el paso del tiempo, el tratamiento aplicado pierde efectividad y se
                apreciará una lenta y progresiva pérdida del efecto conseguido. Aunque la
                contracción muscular empieza a recuperarse a partir de los 3 meses de su
                aplicación, sus efectos pueden aún notarse hasta aproximadamente los 6 meses
                del tratamiento.
                <br /><br />
                Por ello, siempre son necesarias de forma periódica nuevos tratamientos para
                mantener los resultados. No se aconsejan nuevas aplicaciones antes de los 3
                meses, siendo lo recomendable repetirlas cada 6 meses.
                <br /><br />
                Una aplicación demasiado frecuente o excesiva puede dar lugar a una disminución
                en la efectividad de futuros tratamientos.
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info__arrugas'>
          <div className='footer__info_site__arrugas'>
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

export default Arrugas