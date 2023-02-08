import React from 'react';
import './blefaroplastia.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsFacial } from '../../../../components';

const Blefaroplastia = () => {
  return (
    <div className='info__blefa'>
      <div>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />
        
        <div className='content__overlay__blefa'>
          <div className='content__container__blefa'>
            <div className='content__info__blefa'>
              <h1>Párpados</h1>
              <p>
                Los párpados constituyen un órgano cuya función principal es la protección del ojo
                y su lubricación pues reparten la lágrima con su movimiento (parpadeo).
                <br /><br />
                Están constituidos por la piel en su exterior, una capa muscular (formada por varios
                músculos responsables de su movimiento), un esqueleto cartilaginoso (tarso) y una
                capa mucosa en su porción más interna, en contacto directo con el ojo (conjuntiva).
                <br /><br />
                Las órbitas son las hoquedades de la calavera destinadas a alojar los globos oculares,
                sus nervios y los músculos propios del movimiento de los ojos así como la glándula
                lagrimal. Y todo ello está rodeado y almohadillado por grasa que se dispone formando
                unos acúmulos llamados bolsas.
              </p>

              <h2>¿En qué consiste la blefaroplastia estética?</h2>
              <p>
                Habitualmente practicamos esta intervención en clínica, bajo anestesia local y de
                forma ambulatoria. Si precisa de sedación, puede ser necesario quedar ingresado
                durante unas horas hasta su completa recuperación.
                <br /><br />
                La extirpación de los tejidos descolgados se hace a través de una incisión cutánea
                colocada en zonas estratégicas para su mejor camuflaje. 
                <br /><br />
                En el párpado superior sigue el pliegue natural que forma la piel cuando tenemos el
                ojo abierto. En el párpado inferior se coloca justo debajo de las pestañas, allí donde
                habitualmente una mujer se pinta la raya del ojo al maquillarse. Si el excedente de
                piel es importante, las incisiones pueden tener que extenderse lateralmente siguiendo
                los pliegues naturales que forman las arrugas de las "patas de gallo".
                <br /><br />
                En casos extremos, el descolgamiento de los tejidos del párpado inferior puede ser tan
                severo que forme pliegues que lleguen incluso hasta las mejillas. Su tensado desde la
                línea de las pestañas difícilmente será completo. En estos casos podemos optar por un
                abordaje directamente sobre el pliegue, y no debajo de las pestañas, quedando la
                cicatriz más expuesta.
                <br /><br />
                La herniación de las bolsas de grasa se trata, habitualmente, mediante su extirpación.
                Pero en el párpado inferior, cuando el reborde óseo de la órbita es muy marcado, es
                mejor no extirparlas (empeoraría el aspecto del párpado) sino deslizarlas sobre el
                mismo para difuminarlo.
                <br /><br />
                Las bolsas del párpado inferior pueden también tratarse a través de una incisión
                interna a nivel de la conjuntiva, sin dejar cicatriz en la piel. Es la llamada
                blefaroplastia inferior transconjuntival.
                <br /><br />
                En casos seleccionados, una blefaroplastia puede combinarse con una cantoplastia
                lateral, es decir, una cirugía focalizada en el ángulo lateral de la apertura
                palpebral. Se utiliza cuando queremos cambiar la forma o la posición del mismo,
                por ejemplo, porque queremos una aspecto más rasgado o almendrado de los párpados.
              </p>

              <h2>Limitaciones de la blefaroplastia</h2>
              <p>
                La blefaroplastia no puede corregir todos los problemas de los párpados.
                <br /><br />
                No cambia la calidad de la piel ni su color, por lo que no elimina las ojeras
                (coloración oscura del párpado) ni las arrugas finas debidas al daño solar de la
                piel.
                <br /><br />
                Aunque mejora la tensión cutánea, no elimina las "patas de gallo" ni ninguna otra
                arruga consecuencia de la gesticulación (arrugas de expresión).
                <br /><br />
                Una ceja caída aumenta la redundancia de piel en el párpado superior. En estos casos,
                la blefaroplastia superior nunca podrá corregir totalmente dicho excedente cutáneo y
                se obtendrían mejores resultados si también practicamos, de forma concomitante, una
                elevación quirúrgica de la ceja.
                <br /><br />
                La blefaroplastia no puede eliminar hinchazones o tumefacciones locales debidas a
                retención de líquidos en los tejidos (edema) como vemos frecuentemente en casos de
                alergias, cardiopatías, hepatopatías y nefropatías.
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info__blefa'>
          <div className='footer__info_site__blefa'>
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

export default Blefaroplastia