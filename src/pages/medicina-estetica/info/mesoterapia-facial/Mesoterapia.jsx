import React from 'react';
import './meso.css'

import { Link } from 'react-scroll';

import bg_img from '../../../../assets/img/bg_blefaroplastia.jpg';
import { Overlay, Logo, Navbar, NavbarFull, Footer, NavDotsFacial } from '../../../../components';

const Mesoterapia = () => {
  return (
    <div className='info__meso'>
      <div>
        <Navbar />
        {/* <NavbarFull /> */}
        <Logo />
        
        <div className='content__overlay__meso'>
          <div className='content__container__meso'>
            <div className='content__info__meso'>
              <h1>Mesoterapia facial</h1>
              <p>
                La mesoterapia se refiere a una técnica que trata la dermis, que es la capa
                profunda de la piel derivada del mesodermo embrionario. Fue descrita en 1952
                por un médico francés llamado Michel Pistor. 
                <br /><br />
                Técnicamente consiste en infiltrar diversas sustancias activas en la dermis
                mediante microinyecciones. Ésta es su principal ventaja, pues aplica
                selectivamente el tratamiento allá donde hace falta.
                <br /><br />
                El grupo de estas sustancias es muy heterogéneo pero destacan el ácido
                hialurónico, diferentes nutrientes y precursores biológicos como son las
                vitaminas y diversos oligoelementos minerales.
                <br /><br />
                La mesoterapia permite revitalizar la piel, gracias a mejorar su hidratación (turgor), tono y  textura. También permite estimular los procesos naturales de regeneración tisular.
              </p>

              <h2>¿Cómo se realiza el tratamiento con mesoterapia facial?</h2>
              <p>
                El tratamiento con mesoterapia se realiza en la consulta, de forma
                ambulatoria.
                <br /><br />
                Después de limpiar cuidadosamente la piel se aplicará una crema anestésica
                tópica sobre las zonas a tratar, para minimizar las molestias locales durante
                la sesión.
                <br /><br />
                El producto seleccionado a aplicar es cargado en una jeringuilla y, usando
                agujas de muy pequeño calibre y escasa longitud, se procederá a su inyección
                en la capa profunda de la piel (dermis).
                <br /><br />
                Los mejores resultados se consiguen cuando el producto es homogéneamente
                repartido en toda la superficie a tratar, aplicando una pequeña cantidad en
                cada punto de punción, separados aproximadamente 1 cm entre sí.
                <br /><br />
                El número de sesiones necesarias para obtener un resultado satisfactorio
                depende del grado de deterioro presente en la piel pero se aconsejan, en
                general, tres sesiones iniciales mensuales.
              </p>

              <h2>Limitaciones de la mesoterapia facial</h2>
              <p>
                Con el paso de los meses se apreciará una lenta y progresiva pérdida del
                efecto conseguido.
                <br /><br />
                Hay que tener en cuenta que ningún tratamiento detiene el proceso de
                envejecimiento. Por ello, siempre son necesarias de forma periódica nuevas
                sesiones de mesoterapia. Aunque debe individualizarse según la persona, el
                mantenimiento de los resultados puede exigir una nueva sesión adicional cada
                seis meses.
                <br /><br />
                La mesoterapia facial no elimina las arrugas marcadas, el descolgamiento
                cutáneo ni las manchas seniles. Tampoco da volumen a las zonas tratadas,
                por lo que no cambia la forma de la cara.
              </p>
            </div>
          </div>
        </div>

        <div className='footer__info__meso'>
          <div className='footer__info_site__meso'>
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

export default Mesoterapia