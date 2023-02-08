import React from 'react';
import './tumores.css';

import { Link } from 'react-scroll';

import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsFacial } from '../../../../components';

const Tumores = () => {
  return (
    <div className='info__tumores'>
      <div>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />
        
        <div className='content__overlay__tumores'>
          <div className='content__container__tumores'>
            <div className='content__info__tumores'>
              <h1>Tumores</h1>
              <p>
                La palabra tumor deriva del latín y quiere decir, simplemente, hinchazón o bulto.
                <br /><br />
                En Medicina, hablamos de tumor para referirnos a cualquier lesión patológica de
                los tejidos que consiste en una proliferación anómala de las células que componen
                dicho tejido. Su traducción clínica es, habitualmente, la aparición de un bulto.
                <br /><br />
                Un sinónimo de la palabra tumor es neoplasia.
              </p>

              <h2>¿Dónde puede originarse un tumor?</h2>
              <p>
                Un tumor puede originarse en cualquier célula del organismo. 
                <br /><br />
                De forma genérica podemos clasificarlos en dos grandes grupos:
                <br /><br />
                <ul>
                  <li>Tumores del hueso</li>
                  <li>Tumores de partes blandas</li>
                </ul>
                <br /><br />
                Dentro de cada grupo se denominan según el tipo de célula que se multiplica.
                Así hablamos de tumores cutáneos, nerviosos, vasculares, del tejido graso,
                musculares, de las glándulas endocrinas, etc.
              </p>

              <h2>¿Qué tipos de tumor existen?</h2>
              <p>
                Todos los tumores tienen en común que crecen a nivel local, debido a la
                multiplicación incontrolada, más o menos rápida de las células que lo componen.
                El bulto generado puede ser deformante si el tumor se localiza cerca de la
                superficie corporal y causar molestias locales. 
                <br /><br />
                Un tumor maligno se caracteriza, además, por lo siguiente:
                <br /><br />
                <ul>
                  <li>
                    Tiene la capacidad de extenderse e infiltrar los tejidos vecinos
                    (<b>invasión tumoral</b>)
                  </li>
                  <li>
                    Algunas células pueden desprenderse del tumor original, introducirse y
                    viajar por el torrente sanguíneo o linfático y llegar a implantarse y
                    desarrollarse en otras zonas distantes del cuerpo, creando tumores hijos
                    (<b>metástasis</b>)
                  </li>
                </ul>
                <br /><br />
                Un sinónimo de tumor maligno es cáncer. Si no se trata adecuadamente puede
                poner en riesgo la vida del paciente.
              </p>

              <h2>Tumores cutáneos</h2>
              <p>
                Es el tipo de tumor más frecuentemente tratado por un Cirujano Plástico y están
                originados en la piel y sus glándulas anejas (pelo, glándulas del sudor y glándulas
                de la grasa).
                <br /><br />
                Debido a su localización en la superficie corporal son relativamente fáciles de
                detectar por el propio paciente. 
                <br /><br />
                Son ejemplos de tumores benignos:
                <br /><br />
                <ul>
                  <li>
                    Las <b>verrugas</b>. Son los tumores cutáneos más frecuentes. Su origen es vírico y
                    son altamente contagiosas
                  </li>
                  <li>
                    Los <b>quistes</b> de la piel. Originados de la epidermis (quiste epidérmico),
                    de la dermis (quiste dérmico) o de la raíz del cabello (quiste triquilemal)
                  </li>
                  <li>
                    Los <b>nevus pigmentados</b>. Se originan en los melanocitos, que son las células
                    que producen el pigmento cutáneo (melanina). Popularmente se conocen como lunares
                  </li>
                  <li>
                    Los <b>lipomas</b>. Son tumores desarrollados a partir de la grasa
                  </li>
                  <li>
                    Los <b>fibromas</b>. Se desarrollan a partir de las fibras que constituyen
                    la dermis
                  </li>
                </ul>
                <br /><br />
                Son ejemplos de tumores malignos:
                <br /><br />
                <ul>
                  <li>
                    El <b>carcinoma basocelular</b>. Es el tumor cutáneo maligno más frecuente y,
                    afortunadamente, el de mejor pronóstico. Tiene un período de evolución
                    lento (años) y, aunque puede llegar a ser infiltrante a nivel local, tiene
                    muy escasa capacidad de metastatizar
                  </li>
                  <li>
                    El <b>carcinoma espinocelular</b>. Es el segundo en frecuencia, más agresivo que el
                    anterior, de crecimiento local más rápido y con más potencial metastásico
                  </li>
                  <li>
                    El <b>melanoma</b>. Es el tumor cutáneo maligno con peor pronóstico pues tiene alta
                    capacidad de metastatizar a otros órganos del cuerpo. Se origina en los
                    melanocitos y, por ello, suele manifestarse como una lesión pigmentada
                  </li>
                </ul>
              </p>

              <h2>¿Cómo diagnosticamos un tumor?</h2>
              <p>
                El diagnóstico de sospecha clínico de un tumor debe plantearse cuando se detecta un
                bulto que va creciendo. Esto es especialmente cierto cuando la lesión se origina
                cerca de la superficie corporal, lo que facilita un diagnóstico precoz.
                <br /><br />
                La exploración física de la zona afectada permitirá orientar sobre el tipo de
                lesión. Los tumores benignos suelen tener un crecimiento moderado, tener unos
                bordes bien definidos y pueden ser movilizados fácilmente con respecto a las
                estructuras vecinas. En cambio, los tumores malignos suelen crecer rápidamente,
                son irregulares en su contorno y se presentan adheridos a la piel o a las estructuras
                más profundas.
                <br /><br />
                Cuando sospechemos de un tumor maligno siempre deberán explorarse los ganglios de la
                región para descartar su extensión en forma de metástasis. 
                <br /><br />
                La exploración debe completarse, cuando el caso así lo requiera, de diversas
                exploraciones adicionales (ecografía, TAC, RNM, angiografía) para llegar a un
                diagnóstico.
                <br /><br />
                El diagnóstico definitivo sólo puede establecerse con una biopsia, es decir, la toma
                de una muestra de la lesión para su oportuno análisis en laboratorio bajo el
                microscopio.
              </p>

              <h2>¿Cómo tratamos un tumor benigno?</h2>
              <p>
                No todos los tumores benignos necesitan extirparse. En general, se opta por
                tratarlos cuando crecen desmesuradamente, crean problemas locales (molestias)
                o provocan un aspecto inestético por el abultamiento de la zona. También deben
                resercarse siempre que haya dudas diagnósticas.
                <br /><br />
                El tratamiento más habitual es el quirúrgico y consiste en su extirpación simple
                pero completa de la lesión. La pieza histológica debe ser enviada para su estudio
                al laboratorio de biopsias. El informe de la biopsia confirmará el diagnóstico de
                la lesión y permitirá constatar si su extirpación ha sido total.
                <br /><br />
                Hay otras modalidades no quirúrgicas de tratamiento que se pueden aplicar a algunos
                tipos de tumores cutáneos benignos pues, al residir en la superficie corporal son
                más accesibles a otras técnicas terapéuticas. Todas ellas persiguen la destrucción
                de la lesión de diferentes formas: por el calor (quemadura mediante el
                electrobisturí), el frío (crioterapia con nitrógeno líquido), la vaporización con
                el láser o la aplicación de productos químicos (quimioterápicos tópicos). Estas
                técnicas no permiten la biopsia de la lesión y debemos ser cautos en su indicación.
              </p>

              <h2>¿Cómo tratamos un tumor maligno?</h2>
              <p>
                Todos los tumores malignos deben tratarse de forma obligatoria. 
                <br /><br />
                En la mayoría de casos, el tratamiento de elección empieza por la extirpación
                radical de la lesión, dejando unos buenos márgenes de seguridad alrededor del
                tumor para evitar su recidiva. Debido a la amplitud de la resección, no es
                infrecuente que la herida residual no pueda cerrarse simplemente con una sutura
                y el cirujano plástico valorará la necesidad de importar tejidos, de la vecindad
                o incluso a distancia, a fin de poder cerrar la herida.
                <br /><br />
                Si el tumor ya ha generado metástasis, debe plantearse también la indicación de
                su extirpación. Esto puede suponer resecar los ganglios linfáticos regionales e
                incluso lesiones a distancia. 
                <br /><br />
                Algunos tumores malignos pueden precisar, además, de algún tipo de tratamiento
                complementario al quirúrgico para garantizar su completa erradicación, tales como
                la radioterapia, la quimioterapia y algunos tratamientos hormonales e incluso
                inmunológicos.
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info__tumores'>
          <div className='footer__info_site__tumores'>
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

export default Tumores