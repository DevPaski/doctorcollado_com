import React from 'react';
import './reju.css'

import { Link } from 'react-scroll';

import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsFacial } from '../../../../components';

const Rejuvenicimiento = () => {
  return (
    <div className='info__reju'>
      <div>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />
        
        <div className='content__overlay__reju'>
          <div className='content__container__reju'>
            <div className='content__info__reju'>
              <h1>Rejuvenecimiento de cara y cuello</h1>
              <p>
                El aspecto ideal de la piel de la cara (cutis) y del cuello debe presentar una
                adecuada hidratación y una coloración homogénea, sin manchas. Además debe
                aparecer tersa, bien adaptada a los contornos faciales.
                <br /><br />
                Aunque definidos, los relieves faciales no deben ser excesivamente angulosos.
                La morfología del esqueleto facial debe estar suavizada de forma apropiada con
                la grasa ubicada debajo de la piel.
                <br /><br />
                La cara ha de poder transmitir emociones y, por ello, no debe aparecer como una
                máscara. Con la gesticulación, en la piel se forman pliegues naturales pero,
                idealmente, no deben persistir durante el reposo.
                <br /><br />
                Con el paso de los años el aspecto de la cara y el cuello se deteriora.
              </p>

              <h2>¿Cuál es la estructura de la piel?</h2>
              <p>
                La piel es un órgano vivo compuesto de millones de células estructuradas en
                dos capas: la epidermis (capa superficial) y la dermis (capa profunda).
                <br /><br />
                La función principal de la epidermis es la de actuar de barrera frente al
                exterior, tanto mecánica como inmunológica. Las células principales de la
                epidermis son los queratinocitos y los melanocitos. Las primeras son las
                mayoritarias, forman la estructura básica de la epidermis y se apilan formando
                capas. Nacen en la capa más profunda (capa basal) y conforme envejecen van
                ascendiendo hacia la superficie hasta que llegan a la capa más superficial
                (capa córnea), donde mueren y se desprenden (descamación). La capa córnea es
                muy gruesa en zonas de especial roce como son las palmas y plantas. Los
                melanocitos son las células responsables de la pigmentación de la piel. A
                ellas se debe la diferente coloración de la piel en las distintas razas y
                el bronceado por la acción del sol.
                <br /><br />
                La dermis está ubicada por debajo de la epidermis. Su porción más superficial
                se llama dermis papilar y su porción más profunda se llama dermis reticular.
                Es una amalgama de fibras (destacan el colágeno y la elastina) sintetizadas
                por un tipo especial de células llamadas fibroblastos. La dermis es la principal
                responsable de la elasticidad cutánea. Es también rica en ácido hialurónico,
                que a modo de una esponja tiene la propiedad de retener moléculas de agua,
                dando el aspecto de hidratación de la piel. A la dermis llegan vasos sanguíneos
                y nervios, responsables de dar la irrigación y la sensibilidad a la piel,
                respectivamente. 
                <br /><br />
                En el espesor de la piel se ubican diferentes anejos, a saber, los folículos
                pilosos, las glándulas sebáceas y las glándulas del sudor.
              </p>

              <h2>¿Cuáles son las funciones de la piel?</h2>
              <p>
                Las funciones principales de la piel son:
                <br /><br />
                <ul>
                  <li>
                    Protección del organismo frente al exterior, como barrera mecánica
                    (traumatismos) e inmunológica (infecciones).
                  </li>
                  <li>
                    Regular la temperatura corporal. Cambiando el flujo sanguíneo de la piel
                    (con el frío se contraen sus vasos sanguíneos y con el calor se dilatan),
                    se controlan las pérdidas de calor del organismo.
                  </li>
                  <li>
                    Síntesis de vitamina D, por la acción del sol (el resto de vitamina D se
                    ingiere con la comida).
                  </li>
                  <li>
                    Medio de interacción con el medio externo a través del sentido del tacto.
                  </li>
                  <li>
                    Su aspecto es muy importante en las relaciones interpersonales, sobre todo
                    en la zonas habitualmente expuestas, como son la cara y las manos
                  </li>
                </ul>
                <br /><br />
                La edad, factores genéticos (hereditarios), hormonales, hábitos (tipo dieta, fumar)
                y factores ambientales (sol, humedad) condicionan en gran medida el aspecto externo
                de nuestra piel. Además, existen muchas enfermedades que pueden alterar también su
                apariencia.
              </p>

              <h2>El envejecimiento facial y cervical</h2>
              <p>
                El envejecimiento facial y cervical afecta en mayor o menor grado a todas sus
                estructuras, ocasionando unos cambios drásticos en nuestro aspecto.
                <br /><br />
                Pero existen otros factores también importantes que lo modulan, destacando a
                nivel facial el efecto de los agentes físicos externos sobre la piel a lo
                largo de la vida de la persona. Destaca el daño ocasionado por la exposición
                solar, dependiente sobre todo de los rayos ultravioletas y que tiene además
                un efecto acumulativo e irreversible. Otro factor agravante es el humo del
                tabaco en las personas fumadoras.
                <br /><br />
                <h3>La piel</h3>
                Con la edad la piel sufre una <u>atrofia</u>, es decir, un proceso de deterioro
                tanto en su estructura como en su función. Sus consecuencias principales
                son:
                <br /><br />
                <ul>
                  <li>
                    Piel adelgazada y frágil.
                  </li>
                  <li>
                    Sequedad cutánea (alteración de las glándulas sebáceas), con aparición de
                    arrugas finas.
                  </li>
                  <li>
                    Pérdida de elasticidad (alteración del colágeno y la elastina).
                  </li>
                  <li>
                    Manchas seniles (alteración del pigmento cutáneo).
                  </li>
                  <li>
                    Canas (alteración del pelo).
                  </li>
                </ul>
                <br /><br />
                La pérdida de elasticidad cutánea ocasiona su <u>descolgamiento</u> por el efecto de
                la fuerza de la gravedad. Así, aparecen:
                <br /><br />
                <ul>
                  <li>
                    Arrugas por flaccidez:
                    <ul>
                      <li>
                        Caída de la piel del párpado superior (dermatocalasia palpebral),
                        que puede llegar a dificultar la visión en casos extremos.
                      </li>
                      <li>
                        Caída de la piel del párpado inferior, que puede a formar ondas
                        sobre la mejilla (festones).
                      </li>
                      <li>
                        Profundización de los surcos nasogenianos, que son pliegues cutáneos
                        que se extienden desde la aleta nasal hasta la altura de la comisura
                        bucal, a nivel de la mejilla.
                      </li>
                      <li>
                        Caída de las comisuras de la boca, que en grado extremo se han
                        comparado a la boca de una marioneta (arrugas de marioneta).
                      </li>
                      <li>
                        Pérdida de la definición del reborde mandibular.
                      </li>
                    </ul>
                  </li>

                  <li>
                    Descenso de diversas estructuras faciales:
                    <ul>
                      <li>
                        De las cejas, sobre todo de su porción más lateral (cola de la ceja).
                      </li>
                      <li>
                        De la punta de la nariz, formando un ángulo con el labio superior más
                        agudo, dando la sensación de una nariz más larga.
                      </li>
                      <li>
                        Del labio superior, aumentando su altura.
                      </li>
                      <li>
                        Del lóbulo auricular, elongando la dimensión vertical del pabellón
                        auricular, a veces empeorado por el peso del pendiente.
                      </li>
                      <li>
                        Del cuello, formándose un ángulo obtuso entre él y la mandíbula en
                        la visión de perfil.
                      </li>
                    </ul>
                  </li>
                </ul>
                <br /><br />
                <h3>La grasa subcutánea</h3>
                La atrofia y descolgamiento de la grasa subcutánea causan un demacramiento de
                la cara, siendo más evidentes los relieves óseos. La zona más afectada en este
                proceso es la región periorbitaria, quedando las órbitas más vacías y el ojo
                aparentemente más hundido.
                <br /><br />
                <h3>La musculatura facial</h3>
                La gesticulación mantenida durante años al ejercitar la musculatura de la
                mímica facial ocasiona la aparición de las llamadas arrugas de expresión.
                Son típicas en la frente, el entrecejo, en el lateral de los ojos ("patas
                de gallo") y las arrugas del labio superior ("código de barras"). En el
                cuello, la actividad excesiva de su musculatura (músculo platisma) genera
                también la aparición de bandas verticales en su porción anterior.
                <br /><br />
                <h3>El esqueleto facial</h3>
                Y por último, con la edad también vemos una atrofia de los huesos faciales.
                Es más relevante en los pómulos (la falta de soporte favorece la caída de
                la mejilla) y en las encías (cuya reabsorción parcial, asociada a la pérdida
                dental, causan la pérdida de proyección de los labios).
              </p>

              <h2>La primera consulta</h2>
              <p>
                En la primera consulta el cirujano realizará una historia clínica completa,
                descartando enfermedades generales o medicaciones que esté tomando que pudieran
                interferir o incluso contraindicar los tratamientos propuestos. Son de especial
                interés identificar hábitos de vida que influyan en acelerar el proceso de
                envejecimiento (tabaco, exposición solar) y descartar problemas cutáneos
                locales que pudieran influir en el resultado.
                <br /><br />
                Durante la exploración física se procederá a examinar detenidamente el
                aspecto de su cara y cuello. En esta fase es muy importante poder identificar
                cuál es el problema principal y cuáles son los secundarios.
                <br /><br />
                La estrategia de tratamiento se diseñará conjuntamente con el paciente. Dado
                el origen multifactorial del envejecimiento, lo habitual es proponer un continuo
                de acciones terapéuticas (médicas y quirúrgicas) que, de forma progresiva,
                podrán ir mejorando los problemas identificados.
                <br /><br />
                Se le asesorará sobre la técnica más adecuada para su caso, aclarando las
                expectativas del resultado. El mejor candidato es el individuo que busca la
                mejoría y no la perfección en el resultado. Además, tener expectativas
                realistas, buena salud y estabilidad psicológica son características
                importantes en un paciente que considere someterse a cualquier tipo de
                tratamiento.
              </p>

              <h2>Rejuvenicimiento facial y cervical no quirúrgico</h2>
              <p>
                Las técnicas de rejuvenecimiento facial y cervical sin necesidad de cirugía
                son múltiples y se describen ampliamente en los capítulos sucesivos. Según
                su mecanismo de acción se pueden agrupar en:
                <br /><br />
                <ul>
                  <li>
                    Tratamientos que mejoran el aspecto de la piel (hidratación, textura, color):
                    <ul>
                      <li>Mesoterapia facial.</li>
                      <li>Peeling químico.</li>
                      <li>Láser y luz pulsada.</li>
                      <li>Dermoabrasión.</li>
                    </ul>
                  </li>
                  <li>
                    Tratamientos que corrigen las arrugas por flaccidez:
                    <ul>
                      <li>
                        Hilos tensores.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Tratamientos que relajan las arrugas de expresión
                  </li>
                  <li>
                    Tratamientos que dan volumen, rellenando arrugas y modificando el contorno
                    facial (pómulos, labios, mentón):
                    <ul>
                      <li>
                        Implantes inyectables de relleno.
                      </li>
                    </ul>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info__reju'>
          <div className='footer__info_site__reju'>
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

export default Rejuvenicimiento