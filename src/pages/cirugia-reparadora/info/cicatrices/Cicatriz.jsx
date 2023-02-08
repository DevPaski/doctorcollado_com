import React from 'react';
import './cicatriz.css'

import { Link } from 'react-scroll';

import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsFacial } from '../../../../components';

const Cicatriz = () => {
  return (
    <div className='info__cicatriz'>
      <div>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />
        
        <div className='content__overlay__cicatriz'>
          <div className='content__container__cicatriz'>
            <div className='content__info__cicatriz'>
              <h1>La cicatriz</h1>
              <p>
                Cuando un tejido vivo sufre una agresión y es lesionado, se genera una respuesta
                biológica cuyo objetivo es la curación de dicha lesión y su consecuencia es la
                aparición de una cicatriz.
                <br /><br />
                En realidad, la capacidad de regeneración del cuerpo humano es más bien limitada
                y supone que el nuevo tejido cicatricial sea diferente del original. Por ello:
                <br /><br />
                <ul>
                  <li>La cicatriz ocasiona una marca permanente</li>
                  <li>Se pierden las propiedades del tejido original lesionado</li>
                </ul>
                <br /><br />
                La cicatriz puede ser lineal (Ejemplo: tras un corte en la piel) o abarcar una
                superficie (Ejemplo: tras una quemadura).
              </p>

              <h2>Fases de la cicatrización</h2>
              <p>
                Después de una herida se pone en marcha un complejo proceso de reparación tisular en
                el que pueden distinguirse varias fases:
                <br /><br />
                <ol>
                  <li>
                    <b>Fase de respuesta inflamatoria aguda:</b> su objetivo es limpiar la herida.
                    <br /><br />
                    Los vasos sanguíneos de la zona se dilatan en su calibre y llegan a la herida las
                    células de la inflamación (glóbulos blancos y macrófagos) que van a eliminar los
                    tejidos lesionados y luchar contra posibles bacterias que pudieran haber
                    contaminado la zona.
                  </li>
                  <br /><br />
                  <li>
                    <b>Fase de proliferación celular:</b> su objetivo es curar la herida gracias a la
                    multiplicación de una serie de células que irán formando un nuevo tejido llamado
                    tejido cicatricial o, simplemente, cicatriz.
                    <br /><br />
                    Una vez limpia la herida, el defecto tisular ocasionado se va a rellenar
                    fundamentalmente de fibras de colágeno, sintetizadas a partir de unas células
                    llamadas fibroblastos. El colágeno será el componente principal de la cicatriz y,
                    en esta fase, se dispone de forma anárquica, como un ovillo de fibras desordenado.
                    <br /><br />
                    Paralelamente, el tamaño de la herida va a ir reduciéndose gracias a la contracción
                    generada por otro tipo especial de células llamadas miofibroblastos.
                    <br /><br />
                    Y, al final, por el llamado proceso de epitelización, las células epiteliales
                    presentes en los bordes de la herida van a multiplicarse y migrar hacia el centro
                    para así cerrar definitivamente la herida, completándose el proceso propiamente
                    dicho de la curación.
                    <br /><br />
                    La fase de proliferación celular exige mejorar la irrigación de la zona mediante
                    la formación de nuevos vasos sanguíneos por multiplicación de las llamadas células
                    endoteliales. Su objetivo es favorecer el aporte de nutrientes y oxígeno que
                    garanticen el proceso de la curación de la herida.
                  </li>
                  <br /><br />
                  <li>
                    <b>Fase de maduración:</b> su objetivo principal es remodelar la cicatriz. Este
                    proceso puede durar más de un año.
                    <br /><br />
                    Con la curación de la herida y la formación de la cicatriz, muchas de las células
                    que habían proliferado ya han cumplido su objetivo y van a disminuir en número y
                    las que no hacen falta acaban desapareciendo.
                    <br /><br />
                    Ahora se inicia un lento proceso de remodelado de la cicatriz. De forma paulatina,
                    parte del colágeno depositado de forma anárquica en la fase proliferativa se va a
                    eliminar y un nuevo colágeno se va a sintetizar para disponerse ya de forma más
                    ordenada, formando haces paralelos entre sí.
                  </li>
                </ol>
              </p>

              <h2>¿Cómo evoluciona una cicatriz con el tiempo?</h2>
              <p>
                El aspecto de una cicatriz no es siempre igual y está condicionado por la fase
                evolutiva en la que se encuentra.
                <br /><br />
                Al principio, durante la fase de proliferación, las cicatrices manifiestan el
                aumento de irrigación sanguínea y el depósito de colágeno. El mayor aporte sanguíneo
                explica el color rojo que toma la cicatriz en este período y la presencia de picor
                en la zona. Los depósitos de colágeno son los responsables que la cicatriz aparezca
                endurecida al tacto, engrosada y con falta de flexibilidad, notándose tirantez con
                los movimientos. La anarquía en la distribución de las fibras de colágeno ocasiona
                que la cicatriz no resista adecuadamente las fuerzas de tensión cutáneas, sobre todo
                en zonas de movimiento (hombros, rodillas), por lo que con el paso del tiempo pueden
                ir ensanchándose en estas zonas. 
                <br /><br />
                Durante la fase de maduración, en cambio, las cicatrices van perdiendo el color rojo
                y dejan de picar pues disminuye su irrigación sanguínea. Además, se aplanan, se
                ablandan y se relaja su tirantez, mejorando su flexibilidad, cuando se remodela la
                disposición de las fibras de colágeno.
                <br /><br />
                Una cicatriz puede tardar en madurar un mínimo de un año pero, en ocasiones, puede
                llevar mucho más tiempo.
              </p>

              <h2>La cicatrización anómala</h2>
              <p>
                Acabada la fase de maduración, la cicatriz ideal debe ser indolora, quedar de color
                blanco nacarado, ser estrecha, estar a nivel del resto de la piel y ser lo
                suficientemente elástica como para no causar limitación en los movimientos de las
                articulaciones vecinas. Tampoco debe deformar la anatomía regional.

                Por desgracia, muchas veces vemos procesos cicatriciales anómalos. El abanico de
                posibilidades es muy amplio:
                <br /><br />
                <ul>
                  <li>Cicatrices dolorosas</li>
                  <li>
                    Cicatrices con cambios de color, tanto por defecto (hipopigmentación) como por
                    exceso (hiperpigmentación)
                  </li>
                  <li>Cicatrices dilatadas (diastasadas)</li>
                  <li>
                    Cicatrices deprimidas (hundidas respecto a la piel vecina) o abultadas
                    (sobreelevadas)
                  </li>
                  <li>
                    Cicatrices retráctiles, que limitan el movimiento de las articulaciones o que
                    distorsionan la anatomía local
                  </li>
                  <li>
                    Cicatrices exageradas. Se llama cicatriz hipertrófica cuando aparece engrosada,
                    dura y de un color rojo intenso. Se llama cicatriz queloidea o, simplemente,
                    queloide, a una cicatriz que crece descontroladamente recordando a un proceso
                    tumoral y que se extiende característicamente incluso más allá de los límites
                    de la herida original.
                  </li>
                </ul>
                
                
              </p>

              <h2>Factores que causan una cicatrización anómala</h2>
              <p>
                Son muchos los factores que pueden influir a lo largo del proceso de cicatrización
                y que pueden condicionar el resultado.
                <br /><br />
                Repercuten negativamente en la cicatrización:
                <br /><br />
                <ul>
                  <li>
                    La edad, pues enlentece el metabolismo celular y todos los procesos de reparación
                    celulares
                  </li>
                  <li>
                    La malnutrición, porque dificulta la proliferación celular y la síntesis del
                    colágeno. Al respecto, son imprescindibles las proteínas, los ácidos grasos y
                    de diversas vitaminas (A, C) y oligoelementos (cinc, cobre)
                  </li>
                  <li>
                    Problemas de irrigación sanguínea locales, pues bloquearán la llegada de
                    nutrientes y oxígeno a la herida. Sus causas principales son la nicotina del
                    tabaco, la diabetes mellitus y la arteriosclerosis y la aplicación previa en
                    la zona de radioterapia
                  </li>
                  <li>
                    Los tratamientos crónicos con corticoides y las personas inmunosuprimidas, pues
                    tienen mermada la respuesta inflamatoria de la cicatrización
                  </li>
                  <li>
                    El sol, pues las radiaciones ultravioleta estimulan la síntesis de melanina en
                    los tejidos inflamados y causan pigmentación oscura de la cicatriz
                  </li>
                  <li>
                    Determinadas localizaciones. La zona del esternón, los hombros y la espalda tienen
                    más riesgo de hacer cicatrices exageradas. En las rodillas y codos las cicatrices
                    tienden a ensancharse. Las cicatrices que son paralelas a los pliegues naturales
                    de la piel, en cambio, se disimulan mejor (Ejemplo: cicatriz horizontal en la
                    frente)
                  </li>
                </ul>
              </p>

              <h2>¿Cómo favorecer una cicatrización óptima?</h2>
              <p>
                En las cirugías electivas el cirujano, siempre que el caso lo permita, puede escoger
                la localización y el tamaño de la incisión. Éste es un buen punto de partida para
                conseguir una óptima cicatrización. En cambio, en los accidentes no podemos controlar
                esta cuestión.
                <br /><br />
                Ni que decir tiene que el tratamiento de la herida en la fase aguda es muy importante. Se debe limpiar de cuerpos extraños y la técnica de sutura debe ser meticulosa.
                <br /><br />
                En la fase inicial debemos hacer reposo de la zona afectada, evitando el sangrado de
                la herida y tensiones en la sutura. El uso diario de antisépticos como la povidona
                yodada luchará contra la infección. Si hay puntos de sutura externos, se deberán
                extraer lo antes posible para evitar marcas cutáneas.
                <br /><br />
                Durante la fase inflamatoria se debe evitar el sol y el calor sobre la cicatriz.
                Pueden ser necesarias prendas de compresión elásticas para aliviar el disconfort.
                <br /><br />
                Durante la fase de maduración se debe llegar a un equilibrio entre el reinicio de su
                actividad física habitual y el cuidado de la cicatriz. Son aconsejables la aplicación
                de cremas hidratantes pues la piel cicatricial tiende a la sequedad por falta del
                sebo natural. Para mejorar su elasticidad pueden aplicarse masajes manuales. A veces
                pueden ser necesarios ejercicios de rehabilitación y fisioterapia si la cicatriz
                dificulta el movimiento de las articulaciones vecinas. La protección solar debe
                prolongarse también en esta fase, hasta que se complete la maduración de la cicatriz.
              </p>

              <h2>¿Qué hacer frente a un mal resultado cicatricial?</h2>
              <p>
                Cuando un paciente consulta por un mal resultado cicatricial, se recopilará
                información suficiente acerca del motivo de la cicatriz y el tratamiento realizado.
                Es importante detectar si hubo problemas surgidos en la fase aguda que pudieran
                explicar el porqué de dicho mal resultado. También recogeremos qué cuidados se
                hicieron hasta que la maduración de la cicatriz. Se deben identificar posibles
                problemas médicos de base que condicionen la cicatrización.
                <br /><br />
                Durante la exploración física analizaremos la localización, el tamaño y el tipo de
                cicatrización conseguida. Identificaremos si el problema es simplemente estético o
                presenta repercusiones funcionales (limitación del movimiento articular o
                deformidades), pues estos últimos siempre serán prioritarios a solucionar.
                <br /><br />
                En el tratamiento propuesto debe quedar muy claro que nunca podremos eliminar una
                cicatriz, aunque sí intentaremos mejorarla. Las técnicas usadas dependen de los
                casos pero las principales son:
                <br /><br />
                <ul>
                  <li>
                    Revisión quirúrgica: consiste en su extirpación y nueva sutura. Debe valorarse
                    cambiar la forma, dirección o la ubicación de la cicatriz para favorecer el nuevo
                    proceso cicatricial
                  </li>
                  <li>
                    Presoterapia: consiste en la aplicación de compresión sobre la cicatriz. La
                    presión mantenida disminuye la vascularización de la cicatriz y favorece el
                    remodelado del colágeno. Se utilizan prendas hechas a medida en la ortopedia
                    y deben usarse un mínimo de 16 horas al día
                  </li>
                  <li>
                    Láminas y cremas de silicona: de mecanismo desconocido, controlan la fase
                    inflamatoria cicatricial
                  </li>
                  <li>
                    Corticoides: en forma de cremas tópicas o por infiltración en la propia
                    cicatriz. Bloquean la respuesta inflamatoria. Pueden causar atrofia cutánea
                    y la aparición de capilares dilatados, por lo que se aplicarán con prudencia
                  </li>
                  <li>
                    Radioterapia local: puede plantearse en casos seleccionados para tratar los
                    queloides cuando el resto de tratamientos no han conseguido resultados
                  </li>
                </ul>
                <br /><br />
                En muchas ocasiones el tratamiento de una cicatriz puede suponer la combinación
                juiciosa de varias de estas técnicas.
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info__cicatriz'>
          <div className='footer__info_site__cicatriz'>
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

export default Cicatriz