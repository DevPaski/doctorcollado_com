import React from 'react';
import './peeling.css'

import { Link } from 'react-scroll';

import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsFacial } from '../../../../components';

const Peeling = () => {
  return (
    <div className='info__peeling'>
      <div>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />
        
        <div className='content__overlay__peeling'>
          <div className='content__container__peeling'>
            <div className='content__info__peeling'>
              <h1>Peeling químico</h1>
              <p>
                Peeling es una palabra de origen inglés que significa, literalmente, peladura.
                <br /><br />
                En medicina se aplica al tratamiento cuyo objetivo es conseguir una descamación
                controlada de las primeras capas de la piel con el objetivo de eliminar las
                células de su superficie y conseguir su renovación al estimular el crecimiento
                de nuevas capas de piel.
                <br /><br />
                De hecho, la piel se está pelando continuamente pero, como ocurre a nivel
                microscópico, no somos conscientes de ello. Un peeling permite acelerar dicho
                proceso.
                <br /><br />
                Este tipo de tratamiento puede conseguirse de diferentes formas. Se han
                utilizado métodos mecánicos (mediante abrasión con distintas sustancias),
                con la energía de la luz (el láser y el IPL) o con método químicos.
                <br /><br />
                Un peeling químico es aquél que utiliza diferentes tipos de ácidos aplicados
                sobre la piel para conseguir su descamación.
              </p>

              <h2>¿Cómo actúa un peeling químico?</h2>
              <p>
                Un peeling químico actúa básicamente de dos formas, que se suceden en el tiempo:
                <br /><br />
                <ul>
                  <li>
                    Destruyendo las capas cutáneas, causando su descamación. Con ello
                    pretendemos eliminar el problema a tratar.
                  </li>
                  <li>
                    Estimulando la proliferación celular, para facilitar la regeneración
                    de la piel y la producción de nuevo colágeno. Así se intenta obtener una
                    piel renovada de mejores características que la anterior.
                  </li>
                </ul>
                <br /><br />
                Los efectos conseguidos dependen de dos factores: de la persona y del propio
                agente químico.
                <br /><br />
                Con respecto al primero, es importante considerar el tipo de piel del paciente
                y su posible sensibilidad o tolerancia al agente químico usado, la naturaleza
                del problema a tratar (no todo responde igual) y su ubicación en las diferentes
                capas de la piel (más fácil si la lesión es superficial). 
                <br /><br />
                Con respecto al segundo, son factores que influyen el tipo de sustancia química
                usada, su capacidad de penetración en la piel, su concentración, el número de
                capas aplicadas y el tiempo que se deja para su actuación.
                <br /><br />
                Con algunos productos químicos puede existir también una absorción sistémica
                a través de la piel y tener efectos en otros órganos, sobre todo si se usan
                a concentraciones altas y se aplican a zonas extensas de la piel. El ejemplo
                más típico es el fenol, pero también puede ocurrir con el resocinol y el ácido
                salicílico.
              </p>

              <h2>¿Qué tipos de peelings químicos existen?</h2>
              <p>
                Podemos clasificarlos en base a dos conceptos: el tipo de ácido usado y la
                profundidad de acción.
                <br /><br />
                Aunque existen muchos tipos de ácidos, los agentes más utilizados son el
                grupo de los alfa-hidroxiácidos (ácido glicólico, ácido láctico, ácido
                cítrico y otros), los alfa-ketoácidos (ácido pirúvico), el ácido salicílico,
                el ácido retinoico, el resorcinol, el ácido tricloroacético y el fenol. Además,
                existen formulaciones combinadas como es la solución de Jessner, que combina el
                ácido salicílico, el ácido láctico y el resorcinol.
                <br /><br />
                Por la profundidad de acción distinguimos:
                <br /><br />
                <ul>
                  <li>
                    Peelings muy superficiales: su efecto llega sólo a las más externas de la
                    epidermis.
                  </li>
                  <li>
                    Peelings superficiales: su efecto llega a todo el espesor de la epidermis.
                  </li>
                  <li>
                    Peelings medios: su efecto llega hasta la porción superficial de la dermis
                    (dermis papilar).
                  </li>
                  <li>
                    Peelings profundos: su efecto llega hasta la porción más profunda de la
                    dermis (dermis reticular).
                  </li>
                </ul>
                <br /><br />
                En general, los peelings más superficiales sólo actúan en la superficie de la
                piel (escasa capacidad de penetración), descaman poco y la recuperación es más
                rápida pero sólo mejoran problemas muy superficiales de la piel. 
                <br /><br />
                En cambio, los peelings profundos son capaces de penetrar hasta las capas más
                profundas de la piel, se asocian a una gran descamación (recuperación
                postoperatoria más lenta) y pueden tratar mayor número de problemas. Sin
                embargo, son más agresivos y hay más riesgo de poder causar lesiones
                cutáneas en forma de cicatriz así como cambios en la pigmentación de la
                piel (alteración del color).
              </p>

              <h2>Indicaciones para un peeling químico</h2>
              <p>
                Las indicaciones principales son:
                <br /><br />
                <ul>
                  <li>
                    Para tratar signos de fotoenvejecimiento: piel atrofiada, seca, con
                    queratosis, manchas y arrugas finas.
                  </li>
                  <li>
                    Para tratar discromías, es decir, alteraciones de la pigmentación. Son
                    ejemplos las pecas, las producidas por tratamientos hormonales
                    (anticonceptivos), las manchas con los embarazos (cloasma, también
                    llamado popularmente “paños) o las que aparecen tras inflamaciones
                    de la piel (pigmentaciones asociadas a cicatrices).
                  </li>
                  <li>
                    Para tratar diversas enfermedades de la piel como el acné y sus secuelas,
                    queratosis seborreica y otras.
                  </li>
                </ul>
              </p>

              <h2>Contraindicaciones de un peeling químico</h2>
              <p>
                En la primera consulta el cirujano realizará una historia clínica completa,
                descartando enfermedades generales o medicaciones que esté tomando que
                pudieran interferir o incluso contraindicar el tratamiento.
                <br /><br />
                Se consideran contraindicaciones relativas para aplicar un peeling químico:
                <br /><br />
                <ul>
                  <li>
                    Sensibilidad conocida a algunos de sus componentes.
                  </li>
                  <li>
                    Enfermedades inflamatorias de la piel en fase activa (por ejemplo,
                    brote de acné).
                  </li>
                  <li>
                    Infecciones activas de la piel, en particular el herpes. En caso de
                    historial médico con antecedentes de brotes de herpes debe ponerlo en
                    conocimiento de su doctor pues debe realizarse una profilaxis previa
                    con antibióticos.
                  </li>
                  <li>
                    Heridas abiertas en la piel a tratar.
                  </li>
                  <li>
                    Cicatrices o cirugías recientes en la zona.
                  </li>
                  <li>
                    Antecedentes de radioterapia sobre la piel.
                  </li>
                  <li>
                    Antecedentes de queloides y otros problemas cicatriciales.
                  </li>
                  <li>
                    El uso de isotretinoína (Roacutane®) para tratar el acné en los últimos
                    dos años se asocia a mayor índice de problemas cicatriciales tras un peeling
                    químico.
                  </li>
                  <li>
                    Enfermedad miocárdica isquémica (angor, infarto): el picor o molestias al
                    aplicar el peeling pueden elevar la tensión arterial y el ritmo del corazón.
                  </li>
                  <li>
                    Pacientes no colaboradores y con problemas psíquicos o mentales que no
                    permitan un adecuado seguimiento de las indicaciones de tratamiento tras
                    el peeling (un peeling es una herida de la piel que precisará de unos
                    cuidados en el postoperatorio).
                  </li>
                  <li>
                    Pacientes con fototipos de IV-VI, es decir, con pieles muy morenas, que
                    se broncean fácilmente y pacientes con raza de color. El riesgo de
                    desarrollar hiperpigmentación de origen inflamatorio tras el peeling
                    químico es más alto que en otro tipo de personas.
                  </li>
                </ul>
                <br /><br />
                Se desconocen posibles interacciones con:
                <br /><br />
                <ul>
                  <li>
                    Medicamentos que el paciente pueda estar tomando.
                  </li>
                  <li>
                    El embarazo y lactancia maternas. Por ello, se desaconseja su
                    administración a mujeres gestantes y durante la lactancia materna.
                  </li>
                </ul>
              </p>

              <h2>Limitaciones de un peeling químico</h2>
              <p>
                Los resultados tras un peeling químico dependen fundamentalmente de dos
                factores: dónde está el problema en la piel y la capacidad de penetración
                del producto químico aplicado. En general, los problemas localizados en las
                capas más profundas de la piel nunca podrán solucionarse totalmente con un
                peeling químico.
                <br /><br />
                Hay que tener en cuenta también que ningún peeling detiene el proceso de
                envejecimiento. Por ello, siempre son necesarias de forma periódica nuevas
                aplicaciones del producto para mantener los resultados.
                <br /><br />
                Un peeling no corrige arrugas medias o profundas ni tampoco la flaccidez de
                la piel.
                <br /><br />
                La mayoría de los problemas de pigmentación en la piel están muy relacionados
                con la exposición solar. Si no se sigue un estricto tratamiento de protección
                después del peeling es muy probable que la pigmentación vuelva a aparecer.
                <br /><br />
                Los peelings no ofrecen protección contra el desarrollo del cáncer de piel
                u otras enfermedades cutáneas en un futuro.
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info__peeling'>
          <div className='footer__info_site__peeling'>
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

export default Peeling