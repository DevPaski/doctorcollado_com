import React from 'react';
import './mama_tuberosa.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsMamaria } from '../../../../components';

const Mama_Tuberosa = () => {
  return (
    <div className='info__mtuberosa'>
      <div>
        <Navbar />
        <Logo />

        <div className='content__overlay__mtuberosa'>
          <div className='content__container__mtuberosa'>
            <div className='content__info__mtuberosa'>
              <h1>Mamas tuberosas</h1>
              <p>
                El desarrollo de la mama es complejo y puede sufrir anomalías.
                <br /><br />
                Un problema relativamente frecuente es conocido como mamas constreñidas. Consiste en que la glándula está rodeada por una capa de tejido fascial inelástico que, a modo de estuche, la comprime y limita su desarrollo, condicionando su tamaño y forma finales. 
                <br /><br />
                El grado de constricción es variable y esto genera un amplio abanico de morfologías mamarias.
                <br /><br />
                En los casos más leves, una mama constreñida se puede manifiestar sólo por un defecto de desarrollo del polo inferior de la mama y con un surco submamario elevado. La distancia desde la areola al surco es corta y la forma inferior de la mama aparece rectificada.
                <br /><br />
                En los casos más severos, sin embargo, la distorsión es mayor y las mamas adoptan una forma incluso tubular o caprina. Son conocidas como mamas tuberosas y se caracterizan por:
                <br /><br />
                <ul>
                  <li>Mama con una dimensión horizontal y vertical cortas, habitualmente de tamaño pequeño, quedando concentrada justo debajo de la areola. El acortamiento vertical supone déficit relleno polo superior y una falta de desarrollo del polo inferior, con un surco submamario alto. El acortamiento horizontal hace que ambas mamas aparezcan excesivamente separadas entre sí.</li>
                  <li>Areola grande y abultada. El envoltorio fascial inelástico no afecta a la areola, siendo ésta la única parte de la mama que puede crecer fácilmente durante el desarrollo mamario. Así, cuando en la pubertad la glándula intente crecer, sólo podrá expansionarse empujando la areola hacia delante y aumentando su tamaño, a modo de hernia.</li>
                </ul>
                <br /><br />
                El problema puede afectar en grado diverso a ambas mamas, por lo que suelen ser asimétricas. También existen formas menores, esto es, casos en los que no están presentes todos los rasgos, predominando unos aspectos sobre otros.
              </p>

              <h2>¿Cómo se corrigen las mamas tuberosas?</h2>
              <p>
                El tratamiento de este tipo de mamas es complejo.
                <br /><br />
                El primer objetivo consiste en cambiar la forma de la mama. Para ello deberemos relajar la capa de tejido fascial inelástico que rodea la glándula practicando una serie de cortes en el mismo. Liberada de su estuche, favoreceremos que la glándula se pueda expansionar tanto en sentido vertical como horizontal. A veces no basta con relajar el estuche para cambiar su forma y tenemos que remodelarla quirúrgicamente.
                <br /><br />
                El segundo objetivo es aumentar el volumen de la mama mediante una técnica de mamoplastia de aumento, que se consigue habitualmente mediante la inserción de una prótesis mamaria aunque, últimamente, se están consiguiendo también resultados aceptables con el implante de grasa de la propia paciente.
                <br /><br />
                Y, por último, deberemos reducir el tamaño de la areola para ajustarlo al tamaño de la nueva mama así como intentar aplanar su protusión. Existirá, pues, una cicatriz alrededor de la areola que, a veces, se prolonga verticalmente hasta llegar al surco submamario.
                <br /><br />
                No existe una intervención ideal para todo tipo de mama tuberosa. Cada caso es particular y cada técnica escogida tiene sus ventajas e inconvenientes. Dialogue con su cirujano que le asesorará en su elección.
              </p>

              <h2>Limitaciones de la corrección de las mamas tuberosas</h2>
              <p>
                La complejidad de estos casos hace que, en ocasiones, no podamos corregir totalmente la forma de las mamas. Pueden quedar estigmas que nos recuerden que la mama original era del tipo tuberoso. Normalmente, lo más difícil es conseguir un adecuado desarrollo del polo inferior mamario y es frecuente que aparezca un doble contorno en esta zona.
                <br /><br />
                Como las mamas tuberosas normalmente afectan en diferente grado a ambos lados, otro problema adicional es conseguir la simetría y mantenerla en el tiempo.
                <br /><br />
                El uso de los implantes mamarios o de la grasa de la propia paciente también tienen sus limitaciones particulares.
                <br /><br />
                En general, se aconsejarán tamaños proporcionados a la complexión física de la mujer. Tamaños exagerados darán resultados estéticos más artificiales.
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info__mtuberosa'>
          <div className='footer__info_site__mtuberosa'>
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

export default Mama_Tuberosa