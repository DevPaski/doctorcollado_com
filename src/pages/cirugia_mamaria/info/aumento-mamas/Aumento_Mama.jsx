import React from 'react';
import './aumento_mamas.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsMamaria } from '../../../../components';

const Aumento_Mama = () => {
  return (
    <div className='info__amamas'>
      <div>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />

        <div className='content__overlay__amamas'>
          <div className='content__container__amamas'>
            <div className='content__info__amamas'>
              <h1>Aumento de mamas</h1>
              <p>
                Una mama pequeña puede aparecer en dos situaciones básicas:
                <br /><br />
                <ul>
                  <li>
                    Por falta de desarrollo durante la pubertad. Es la llamada hipoplasia
                    mamaria, que es un problema constitucional en la mayoría de casos.
                  </li>
                  <li>
                    Por involución a lo largo de la vida de la paciente, condicionada
                    básicamente por los cambios hormonales propios de la mujer. Es la
                    llamada atrofia mamaria, típica por ejemplo tras el embarazo.
                  </li>
                </ul>
                <br /><br />
                De todas formas, el tamaño ideal de las mamas no es un valor absoluto.
                Debe considerarse siempre la complexión física de la mujer. Además, hay
                factores raciales, culturales, personales e incluso modas que condicionan
                este concepto.
              </p>

              <h2>¿Cómo se aumentan las mamas?</h2>
              <p>
                No existe una única técnica de aumento de mamas que cubra las necesidades
                de todos los pacientes. Todas ellas tienen en común que se precisa de la
                introducción de un implante para lograr nuestro objetivo.
                <br /><br />
                Las posiblidades son:
                <br /><br />
                <ul>
                  <li>Aumento de mamas con implante sólido (prótesis).</li>
                  <li>Aumento de mamas con implante de grasa del propio paciente.</li>
                </ul>
                <br /><br />
                Se indicará un tipo de tratamiento u otro dependiendo de su caso particular.
              </p>

              <h2>Aumento de mamas con prótesis</h2>
              <p>
                Una prótesis es un implante artificial que consiste en una cubierta o bolsa rellenada de diversas sustancias. 
                <br /><br />
                Existen muchos modelos de prótesis, clasificados según:
                <br /><br />
                <ul>
                  <li>
                    El relleno:
                    <ul>
                      <li>
                        Silicona: es el más frecuente y consiste en un polímero inorgánico a base
                        de sílice, que ha demostrado ser uno de los materiales mejor tolerados por
                        el organismo. Su consistencia es gelatinosa para remedar la de una mama natural.
                        Las prótesis actuales tienen un gel más cohesivo que las originales, evitando
                        la migración de partículas de silicona en caso de rotura del implante.
                      </li> 
                      <li>
                        Suero fisiológico: es una solución de agua con sal. La consistencia es de
                        líquido, siendo menos natural al tacto que la silicona.
                      </li>
                      <li>
                        Otros: raramente usados actualmente (rellenos de hidrogel, de aceite, etc).
                      </li>
                    </ul>
                  </li>
                </ul>
                <br /><br />
                <ul>
                  <li>
                    Tipo de cubierta:
                    <ul>
                      <li>
                        Silicona: la mayoría de prótesis tienen una cubierta sólida consistente
                        en silicona en forma de elastómero.
                      </li>
                      <li>
                        Poliuretano: algunas prótesis tienen esta cubierta externa adicional
                        con el objetivo de disminuir el riesgo de una contractura capsular.
                      </li>
                    </ul>
                  </li>
                </ul>
                <br /><br />
                <ul>
                  <li>
                    La rugosidad de la superficie externa de la cubierta:
                    <ul>
                      <li>
                        Ausente (superficie lisa): la clásica.
                      </li>
                      <li>
                        Presente (superficie rugosa o texturizada): son las más usadas actualmente,
                        por menor riesgo de contractura de la cápsula.
                      </li>
                    </ul>
                  </li>
                </ul>                
                <br /><br />
                <ul>
                  <li>
                    La forma del implante (visión de frente):
                    <ul>
                      <li>
                        Prótesis redondas: misma dimensión vertical que horizontal.
                      </li>
                      <li>
                        Prótesis anatómicas: diferente dimensión vertical que horizontal,
                        para adaptarse mejor a la conformación del tórax de la mujer (ancho,
                        estándar, largo). En general, tienen forma de "lágrima" o de "pera" 
                        pues están más rellenas en su parte inferior con el objetivo de conseguir
                        una forma más natural o madura a la mama.
                      </li>
                    </ul>
                  </li>
                </ul>
                <br /><br />
                <ul>
                  <li>
                    La proyección del implante (visión de perfil):
                    <ul>
                      <li>Proyección baja.</li>
                      <li>Proyección moderada.</li>
                      <li>Proyección alta.</li>
                    </ul>
                  </li>  
                </ul>
              </p>

              <h2>¿Cómo se implantan las prótesis de mama?</h2>
              <p>
                En general se realiza bajo anestesia general y se recomienda un ingreso en
                clínica de 24 horas.
                <br /><br />
                Habitualmente, es suficiente una incisión en la piel de 4-5 cm de longitud
                para poder introducir una prótesis de tamaño mediano. Se ubicará de forma
                que quede lo más disimulada posible. Existen varias vías de abordaje posibles:
                <br /><br />
                <ul>
                  <li>
                    Axilar, haciéndola coincidir con un pliegue cutáneo natural, de forma que
                    con el brazo a lo largo del cuerpo la cicatriz queda oculta.
                  </li>
                  <li>
                    Areolar, siguiendo su perímetro (donde acaba su color). Suele bastar incindir
                    sólo la mitad inferior de su contorno.
                  </li>
                  <li>
                    Pliegue submamario, siguiendo el surco natural de la mama.
                  </li>
                </ul>
                <br /><br />
                Una vez en su interior, las prótesis puede quedar alojadas a diferentes niveles.
                De más superficial a más profundo distinguimos los siguientes planos anatómicos:
                <br /><br />
                <ul>
                  <li>
                    Subglandular: la prótesis se aloja justo debajo de la glándula mamaria.
                  </li>
                  <li>
                    Subfascial: la prótesis se cubre por la glándula y por la fascia muscular.
                  </li>
                  <li>
                    Subpectoral: la prótesis está en el nivel más profundo, alojándose debajo
                    del músculo pectoral, apoyada sobre el plano costal.
                  </li>
                </ul>
              </p>

              <h2>Complicaciones de las prótesis de mama</h2>

              <p>
                Aunque potencialmente pueden existir diversos problemas relacionados con su uso,
                destacaríamos los siguientes:
                <br /><br />
                <h3>Contractura de la cápsula</h3>
                Alrededor del implante, cuando cura la herida interna, se forma una cicatriz.
                Consiste en una capa delgada de tejido fibroso que aparece como una bolsa que
                rodea a la prótesis. Es un fenómeno fisiológico y siempre existe. A esta cicatriz
                interna se le llama cápsula.
                <br /><br />
                A veces, como cualquier otra cicatriz, la cápsula puede desarrollarse de forma
                exagerada (hipertrofia de la cicatriz), engrosándose y ajustándose excesivamente
                al implante. A este fenómeno se le llama contractura de la cápsula.
                <br /><br />
                Sus consecuencias son el aumento en la consistencia de la mama (deja de estar
                blanda) e incluso el cambio en su forma natural. A veces, la paciente puede
                referir molestias.
                <br /><br />
                Se desconoce su causa. La tasa de contractura capsular suele ser menor al 5%
                para un aumento de mamas de tipo estético. Puede manifestarse al poco tiempo
                de la cirugía o al cabo de años. Puede ser asimétrico, afectando de forma más
                intensa a una mama.
                <br /><br />
                <h3>Interferencia con la mamografía</h3>
                Los implantes mamarios pueden dificultar la realización e interpretación de una
                mamografía pues su imagen se superpone a la del tejido glandular. El grado de
                interferencia depende del tipo de prótesis (las prótesis de silicona son más
                opacas que las de suero fisiológico) y del plano anatómico donde estén ubicadas
                (los situados debajo del músculo permiten visualizar mejor la mama que los
                colocados debajo de la glándula).
                <br /><br />
                Usted debe informar al radiólogo de la presencia de prótesis mamarias para que
                puedan realizarse los estudios mamográficos adecuados. Una opción es hacer
                mamografías especializadas, cambiando las proyecciones habituales para poder
                visualizar el problema a estudio (proyecciones de Eklund). Otras posibilidades
                son realizar otro tipo de estudios complementarios tales como una ecografía o
                una resonancia nuclear magnética.
                <br /><br />
                <h3>Posibilidad de rotura del implante mamario</h3>
                Los implantes mamarios, al igual que otros dispositivos médicos, pueden fallar.
                A veces, como antecedente podemos recoger un traumatismo previo, pero no siempre
                su causa es aparente.
                <br /><br />
                Un implante roto puede manifestarse con una pérdida de volumen de la mama
                (sobre todo notable con las prótesis de suero fisiológico), cambios en su forma
                o notarse irregularidades en su superficie a la palpación (bultos). En ocasiones,
                sin embargo, puede ser totalmente asintomático y ser un hallazgo casual en el
                transcurso de una revisión de rutina.
                <br /><br />
                Si el implante roto es de suero fisiológico su contenido es reabsorbido por el
                organismo. La silicona, sin embargo, no es biodegradable y su contenido
                normalmente queda retenido dentro de la cápsula. En el caso de migrar fuera de
                ella quedarán alojados en forma de quistes en el tejido mamario circundante o
                engrosando los ganglios de la axila (adenopatías). Las prótesis actuales, con
                un gel de silicona más cohesivo, disminuyen la posibilidad de migración de la
                silicona hacia los tejidos vecinos.
                <br /><br />
                Una prótesis dañada o rota no puede ser reparada por lo que debe recambiarse o
                retirarse.
              </p>

              <h2>Aumento de mamas con grasa de la propia paciente</h2>

              <p>
                Es una técnica laboriosa que utiliza como implante la grasa de la propia paciente.
                Ésta es su principal ventaja, pues el implante siempre es bien tolerado por la
                mujer y los resultados son muy naturales.
                <br /><br />
                En general se precisa anestesia general y se recomienda un ingreso en clínica de
                24 horas.
                <br /><br />
                En la primera parte de la cirugía obtenemos el implante de grasa mediante
                liposucción de otra zona corporal. Tras procesarla y concentrarla mediante
                diferentes técnicas, se inyecta en las mamas mediante cánula fina a través de
                mínimas incisiones cutáneas. 
                <br /><br />
                La grasa infiltrada se comporta como un injerto vivo de tejido, es decir, que
                para que el implante tenga éxito debe vascularizarse. En caso contrario la grasa
                se reabsorberá, perdiendo el efecto conseguido.
                <br /><br />
                Éste es el principal problema de esta técnica. Se estima que aproximadamente el
                30-50% de la grasa implantada podría reabsorberse por lo que, para llegar a un
                resultado satisfactorio, pueden ser necesarias nuevas sesiones de relleno. 
                <br /><br />
                Su uso para el aumento estético de la mama ha sido cuestionado por algunos
                autores argumentando que el implante de grasa puede dar imágenes radiológicas
                equívocas que se pueden confundir incluso con enfermedades malignas de la mama.
                Sin embargo, se acepta actualmente que médicos radiólogos experimentados pueden
                perfectamente diferenciarlos entre sí, no contraindicando por lo tanto su uso.
              </p>

              <h2>Limitaciones del aumento de mamas</h2>
              <p>
                La forma y el tamaño de las mamas previas a la cirugía pueden influir en el
                resultado final. Si las mamas no tienen el mismo tamaño o forma antes de la
                cirugía es poco probable que sean completamente simétricas después.
                <br /><br />
                En general, se aconsejarán tamaños proporcionados a la complexión física de
                la mujer. Tamaños exagerados darán resultados estéticos más artificiales.
                <br /><br />
                Cuando usamos prótesis, en mujeres delgadas o con mamas pequeñas será difícil
                camuflar totalmente el implante. En estos casos se suele aconsejar colocarlo
                por detrás del músculo pectoral. De todas formas, la prótesis puede ser palpable
                en su perímetro y, en ocasiones, incluso perceptible visualmente.
                <br /><br />
                Cuando la prótesis se coloca debajo del músculo pectoral puede alterarse su
                forma en grado variable cuando se contrae fuertemente el mismo. Si usted ejercita
                habitualmente su músculo pectoral por motivos de trabajo o afición (gimnasio)
                podría hacer aconsejable no colocar el implante debajo del músculo pectoral.
                <br /><br />
                El uso del implante de grasa presenta unos resultados muy naturales pero no es
                fácil conseguir volúmenes elevados ni mantener un relleno apropiado en el polo
                superior de la mama. Además, la paciente debe tener acúmulos grasos extras en
                otras partes de su cuerpo para poder recolectarlos para sus mamas.
                <br /><br />
                No existe una intervención ideal para cada caso. Cada método de implantación
                escogidos tiene sus ventajas e inconvenientes. Dialogue con su cirujano que le
                asesorará en su elección.
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info__amamas'>
          <div className='footer__info_site__amamas'>
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
  );
}

export default Aumento_Mama