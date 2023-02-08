import React from 'react';
import './ginecomastia.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsMamaria } from '../../../../components';

const Ginecomastia = () => {
  return (
    <div className='info__ginecomastia'>
      <div>
        <Navbar />
        <Logo />

        <div className='content__overlay__ginecomastia'>
          <div className='content__container__ginecomastia'>
            <div className='content__info__ginecomastia'>
              <h1>Ginecomastia</h1>
              <p>
                Según su etiología, podemos clasificarla en:
                <br /><br />
                <ul>
                  <li>
                    <b>Ginecomastia fisiológica:</b> debido a disbalances hormonales propios de diferentes épocas de la vida. Se describen tres tipos:
                    <ul>
                      <li>
                        Neonatal: por paso de estrógenos de la madre al feto. Suele ser transitoria.
                      </li>
                      <li>
                        Puberal: típico de la adolescencia, por un predominio relativo de los estrógenos (hormona femenina) sobre la testosterona (hormona masculina). Suele ser transitoria.
                      </li>
                      <li>
                        Senil: con la andropausia, existe un déficit relativo de testosterona. Suele ser permanente.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Ginecomastia patológica:</b>
                    <ul>
                      <li>
                        Ginecomastia primaria: de causa no conocida. La mayoría de ginecomastias pertenecen a este grupo.
                      </li>
                      <li>
                        Secundaria a efectos farmacológicos (efecto secundario a diversas sustancias):
                        <ul>
                          <li>
                            Medicamentos: cimetidina, omeprazol, teofilina, digital, captopril, espironolactona, etc.
                          </li>
                          <li>
                            Drogas: marihuana, heroína, metadona, anfetaminas.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Secundaria a diversas enfermedades:
                        <ul>
                          <li>
                            Alteraciones metabólicas: insuficiencia hepática y renal.
                          </li>
                          <li>
                            Alteraciones endocrinas: transtornos de la glándula tiroides o la glándula suprarrenal.
                          </li>
                          <li>
                            Alteraciones del funcionamiento de los testículos, como glándula productora de testosterona (hipogonadismo).
                          </li>
                          <li>
                            Tumores de diverso origen (testiculares y de otras localizaciones) productores de hormonas.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </p>

              <h2>El diagnóstico de la ginecomastia</h2>
              <p>
                El diagnóstico de ginecomastia sólo puede hacerse tras una completa evaluación clínica del paciente, consistente en:
                <br /><br />
                <ul>
                  <li>
                    Antecedentes médicos: preguntar a cerca de enfermedades, medicaciones y posible consumo de drogas que pudieran causar el crecimiento de la mama en el varón. 
                  </li>
                  <li>
                    Enfermedad actual: tiempo de evolución del problema, ritmo de crecimiento de la mama, molestias asociadas, repercusión psicológica.
                  </li>
                  <li>
                    Examen físico general: confirmar que el desarrollo sexual (caracteres primarios y secundarios) sea el adecuado y no haya sido alterado por el transtorno hormonal.
                  </li>
                  <li>
                    Examen de la mama, para definir tres aspectos:
                    <ul>
                      <li>
                        Su constitución: ginecomastias de predominio graso o de predominio glandular.
                      </li>
                      <li>
                        Su volumen: hablamos de formas leves, moderadas y severas.
                      </li>
                      <li>
                        El grado de caída de la mama (ptosis): valora el grado de descolgamiento.
                      </li>
                    </ul>
                  </li>
                </ul>
                <br /><br />
                Si hay indicios de patología asociada pueden ser necesarias exploraciones complementarias (análisis, estudio hormonal, radiografías, etc) para completar el estudio. 
                <br /><br />
                Independientemente de todo ello, normalmente siempre se solicitará una mamografía, que nos descartará patologías de la mama y confirmará el tipo de ginecomastia (grasa, glandular o mixta).
              </p>
              
              <h2>¿Cómo se trata la ginecomastia?</h2>
              <p>
                Cada tipo de ginecomastia tiene su tratamiento específico.
                <br /><br />
                Las ginecomastias fisiológicas no suelen precisar tratamiento alguno pues la mayoría de las veces son trastornos pasajeros que revierten cuando se normaliza el equilibrio hormonal.
                <br /><br />
                El tratamiento de las ginecomastias patológicas es quirúrgico. También deberemos tratar la causa que la produjo en los casos secundarios.
                <br /><br />
                La operación tiene por objetivo principal devolver un aspecto masculino a las mamas. Según el tipo de ginecomastia, podremos emplear un tipo de técnica u otra:
                <br /><br />
                <ul>
                  <li>
                    Liposucción aislada.
                  </li>
                  <li>
                    Cirugía abierta: mastectomía subcutánea.
                  </li>
                  <li>
                    Combinación de ambas técnicas.
                  </li>
                </ul>
                <br /><br />
                La liposucción aislada se indica para tratar ginecomastias de predominio graso, especialmente si su volumen es moderado y la mama no está descolgada y presenta una piel elástica de buena calidad. La intervención se practica a través de mínimas incisiones cutáneas desde donde se procede a su aspirado mediante cánulas.
                <br /><br />
                La mastectomía subcutánea debe practicarse cuando la ginecomastia es de predominio glandular, pues no responde al simple aspirado. Para los tamaños pequeños o moderados suele bastar una incisión en el perímetro de la areola. Pero en mamas grandes, especialmente si están descolgadas, se deberá proceder también a extirpar el excedente cutáneo siguiendo diferentes patrones de corte (transversal, vertical o combinado), quedando cicatrices más aparentes en la zona torácica. La glándula extirpada puede enviarse al laboratorio para análisis patológico (biopsia).
                <br /><br />
                Sin embargo, en muchos casos se suelen combinar ambas técnicas quirúrgicas, pues la ginecomastia muchas veces tiene un componente mixto, graso y glandular.
                <br /><br />
                La práctica de esta cirugía puede realizarse bajo anestesia local, con o sin sedación, en los casos más sencillos o requerir anestesia general e ingreso hospitalario de un día en los casos más complejos.
                <br /><br />
                No existe una intervención ideal para cada caso. Cada técnica escogida tiene sus ventajas e inconvenientes. Dialogue con su cirujano que le asesorará en su elección.
              </p>

              <h2>Limitaciones del tratamiento de la ginecomastia</h2>
              <p>
                La forma y el tamaño de las mamas previas a la cirugía pueden influir en el resultado final. Si las mamas no tienen el mismo tamaño o forma antes de la cirugía es poco probable que sean completamente simétricas después.
                <br /><br />
                En las ginecomastias de predominio graso asociadas a obesidad pueden existir recidivas del problema si el paciente vuelve a engordarse. 
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info__ginecomastia'>
          <div className='footer__info_site__ginecomastia'>
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

export default Ginecomastia