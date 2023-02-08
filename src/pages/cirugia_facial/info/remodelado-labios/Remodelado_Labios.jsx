import React from 'react';
import './remodelado_labios.css';

import { Link } from 'react-scroll';

import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsFacial } from '../../../../components';

const Remodelado_Labios = () => {
  return (
    <div className='info__labios'>
      <div>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />
        
        <div className='content__overlay__labios'>
          <div className='content__container__labios'>
            <div className='content__info__labios'>
              <h1>Labios</h1>
              <p>
                Los labios ocupan la porción central del tercio inferior facial.
                <br /><br />
                Su función primordial es de esfínter, abriendo y cerrando la boca. También
                participa en la articulación del lenguaje y es una parte clave en la gesticulación
                (emociones) y en la relación interpersonal (beso).
                <br /><br />
                Su relieve está constituido fundamentalmente por el músculo orbicular de los labios,
                revestido por fuera por la piel y por dentro por la mucosa.
                <br /><br />
                El bermellón es un tejido de transición entre la piel y la mucosa. Es el llamado
                labio rojo. El bermellón superior tiene un reborde sinuoso que se ha comparado a la
                forma de un arco de lanzar flechas (arco de Cupido).
                <br /><br />
                La forma y volumen de los labios son muy variables de una persona a otra y hay
                grandes diferencias entre las razas.
                <br /><br />
                Además, con la edad los labios sufren de importantes cambios, perdiendo volumen
                y proyección, apareciendo arrugas de gesticulación verticales en el labio superior
                ("código de barras"), cayendo y profundizándose la zona de las comisuras ("arrugas
                de marioneta") y elongándose el labio superior.
              </p>

              <h2>¿Cómo se remodelan los labios?</h2>
              <p>
                No existe una única técnica de remodelado labial que cubra las necesidades de todos
                los pacientes. 
                <br /><br />
                Las posiblidades son:
                <br /><br />
                <ul>
                  <Link to='implante-grasa'><li>Remodelado de labios con implante de grasa del propio paciente</li></Link>
                  <Link to='implante-relleno'><li>Remodelado de labios con implantes de relleno inyectables</li></Link>
                  <Link to='implante-solido'><li>Remodelado de labios con implantes sólidos</li></Link>
                  <Link to='remodelado-quirurgico'><li>Remodelado de labios quirúrgico</li></Link>
                </ul>
                <br /><br />
                Las tres primeras tienen en común que se precisa de la introducción de un implante
                para lograr nuestro objetivo. En el último caso, los labios se remodelan cambiando
                su aspecto mediante incisiones quirúrgicas. 
                <br /><br />
                Se indicará un tipo de tratamiento u otro dependiendo de su caso particular.
              </p>

              <h2 id='implante-grasa'>Remodelado de labios con grasa del propio paciente</h2>
              <p>
                Es una técnica laboriosa que utiliza como implante la grasa del propio paciente.
                Ésta es su principal ventaja, pues el implante siempre es bien tolerado por el
                individuo y los resultados son muy naturales.
                <br /><br />
                Puede hacerse con anestesia local y sedación y no requiere ingreso en clínica.
                <br /><br />
                En la primera parte de la cirugía obtenemos el implante de grasa mediante
                liposucción de otra zona corporal. Tras procesarla y concentrarla mediante
                diferentes técnicas, se inyecta en la zona elegida mediante cánula fina a través
                de mínimas incisiones cutáneas. 
                <br /><br />
                La grasa infiltrada se comporta como un injerto vivo de tejido, es decir, que para
                que el implante tenga éxito debe vascularizarse. En caso contrario la grasa se
                reabsorberá, perdiendo el efecto conseguido.
                <br /><br />
                Éste es el principal problema de esta técnica. Se estima que aproximadamente el
                30-50% de la grasa implantada podría reabsorberse por lo que, para llegar a un
                resultado satisfactorio, pueden ser necesarias nuevas sesiones de relleno.
              </p>

              <h2 id='implante-relleno'>Remodelado de labios con implantes de relleno inyectables</h2>
              <p>
                En este caso, se usa como material de relleno implantes sintéticos inyectables.
                <br /><br />
                Son formulados y fabricados en un laboratorio y dispensados en forma de jeringuillas
                para su aplicación por punción con aguja fina. Existen muchas marcas comerciales. Se
                diferencian entre sí por su composición química y su duración más o menos prolongada
                en el tiempo. En general, en los labios se prefieren usar los implantes reabsorbibles. 
                <br /><br />
                Su cirujano plástico le asesorará sobre cuál es el implante más adecuado para su caso.
                <br /><br />
                Esta técnica es la más sencilla de las descritas. Se practica con anestesia local en
                la consulta y su aplicación no dura más de 30 minutos. 
                <br /><br />
                Existe todo un capítulo que desarrolla este tema que puede consultar en el apartado
                de Medicina Estética.
              </p>

              <h2 id='implante-solido'>Remodelado de labios con implantes sólidos</h2>
              <p>
                A lo largo de la historia se ha intentado cambiar el volumen de los labios mediante
                la introducción de implantes de todo tipo pero, los de tipo sólido son los que quizás
                menos adherencia han tenido pues generan frecuentemente el endurecimiento de una zona
                carnosa por naturaleza. 
                <br /><br />
                A modo de ejemplo citaremos que se han usado diferentes tipos de tejido del propio
                paciente (dermis, fascia, tendón) así como prótesis sintéticas como son los hilos
                de Goretex® y otros.
                <br /><br />
                El tratamiento suele hacerse con anestesia local y de forma ambulatoria. Si debemos
                extraer el implante de otra zona corporal puede requerir dosis adicionales de
                anestesia o, incluso, sedación. 
                <br /><br />
                Para la colocación del implante se suele recurrir a la ayuda de agujas introductoras
                que, enhebradas en el implante, permiten su colocación en el espesor del bermellón
                del labio.
                <br /><br />
                El riesgo principal de este tipo de tratamiento es la intolerancia y extrusión del
                implante.
              </p>

              <h2 id='remodelado-quirurgico'>Remodelado de labios quirúrgico</h2>
              <p>
                Es quizás la técnica que se usa más infrecuentemente y se indica en casos
                seleccionados pues pueden dejar una cicatriz más o menos aparente. 
                <br /><br />
                Habitualmente se practica bajo anestesia local y de forma ambulatoria.
                <br /><br />
                Se puede indicar para evertir el bermellón y obtener más labio rojo. Se consigue
                mediante incisiones en zig-zag ubicadas en la mucosa interna del labio.
                <br /><br />
                También podemos cambiar la forma del perfil labial recortando, a demanda, la piel
                que rodea el bermellón.
                <br /><br />
                Por último, extirpando una elipse de piel justo debajo de la nariz podemos acortar
                la longitud del labio superior. Un labio corto, que en reposo deja ver 1-2 mm los
                dientes, se ha considerado como atractivo en la mujer.
              </p>

              <h2>Limitaciones del remodelado de labios</h2>
              <p>
                Con el remodelado labial no se pueden corregir todos los problemas de los labios.
                La calidad o textura inicial de la piel y mucosa del labio pueden influir en el
                resultado final del tratamiento.
                <br /><br />
                Los implantes pueden llegar a ser visibles o palpables, incluso como endurecimientos
                locales en forma de nódulos, precisamente en una zona caracterizada por su
                consistencia blanda.
                <br /><br />
                Algunos implantes se van a ir reabsorbiendo poco a poco, pudiendo perder parte de
                la proyección original alcanzada y precisando de nuevas sesiones de tratamiento
                para mantener los resultados originales. Esto ocurre con algunos implantes de relleno
                inyectables y también con parte de la grasa.
                <br /><br />
                La modificación quirúrgica del perfil labial puede ofrecer unos resultados poco
                naturales.
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info__labios'>
          <div className='footer__info_site__labios'>
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

export default Remodelado_Labios