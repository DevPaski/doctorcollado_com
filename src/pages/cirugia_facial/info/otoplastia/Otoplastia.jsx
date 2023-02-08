import React from 'react';
import '../styles.css';


import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsFacial } from '../../../../components';

const Otoplastia = () => {
  return (
    <div className='home__info'>
      <div>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />
        
        <div className='content__overlay'>
          <div className='content__container'>
            <div className='content__info'>
              <h1>Orejas</h1>
              <p>
                La oreja, que recibe también el nombre de pabellón auricular, es la parte más
                externa del aparato auditivo y participa en la captación de los sonidos, dirigiendo
                las ondas sonoras hacia el interior. En los humanos han perdido prácticamente de
                forma completa su capacidad de movimiento.
                <br /><br />
                Su estructura está formada por un esqueleto de cartílago elástico y una cobertura
                cutánea. El único sitio donde no hay cartílago es en el lóbulo.
                <br /><br />
                La piel que reviste las orejas es muy fina. En su cara anterior está muy adherida
                al cartílago, permitiendo apreciar los finos relieves de su compleja anatomía.
                <br /><br />
                La parte central del pabellón auricular se llama concha, que da paso al conducto
                auditivo externo en su porción más profunda. Al relieve más externo de la oreja se
                le llama hélix y al relieve interno en forma de "Y" se le llama antehélix.
                <br /><br />
                Lo importante de las orejas es que presenten una forma natural y, sobre todo, una
                proyección simétrica y no excesiva en la visión de frente.
              </p>

              <h2>¿En qué consiste la otoplastia estética?</h2>
              <p>
                En los niños la intervención debe realizarse bajo anestesia general. En los adultos
                puede practicarse bajo anestesia local y de forma ambulatoria.
                <br /><br />
                La incisión quirúrgica se coloca en la cara posterior del pabellón auricular. 
                <br /><br />
                Cuando el problema es la falta de plicatura del antehélix, se fuerza la formación de
                este pliegue mediante puntos de sutura estratégicamente colocados. A veces, si el
                cartílago es muy rígido y no se resiste a ser plegado con las suturas, puede ser
                necesario debilitarlo o adelgazarlo previamente mediante cortes o un raspado en su
                cara anterior.
                <br /><br />
                Si el problema radica en una excesiva concavidad de la concha, podremos rebajar su
                profundidad extirpando el exceso de cartílago. A veces tendremos que extirpar también
                el exceso de piel residual desde una incisión independiente colocada en la cara
                anterior del pabellón auricular. Otra técnica posible consiste en forzar hacia atrás
                la posición de la concha con unos puntos de sutura anclados en el surco retroauricular.
                <br /><br />
                Un lóbulo excesivamente proyectado se corrige forzando su posición hacia atrás
                también mediante unos puntos de sutura. A veces, debemos complementarlo extirpando
                una porción de piel.
                <br /><br />
                Los puntos internos están constituidos por un material irreabsorbible que quedarán
                enterrados de por vida debajo de la piel. Los puntos de piel se retirarán a partir
                de la semana de la cirugía.
              </p>

              <h2>Limitaciones de la otoplastia estética</h2>
              <p>
                La otoplastia estética cambia la forma pero no el tamaño global de la oreja.
                Un pabellón auricular grande, en toda o sólo en parte de su anatomía, exigiría
                para su corrección de la extirpación de fragmentos de tejido en todo su espesor,
                técnica que siempre dejaría una cicatriz potencialmente más aparente.
                <br /><br />
                Tampoco puede modificar la consistencia del cartílago auricular. Esto es importante
                puesto que es más difícil cambiar y mantener la forma de cartílagos muy rígidos,
                siendo causa potencial de fracaso en el resultado buscado (recidiva).
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

export default Otoplastia