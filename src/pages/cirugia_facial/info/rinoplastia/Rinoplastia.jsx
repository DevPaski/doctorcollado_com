import React from 'react';
import '../styles.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsFacial } from '../../../../components';

const Rinoplastia = () => {
  return (
    <div className='home__info'>
      <div>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />
        
        <div className='content__overlay'>
          <div className='content__container'>
            <div className='content__info'>
              <h1>Nariz</h1>
              <p>
                La nariz es un órgano que sirve para la respiración (filtrando y calentando el aire
                que llega a la garganta) y donde se ubica el sentido del olfato.
                <br /><br />
                Su forma viene determinada fundamentalmente en su porción superior por los huesos
                nasales y en su porción inferior por los cartílagos nasales, todo ello apuntalado
                por el tabique, que separa las fosas nasales en dos orificios independientes.
                <br /><br />
                La piel que reviste la nariz suele ser más fina sobre los huesos y más gruesa y
                adherida, con glándulas de grasa, en la parte que cubre la punta nasal.
                <br /><br />
                Desde un punto de vista estético, lo importante en la nariz es mantener unas
                proporciones adecuadas de sus diferentes partes (punta, dorso, aletas) entre sí
                y de toda ella en el conjunto del rostro.
              </p>

              <h2>¿En qué consiste la rinoplastia?</h2>
              <p>
                Habitualmente practicamos esta intervención bajo anestesia general y el paciente
                permanecerá ingresado en la clínica la primera noche. En casos seleccionados
                puede realizarse con anestesia local y sedación.
                <br /><br />
                Las incisiones quirúrgicas para realizar dicha intervención pueden hacerse por
                dentro de la nariz, para evitar cicatrices cutáneas (rinoplastia cerrada) o
                colocarse parcialmente en su exterior, aunque siempre en lugares poco visibles
                (rinoplastia abierta). La rinoplastia abierta suele reservarse para el tratamiento
                de los casos más complejos.
                <br /><br />
                A grandes rasgos, existen tres tipos fundamentales de cirugías sobre la nariz:
                <br /><br />
                La rinoplastia de reducción, para disminuir su tamaño. El caso típico son aquellos
                pacientes con una excesiva joroba en el perfil, que precisan de la extirpación de
                aquellas partes del hueso y de los cartílagos que se encuentren en exceso.
                La rinoplastia de aumento, para dar más proyección a todo o a parte de la nariz
                (dorso y punta). Utiliza injertos de cartílago o de hueso tomados de otros sitios,
                como puede ser el propio tabique nasal, la oreja o una costilla.
                La rinoplastia de reposición, para enderezar porciones desviadas de la nariz. Puede
                precisar también el uso de injertos.
                <br /><br />
                La rinoplastia puede combinarse con cirugía nasal interna si queremos mejorar la
                respiración, ya sea actuando sobre el tabique (septoplastia) o sobre los cornetes.
              </p>

              <h2>Limitaciones de la rinoplastia</h2>
              <p>
                La rinoplastia no puede corregir todos los problemas de la nariz. 
                <br /><br />
                No cambia la calidad de la piel ni su grosor, por lo que este factor puede influir
                en el resultado final de la cirugía.
                <br /><br />
                La rinoplastia aislada tiene una repercusión limitada en la función nasal, a no ser
                que se combine con otras cirugías, por ejemplo sobre el tabique o los cornetes.
                <br /><br />
                Las deformidades y desviaciones postraumáticas son muy difíciles de corregir
                totalmente.
                <br /><br />
                El uso de injertos durante la rinoplastia, muy útiles para cambiar su forma, no está
                exento de problemas potenciales. Estos pueden ser visibles o palpables como postizos
                debajo de la piel nasal. A largo plazo también pueden reabsorberse en parte o
                desplazarse de su ubicación original, causando cambios en el resultado inicialmente
                obtenido.
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info'>
          <div className='footer__info_site'>
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

export default Rinoplastia