import React from 'react';
import './hilos.css'

import { Link } from 'react-scroll';

import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsFacial } from '../../../../components';

const Hilos = () => {
  return (
    <div className='info__hilos'>
      <div>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />
        
        <div className='content__overlay__hilos'>
          <div className='content__container__hilos'>
            <div className='content__info__hilos'>
              <h1>Hilos tensores</h1>
              <p>
                Un hilo tensor es el nombre genérico que reciben todos aquellos hilos
                diseñados para ser insertados debajo de la piel y que se indican para
                mejorar la flaccidez de los tejidos.
                <br /><br />
                Con su implantación, la respuesta natural del organismo consiste en la
                activación de una reacción inflamatoria local pues el hilo es reconocido
                como un cuerpo extraño. Esto provoca el depósito de fibras de colágeno a lo
                largo del trayecto del hilo (fibrosis). Como el colágeno es una fibra con
                capacidad de retracción, es decir, se acorta en su longitud, se consigue un
                efecto tensor biológico que mejora la flaccidez tisular. 
                <br /><br />
                Como la fabricación y el depósito del colágeno es un fenómeno lento, el
                efecto tensor empezará a notarse a partir del mes y no será estable hasta
                transcurridos unos tres meses desde la colocación del hilo.
                <br /><br />
                Algunos tipos de hilos se han modificado para conseguir un efecto tensor
                más intenso e inmediato, gracias a añadir unos puntos de anclaje a lo largo
                de su longitud que van a actuar como pequeños anzuelos que se irán enganchado
                eficazmente al tejido a lo largo de su recorrido, provocando así de forma
                inmediata un <b>efecto tensor mecánico</b>, que se aprecia ya justo tras su colocación.
              </p>

              <h2>¿Qué tipos de hilos tensores existen?</h2>
              <p>
                Aunque siempre están fabricados con materiales biocompatibles, su estructura
                y composición son variables de unos tipos a otros. 
                <br /><br />
                Se diferencian entre sí por el tipo de material con el que se fabrican
                (PDO o polidioxanona, ácido poliláctico, caprolactona, polipropilieno, oro),
                por su duración (hilo reabsorbible o irreabsorbible) y según el número de
                hebras que poseen (monofilamentos y polifilamentos).
                <br /><br />
                En el caso de los hilos con puntos de anclaje, estos pueden adoptar diferentes
                formas (espiculas, barbas, conos) y disposición (unidireccional, bidireccional,
                helicoidal). 
                <br /><br />
                Según el tipo de hilo y la técnica de colocación, destacan los siguientes:
                <br /><br />
                <ul>
                  <li>
                    Hilos de oro: son suturas permanentes lisas a base de oro. Una marca
                    comercial es el Skin Gold®
                  </li>
                  <li>
                    Hilos mágicos: suturas temporales lisas de PDO. Su técnica de aplicación
                    se conoce popularmente como el lifting japonés o coreano, pues es muy
                    popular su uso en Asia. Marcas comerciales son el V-LIFT® (monofilamento
                    de PDO) y el DW® (polifilamento de PDO)
                  </li>
                  <li>
                    Hlos APTOS: llamados también Hilos Rusos, fueron introducidos por el Dr
                    Salamanidze. Fueron los primeros hilos con puntos de anclaje usados, que
                    adoptan la forma de espícula. Una marca comercial es el Happy Lift®
                  </li>
                  <li>
                    Suturas Silhouette®: son hilos con puntos de enclaje en forma de cono.
                    Hay una variante permanente (Silhouette Lift®) y otra reabsorbible
                    (Shilouette Soft®)
                  </li>
                </ul>
              </p>

              <h2>Indicaciones de los hilos tensores</h2>
              <p>
                La colocación de los hilos tensores está indicada especialmente para la
                corrección de los descolgamientos leves a moderados de los tejidos.
                <br /><br />
                A nivel facial, están especialmente diseñados para elevar la cola de la
                ceja y corregir la flaccidez de la mejilla. También permiten mejorar el
                descolgamiento del cuello y definir mejor el reborde mandibular.
                <br /><br />
                Se han aplicado los hilos para mejorar la flaccidez de otras zonas, como
                la cara interna de brazos y muslos, las mamas o el abdomen, con resultados
                variables.
              </p>

              <h2>¿Cómo se colocan los hilos tensores?</h2>
              <p>
                En condiciones normales, este tratamiento se realiza en la consulta.
                <br /><br />
                Es fundamental comenzar definiendo las áreas a tratar y establecer la dirección
                en la que se introducirán los hilos, según el objetivo a conseguir. Se definen
                así diferentes patrones de inserción. Habitualmente se insertan varios hilos
                por lado pues difícilmente un solo hilo consigue el resultado deseado. Cuando
                usamos hilos sin puntos de anclaje pueden ser necesarios implantar 10-20
                hilos/lado, formando una retícula o red. En cambio, cuando usamos hilos
                con puntos de anclaje, pueden bastar con 2-3 hilos/lado siguiendo las líneas
                de tracción deseadas.
                <br /><br />
                Después de desinfectar la zona, se aplica anestesia local en los puntos de
                entrada y salida de los hilos. 
                <br /><br />
                Cuando usamos hilos sin puntos de anclaje, su inserción se realiza con la
                ayuda de agujas de fino calibre que están enhebradas en sus extremos. Por
                lo tanto, el tratamiento se hace percutáneamente, por punción simple.
                <br /><br />
                Cuando usamos hilos con puntos de anclaje, después de su introducción se
                aplica tracción en sus extremos para conseguir que el hilo se enganche en el
                tejido y conseguir así un efecto de tensión mecánica inmediata en los tejidos.
                En casos seleccionados, el punto de entrada del hilo puede ampliarse con un
                pequeño corte con el bisturí si queremos suturar el extremo del hilo a los
                tejidos profundos, mejorando así su anclaje y, por tanto, su tensión. 
              </p>

              <h2>Contraindicaciones de los hilos tensores</h2>
              <p>
                En la primera consulta el cirujano realizará una historia clínica completa,
                descartando enfermedades generales o medicaciones que esté tomando que
                pudieran interferir o incluso contraindicar el tratamiento.
                <br /><br />
                El uso de los hilos tensores, como el de cualquier otro implante, está
                contraindicado en los siguientes casos:
                <br /><br />
                <ul>
                  <li>
                    Sensibilidad conocida a algunos de sus componentes.
                  </li>
                  <li>
                    Si existen enfermedades de la coagulación sanguínea como la hemofilia o
                    toma medicamentos que la alteran (ácido acetilsalicílico -Aspirina ®- ,
                    heparina, Sintrom®, Plavix ® y otros).
                  </li>
                  <li>
                    Infecciones activas de la piel en la zona a tratar.
                  </li>
                  <li>
                    Antecedentes de enfermedades conocidas del sistema inmunitario en fase
                    activa o pacientes con tratamiento farmacológico inmunosupresor.
                  </li>
                </ul>
                <br /><br />
                Se desconocen las posibles interacciones de este producto con otros implantes
                cutáneos que el paciente pudiera tener previamente aplicados en la zona a
                tratar. No se aconseja, por tanto, mezclar productos en la misma área.
              </p>

              <h2>Limitaciones de los hilos tensores</h2>
              <p>
                El proceso de envejecimiento no se detiene con la inserción de los hilos
                tensores.
                <br /><br />
                Además, las suturas pueden no corregir completamente la flaccidez de los
                tejidos.Con el paso del tiempo, los hilos insertados van perdiendo de forma
                lenta y progresiva su efecto tensor. Los primeros resultados apuntan a que
                el resultado se pierde tras los primeros 12-18 meses.
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info__hilos'>
          <div className='footer__info_site__hilos'>
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

export default Hilos