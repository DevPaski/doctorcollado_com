import React from 'react';
import './lifting.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsFacial } from '../../../../components';

const Lifting = () => {
  return (
    <div className='info__lifting'>
      <div>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />
        
        <div className='content__overlay__lifting'>
          <div className='content__container__lifting'>
            <div className='content__info__lifting'>
              <h1>Lifting de cara y cuello</h1>
              <p>
                El lifting es un procedimiento quirúrgico cuyo objetivo primario es
                eliminar el descolgamiento de los tejidos de la cara y el cuello,
                dándoles nueva tensión. También recibe el nombre de ritidectomía.
                <br /><br />
                También es una técnica que puede mejorar la hiperactividad de la
                musculatura a nivel del tercio superior de la cara y del cuello,
                mejorando las arrugas de expresión a este nivel.
                <br /><br />
                No existe un tipo universal de ritidectomía que cubra las necesidades
                de todos los pacientes. La técnica quirúrgica se diseña para cada
                paciente, dependiendo de su caso particular. Su cirujano le asesorará
                sobre qué técnica es la más adecuada en su caso concreto.
                <br /><br />
                No hay una edad definida para indicar esta cirugía. Se valorará
                individualmente la necesidad o no de indicar esta cirugía.
                <br /><br />
                El mejor candidato para un lifting es aquella persona con un grado
                moderado de descolgamiento pero cuya piel tiene elasticidad y cuya
                estructura ósea está bien definida.
              </p>

              <h2>Lifting frontal</h2>
              <p>
                El lifting frontal se diseña para tratar el tercio superior de la cara
                (frente y cejas). 
                <br /><br />
                La cicatriz clásica se extiende entre el pelo, a modo de diadema, entre
                oreja y oreja. En casos seleccionados, el abordaje puede seguir la línea
                de implantación del pelo de la cabeza. Cada vez se tiende a hacer abordajes
                más limitados, practicando toda la cirugía a través de varias incisiones
                menores colocadas entre el pelo, incluso auxiliados por endoscopia.
                <br /><br />
                Sus objetivos son el estiramiento de la piel frontal y de las cejas, así
                como también la corrección de sus arrugas de expresión (horizontales en
                la frente, verticales en el entrecejo).
              </p>

              <h2>Lifting ciliar</h2>
              <p>
                El lifting ciliar se diseña para tratar sólo la caída de las cejas. 
                <br /><br />
                Pueden usarse abordajes quirúrgicos comunes al lifting frontal (entre el
                pelo o en la línea de implantación pilosa) o practicarse incisiones siguiendo
                el borde superior de la propia ceja (lifting ciliar directo) o alguna arruga
                profunda que se marque en la frente.
                <br /><br />
                Los intentos de elevar la ceja desde el párpado superior tienen resultados
                limitados.
                <br /><br />
                Su objetivo primario es elevar las cejas y, el secundario, cambiar su forma.
                La expresión facial es muy sensible a los cambios en la posición y forma
                ciliares.
              </p>

              <h2>Lifting del tercio medio facial</h2>
              <p>
                El lifting del tercio medio facial se practica para tratar la zona central
                de la mejilla.
                <br /><br />
                Cuando se indica exclusivamente este lifting, el abordaje quirúrgico sigue el
                borde del párpado inferior y puede auxiliarse con alguna incisión entre el pelo
                e, incluso, por dentro de la boca.
                <br /><br />
                Su objetivo principal es reposicionar la grasa subcutánea de la zona del pómulo
                y tensar los tejidos del párpado inferior.
                <br /><br />
                Cada vez se le da más importancia a este tipo de lifting por la repercusión en
                el rejuvenecimiento facial que consigue.
              </p>

              <h2>Lifting cervicofacial</h2>
              <p>
                El lifting cervicofacial constituye el lifting clásico.
                <br /><br />
                Diseñado para tratar la zona lateral de la mejilla, el reborde de la mandíbula y
                la región del cuello.
                <br /><br />
                Su incisión tiene forma de letra "U", con un componente vertical que, empezando
                entre el pelo de la sien desciende por delante de la oreja, rodea el lóbulo y
                vuelve a ascender por el surco retroauricular, acabando a distintos niveles entre
                el pelo de la nuca.
                <br /><br />
                De forma frecuente, se debe practicar también una incisión debajo del mentón para
                poder tratar la porción más anterior del cuello.
                <br /><br />
                Su objetivo principal es tensar los tejidos de la mejilla, definir mejor el reborde
                mandibular, mejorar el ángulo entre la mandíbula y el cuello y tratar de eliminar
                las bandas verticales cervicales formadas por la contracción de su músculo.
                <br /><br />
                Una variante más conservadora del lifting cervicofacial, cuando la redundancia de
                piel es limitada, es el llamado <b>Minimal Acces Cranial Suspension Lift (MACS lift)</b>,
                que a través de un abordaje sólo preauricular, extendido alrededor de la patilla
                del pelo, consigue elevar los tejidos de la mejilla y del cuello mediante unas
                suturas de disposición vertical.
              </p>

              <h2>Limitaciones del lifting</h2>
              <p>
                No todos los factores de los que depende el aspecto y forma de la cara y el
                cuello pueden ser corregidos con esta cirugía:
                <br /><br />
                <ul>
                  <li>
                    La ritidectomía no alcanza a modificar la zona central facial.
                    Por lo tanto, los párpados, la nariz y los labios continuarán con el
                    mismo aspecto.
                  </li>
                  <li>
                    Tampoco cambia la calidad de la piel ni su elasticidad. No corrige su
                    atrofia ni sus estigmas asociados (manchas seniles, sequedad, arrugas
                    finas). Puede precisar tratamientos adicionales (peeling, láser, etc)
                    para su tratamiento específico.
                  </li>
                  <li>
                    Aunque mejoran, las arrugas de expresión (dependientes de una
                    hiperactividad muscular) pueden no desaparecer totalmente con la
                    ritidectomía.
                  </li>
                  <li>
                    Tampoco puede cambiar la estructura ósea facial ni el grosor de la
                    grasa subcutánea. Pueden ser necesarios asociar el lifting a la
                    introducción de diversos implantes para mejorarlos.
                  </li>
                  <li>
                    Esta cirugía no detiene el proceso de envejecimiento. Pueden ser
                    necesarias cirugías futuras para mantener los resultados.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info__lifting'>
          <div className='footer__info_site__lifting'>
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

export default Lifting