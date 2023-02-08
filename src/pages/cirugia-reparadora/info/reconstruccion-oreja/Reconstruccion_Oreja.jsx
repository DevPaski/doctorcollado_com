import React from 'react';
import './roreja.css'

import { Link } from 'react-scroll';

import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsFacial } from '../../../../components';

const Reconstruccion_Oreja = () => {
  return (
    <div className='info__roreja'>
      <div>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />
        
        <div className='content__overlay__roreja'>
          <div className='content__container__roreja'>
            <div className='content__info__roreja'>
              <h1>Reconstrucción de oreja</h1>
              <p>
                La oreja, también llamada pabellón auricular, tiene por función recoger las
                ondas sonoras que viajan por el aire y dirigirlas a través del conducto
                auditivo externo hacia el tímpano, para provocar su vibración y poner así
                en marcha el proceso de la audición. Oreja y conducto auditivo externo conforman
                el llamado oído externo.
                <br /><br />
                Los defectos del pabellón auricular pueden afectar a toda la oreja o sólo a una
                parte de ella. Entre sus causas destacaremos las siguientes:
                <br /><br />
                <ul>
                  <li>
                    Defectos congénitos (malformaciones presentes al nacimiento):
                    <ul>
                      <li>
                        Microtia: ausencia de la oreja.
                      </li>
                      <li>
                        Orejas en copa: plegamiento de la parte superior de la oreja
                      </li>
                    </ul>
                  </li>

                  <li>
                    Defectos adquiridos:
                    <ul>
                      <li>
                        Secundarios a enfermedades: extirpación por tumores, malformaciones
                        vasculares, etc.
                      </li>

                      <li>
                        Secundarios a traumatismos: heridas, amputaciones, quemaduras, desgarros
                        del lóbulo por pendientes o dilatadores, etc.
                      </li>
                    </ul>
                  </li>
                </ul>
                <br /><br />
                La cirugía de reconstrucción auricular no corrige los problemas de audición. Sólo
                sirve para recrear la forma de la oreja y hacer desaparecer el estigma de la
                deformidad.
              </p>

              <h2>Lóbulos desgarrados</h2>
              <p>
                El lóbulo de la oreja ha sido perforado clásicamente en las mujeres desde su
                nacimiento para poder llevar pendientes. En los últimos tiempos la moda de los
                "piercing" ha extendido su uso a otras zonas de la oreja e incluso del cuerpo
                (nariz, labios, pezones, ombligo). Además, cada vez más varones también los utiliza
                para adornarse.
                <br /><br />
                Hablamos de desgarro del orificio del pendiente cuando éste aparece anormalmente
                elongado o dilatado. Su causa más frecuente es llevar de forma habitual pendientes
                excesivamente pesados y, en estos casos, el desgarro se produce poco a poco en el
                transcurso de meses o años. En otros casos el desgarro puede ocurrir de forma brusca
                si, accidentalmente, se produce un tirón involuntario del pendiente.
                <br /><br />
                Existen dos tipos:
                <br /><br />
                <ul>
                  <li>
                    Desgarro incompleto: es el más frecuente. El orificio deja de ser puntiforme y
                    se presenta simplemente elongado, convirtiéndose en una ranura.
                  </li>

                  <li>
                    Desgarro completo: en los casos más severos, el desgarro puede llegar al borde
                    de la oreja y, por lo tanto, el lóbulo aparece totalmente partido en dos mitades.
                  </li>
                </ul>
                <br /><br />
                El problema fundamental del lóbulo desgarrado, a parte de su aspecto inestético, es
                la dificultad de portar pendientes. Si no se desea renunciar a ellos, el paciente
                estará obligado a hacerse perforaciones en otro lugar del lóbulo o de la propia
                oreja, aunque otra opción sería usar pendientes con un sistema de fijación de pinza.
                <br /><br />
                El tratamiento del desgarro es siempre quirúrgico y recibe el nombre de
                <b> lobuloplastia</b>. 
                <br /><br />
                Es una intervención sencilla aunque meticulosa, realizada bajo anestesia local y de
                forma totalmente ambulatoria y que dura escasamente 30 minutos. 
                <br /><br />
                Técnicamente consiste en coser el desgarro. Para que cicatrice adecuadamente, es
                fundamental cruentar sus bordes, es decir, retirar su piel. De otro modo, los bordes
                no podrían enganchar entre sí durante la fase de curación. 
                <br /><br />
                El curso postoperatorio es muy suave. Cada día deberá desinfectarse con povidona
                yodada la sutura y tomar algún analgésico si presenta dolor. Los puntos se retiran a
                partir del 7º día.
                <br /><br />
                Como toda cicatriz reciente, ésta quedará enrojecida durante algunos meses y deberá
                protegerla del sol. Los resultados son, habitualmente, muy satisfactorios.
                <br /><br />
                Mientras dure la primera fase de cicatrización no podrá usar pendientes. Para
                perforarse un nuevo orificio deberá esperar al segundo mes. Es importante colocarlo
                justo delante o detrás de la cicatriz pero, a ser posible, no sobre ella, pues sería
                más fácil la recidiva del desgarro al ser ésta un tejido más frágil.
              </p>

              <h2>Microtia</h2>
              <p>
                <h3>Cómo se trata una microtia</h3>
                <iframe
                  src="https://www.youtube.com/embed/uaezrdEfEPg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen 
                />

                <h3>Resultados de una reconstrucción de microtia</h3>
                <iframe
                  src="https://www.youtube.com/embed/Mpfq4U2NFU8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen 
                />

                <h3>Postoperatorio de una reconstrucción de microtia</h3>
                <iframe
                  src="https://www.youtube.com/embed/bZhjZeu8B18"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen 
                />
                <br /><br />
                La microtia es una malformación congénita consistente en una falta de desarrollo del pabellón
                auricular. En la mayoría de casos es un problema no hereditario que suele afectar a una sola
                oreja, aunque también existen casos bilaterales.
                <br /><br />
                El grado de deformación es variable. La forma más frecuente de presentación es la llamada
                microtia lobular, pues en ella se puede reconocer en su mitad inferior el lóbulo de la oreja
                (aunque habitualmente con una orientación anómala, verticalizada) mientras que su mitad
                superior está constituida por unos restos embrionarios de cartílago deformados. 
                <br /><br />
                En la llamada Distopia auricular, la ubicación de la microtia es más baja que en el lado
                sano, aproximándose al cuello, lo que recuerda su origen embrionario en esta región, y
                constituye un caso particularmente difícil de reconstruir.
                <br /><br />
                La microtia raramente aparece aislada, asociándose frecuentemente a otras malformaciones:
                <br /><br />
                <ul>
                  <li>
                    <b>Atresia auricular.</b> Consiste en la falta de desarrollo del conducto auditivo
                    externo, del tímpano y del oído medio (cadena de huesecillos). Su consecuencia es
                    una sordera de transmisión para el lado afectado.
                  </li>

                  <li>
                    <b>Microsomia hemifacial.</b> Déficit de desarrollo de un lado de la cara, afectando
                    tanto a sus estructuras óseas como blandas. Sus dimensiones son más pequeñas en todos
                    los ejes del espacio. Lo más llamativo es la hipoplasia de un lado de la mandíbula
                    provocando el desvío del mentón hacia el lado afecto, alteraciones en la oclusión
                    dental (contacto entre sí de los dientes) y en su articulación. Entre las estructuras
                    blandas lo más importante es la posible afectación del nervio facial, que implica la
                    parálisis de toda o parte de la musculatura de ese lado de la cara.
                  </li>

                  <li>
                    Malformaciones craneofaciales bilaterales. Un ejemplo es el <b>Síndrome de Treacher-Collins</b>,
                    donde lo más llamativo es la microtia bilateral y un déficit del desarrollo de ambos
                    lados de la cara, destacando la hipoplasia de los pómulos y de la mandíbula.
                  </li>

                  <li>
                    Malformaciones asociadas en otras zonas corporales. Pueden afectarse los ojos, las
                    vértebras, el corazón y el aparato genitourinario. Un ejemplo es el <b>Síndrome
                    oculoauriculovertebral de Goldenhar</b>, que asocia la microsomía hemifacial con
                    tumoraciones quísticas en el ojo y malformaciones en las vértebras cervicales.
                  </li>
                </ul>
                <br /><br />
                La edad mínima para proceder a una reconstrucción de microtia son los 6 años de
                edad, que es cuándo se alcanza el tamaño definitivo de la oreja (la oreja reconstruida
                no va a crecer). 
                <br /><br />
                Pero cuando se opta por la reconstrucción autóloga, también se debe considerar el
                estado del cartílago costal en relación a:
                <br /><br />
                <ul>
                  <li>
                    Su tamaño. Depende del desarrollo de la caja torácica y es importante en los
                    niños. Por este motivo, actualmente se aconseja esperar hasta los 10 años de
                    edad para proceder a su reconstrucción. 
                  </li>

                  <li>
                    Su grado de calcificación. Es un proceso biológico normal en relación al
                    envejecimiento de la persona y es importante a considerar si el paciente
                    es adulto. Un cartílago osificado dificulta e, incluso, contraindica una
                    reconstrucción auricular con costilla. Un TAC torácico puede ayudar a
                    identificar estos casos problemáticos. 
                  </li>
                </ul>

                <h2>Reconstrucción con costilla</h2>
                <p>
                  Técnica quirúrgica de primera elección que permite recrear una nueva oreja
                  con los tejidos del propio paciente (reconstrucción autóloga). En general,
                  precisa de dos cirugías básicas separadas entre sí seis meses.
                  <br /><br />
                  <ol>
                    <li>
                      <b>
                        Construcción de un armazón cartilaginoso y su enterramiento debajo de
                        la piel de la zona.
                      </b><br />
                      Es la cirugía más complicada y con un postoperatorio más molesto.
                      Comienza con una incisión en el reborde costal para extraer fragmentos
                      de cartílago de la 6ª, 7ª, 8ª y 9ª costillas. Prosigue con la construcción
                      del nuevo esqueleto auricular a partir del tallado de diferentes piezas de
                      cartílago que acaban ensamblándose entre sí con suturas y tomando como
                      modelo la oreja contralateral sana. La cirugía concluye con la inserción
                      de nuestro armazón cartilaginoso debajo de la piel de la zona auricular
                      tras la extirpación de los restos embrionarios malformados de la oreja.
                      <br /><br />
                      Un punto crítico es ubicar correctamente la nueva oreja para que el
                      resultado sea natural y lo más simétrico posible al lado sano. Si la
                      microtia se asocia a una microsomía hemifacial esta tarea no es fácil
                      pues el lado de la cara afecto es más pequeño y siempre buscaremos una
                      ubicación de compromiso teniendo en cuenta la asimetría facial. Cuando
                      hay una distopia (oreja micrótica de implantación baja), es obligatoria
                      una cirugía premilinar para reubicar dicho esbozo embrionario en una
                      posición superior más favorable antes de implantar definitivamente la
                      oreja reconstruida.<br /><br />
                    </li>

                    <li>
                      <b>Recreación del surco retroauricular.</b>
                      <br />
                      Con la primera cirugía, la oreja queda enterrada debajo de la piel.
                      Los relieves auriculares se notan ya pero la oreja está totalmente
                      pegada a la cabeza, no existiendo el surco retroauricular. La recreación
                      del mismo es importante tanto desde un punto de vista estético (igual
                      proyección de ambas orejas) como funcional (apoyo de distintos dispositivos
                      tales como unas gafas o de un audífono).
                      <br /><br />
                      Esta segunda cirugía consiste en recortar el contorno posterior de la oreja
                      para separarla de la cabeza y crear así un espacio detrás de ella. Se
                      consigue una proyección mayor y más estable si añadimos un fragmento de
                      cartílago costal debajo de nuestro armazón, que actuaría como cuña para
                      forzar hacia delante nuestra oreja. 
                      <br /><br />
                      La herida resultante de elevar la oreja exige el aporte de tejidos del
                      paciente para cubrir el defecto creado. Se deben movilizar colgajos de
                      fascia y piel locales para proteger la cara posterior del cartílago,
                      añadiendo un injerto de piel tomado del cuero cabelludo o de otras partes
                      corporales (ingle) para cubrir el resto de zonas expuestas.
                      <br /><br />
                    </li>

                    <li>
                      <b>Técnicas adicionales.</b>
                      <br />
                      La complejidad de esta técnica reconstructora hace que muchas veces sean
                      necesarias otras cirugías adicionales menores para refinar el resultado.
                      También podría aconsejarse una depilación de la zona si la oreja reconstruida
                      incorpora piel con pelo de la zona. 
                    </li>
                  </ol>
                </p>

                <h2>Reconstrucción con prótesis</h2>
                <p>
                  Es un método alternativo de reconstrucción auricular que utiliza implantes
                  sintéticos para recrear la oreja. 
                  <br /><br />
                  Una posibilidad es que el implante sintético sustituya al cartílago costal a
                  la hora de fabricar el armazón auricular. Su principal beneficio sería evitar
                  la cicatriz y las molestias que la toma de cartílago suponen para el paciente.
                  A lo largo de la historia se han ensayado numerosos materiales sintéticos,
                  tales como siliconas, metales y diversos polímeros. El material más usado
                  últimamente es el Medpor. Su problema principal es el alto índice de complicaciones,
                  pues es frecuente la perforación de la piel con los consiguientes riesgos de
                  infección y de extrusión del implante. Por ello se recomienda movilizar también
                  los tejidos vecinos (fascia temporal) para dar una doble cobertura de protección
                  al implante.
                  <br /><br />
                  Otra posibilidad más ambiciosa sería proceder a la fabricación completa de la
                  oreja en una ortopedia mediante las técnicas de anaplastología. Aunque se pueden
                  usar diferentes métodos retentivos sencillos y provisionales (adhesivos, elásticos,
                  etc), son las técnicas de osteointegración, tan útiles para los implantes dentales,
                  las que mejor resultado otorgan por su estabilidad. Una primera cirugía supone
                  amputar los restos embrionarios malformados auriculares para poder insertar en el
                  hueso de la zona unos implantes metálicos. Cuando se integren en el hueso, una
                  segunda cirugía los va a exteriorizar para poder anclarles unos pivotes metálicos
                  sobre los cuales se engarce la prótesis postiza. Esta técnica obliga a un
                  mantenimiento higiénico diario de los engarces metálicos por parte del paciente
                  y un recambio de la prótesis auricular cuando se deteriore por el uso.
                  <br /><br />
                  Desde nuestro punto de vista, el uso de implantes sintéticos no es una técnica de
                  reconstrucción de primera elección, debiéndose reservar para aquellos casos en los
                  que no es posible una reconstrucción con cartílago costal o cuándo ésta haya fracasado.
                </p>
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info__roreja'>
          <div className='footer__info_site__roreja'>
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

export default Reconstruccion_Oreja