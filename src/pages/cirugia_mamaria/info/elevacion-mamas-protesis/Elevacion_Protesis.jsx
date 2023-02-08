import React from 'react';
import './elevacion_protesis.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsMamaria } from '../../../../components';

const Elevacion_Protesis = () => {
  return (
    <div className='info__eprotesis'>
      <div>
        <Navbar />
        <Logo />

        <div className='content__overlay__eprotesis'>
          <div className='content__container__eprotesis'>
            <div className='content__info__eprotesis'>
              <h1>Elevación de mamas con prótesis de relleno</h1>
              <p>
                Cuando una mama caída es, al mismo tiempo, pequeña, su simple elevación (mastopexia) puede no ofrecer un resultado satisfactorio pues difícilmente conseguiremos una adecuada proyección y relleno en su polo superior.
                <br /><br />
                En estos casos, la propuesta es combinar una elevación de mamas con su aumento, insertando una prótesis.
                <br /><br />
                Obtener un buen resultado en estos casos es un auténtico reto quirúrgico y constituye la cirugía estética de la mama más compleja en su ejecución.
              </p>

              <h2>La elevación de mamas con prótesis de relleno</h2>
              <p>
                La elevación de mamas con prótesis de relleno es la técnica quirúrgica indicada para corregir, en una sola intervención, una mama caída y de pequeño tamaño. Recibe también el nombre de mastopexia con prótesis de relleno.
                <br /><br />
                Ofrece la posibilidad de elevar la mama al tiempo que conseguimos un aumento de su volumen mediante la inserción de una prótesis de relleno.
                <br /><br />
                No existe un tipo universal de mastopexia con prótesis de relleno que cubra las necesidades de cada paciente. Cada técnica y cada tipo de implante escogidos tiene sus ventajas e inconvenientes. La técnica quirúrgica se diseña para cada mujer, dependiendo de su caso particular. Dialogue con su cirujano que le asesorará en su elección. 
                <br /><br />
                En general, esta cirugía se practicará cuando se haya completado el desarrollo mamario, hacia los 18 años de edad.
              </p>
              
              <h2>¿En qué consiste la elevación de mamas con prótesis de relleno?</h2>
              <p>
                En general se realiza bajo anestesia general y se recomienda un ingreso en clínica de 24 horas.
                <br /><br />
                Es una intervención que combina dos técnicas quirúrgicas: una elevación de mamas y un aumento de mamas con prótesis.
                <br /><br />
                Las variables son muchas. Debemos escoger el tipo de implante, decidir el plano anatómico de colocación, la técnica de elevación mamaria y el patrón de extirpación del excedente cutáneo.  
                <br /><br />
                Respecto a las prótesis, suelen preferirse las de superficie rugosa (mantienen su posición más fácilmente), redondas (para llenar mejor el polo superior de la mama) y colocadas en un plano subglandular (ayudan a corregir mejor la ptosis glandular).
                <br /><br />
                La estrategia quirúrgica en estos casos se facilita si primero insertamos las prótesis y luego procedemos a la elevación de las mamas. Para conseguir un resultado pleno, la glándula deberá ubicarse delante del implante y el complejo areola-pezón ocupará su parte más proyectada. Finalmente, calibramos el excedente cutáneo de la nueva mama así formada y lo extirpamos de forma personalizada según los diferentes patrones de mastopexia.
              </p>

              <h2>Limitaciones de la elevación de mamas con prótesis de relleno</h2>
              <p>
                La forma y el tamaño de las mamas previas a la cirugía pueden influir en el resultado final. Si las mamas no tienen el mismo tamaño o forma antes de la cirugía es poco probable que sean completamente simétricas después.
                <br /><br />
                En general, se aconsejarán tamaños proporcionados a la complexión física de la mujer. Tamaños exagerados darán resultados estéticos más artificiales.
                <br /><br />
                En mujeres delgadas o con mamas pequeñas será difícil camuflar totalmente el implante. En estos casos se suele aconsejar colocarlo por detrás del músculo pectoral. De todas formas, la prótesis puede ser palpable en su perímetro y, en ocasiones, incluso perceptible visualmente.
                <br /><br />
                Cuando la prótesis se coloca debajo del músculo pectoral puede alterarse su forma en grado variable cuando se contrae fuertemente el mismo. Si usted ejercita habitualmente su músculo pectoral por motivos de trabajo o afición (gimnasio) podría hacer aconsejable no colocar el implante debajo del músculo pectoral.Los mejores resultados se consiguen, en general, con volúmenes mamarios moderados.
                <br /><br />
                La mastopexia no cambia la naturaleza de la mama ni detiene el proceso natural de envejecimiento de la misma. Por ello, glándulas formadas por tejidos laxos y pieles estriadas están más predispuestas a descolgamientos secundarios tras esta cirugía.
                <br /><br />
                Cuando añadimos una prótesis en una mastopexia, en realidad estamos sobrecargando de peso unos tejidos ya de por sí de mala calidad, aumentando el riesgo a este descolgamiento futuro. Encontrar el equilibrio entre ambas fuerzas contrapuestas no es fácil y, por ello, la mastopexia con prótesis de relleno es una de las cirugías mamarias más difíciles de ejecutar con éxito.
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info__eprotesis'>
          <div className='footer__info_site__eprotesis'>
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

export default Elevacion_Protesis